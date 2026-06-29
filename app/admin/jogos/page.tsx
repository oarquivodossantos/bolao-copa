"use client";

import { useState } from "react";
import ListaJogos from "@/components/admin/ListaJogos";
import { criarJogo } from "@/services/adminJogos";

export default function JogosPage() {

  const [adversario, setAdversario] = useState("");
  const [fase, setFase] = useState("");
  const [dataHora, setDataHora] = useState("");
  const [premio, setPremio] = useState("");

  async function salvar() {

    if (!adversario || !fase || !dataHora) {
      alert("Preencha todos os campos.");
      return;
    }

    await criarJogo(
      adversario,
      fase,
      dataHora,
      premio
    );

    location.reload();

  }

  return (

    <main className="min-h-screen bg-slate-100 p-10">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold mb-8">

          Cadastro de Jogos

        </h1>

        <div className="bg-white rounded-xl shadow p-6 mb-8">

          <div className="grid grid-cols-4 gap-4">

            <input
              className="border rounded-lg p-3"
              placeholder="Adversário"
              value={adversario}
              onChange={(e)=>setAdversario(e.target.value)}
            />

            <input
              className="border rounded-lg p-3"
              placeholder="Fase"
              value={fase}
              onChange={(e)=>setFase(e.target.value)}
            />

            <input
              className="border rounded-lg p-3"
              type="datetime-local"
              value={dataHora}
              onChange={(e)=>setDataHora(e.target.value)}
            />

            <input
              className="border rounded-lg p-3"
              placeholder="Prêmio"
              value={premio}
              onChange={(e)=>setPremio(e.target.value)}
            />

          </div>

          <button
            onClick={salvar}
            className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
          >

            Salvar Jogo

          </button>

        </div>

        <ListaJogos />

      </div>

    </main>

  );

}