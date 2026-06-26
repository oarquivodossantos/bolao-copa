"use client";

import { useEffect, useState } from "react";

import Header from "@/components/layout/Header";
import Card from "@/components/layout/Card";

import ParticipanteSelect from "@/components/forms/ParticipanteSelect";
import Placar from "@/components/forms/Placar";

import Button from "@/components/ui/Button";

import { obterJogoAtual } from "@/services/jogos";
import { criarParticipante } from "@/services/participantes";
import { salvarPalpite } from "@/services/palpites";

export default function Home() {

  const [jogoId, setJogoId] = useState("");

  const [participanteId, setParticipanteId] = useState("");

  const [novoNome, setNovoNome] = useState("");

  const [golsBrasil, setGolsBrasil] = useState(0);

  const [golsAdversario, setGolsAdversario] = useState(0);

  const [salvando, setSalvando] = useState(false);

  useEffect(() => {

    async function carregar() {

      const jogo = await obterJogoAtual();

      if (jogo) {

        setJogoId(jogo.id);

      }

    }

    carregar();

  }, []);

  async function confirmar() {

    try {

      setSalvando(true);

      let participante = participanteId;

      if (participante === "novo") {

        const novo = await criarParticipante(novoNome);

        participante = novo.id;

      }

      await salvarPalpite(

        jogoId,

        participante,

        golsBrasil,

        golsAdversario

      );

      alert("Palpite salvo com sucesso.");

    } finally {

      setSalvando(false);

    }

  }

  return (

    <main className="min-h-screen bg-green-100 flex items-center justify-center p-6">

      <Card>

        <Header />

        <ParticipanteSelect

          value={participanteId}

          onChange={setParticipanteId}

        />

        {

          participanteId === "novo" && (

            <input

              className="border rounded-xl p-4 w-full mt-4"

              placeholder="Nome"

              value={novoNome}

              onChange={(e)=>setNovoNome(e.target.value)}

            />

          )

        }

        <Placar

          golsBrasil={golsBrasil}

          golsAdversario={golsAdversario}

          setGolsBrasil={setGolsBrasil}

          setGolsAdversario={setGolsAdversario}

        />

        <div className="mt-6">

          <Button

            onClick={confirmar}

            disabled={salvando}

          >

            {

              salvando

              ? "Salvando..."

              : "Confirmar Palpite"

            }

          </Button>

        </div>

      </Card>

    </main>

  );

}