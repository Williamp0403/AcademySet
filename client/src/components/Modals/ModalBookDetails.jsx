import * as React from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { DialogActions, Typography, Box } from '@mui/material';
import { AvailabilityBadge } from '../AvailabilityBadge';

export function ModalBookDetails({ book }) {
  const [open, setOpen] = React.useState(false);
  
  const {
    titulo,
    autor,
    isbn,
    disponible,
    imagen_url,
    categoria_nombre,
    prestado_a,
    fecha_prestamo,
  } = book;

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <React.Fragment>
      <button
        className="flex items-center gap-x-1 font-medium text-zinc-700 cursor-pointer"
        onClick={handleClickOpen}
      >
        <VisibilityIcon fontSize="small" />
        Ver Detalles
      </button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle sx={{ fontWeight: 'bold' }}>
          {titulo}
        </DialogTitle>

        <DialogContent dividers>
          <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}>
            <img
              src={imagen_url}
              alt={titulo}
              style={{ maxWidth: '160px', borderRadius: 6 }}
            />
          </Box>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            <strong>Autor:</strong> {autor}
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            <strong>ISBN:</strong> {isbn}
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            <strong>Categoría:</strong> {categoria_nombre}
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            <strong>Estado:</strong>{' '}
            <AvailabilityBadge
              disponible={disponible}
              textoDisponible="Disponible"
              textoNoDisponible="Prestado"
            />
          </Typography>

          {!disponible && (
            <>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                <strong>Prestado a:</strong> {prestado_a}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Fecha de préstamo:</strong> {fecha_prestamo}
              </Typography>
            </>
          )}
        </DialogContent>

        <DialogActions>
          <button className="bg-zinc-600 rounded text-white font-medium px-4 py-1" onClick={handleClose}>
            Cerrar
          </button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
