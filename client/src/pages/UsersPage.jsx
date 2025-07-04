import PersonIcon from '@mui/icons-material/Person';
import { ModalRegisteUser } from '../components/Modals/ModalRegisterUser';
import { Loading } from "../components/Loading"
import { useEffect } from 'react';
import { useUser } from '../context/UserContext';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

export function UsersPage () {
  const { users, loading, getUsers } = useUser()

  useEffect(() => {
    getUsers()
  }, [])

 const hasUsers = users && users.length > 0;

  return (
    <section className="flex flex-col gap-y-6 sm:gap-y-12 py-4 sm:py-6 px-8 sm:px-12 h-min-[calc(100vh-96px)] mx-auto">
      <div className="flex flex-col sm:flex-row justify-between gap-y-4">
        <div className="flex items-center gap-x-2">
          <PersonIcon fontSize="large" />
          <h1 className="text-xl sm:text-2xl font-bold">Gestión de Usuarios</h1>
        </div>
        <div className="self-end sm:self-center">
          <ModalRegisteUser/>
        </div>
      </div>
      <div className='flex flex-col gap-y-5'>
        <h2 className='text-lg font-bold'>Usuarios Registrados</h2>
        {
          loading ? <Loading className="flex justify-center"/>
          : hasUsers ? (      
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
                  {users.map((user) => (
                    <TableRow key={user.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell sx={{ fontWeight: 600 }}>{user.nombre}</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>{user.apellido}</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>{user.correo}</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>{user.cedula}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : <h2 className="font-bold text-zinc-600">No hay usuarios</h2>
        } 
      </div>
    </section>
  )
}