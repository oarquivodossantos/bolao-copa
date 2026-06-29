import { supabase } from "@/lib/supabase";
import type { Participante } from "@/models/Participante";

export async function listarParticipantes(): Promise<Participante[]> {

  const { data, error } = await supabase
    .from("participantes")
    .select("*")
    .order("apelido");

  if (error) throw error;

  return (data ?? []) as Participante[];
}

export async function criarParticipante(
  nome: string
): Promise<Participante> {

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