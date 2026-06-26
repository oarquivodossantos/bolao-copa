import { supabase } from "@/lib/supabase";
import { Participante } from "@/types/participante";

export async function listarParticipantes(): Promise<Participante[]> {

  const { data } = await supabase
    .from("participantes")
    .select("*")
    .order("apelido");

  return (data ?? []) as Participante[];
}

export async function criarParticipante(nome: string) {

  const { data, error } = await supabase
    .from("participantes")
    .insert({
      nome,
      apelido: nome
    })
    .select()
    .single();

  if (error) throw error;

  return data as Participante;
}