export function calcularPontuacao(
  palpiteBrasil: number,
  palpiteAdv: number,
  resultadoBrasil: number,
  resultadoAdv: number
) {

  if (
    palpiteBrasil === resultadoBrasil &&
    palpiteAdv === resultadoAdv
  ) {
    return 5;
  }

  const vencedorPalpite =
    Math.sign(palpiteBrasil - palpiteAdv);

  const vencedorResultado =
    Math.sign(resultadoBrasil - resultadoAdv);

  if (vencedorPalpite === vencedorResultado) {
    return 3;
  }

  const saldoPalpite =
    palpiteBrasil - palpiteAdv;

  const saldoResultado =
    resultadoBrasil - resultadoAdv;

  if (saldoPalpite === saldoResultado) {
    return 1;
  }

  return 0;
}