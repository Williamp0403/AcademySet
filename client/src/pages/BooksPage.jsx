import { useEffect } from 'react';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { ModalAddBook } from '../components/Modals/ModalAddBook';
import { useBook } from '../context/BookContext';
import { Loading } from '../components/Loading';
import { CardBook } from '../components/Cards/CardBook';

export function BooksPage () {
  const { getBooksAndCategories, books, categories, loading } = useBook()

  useEffect(() => {
    getBooksAndCategories()
  }, [])

  const hasBooks = books && books.length > 0;

  return (
    <section className="flex flex-col gap-y-6 sm:gap-y-12 py-4 sm:py-6 px-8 sm:px-12 h-min-[calc(100vh-96px)] mx-auto">
      <div className='flex items-center gap-x-2'>
        <AutoStoriesOutlinedIcon fontSize='large'/>
        <h1 className="text-2xl font-bold">Gestión de Libros</h1>
      </div>
      <div className="flex flex-col sm:flex-row justify-between gap-y-4">
        <div className="flex items-center gap-2 px-3 py-2 rounded-md shadow-sm border border-zinc-300 bg-white focus-within:ring-2 focus-within:ring-sky-400 transition">
          <SearchOutlinedIcon className="text-zinc-500" fontSize="small" />
          <input
            type="text"
            placeholder="Buscar libro..."
            className="w-full bg-transparent outline-none text-sm text-zinc-700 placeholder-zinc-400"
          />
        </div>
        <div className="self-end sm:self-center">
          <ModalAddBook/>
        </div>
      </div>
      {
        loading ? <Loading className="flex justify-center"/>
        : hasBooks ? (
          <div className='grid grid-cols-1 gap-4 md:gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
            {
              books.map((book) => {
                return <CardBook book={book} key={book.id}/>
              })
            }
          </div>
        )
        : <h2 className='font-semibold'>No hay libros disponibles</h2>
      }
    </section>
  )
}