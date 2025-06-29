import { useNavigate } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

export function ModalNotUser({ open, onClose }) {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/crear-usuario');
    onClose()
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
    >
      <DialogContent sx={{ padding: 5 }}>
        <div className='flex flex-col items-center gap-y-8'>
          <h1 className='font-bold text-xl'>Este usuario no está registrado</h1>
          <h1 className='font-bold text-xl'>¿Desea registrarlo?</h1>
          <div className='flex items-center gap-x-4'>
            <button 
              onClick={onClose}
              className='px-3 py-2 text-sm sm:text-base rounded-md font-semibold bg-zinc-500 text-white hover:bg-zinc-600 transition duration-300 ease-in-out cursor-pointer'
            >
              Cancelar
            </button>
            <button 
              onClick={handleRedirect}
              className='px-3 py-2 text-sm sm:text-base rounded-md font-semibold bg-green-500 text-white hover:bg-green-600 transition duration-300 ease-in-out cursor-pointer'
              type="submit"
            >
              Registrar
            </button>
          </div>
        </div>
      </DialogContent>

    </Dialog>
  );
}

