import { ModalConfirmReturnBook } from '../Modals/ModalConfirmReturnBook'
import { ModalBookDetails } from '../Modals/ModalBookDetails'
import { AvailabilityBadge } from '../AvailabilityBadge'

export function CardBook ({ book }) {
  const { titulo, disponible, imagen_url } = book

  return (
    <div className="bg-white shadow-xl hover:shadow-2xl shadow-zinc-400 hover:shadow-zinc-600 hover:scale-105 transition-all ease-in-out duration-300 overflow-hidden w-full">
     <div className="relative w-full aspect-[2/3]">
        <img
          className="w-full h-full object-cover"
          src={imagen_url}
          alt={titulo}
        />
        { !disponible && (
          <div className="absolute bottom-1 right-1 z-5">
            <ModalConfirmReturnBook book={book} />
          </div>
        )}
      </div>
      <div className="p-4 space-y-2">
        <h2 className="text-lg font-bold xt-zinc-800 truncate">
          {titulo}
        </h2>
        <div className="flex items-center justify-between">
          <AvailabilityBadge disponible={disponible} />
          <ModalBookDetails book={book}/>
        </div>
      </div>
    </div>
  )
}