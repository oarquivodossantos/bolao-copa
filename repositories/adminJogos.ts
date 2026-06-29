import { supabase } from "@/lib/supabase";

function converterDataLocal(dataHora: string) {
  const data = new Date(dataHora);

  data.setMinutes(
    data.getMinutes() - data.getTimezoneOffset()
  );

  return data.toISOString();
}

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
      data_hora: converterDataLocal(dataHora),
      premio,
      palpites_abertos: false,
      placar_brasil: null,
      placar_adversario: null,
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

  return data ?? [];

}