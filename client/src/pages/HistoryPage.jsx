import { useEffect } from 'react';
import HistoryIcon from '@mui/icons-material/History';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useLoan } from '../context/LoanContext';
import { Loading } from '../components/Loading';
import { AvailabilityBadge } from '../components/AvailabilityBadge';

export function HistoryPage () {
  const { loans, loading, getLoan } = useLoan()

  useEffect(() => {
    getLoan()
  }, [])

  const hasLoans = loans && loans.length > 0;

  return (
    <section className="flex flex-col gap-y-6 sm:gap-y-12 py-4 sm:py-6 px-8 sm:px-12 h-min-[calc(100vh-96px)] mx-auto">
      <div className="flex items-center gap-x-2">
        <HistoryIcon fontSize="large" />
        <h1 className="text-xl sm:text-2xl font-bold">Historial de Prétamos</h1>
      </div>
        {
        loading ? <Loading className="flex justify-center"/>
        : hasLoans ? (
          <TableContainer sx={{ width: '100%', overflowX: 'auto' }}>
            <Table sx={{ width: '100%', minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Libro</TableCell>
                  <TableCell>Usuario</TableCell>
                  <TableCell>Fecha Préstamo</TableCell>
                  <TableCell>Fecha Devolución</TableCell>
                  <TableCell align="right">Estado</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {loans.map((loan) => (
                  <TableRow key={loan.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell sx={{ fontWeight: 600 }}>{loan.titulo_libro}</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>{loan.nombre_usuario}</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>{loan.fecha_inicio}</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>
                      {loan.fecha_devolucion ? loan.fecha_devolucion : '-' }
                    </TableCell>
                    <TableCell sx={{ fontWeight: 600 }} align="right">
                      <AvailabilityBadge 
                        disponible={loan.devuelto} 
                        textoDisponible="Devuelto" 
                        textoNoDisponible="Prestado" 
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : <h2 className="font-bold text-zinc-600">No hay transacciones </h2>
      }
    </section>
  )
}