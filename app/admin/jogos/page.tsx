import Link from "next/link";

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-10">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold mb-10">
          Painel Administrativo
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          <Link
            href="/admin/jogos"
            className="bg-white rounded-xl shadow p-8 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer"
          >
            <div className="text-5xl mb-4">⚽</div>

            <h2 className="text-2xl font-bold">
              Jogos
            </h2>

            <p className="text-gray-500 mt-2">
              Cadastro, abertura, fechamento e resultados.
            </p>

          </Link>

          <div className="bg-white rounded-xl shadow p-8 opacity-60">

            <div className="text-5xl mb-4">👥</div>

            <h2 className="text-2xl font-bold">
              Participantes
            </h2>

            <p className="text-gray-500 mt-2">
              Em desenvolvimento
            </p>

          </div>

          <div className="bg-white rounded-xl shadow p-8 opacity-60">

            <div className="text-5xl mb-4">📝</div>

            <h2 className="text-2xl font-bold">
              Palpites
            </h2>

            <p className="text-gray-500 mt-2">
              Em desenvolvimento
            </p>

          </div>

          <div className="bg-white rounded-xl shadow p-8 opacity-60">

            <div className="text-5xl mb-4">🏆</div>

            <h2 className="text-2xl font-bold">
              Ranking
            </h2>

            <p className="text-gray-500 mt-2">
              Em desenvolvimento
            </p>

          </div>

        </div>

      </div>

    </main>
  );
}