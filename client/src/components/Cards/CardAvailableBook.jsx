export function CardAvailableBook ({ book, handleClick }) {
  const { titulo, isbn, autor, imagen_url, categoria_nombre } = book

  function getCategoriaEstilo (nombre) {
  switch (nombre) {
    case 'Ficción':
      return 'bg-purple-200 text-purple-800';
    case 'Ciencia':
      return 'bg-green-200 text-green-800';
    case 'Terror':
      return 'bg-red-200 text-red-700';
    case 'Biografía':
      return 'bg-blue-200 text-blue-800';
    default:
      return 'bg-zinc-200 text-zinc-700';
  }
}

  return (
    <div onClick={handleClick} className="bg-white shadow-xl hover:shadow-2xl shadow-zinc-400 hover:shadow-sky-500 hover:scale-105 transition-all ease-in-out duration-300 overflow-hidden w-full cursor-pointer">
     <div className="relative w-full aspect-[2/3]">
        <img
          className="w-full h-full object-cover"
          src={imagen_url}
          alt={titulo}
        />
        <div className={`absolute bottom-1 right-1 text-sm font-semibold px-2 py-0.5 rounded shadow-sm ${getCategoriaEstilo(categoria_nombre)}`}>
          {categoria_nombre}
        </div>
      </div>
      <div className="p-4 space-y-1">
        <h2 className="text-lg font-bold xt-zinc-800 truncate">
          {titulo}
        </h2>
        <h3 className="font-semibold text-zinc-600 text-sm">
          Autor: {autor}
        </h3>
        <h3 className="font-semibold text-zinc-600 text-sm">
          ISBN: {isbn}
        </h3>
      </div>
    </div>
  )
}