import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';

export function BooksPage () {
  return (
    <section className="flex flex-col p-8 sm:p-12 h-[calc(100vh-96px)] mx-auto">
        <div className='flex items-center gap-x-2'>
          <AutoStoriesOutlinedIcon fontSize='large'/>
          <h1 className="text-2xl font-bold">Gestión de Libros</h1>
        </div>
    </section>
  )
}