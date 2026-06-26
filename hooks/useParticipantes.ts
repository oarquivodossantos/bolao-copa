"use client";

import { useEffect, useState } from "react";
import { listarParticipantes } from "@/repositories/participantes";
import { Participante } from "@/types/participante";

export function useParticipantes() {

  const [participantes, setParticipantes] = useState<Participante[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function carregar() {

      const lista = await listarParticipantes();

      setParticipantes(lista);

      setLoading(false);

    }

    carregar();

  }, []);

  return {

    participantes,

    loading

  };

}