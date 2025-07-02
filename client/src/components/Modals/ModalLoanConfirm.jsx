import * as React from 'react';
import { useForm } from 'react-hook-form';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { DialogActions } from '@mui/material';
import { useUser } from '../../context/UserContext';
import { useLoan } from '../../context/LoanContext';
import { CardAvailableBook } from '../Cards/CardAvailableBook';

export function ModalLoanConfirm({ book }) {
  const [open, setOpen] = React.useState(false);
  const { handleSubmit } = useForm();
  const { user } = useUser();
  const { loan } = useLoan();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = async () => {
    const data = {
      libro: book.id,
      usuario: user.id
    }
    await loan(data, handleClose)
  };

  return (
    <React.Fragment>
      <CardAvailableBook book={book} handleClick={handleClickOpen} />

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle sx={{ fontWeight: 'bold' }} id="alert-dialog-title">
          Préstamo
        </DialogTitle>
        <DialogContent>
          <p>¿Estás seguro que deseas prestar el libro "{book.titulo}"?</p>
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
