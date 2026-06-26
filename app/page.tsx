"use client";

import { useEffect, useState } from "react";

import Header from "@/components/Header";
import Placar from "@/components/Placar";
import BotaoConfirmar from "@/components/BotaoConfirmar";
import ParticipanteSelect from "@/components/ParticipanteSelect";

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

      if (participanteId === "novo") {

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

    } catch (e) {

      console.error(e);

      alert("Erro ao salvar.");

    } finally {

      setSalvando(false);

    }

  }

  return (

    <main className="min-h-screen bg-green-100 flex items-center justify-center">

      <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-md">

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

          <BotaoConfirmar

            onClick={confirmar}

            disabled={salvando}

          />

        </div>

      </div>

    </main>

  );

}