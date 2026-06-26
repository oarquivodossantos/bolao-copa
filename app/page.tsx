import Header from "@/components/Header";
import Nome from "@/components/Nome";
import Placar from "@/components/Placar";
import BotaoConfirmar from "@/components/BotaoConfirmar";

import { obterJogoAtual } from "@/lib/jogos";

export default async function Home() {

  const jogo = await obterJogoAtual();

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-100 to-green-50 flex items-center justify-center p-6">

      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md">

        <pre className="text-xs bg-gray-100 rounded p-2 mb-6">
          {JSON.stringify(jogo, null, 2)}
        </pre>

        <Header />

        <Nome />

        <Placar />

        <BotaoConfirmar />

      </div>

    </main>
  );
}