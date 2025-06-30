import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { useUser } from "../context/UserContext"

export function LoanPage () {
  const { user } = useUser()

  return (
    <section className="flex flex-col gap-y-6 sm:gap-y-8 py-4 sm:py-6 px-8 sm:px-12 h-[calc(100vh-104px)] mx-auto">
      <TableContainer sx={{ width: '100%', overflowX: 'auto' }}>
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
    </section>
  )
}