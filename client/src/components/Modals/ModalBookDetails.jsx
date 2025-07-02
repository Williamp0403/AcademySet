import * as React from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { DialogActions, Typography } from '@mui/material';


export function ModalBookDetails ({ book }) {
  const [open, setOpen] = React.useState(false);
  
  const { titulo, autor, isbn, disponible, imagen_url, categoria_nombre } = book

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <button className="flex items-center gap-x-1 font-medium text-xs text-zinc-700 cursor-pointer" onClick={handleClickOpen}>
        <MoreHorizIcon fontSize="small" />
        Ver Detalles
      </button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle sx={{ fontWeight: 'bold' }} id="alert-dialog-title">
          {titulo}
        </DialogTitle>
        <DialogContent>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            <strong>Autor:</strong> {autor}
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            <strong>ISBN:</strong> {isbn}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Categoría:</strong> {categoria_nombre}
          </Typography>
        </DialogContent>
        {/* <DialogActions>
          <button className="text-blue-600 font-medium" onClick={handleClose}>
            Cerrar
          </button>
        </DialogActions> */}
      </Dialog>
    </React.Fragment>
  );
}
