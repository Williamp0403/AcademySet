export function CardBook ({ book }) {
  const { titulo, autor, isbn, disponible, imagen_url } = book

  return (
    <div className="bg-white shadow-xl hover:shadow-2xl shadow-zinc-400 hover:shadow-zinc-500 hover:scale-105 transition-all ease-in-out duration-300 overflow-hidden w-full cursor-pointer">
      <img className="w-full aspect-[2/3] object-cover" 
        src={imagen_url} 
        alt={titulo} 
      />
      <div className="p-4 space-y-1">
        <h2 className="text-lg font-bold xt-zinc-800 truncate">
          {titulo}
        </h2>
        <h3 className="font-semibold text-zinc-600 text-sm">
          ISBN: {isbn}
        </h3>
        <h3 className="font-semibold text-zinc-600 text-sm">
          Autor: {autor}
        </h3>
        <span
            className={`inline-block px-2 py-1 text-xs font-bold rounded 
            ${disponible? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600'}`}
        >
          {disponible ? 'Disponible' : 'Prestado'}
        </span>
      </div>
    </div>
  )
}