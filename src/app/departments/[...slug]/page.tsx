interface DepartmentCatchAllProps {
  params: Promise<{ slug: string[] }>;
}

export default async function DepartmentCatchAllPage({ params }: DepartmentCatchAllProps) {
  const { slug } = await params;

  return (
    <main className="max-w-6xl mx-auto px-6 py-8">
      <h1 className="text-2xl font-bold">Department Hierarchy</h1>
      <p className="text-sm text-slate-500">Current path: {slug?.join(" / ")}</p>
    </main>
  );
}
