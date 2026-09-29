import Link from 'next/link'
import { createClient } from '@/utils/supabase/server'

type Props = {
  searchParams: Promise<{ q?: string | string[] }>
}

export default async function DestinosPage({ searchParams }: Props) {
  const { q } = await searchParams
  const termino = (Array.isArray(q) ? q[0] : q)?.trim() ?? ''

  const supabase = await createClient()

  const { data: destinos, error } = await supabase
    .from('destinos')
    .select('id, nombre, slug, departamento, descripcion')
    .ilike('nombre', termino ? `%${termino}%` : '%')
    .order('nombre')

  const listaDestinos = destinos ?? []

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold text-green-800">
          Destinos de El Salvador
        </h1>

        <p className="mt-4 text-gray-600">
          Explora algunos de los lugares que podés visitar.
        </p>

        <form action="/destinos" method="get" className="mt-8 flex gap-3">
          <label htmlFor="q" className="sr-only">
            Buscar destinos por nombre
          </label>
          <input
            id="q"
            name="q"
            defaultValue={termino}
            placeholder="Buscar un destino..."
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400"
          />
          <button
            type="submit"
            className="rounded-lg bg-green-800 px-5 py-3 font-medium text-white hover:bg-green-700"
          >
            Buscar
          </button>
        </form>

        {error ? (
          <p className="mt-10 rounded-xl bg-red-50 p-6 text-red-700">
            No se pudieron cargar los destinos.
          </p>
        ) : listaDestinos.length === 0 ? (
          <p className="mt-10 text-gray-600">
            {termino
              ? `No encontramos destinos con “${termino}”.`
              : 'Todavía no hay destinos cargados.'}
          </p>
        ) : (
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {listaDestinos.map((destino) => (
              <Link
                key={destino.id}
                href={`/destinos/${destino.slug}`}
                className="rounded-2xl bg-white p-6 shadow transition hover:shadow-lg"
              >
                <h2 className="text-2xl font-bold text-green-800">
                  {destino.nombre}
                </h2>
                <p className="mt-2 text-sm font-medium text-green-700">
                  {destino.departamento}
                </p>
                <p className="mt-3 text-gray-600">{destino.descripcion}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}