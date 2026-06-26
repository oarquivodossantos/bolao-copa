import { supabase } from "./supabase";

export async function obterJogoAtual() {
  const { data, error } = await supabase
    .from("jogos")
    .select("*")
    .eq("palpites_abertos", true)
    .single();

  if (error) {
    console.log("ERRO SUPABASE:", JSON.stringify(error, null, 2));
    return null;
  }

  console.log("JOGO:", data);

  return data;
}