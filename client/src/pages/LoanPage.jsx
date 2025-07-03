import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { Loading } from "../components/Loading"
import { useUser } from "../context/UserContext"
import { useBook } from "../context/BookContext"
import { useEffect, useState } from "react"
import { ModalLoanConfirm } from "../components/Modals/ModalLoanConfirm"
import { SearchInput } from "../components/SearchInput"
import { useFilteredBooks } from "../hooks/useFilteredBooks"
import { EmptyState } from "../components/EmptyState"
import { Link } from "react-router-dom"

export function LoanPage () {
  const { user } = useUser()
  const { getBooksAndCategories, loading, books } = useBook()
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getBooksAndCategories()
  }, [])

  if (!user) return (
    <section className="flex flex-col gap-y-6 sm:gap-y-8 py-4 sm:py-6 px-8 sm:px-12 h-min-[calc(100vh-104px)] mx-auto">
      <h2 className="text-base sm:text-lg font-medium">El cliente no ha sido seleccionado. <Link className="text-sky-500" to='/'>Volver al inicio</Link></h2>
    </section>
  )
  
  const availableBooks = books.filter(book => book.disponible)

  const filteredBooks = useFilteredBooks(availableBooks, searchTerm);
  const noBooksInitially = availableBooks.length === 0 && searchTerm === '';
  const noSearchResults = availableBooks.length > 0 && filteredBooks.length === 0 && searchTerm !== '';

  return (
    <section className="flex flex-col gap-y-6 sm:gap-y-8 py-4 sm:py-6 px-8 sm:px-12 h-min-[calc(100vh-104px)] mx-auto">
      <TableContainer sx={{ width: '100%', overflowX: 'auto' }}>
        <h2 className="text-xl font-bold">Información del Cliente</h2>
          <Table sx={{ width: '100%', minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {["Nombre", "Apellido", "Email", "Cédula"].map((header, index) => (
                  <TableCell key={index}>{header}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow key={user.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell>{user.nombre}</TableCell>
                <TableCell>{user.apellido}</TableCell>
                <TableCell>{user.correo}</TableCell>
                <TableCell>{user.cedula}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      <h1 className="text-xl font-bold">¿Qué libro desea prestar?</h1>
      <SearchInput
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Buscar libro..."
      />
      {
        loading ? <Loading className="flex justify-center"/>
        : noBooksInitially ? (
            <EmptyState message="No hay libros disponibles" /> 
        ) : noSearchResults ? (
          <EmptyState message="No se encontraron libros que coincidan con tu búsqueda" />
        ) : (
          <div className='grid grid-cols-1 gap-4 md:gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'> 
            {
              filteredBooks.map(book => {
                return <ModalLoanConfirm book={book} key={book.id}/>
              })
            }
          </div>
        )
      }
    </section>
  )
}