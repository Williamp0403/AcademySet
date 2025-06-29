import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AddIcon from '@mui/icons-material/Add';
import { Input } from '../Input';
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { useUser } from '../../context/UserContext';
import { UserSchema } from '../../schemas/user.schema';
import { ButtonBase } from '../Buttons/ButtonBase';
import { DialogActions } from '@mui/material';

export function ModalRegisteUser () {
  const [open, setOpen] = React.useState(false);
  const { registerUser } = useUser()
  const { handleSubmit, register, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(UserSchema)
  })

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = handleSubmit(async data => {
    await registerUser(data, handleClose)
  })

  return (
    <React.Fragment>
      <ButtonBase label="Registrar Usuario" svg={AddIcon} action={handleClickOpen}/>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="xs"
        fullWidth       
      >
        <DialogTitle sx={{ fontWeight: 'bold' }} id="alert-dialog-title">
          Registrar Usuario
        </DialogTitle>
        <DialogContent>
        <form onSubmit={onSubmit} className="flex flex-col gap-y-2 sm:gap-y-5">
          <Input 
            label="Nombre"
            type="text"
            name="nombre"
            register={register}
            errors={errors.nombre}
            svg={PersonOutlineOutlinedIcon}
          />
          <Input 
            label="Apellido"
            type="text"
            name="apellido"
            register={register}
            errors={errors.apellido}
            svg={PeopleOutlineOutlinedIcon}
          />
          <Input 
            label="Cédula"
            type="text"
            name="cedula" 
            register={register}
            errors={errors.cedula}
            svg={BadgeOutlinedIcon}
          />
          <Input 
            label="Correo Electrónico" 
            type="email"
            name="correo"
            register={register}
            errors={errors.correo}
            svg={EmailOutlinedIcon}/>
        
        <DialogActions>
          <button
            className='px-4 py-2 text-sm sm:text-base rounded-md font-semibold bg-zinc-500 text-white hover:bg-zinc-600 transition duration-300 ease-in-out cursor-pointer'
            onClick={handleClose}
            type='button'
          >
            Cancelar
          </button>
          <button
            disabled={isSubmitting}
            className='px-4 py-2 text-sm sm:text-base rounded-md font-semibold bg-sky-500 text-white hover:bg-sky-600 disabled:opacity-50 disabled:cursor-not-allowed transition duration-300 ease-in-out cursor-pointer'
            type='submit'
          >
            Registrar
          </button>
        </DialogActions>
        </form>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
