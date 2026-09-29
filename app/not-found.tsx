import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-6">
      <div className="max-w-lg rounded-2xl bg-white p-8 text-center shadow">
        <p className="text-sm font-bold text-green-700">Error 404</p>

        <h1 className="mt-2 text-3xl font-bold text-green-800">
          No encontramos esa página
        </h1>

        <p className="mt-4 text-gray-600">
          Ese destino o departamento no existe.
        </p>

        <Link
          href="/destinos"
          className="mt-6 inline-block rounded-lg bg-green-800 px-5 py-3 font-medium text-white hover:bg-green-700"
        >
          Ver todos los destinos
        </Link>
      </div>
    </main>
  )
}
