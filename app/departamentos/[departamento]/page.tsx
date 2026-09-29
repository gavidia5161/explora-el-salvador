import Link from 'next/link'
import { notFound } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import { createClient as createSupabaseClient } from '@supabase/supabase-js'

type Props = {
  params: Promise<{ departamento: string }>
}

export async function generateStaticParams() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY

  if (!url || !key) {
    return []
  }

  const supabase = createSupabaseClient(url, key)
  const { data, error } = await supabase
    .from('destinos')
    .select('departamento')

  if (error) {
    console.error('No se pudieron obtener los departamentos:', error.message)
    return []
  }

  const departamentos = [
    ...new Set((data ?? []).map((destino) => destino.departamento)),
  ]

  return departamentos.map((departamento) => ({ departamento }))
}

export default async function DepartamentoPage({ params }: Props) {
  const { departamento: departamentoParam } = await params
  const departamento = decodeURIComponent(departamentoParam)
  const supabase = await createClient()

  const { data: destinos, error } = await supabase
    .from('destinos')
    .select('nombre, slug, departamento, descripcion')
    .eq('departamento', departamento)
    .order('nombre')

  if (error) {
    return (
      <main className="min-h-screen bg-gray-50 px-6 py-16">
        <p className="mx-auto max-w-3xl text-red-700">
          No se pudieron cargar los destinos de este departamento.
        </p>
      </main>
    )
  }

  if (!destinos || destinos.length === 0) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold text-green-800">
          Destinos en {departamento}
        </h1>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {destinos.map((destino) => (
            <Link
              key={destino.slug}
              href={`/destinos/${destino.slug}`}
              className="rounded-2xl bg-white p-6 shadow transition hover:shadow-lg"
            >
              <h2 className="text-2xl font-bold text-green-800">
                {destino.nombre}
              </h2>
              <p className="mt-3 text-gray-600">{destino.descripcion}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}