"use client";

interface Props {
  adversario?: string;
  golsBrasil: number;
  golsAdversario: number;
  setGolsBrasil: (v: number) => void;
  setGolsAdversario: (v: number) => void;
}

export default function Placar({
  adversario = "Adversário",
  golsBrasil,
  golsAdversario,
  setGolsBrasil,
  setGolsAdversario,
}: Props) {
  return (
    <div className="mt-8 rounded-2xl border border-green-200 bg-gradient-to-r from-green-50 to-yellow-50 p-6">

      <div className="flex items-center justify-center gap-8">

        <div className="flex flex-col items-center">

          <div className="mb-2 text-6xl">
            🇧🇷
          </div>

          <span className="mb-3 text-lg font-bold">
            Brasil
          </span>

          <input
            type="number"
            min={0}
            max={20}
            value={golsBrasil}
            onChange={(e) => setGolsBrasil(Number(e.target.value))}
            className="w-24 rounded-xl border-2 border-green-600 p-3 text-center text-3xl font-bold focus:outline-none focus:ring-2 focus:ring-green-500"
          />

        </div>

        <div className="text-5xl font-bold text-gray-500">
          ×
        </div>

        <div className="flex flex-col items-center">

          <div className="mb-2 text-6xl">
            🏳️
          </div>

          <span className="mb-3 text-lg font-bold text-center">
            {adversario}
          </span>

          <input
            type="number"
            min={0}
            max={20}
            value={golsAdversario}
            onChange={(e) => setGolsAdversario(Number(e.target.value))}
            className="w-24 rounded-xl border-2 border-blue-600 p-3 text-center text-3xl font-bold focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>

      </div>

    </div>
  );
}