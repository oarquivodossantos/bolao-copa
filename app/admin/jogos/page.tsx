import FormJogo from "@/components/admin/FormJogo";

export default function JogosPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-10">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold mb-8">
          Administração de Jogos
        </h1>

        <FormJogo />

        <div className="bg-white rounded-xl shadow">

          <table className="w-full">

            <thead>

              <tr className="border-b">

                <th className="p-4 text-left">Adversário</th>
                <th className="p-4 text-left">Fase</th>
                <th className="p-4 text-left">Data</th>
                <th className="p-4 text-left">Prêmio</th>
                <th className="p-4 text-center">Status</th>

              </tr>

            </thead>

            <tbody>

              <tr>

                <td
                  className="p-8 text-center text-gray-400"
                  colSpan={5}
                >
                  Nenhum jogo cadastrado.

                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </main>
  );
}