import { useEffect } from 'react';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import { ModalAddBook } from '../components/Modals/ModalAddBook';
import { useBook } from '../context/BookContext';
import { Loading } from '../components/Loading';


export function BooksPage () {
  const { getBooks, books, loading } = useBook()

  useEffect(() => {
    getBooks()
  }, [])

  const hasBooks = books && books.length > 0;

  return (
    <section className="flex flex-col gap-y-6 sm:gap-y-12 py-4 sm:py-6 px-8 sm:px-12 h-[calc(100vh-96px)] mx-auto">
      <div className='flex items-center gap-x-2'>
        <AutoStoriesOutlinedIcon fontSize='large'/>
        <h1 className="text-2xl font-bold">Gestión de Libros</h1>
      </div>
      <div className='flex items-center justify-between'>
        <input type="text" />
        <ModalAddBook/>
      </div>
      {
        loading ? <Loading/>
        : hasBooks ? <h2>Hay libros</h2>
        : <h2>No hay libros disponibles</h2>
      }
    </section>
  )
}