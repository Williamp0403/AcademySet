export function NotFound404Page () {
  return (
    <section className="flex justify-center items-center px-8 h-[calc(100vh-92px)] mx-auto">
      <div className="max-w-md w-full p-8 flex flex-col items-center gap-y-2">
        <h1 className="text-8xl font-bold">404</h1>
        <h2 className="text-lg sm:text-xl font-semibold">Página no encontrada :(</h2>
      </div>
    </section>
  )
}