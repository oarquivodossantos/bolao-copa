import { supabase } from "@/lib/supabase";
import { Jogo } from "@/types/jogo";

export async function obterJogoAtual(): Promise<Jogo | null> {

  const { data, error } = await supabase
    .from("jogos")
    .select("*")
    .eq("palpites_abertos", true)
    .order("data_hora", { ascending: true })
    .limit(1)
    .maybeSingle();

  if (error) {
    throw error;
  }

  return data as Jogo | null;
}