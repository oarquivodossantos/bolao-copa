export interface Jogo {
  id: string;
  adversario: string;
  fase: string;
  data_hora: string;
  premio: string;
  placar_brasil: number | null;
  placar_adversario: number | null;
  palpites_abertos: boolean;
  created_at: string;
  updated_at: string;
}