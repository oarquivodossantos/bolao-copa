"use client";

import { useState } from "react";
import { criarJogo } from "@/services/adminJogos";

export default function FormJogo() {
  const [adversario, setAdversario] = useState("");
  const [fase, setFase] = useState("");
  const [dataHora, setDataHora] = useState("");
  const [premio, setPremio] = useState("");
  const [salvando, setSalvando] = useState(false);

  async function salvar() {
    try {
      setSalvando(true);

      await criarJogo(
        adversario,
        fase,
        dataHora,
        premio
      );

      alert("Jogo cadastrado.");

      location.reload();

    } catch (e) {
      console.error(e);
      alert("Erro ao cadastrar.");
    } finally {
      setSalvando(false);
    }
  }

  return (
    <div className="bg-white rounded-xl shadow p-6 mb-8">

      <h2 className="text-2xl font-bold mb-6">
        Novo Jogo
      </h2>

      <div className="grid grid-cols-2 gap-4">

        <input
          className="border rounded-lg p-3"
          placeholder="Adversário"
          value={adversario}
          onChange={(e) => setAdversario(e.target.value)}
        />

        <input
          className="border rounded-lg p-3"
          placeholder="Fase"
          value={fase}
          onChange={(e) => setFase(e.target.value)}
        />

        <input
          type="datetime-local"
          className="border rounded-lg p-3"
          value={dataHora}
          onChange={(e) => setDataHora(e.target.value)}
        />

        <input
          className="border rounded-lg p-3"
          placeholder="Prêmio"
          value={premio}
          onChange={(e) => setPremio(e.target.value)}
        />

      </div>

      <button
        onClick={salvar}
        disabled={salvando}
        className="mt-6 bg-green-600 text-white px-6 py-3 rounded-xl"
      >
        {salvando ? "Salvando..." : "Salvar Jogo"}
      </button>

    </div>
  );
}