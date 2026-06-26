export default function JogosPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-10">

      <div className="max-w-7xl mx-auto">

        <div className="flex justify-between items-center mb-8">

          <h1 className="text-4xl font-bold">
            Jogos
          </h1>

          <button
            className="bg-green-600 text-white px-6 py-3 rounded-xl"
          >
            Novo Jogo
          </button>

        </div>

        <table className="w-full bg-white rounded-xl shadow">

          <thead>

            <tr className="border-b">

              <th className="p-4 text-left">Adversário</th>

              <th className="p-4 text-left">Fase</th>

              <th className="p-4 text-left">Data</th>

              <th className="p-4 text-left">Prêmio</th>

              <th className="p-4 text-center">Status</th>

              <th className="p-4 text-center">Ações</th>

            </tr>

          </thead>

          <tbody>

            <tr>

              <td className="p-4" colSpan={6}>

                Nenhum jogo cadastrado.

              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </main>
  );
}