import { supabase } from "@/lib/supabase";

export async function salvarPalpite(
  jogoId: string,
  participanteId: string,
  golsBrasil: number,
  golsAdversario: number
) {

  const { data: jogo, error: erroJogo } = await supabase
    .from("jogos")
    .select("palpites_abertos")
    .eq("id", jogoId)
    .single();

  if (erroJogo) throw erroJogo;

  if (!jogo.palpites_abertos) {
    throw new Error("Os palpites para este jogo estão encerrados.");
  }

  const { data: existente, error: erroBusca } = await supabase
    .from("palpites")
    .select("id")
    .eq("jogo_id", jogoId)
    .eq("participante_id", participanteId)
    .maybeSingle();

  if (erroBusca) throw erroBusca;

  if (existente) {

    const { error } = await supabase
      .from("palpites")
      .update({
        gols_brasil: golsBrasil,
        gols_adversario: golsAdversario
      })
      .eq("id", existente.id);

    if (error) throw error;

    return;
  }

  const { error } = await supabase
    .from("palpites")
    .insert({
      jogo_id: jogoId,
      participante_id: participanteId,
      gols_brasil: golsBrasil,
      gols_adversario: golsAdversario
    });

  if (error) throw error;
}

export async function listarPalpitesPorJogo(jogoId: string) {

  const { data, error } = await supabase
    .from("palpites")
    .select(`
      gols_brasil,
      gols_adversario,
      participantes (
        apelido
      )
    `)
    .eq("jogo_id", jogoId)
    .order("created_at");

  if (error) throw error;

  return data ?? [];
}