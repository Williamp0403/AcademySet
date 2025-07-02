import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import AddIcon from '@mui/icons-material/Add';
import { Input } from '../Input';
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { useBook } from "../../context/BookContext"
import { ButtonBase } from '../Buttons/ButtonBase';
import { DialogActions } from '@mui/material';
import { BookSchema } from '../../schemas/book.schema';
import { BasicSelect } from '../Select';

export function ModalAddBook () {
  const [open, setOpen] = React.useState(false);
  const { addBook, categories } = useBook()
  const validCategoryIds = categories.map(cat => cat.id);
  const { handleSubmit, register, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(BookSchema(validCategoryIds))
  })

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = handleSubmit(async data => {
    console.log(data)
    await addBook(data, handleClose)
  })

  return (
    <React.Fragment>
      <ButtonBase label="Agregar Libro" svg={AddIcon} action={handleClickOpen}/>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="xs"
        fullWidth       
      >
        <DialogTitle sx={{ fontWeight: 'bold' }} id="alert-dialog-title">
          Agregar Libro
        </DialogTitle>
        <DialogContent>
        <form onSubmit={onSubmit} className="flex flex-col gap-y-4">
          <Input 
            label="Título"
            type="text"
            name="titulo"
            register={register}
            errors={errors.titulo}
            svg={MenuBookOutlinedIcon}
          />
          <Input 
            label="Autor"
            type="text"
            name="autor"
            register={register}
            errors={errors.autor}
            svg={PersonOutlinedIcon}
          />
          <Input 
            label="Isbn"
            type="text"
            name="isbn" 
            register={register}
            errors={errors.isbn}
            svg={LibraryBooksOutlinedIcon}
          />
          <Input 
            label="Url de imagen" 
            type="text"
            name="imagen_url"
            register={register}
            errors={errors.imagen}
            svg={ImageOutlinedIcon}
          />  
          <BasicSelect register={register} errors={errors.categoria} categorias={categories} />     
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
            {isSubmitting ? 'Agregando...' : 'Agregar'}
          </button>
        </DialogActions>
        </form>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
