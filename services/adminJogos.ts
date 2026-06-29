import { supabase } from "@/lib/supabase";

export async function criarJogo(
  adversario: string,
  fase: string,
  dataHora: string,
  premio: string
) {
  const { data, error } = await supabase
    .from("jogos")
    .insert({
      adversario,
      fase,
      data_hora: dataHora,
      premio,
      palpites_abertos: false,
      placar_brasil: null,
      placar_adversario: null,
      encerrado: false,
      processado: false,
      vencedor: null,
    })
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  return data;
}

export async function listarJogos() {
  const { data, error } = await supabase
    .from("jogos")
    .select("*")
    .order("data_hora", { ascending: false });

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  return data ?? [];
}

export async function atualizarJogo(id: string, dados: any) {
  const { error } = await supabase
    .from("jogos")
    .update(dados)
    .eq("id", id);

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
}

export async function excluirJogo(id: string) {
  const { error } = await supabase
    .from("jogos")
    .delete()
    .eq("id", id);

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
}

export async function abrirJogo(id: string) {

  const { error: erro1 } = await supabase
    .from("jogos")
    .update({
      palpites_abertos: false
    })
    .not("id", "is", null);

  if (erro1) {
    console.log("ERRO 1", JSON.stringify(erro1));
    throw erro1;
  }

  const { error: erro2 } = await supabase
    .from("jogos")
    .update({
      palpites_abertos: true
    })
    .eq("id", id);

  if (erro2) {
    console.log("ERRO 2", JSON.stringify(erro2));
    throw erro2;
  }

}

export async function fecharJogo(id: string) {
  const { error } = await supabase
    .from("jogos")
    .update({ palpites_abertos: false })
    .eq("id", id);

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
}

export async function informarResultado(
  id: string,
  golsBrasil: number,
  golsAdversario: number
) {
  let vencedor = "EMPATE";

  if (golsBrasil > golsAdversario) vencedor = "BRASIL";
  if (golsBrasil < golsAdversario) vencedor = "ADVERSARIO";

  const { data, error } = await supabase
    .from("jogos")
    .update({
      placar_brasil: golsBrasil,
      placar_adversario: golsAdversario,
      vencedor,
      encerrado: true,
      processado: false,
      pontos_processados_em: null,
    })
    .eq("id", id)
    .select();

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  return data;
}