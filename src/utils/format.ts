export function formatPtBrCurrency(valor: number | string): string {
  const numero = typeof valor === 'string' ? parseFloat(valor) : valor

  if (isNaN(numero)) return 'R$ 0,00'

  return numero.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}
