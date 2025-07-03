import { useEffect, useState } from 'react';
import { useFilteredBooks } from '../hooks/useFilteredBooks'
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { ModalAddBook } from '../components/Modals/ModalAddBook';
import { useBook } from '../context/BookContext';
import { Loading } from '../components/Loading';
import { CardBook } from '../components/Cards/CardBook';
import { EmptyState } from '../components/EmptyState';
import { SearchInput } from '../components/SearchInput';
import { SelectFilter } from '../components/Select/SelectFilter';

export function BooksPage () {
  const { getBooksAndCategories, books, categories, loading } = useBook()
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('')
  const [availability, setAvailability] = useState('')

  console.log(books)

  useEffect(() => {
    getBooksAndCategories()
  }, [])

  const filteredBooks = useFilteredBooks(books, searchTerm, selectedCategory, availability);
  const noBooksInitially = books.length === 0 && searchTerm === '';
  const noSearchResults = books.length > 0 && filteredBooks.length === 0 && (searchTerm !== '' || selectedCategory !== '' || availability !== '');

  const categoryOptions = [
    { value: '', label: 'Todas las categorías' },
    ...categories.map(cat => ({
      value: cat.nombre,
      label: cat.nombre,
    }))
  ];

  const availabilityOptions = [
    { value: '', label: 'Todos' },
    { value: 'available', label: 'Disponibles' },
    { value: 'unavailable', label: 'No disponibles' }
  ];

  return (
    <section className="flex flex-col gap-y-5 sm:gap-y-12 py-4 sm:py-6 px-8 sm:px-12 h-min-[calc(100vh-96px)] mx-auto">
      <div className='flex flex-col sm:flex-row justify-between gap-y-4'>
        <div className='flex items-center gap-x-2'>
          <AutoStoriesOutlinedIcon fontSize='large'/>
          <h1 className="text-2xl font-bold">Gestión de Libros</h1>
        </div>
        <div className="self-end sm:self-center">
          <ModalAddBook/>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-x-2 justify-between gap-y-4">
        <SearchInput
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Buscar libro..."
        />
        <div className='flex flex-col md:flex-row gap-y-3 md:gap-x-5 '>
          <SelectFilter
            label="Filtrar por categoría"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            options={categoryOptions}
          />
          <SelectFilter
            label="Filtrar por disponibilidad"
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
            options={availabilityOptions}
          />
        </div>
      </div>
      {
        loading ? (
          <Loading className="flex justify-center" />
        ) : noBooksInitially ? (
          <EmptyState message="No hay libros disponibles" />
        ) : noSearchResults ? (
          <EmptyState message="No se encontraron libros que coincidan con los filtros aplicados" />
        ) : (
          <div className="grid gap-4 md:gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {filteredBooks.map(book => (
              <CardBook key={book.id} book={book} />
            ))}
          </div>
        )
      }
    </section>
  )
}