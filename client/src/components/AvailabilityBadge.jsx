export function AvailabilityBadge({ disponible, textoDisponible = 'Disponible', textoNoDisponible = 'Prestado' }) {
  return (
    <span
      className={`inline-block px-2 py-1 text-xs font-semibold rounded-full
        ${disponible ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600'}`}
    >
      {disponible ? textoDisponible : textoNoDisponible}
    </span>
  );
}
