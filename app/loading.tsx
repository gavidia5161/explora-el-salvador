export default function Loading() {
  return (
    <main
      className="min-h-screen bg-gray-50 px-6 py-16"
      aria-busy="true"
      aria-label="Cargando destinos"
    >
      <div className="mx-auto max-w-6xl animate-pulse">
        <div className="h-10 w-72 rounded bg-gray-200" />
        <div className="mt-4 h-5 w-96 max-w-full rounded bg-gray-200" />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div key={item} className="rounded-2xl bg-white p-6 shadow">
              <div className="h-7 w-40 rounded bg-gray-200" />
              <div className="mt-4 h-4 w-28 rounded bg-gray-200" />
              <div className="mt-6 h-4 w-full rounded bg-gray-200" />
              <div className="mt-2 h-4 w-4/5 rounded bg-gray-200" />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}