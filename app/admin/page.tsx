export default function AdminPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-10">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold mb-8">
          Painel Administrativo
        </h1>

        <div className="grid grid-cols-4 gap-6">

          <div className="bg-white rounded-xl shadow p-6">
            Jogos
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            Participantes
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            Palpites
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            Ranking
          </div>

        </div>

      </div>

    </main>
  );
}