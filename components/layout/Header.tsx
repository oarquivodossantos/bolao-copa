interface Props {
  adversario?: string;
  fase?: string;
  premio?: string;
  dataHora?: string;
  aberto?: boolean;
}

export default function Header({
  adversario = "---",
  fase = "",
  premio = "",
  dataHora = "",
  aberto = false,
}: Props) {
  return (
    <header className="mb-8">

      <div className="text-center">

        <div className="text-6xl mb-3">
          🏆
        </div>

        <h1 className="text-4xl font-extrabold text-green-700">
          Bolão da Família
        </h1>

        <p className="text-gray-500 mt-1">
          Copa do Mundo 2026
        </p>

      </div>

      <div className="mt-8 rounded-2xl border border-gray-200 bg-gradient-to-r from-green-50 to-yellow-50 p-6">

        <div className="flex items-center justify-center gap-6">

          <div className="text-center">

            <div className="text-6xl">
              🇧🇷
            </div>

            <div className="mt-2 text-xl font-bold">
              Brasil
            </div>

          </div>

          <div className="text-4xl font-extrabold text-gray-500">
            ×
          </div>

          <div className="text-center">

            <div className="text-6xl">
              🏳️
            </div>

            <div className="mt-2 text-xl font-bold">
              {adversario}
            </div>

          </div>

        </div>

        {fase && (
          <p className="mt-6 text-center text-lg font-semibold text-gray-700">
            {fase}
          </p>
        )}

        {dataHora && (
          <p className="mt-2 text-center text-gray-600">
            📅 {new Date(dataHora).toLocaleString("pt-BR")}
          </p>
        )}

        {premio && (
          <p className="mt-2 text-center font-bold text-amber-700">
            🏆 Prêmio: {premio}
          </p>
        )}

        <div className="mt-6 flex justify-center">

          {aberto ? (

            <span className="rounded-full bg-green-600 px-5 py-2 font-bold text-white shadow">
              🟢 PALPITES ABERTOS
            </span>

          ) : (

            <span className="rounded-full bg-red-600 px-5 py-2 font-bold text-white shadow">
              🔴 PALPITES ENCERRADOS
            </span>

          )}

        </div>

      </div>

    </header>
  );
}