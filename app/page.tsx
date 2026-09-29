import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="bg-green-800 px-6 py-24 text-center text-white">
        <h1 className="text-5xl font-bold">Explora El Salvador</h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-green-100">
          Descubrí playas, volcanes, pueblos y lugares increíbles de El Salvador.
        </p>

        <Link
          href="/destinos"
          className="mt-8 inline-block rounded-full bg-white px-6 py-3 font-semibold text-green-800 transition hover:bg-green-100"
        >
          Explorar destinos
        </Link>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-center text-3xl font-bold">
          Descubre El Salvador
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
          Un pequeño país lleno de naturaleza, cultura, gastronomía y aventura.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-gray-100 p-6">
            <h3 className="text-xl font-bold">🏖️ Playas</h3>
            <p className="mt-3 text-gray-600">
              Conocé algunas de las playas más famosas de la costa salvadoreña.
            </p>
          </div>

          <div className="rounded-2xl bg-gray-100 p-6">
            <h3 className="text-xl font-bold">🌋 Volcanes</h3>
            <p className="mt-3 text-gray-600">
              Explorá volcanes, lagos y paisajes naturales únicos.
            </p>
          </div>

          <div className="rounded-2xl bg-gray-100 p-6">
            <h3 className="text-xl font-bold">🏘️ Pueblos</h3>
            <p className="mt-3 text-gray-600">
              Descubrí pueblos con historia, cultura y gastronomía local.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}