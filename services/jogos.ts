import { supabase } from "@/lib/supabase";
import { Jogo } from "@/types/jogo";

export async function obterJogoAtual(): Promise<Jogo | null> {

  const { data, error } = await supabase
    .from("jogos")
    .select("*")
    .eq("palpites_abertos", true)
    .single();

  if (error) return null;

  return data as Jogo;
}