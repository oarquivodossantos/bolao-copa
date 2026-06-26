"use client";

import { useState } from "react";

export default function Placar() {
  const [brasil, setBrasil] = useState(0);
  const [adversario, setAdversario] = useState(0);

  return (
    <div className="flex justify-between items-center mb-8">

      <div className="flex flex-col items-center">

        <span className="mb-2 text-3xl">🇧🇷</span>

        <div className="flex items-center gap-2">

          <button
            onClick={() => brasil > 0 && setBrasil(brasil - 1)}
            className="w-10 h-10 rounded-full bg-red-500 text-white text-xl"
          >
            -
          </button>

          <span className="text-4xl font-bold w-10 text-center">
            {brasil}
          </span>

          <button
            onClick={() => setBrasil(brasil + 1)}
            className="w-10 h-10 rounded-full bg-green-600 text-white text-xl"
          >
            +
          </button>

        </div>

      </div>

      <div className="text-3xl font-bold">
        x
      </div>

      <div className="flex flex-col items-center">

        <span className="mb-2 text-3xl">🇯🇵</span>

        <div className="flex items-center gap-2">

          <button
            onClick={() =>
              adversario > 0 && setAdversario(adversario - 1)
            }
            className="w-10 h-10 rounded-full bg-red-500 text-white text-xl"
          >
            -
          </button>

          <span className="text-4xl font-bold w-10 text-center">
            {adversario}
          </span>

          <button
            onClick={() => setAdversario(adversario + 1)}
            className="w-10 h-10 rounded-full bg-green-600 text-white text-xl"
          >
            +
          </button>

        </div>

      </div>

    </div>
  );
}