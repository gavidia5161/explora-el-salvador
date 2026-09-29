'use client'

type Props = {
  error: Error & { digest?: string }
  reset: () => void
}

export default function ErrorPage({ reset }: Props) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-6">
      <div className="max-w-lg rounded-2xl bg-white p-8 text-center shadow">
        <h1 className="text-2xl font-bold text-red-700">
          Ocurrió un problema
        </h1>

        <p className="mt-4 text-gray-600">
          No pudimos cargar esta página. Podés intentarlo de nuevo.
        </p>

        <button
          onClick={() => reset()}
          className="mt-6 rounded-lg bg-green-800 px-5 py-3 font-medium text-white hover:bg-green-700"
        >
          Intentar de nuevo
        </button>
      </div>
    </main>
  )
}