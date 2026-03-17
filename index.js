/**
 * Ranked Match Calculator — DIO Logic Fundamentals Challenge
 * Calculates player rank based on wins and losses
 */

function getRank(wins) {
  if (wins < 10) return "Ferro"
  if (wins < 20) return "Bronze"
  if (wins < 50) return "Prata"
  if (wins < 80) return "Ouro"
  if (wins < 90) return "Diamante"
  if (wins < 100) return "Lendário"
  return "Imortal"
}

function calcularRanked(vitorias, derrotas) {
  if (vitorias < 0 || derrotas < 0) {
    throw new Error("Victories and losses must be non-negative numbers")
  }

  const saldo = vitorias - derrotas
  const rank = getRank(vitorias)

  return {
    vitorias,
    derrotas,
    saldo,
    rank,
    message: `O Herói tem de saldo de ${saldo} e está no nível de ${rank}`
  }
}

// Test cases
const testCases = [
  { vitorias: 5, derrotas: 3 },
  { vitorias: 15, derrotas: 5 },
  { vitorias: 30, derrotas: 10 },
  { vitorias: 60, derrotas: 20 },
  { vitorias: 85, derrotas: 15 },
  { vitorias: 95, derrotas: 5 },
  { vitorias: 100, derrotas: 0 },
]

console.log("=== Ranked Match Calculator ===\n")
testCases.forEach(({ vitorias, derrotas }) => {
  const result = calcularRanked(vitorias, derrotas)
  console.log(result.message)
})

// Export for testing
if (typeof module !== "undefined") {
  module.exports = { calcularRanked, getRank }
}
