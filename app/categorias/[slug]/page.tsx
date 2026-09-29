type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CategoriaPage({ params }: Props) {
  const { slug } = await params;

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-green-700">
          Explora El Salvador
        </p>

        <h1 className="mt-3 text-4xl font-bold text-green-800">
          Categoría: {slug}
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          Descubrí destinos de esta categoría en El Salvador.
        </p>
      </div>
    </main>
  );
}