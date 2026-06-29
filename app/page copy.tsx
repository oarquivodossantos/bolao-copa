"use client";

import { useEffect, useState } from "react";

import Header from "@/components/layout/Header";
import Card from "@/components/layout/Card";
import ParticipanteSelect from "@/components/forms/ParticipanteSelect";
import Placar from "@/components/forms/Placar";
import Button from "@/components/ui/Button";

import { buscarJogoAberto } from "@/services/jogos";
import { criarParticipante } from "@/services/participantes";
import { salvarPalpite } from "@/services/palpites";

export default function Home() {

  const [jogo, setJogo] = useState<any>(null);

  const [participanteId, setParticipanteId] = useState("");
  const [novoNome, setNovoNome] = useState("");

  const [golsBrasil, setGolsBrasil] = useState(0);
  const [golsAdversario, setGolsAdversario] = useState(0);

  const [salvando, setSalvando] = useState(false);

  const [mensagem, setMensagem] = useState("");
  const [tipo, setTipo] = useState<"sucesso" | "erro" | "">("");

  useEffect(() => {
    carregar();
  }, []);

  function mostrarMensagem(
    texto: string,
    tipoMsg: "sucesso" | "erro"
  ) {

    setMensagem(texto);
    setTipo(tipoMsg);

    setTimeout(() => {

      setMensagem("");
      setTipo("");

    }, 4000);

  }

  async function carregar() {

    try {

      const jogoAtual = await buscarJogoAberto();

      setJogo(jogoAtual);

    } catch (e) {

      console.error(e);

    }

  }

  async function confirmar() {

    try {

      setSalvando(true);

      if (!jogo) {

        throw new Error("Os palpites estão encerrados.");

      }

      let participante = participanteId;

      if (!participante) {

        throw new Error("Selecione um participante.");

      }

      if (participante === "novo") {

        if (!novoNome.trim()) {

          throw new Error("Informe o nome.");

        }

        const novo = await criarParticipante(
          novoNome.trim()
        );

        participante = novo.id;

      }

      await salvarPalpite(

        jogo.id,

        participante,

        golsBrasil,

        golsAdversario

      );

      mostrarMensagem(

        "✅ Palpite salvo com sucesso!",

        "sucesso"

      );

    } catch (e: any) {

      mostrarMensagem(

        e.message ?? "Erro ao salvar.",

        "erro"

      );

    } finally {

      setSalvando(false);

    }

  }

  return (

    <main className="min-h-screen bg-gradient-to-b from-green-100 to-green-50 flex items-center justify-center p-6">

      <Card>

        <Header

          adversario={jogo?.adversario}

          fase={jogo?.fase}

          premio={jogo?.premio}

          dataHora={jogo?.data_hora}

          aberto={!!jogo}

        />

        {mensagem && (

          <div
            className={`mb-5 rounded-xl p-4 text-center font-bold ${
              tipo === "sucesso"
                ? "bg-green-100 border border-green-300 text-green-700"
                : "bg-red-100 border border-red-300 text-red-700"
            }`}
          >

            {mensagem}

          </div>

        )}

        {!jogo && (

          <div className="mb-6 rounded-xl bg-red-100 border border-red-300 p-4 text-center font-semibold text-red-700">

            Os palpites para este jogo estão encerrados.

          </div>

        )}

        <ParticipanteSelect

          value={participanteId}

          onChange={setParticipanteId}

        />

        {participanteId === "novo" && (

          <input

            className="border rounded-xl p-4 w-full mt-4"

            placeholder="Nome"

            value={novoNome}

            onChange={(e) => setNovoNome(e.target.value)}

          />

        )}

        <Placar

          golsBrasil={golsBrasil}

          golsAdversario={golsAdversario}

          setGolsBrasil={setGolsBrasil}

          setGolsAdversario={setGolsAdversario}

        />

        <div className="mt-6">

          <Button

            onClick={confirmar}

            disabled={!jogo || salvando}

          >

            {salvando

              ? "Salvando..."

              : "Confirmar Palpite"}

          </Button>

        </div>

      </Card>

    </main>

  );

}