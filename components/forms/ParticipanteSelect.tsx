"use client";

import { useParticipantes } from "@/hooks/useParticipantes";

interface Props {

  value: string;

  onChange: (id: string) => void;

}

export default function ParticipanteSelect({

  value,

  onChange

}: Props) {

  const {

    participantes,

    loading

  } = useParticipantes();

  if (loading) {

    return <p>Carregando participantes...</p>;

  }

  return (

    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full border rounded-xl p-4"
    >

      <option value="">
        Selecione um participante
      </option>

      {participantes.map((p) => (

        <option
          key={p.id}
          value={p.id}
        >
          {p.apelido}
        </option>

      ))}

      <option value="novo">
        ➕ Novo participante
      </option>

    </select>

  );

}