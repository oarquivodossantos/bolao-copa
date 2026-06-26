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
      palpites_abertos: true,
    })
    .select()
    .single();

  if (error) throw error;

  return data;
}

export async function listarJogos() {
  const { data, error } = await supabase
    .from("jogos")
    .select("*")
    .order("data_hora", { ascending: false });

  if (error) throw error;

  return data;
}