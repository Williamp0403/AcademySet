import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { Loading } from "../components/Loading"
import { useUser } from "../context/UserContext"
import { useBook } from "../context/BookContext"
import { useEffect } from "react"
import { ModalLoanConfirm } from "../components/Modals/ModalLoanConfirm"

export function LoanPage () {
  const { user } = useUser()
  const { getBooksAndCategories, loading, books, categories } = useBook()

  useEffect(() => {
    getBooksAndCategories()
  }, [])
  
  const availableBooks = books.filter(book => book.disponible)

  const hasAvailableBooks = availableBooks && availableBooks.length > 0;

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
      {
        loading ? <Loading className="flex justify-center"/>
        : hasAvailableBooks ? (
          <div className='grid grid-cols-2 gap-4 md:gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'> 
            {
              availableBooks.map(book => {
                return <ModalLoanConfirm book={book} key={book.id}/>
              })
            }
          </div>
        ) : <h2 className="font-bold text-zinc-600">No hay libros disponibles</h2>
      }
    </section>
  )
}