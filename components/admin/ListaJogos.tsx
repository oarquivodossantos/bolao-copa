"use client";

import { useEffect, useState } from "react";

import {
  listarJogos,
  abrirJogo,
  fecharJogo,
  excluirJogo,
  informarResultado
} from "@/services/adminJogos";

interface Jogo {
  id: string;
  adversario: string;
  fase: string;
  data_hora: string;
  premio: string;
  palpites_abertos: boolean;
  encerrado: boolean;
  placar_brasil: number | null;
  placar_adversario: number | null;
}

export default function ListaJogos() {

  const [jogos, setJogos] = useState<Jogo[]>([]);
  const [carregando, setCarregando] = useState(false);

  useEffect(() => {
    carregar();
  }, []);

  async function carregar() {

    const lista = await listarJogos();

    setJogos(lista);

  }

  async function abrir(id: string) {

    setCarregando(true);

    await abrirJogo(id);

    await carregar();

    setCarregando(false);

  }

  async function fechar(id: string) {

    setCarregando(true);

    await fecharJogo(id);

    await carregar();

    setCarregando(false);

  }

  async function excluir(id: string) {

    if (!confirm("Deseja realmente excluir este jogo?")) return;

    setCarregando(true);

    await excluirJogo(id);

    await carregar();

    setCarregando(false);

  }

  async function resultado(jogo: Jogo) {

    const brasil = prompt("Gols do Brasil");

    if (brasil === null) return;

    const adversario = prompt("Gols do " + jogo.adversario);

    if (adversario === null) return;

    setCarregando(true);

    await informarResultado(

      jogo.id,

      Number(brasil),

      Number(adversario)

    );

    await carregar();

    setCarregando(false);

  }

  return (

    <>

      <div className="mb-4 flex justify-between items-center">

        <div className="text-lg font-semibold">

          Jogos cadastrados: <strong>{jogos.length}</strong>

        </div>

      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-slate-800 text-white">

            <tr>

              <th className="p-4 text-left">Adversário</th>

              <th>Fase</th>

              <th>Data</th>

              <th>Prêmio</th>

              <th>Status</th>

              <th>Resultado</th>

              <th>Ações</th>

            </tr>

          </thead>

          <tbody>

            {jogos.map((jogo) => (

              <tr

                key={jogo.id}

                className={

                  jogo.palpites_abertos

                    ? "bg-green-50 border-t-2 border-green-500"

                    : jogo.encerrado

                    ? "bg-red-50 border-t"

                    : "border-t"

                }

              >

                <td className="p-4 font-semibold">

                  🇧🇷 Brasil x {jogo.adversario}

                </td>

                <td>

                  {jogo.fase}

                </td>

                <td>

                  {new Date(jogo.data_hora).toLocaleString("pt-BR")}

                </td>

                <td>

                  🏆 {jogo.premio}

                </td>

                <td className="text-center">

                  {jogo.palpites_abertos && (

                    <span className="font-bold text-green-700">

                      🟢 ABERTO

                    </span>

                  )}

                  {!jogo.palpites_abertos && !jogo.encerrado && (

                    <span className="font-bold text-gray-600">

                      ⚪ AGUARDANDO

                    </span>

                  )}

                  {jogo.encerrado && (

                    <span className="font-bold text-red-700">

                      🔴 ENCERRADO

                    </span>

                  )}

                </td>

                <td className="text-center font-bold">

                  {jogo.encerrado

                    ? `${jogo.placar_brasil} x ${jogo.placar_adversario}`

                    : "-"}

                </td>

                <td className="space-x-2 text-center">

                  {jogo.palpites_abertos ? (

                    <button

                      disabled={carregando}

                      onClick={() => fechar(jogo.id)}

                      className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded"

                    >

                      Fechar

                    </button>

                  ) : (

                    <button

                      disabled={carregando}

                      onClick={() => abrir(jogo.id)}

                      className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded"

                    >

                      Abrir

                    </button>

                  )}

                  <button

                    disabled={carregando}

                    onClick={() => resultado(jogo)}

                    className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded"

                  >

                    Resultado

                  </button>

                  <button

                    disabled={carregando}

                    onClick={() => excluir(jogo.id)}

                    className="bg-gray-700 hover:bg-black text-white px-3 py-2 rounded"

                  >

                    Excluir

                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </>

  );

}