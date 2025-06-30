export function CardBook ({ book }) {
  const { titulo, disponible } = book

  return (
    <div className="bg-white shadow-xl hover:shadow-2xl shadow-zinc-400 hover:shadow-zinc-500 hover:scale-105 transition-all ease-in-out duration-300 overflow-hidden w-full cursor-pointer">
      <img className="w-full aspect-[2/3] object-cover" 
        src="https://m.media-amazon.com/images/I/91R1AixEiLL._AC_UF1000,1000_QL80_.jpg" 
        alt={titulo} 
      />
      <div className="p-4">
        <h2 className="text-lg font-bold text-zinc-800 mb-1 truncate">
          {titulo}
        </h2>
        <span
          className={`inline-block px-2 py-1 text-xs font-medium rounded 
            ${disponible? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600'}`}
        >
          {disponible ? 'Disponible' : 'Prestado'}
        </span>
      </div>
    </div>
  )
}