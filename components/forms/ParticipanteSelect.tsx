"use client";

import { useParticipantes } from "@/hooks/useParticipantes";

interface Props {
  value: string;
  onChange: (id: string) => void;
}

export default function ParticipanteSelect({
  value,
  onChange,
}: Props) {
  const { participantes, loading } = useParticipantes();

  if (loading) {
    return (
      <div className="w-full rounded-xl border border-gray-200 bg-gray-50 p-4 text-center text-gray-500">
        Carregando participantes...
      </div>
    );
  }

  return (
    <div className="mb-5">

      <label className="mb-2 block text-sm font-semibold text-gray-700">
        👤 Participante
      </label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border-2 border-gray-300 bg-white p-4 text-lg shadow-sm transition focus:border-green-600 focus:outline-none"
      >

        <option value="">
          Selecione seu nome
        </option>

        {participantes.map((p) => (

          <option
            key={p.id}
            value={p.id}
          >
            👤 {p.apelido}
          </option>

        ))}

        <option value="novo">
          ➕ Cadastrar novo participante
        </option>

      </select>

    </div>
  );
}