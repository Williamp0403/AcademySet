import * as React from 'react';
import { useForm } from 'react-hook-form';
import UndoIcon from '@mui/icons-material/Undo'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { DialogActions } from '@mui/material';
import { useLoan } from '../../context/LoanContext';

export function ModalConfirmReturnBook ({ book }) {
  const [open, setOpen] = React.useState(false);
  const { handleSubmit } = useForm();
  const { returnBook } = useLoan();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = async () => {
    await returnBook (book.id, handleClose)
  };

  return (
    <React.Fragment>
      <button
        onClick={handleClickOpen}
        className="flex items-center gap-1 bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold py-1 px-2 rounded cursor-pointer"
      >
        <UndoIcon fontSize="small" />
        Devolver
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
          Confirmar devolución
        </DialogTitle>
        <DialogContent>
          <p>El libro "{book.titulo}" se devolverá a la biblioteca</p>
        </DialogContent>
        <DialogActions>
          <form className='space-x-2' onSubmit={handleSubmit(onSubmit)}>
            <button
              className="px-3 py-2 text-sm sm:text-base rounded-md font-semibold bg-zinc-500 text-white hover:bg-zinc-600 transition duration-300 ease-in-out cursor-pointer"
              onClick={handleClose}
              type="button"
            >
              Cancelar
            </button>
            <button
              className="px-3 py-2 text-sm sm:text-base rounded-md font-semibold bg-sky-500 text-white hover:bg-sky-600 disabled:opacity-50 disabled:cursor-not-allowed transition duration-300 ease-in-out cursor-pointer"
              type="submit"
            >
              Confirmar
            </button>
          </form>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
