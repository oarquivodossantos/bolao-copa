import { obterJogoAtual } from "@/repositories/jogos";

export async function buscarJogoAberto() {

    return await obterJogoAtual();

}