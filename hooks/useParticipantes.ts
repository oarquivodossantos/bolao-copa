"use client";

import { useEffect, useState } from "react";
import { listarParticipantes } from "@/repositories/participantes";
import { Participante } from "@/models/Participante";

export function useParticipantes() {

  const [participantes, setParticipantes] = useState<Participante[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function carregar() {

      try {

        const lista = await listarParticipantes();

        setParticipantes(lista);

      } finally {

        setLoading(false);

      }

    }

    carregar();

  }, []);

  return {

    participantes,

    loading

  };

}