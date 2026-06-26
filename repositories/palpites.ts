import { supabase } from "@/lib/supabase";

export async function salvarPalpite(
  jogoId: string,
  participanteId: string,
  golsBrasil: number,
  golsAdversario: number
) {

  const { data: existente } = await supabase
    .from("palpites")
    .select("id")
    .eq("jogo_id", jogoId)
    .eq("participante_id", participanteId)
    .maybeSingle();

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