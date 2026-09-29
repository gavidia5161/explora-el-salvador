import Link from 'next/link'
import { notFound } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

type Props = {
  params: Promise<{ slug: string }>
}

export default async function DestinoPage({ params }: Props) {
  const { slug } = await params
  const supabase = await createClient()

  const { data: destino, error } = await supabase
    .from('destinos')
    .select('nombre, slug, departamento, descripcion')
    .eq('slug', slug)
    .maybeSingle()

  if (error) {
    return (
      <main className="min-h-screen bg-gray-50 px-6 py-16">
        <p className="mx-auto max-w-3xl text-red-700">
          No se pudo cargar este destino. Revisá la conexión con Supabase.
        </p>
      </main>
    )
  }

  if (!destino) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-16">
      <article className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow">
        <Link
          href={`/departamentos/${encodeURIComponent(destino.departamento)}`}
          className="font-medium text-green-700 underline"
        >
          Ver destinos de {destino.departamento}
        </Link>

        <h1 className="mt-2 text-4xl font-bold text-green-800">
          {destino.nombre}
        </h1>

        <p className="mt-6 leading-7 text-gray-600">
          {destino.descripcion}
        </p>

        <Link
          href="/destinos"
          className="mt-8 inline-block font-medium text-green-800 underline"
        >
          ← Volver a todos los destinos
        </Link>
      </article>
    </main>
  )
}