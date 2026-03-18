import { useState } from "react";

const perguntas = [
  { texto: "1. A empresa realiza separação de resíduos recicláveis?", opcoes: ["Não realiza", "Realiza parcialmente", "Realiza na maioria dos setores", "Realiza de forma organizada e contínua"] },
  { texto: "2. Existe coleta seletiva disponível no seu setor?", opcoes: ["Não existe", "Existe em poucos pontos", "Existe na maioria dos setores", "Existe com orientação adequada"] },
  { texto: "3. A empresa incentiva a redução do uso de papel?", opcoes: ["Não incentiva", "Incentivo informal", "Orientação formal", "Política clara de redução"] },
  { texto: "4. Você utiliza papel reciclado ou prioriza documentos digitais?", opcoes: ["Nunca", "Raramente", "Frequentemente", "Sempre que possível"] },
  { texto: "5. A empresa adota medidas para economizar energia elétrica?", opcoes: ["Não adota", "Adota poucas medidas", "Adota medidas regulares", "Possui programa estruturado"] },
  { texto: "6. São utilizadas lâmpadas econômicas ou LED?", opcoes: ["Não", "Em poucos setores", "Na maioria dos setores", "Em toda a empresa"] },
  { texto: "7. A empresa promove campanhas de conscientização ambiental?", opcoes: ["Nunca", "Raramente", "Às vezes", "Frequentemente"] },
  { texto: "8. Existe incentivo para reduzir o desperdício de água?", opcoes: ["Não existe", "Existe informalmente", "Existe orientação formal", "Existe programa estruturado"] },
  { texto: "9. A empresa reutiliza materiais sempre que possível?", opcoes: ["Nunca", "Raramente", "Frequentemente", "Sempre que possível"] },
  { texto: "10. Há controle sobre o descarte de resíduos eletrônicos (pilhas, baterias, equipamentos)?", opcoes: ["Não há controle", "Controle básico", "Controle adequado", "Descarte com empresa especializada"] },
  { texto: "11. A empresa adota medidas para reduzir emissão de poluentes?", opcoes: ["Não adota", "Adota parcialmente", "Adota regularmente", "Possui plano estruturado"] },
  { texto: "12. O ambiente de trabalho possui ventilação ou climatização adequada?", opcoes: ["Não possui", "Parcialmente adequada", "Adequada", "Adequada e monitorada"] },
  { texto: "13. Há ações para lidar com calor excessivo no ambiente?", opcoes: ["Não há", "Ações informais", "Ações básicas (pausas e água)", "Plano estruturado para altas temperaturas"] },
  { texto: "14. A empresa orienta sobre impactos ambientais e mudanças climáticas?", opcoes: ["Não orienta", "Orienta raramente", "Orienta às vezes", "Orienta regularmente"] },
  { texto: "15. Existe incentivo ao uso consciente de impressoras e equipamentos?", opcoes: ["Não existe", "Existe informalmente", "Existe orientação clara", "Existe política definida"] },
  { texto: "16. A empresa participa de projetos ambientais externos?", opcoes: ["Não participa", "Participa raramente", "Participa às vezes", "Participa regularmente"] },
  { texto: "17. Há incentivo ao uso de transporte sustentável?", opcoes: ["Não há incentivo", "Incentivo informal", "Incentivo formal", "Programa estruturado"] },
  { texto: "18. A empresa divulga metas ambientais internas?", opcoes: ["Não divulga", "Divulga raramente", "Divulga regularmente", "Divulga e acompanha resultados"] },
  { texto: "19. Você percebe comprometimento da empresa com sustentabilidade?", opcoes: ["Nenhum comprometimento", "Baixo comprometimento", "Comprometimento moderado", "Alto comprometimento"] },
  { texto: "20. Você se sente incentivado(a) a adotar práticas sustentáveis no trabalho?", opcoes: ["Não me sinto incentivado", "Pouco incentivado", "Incentivado", "Muito incentivado"] },
];

export default function Questionario() {
  const [respostas, setRespostas] = useState(Array(perguntas.length).fill(null));
  const [resultado, setResultado] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function responder(perguntaIndex, opcaoIndex) {
    const novasRespostas = [...respostas];
    novasRespostas[perguntaIndex] = opcaoIndex;
    setRespostas(novasRespostas);
  }

  function enviar() {
    if (respostas.includes(null)) {
      alert("Por favor, responda a todas as 20 perguntas antes de gerar o resultado.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const pontuacaoBruta = respostas.reduce((total, r) => total + (r + 1), 0);
      const maxPontuacao = perguntas.length * 4;
      const pontuacaoFinal = Math.round((pontuacaoBruta / maxPontuacao) * 100);

      let classificacao = "";

      if (pontuacaoFinal >= 70) {
        classificacao = "Alta Responsabilidade Ambiental";
      } else if (pontuacaoFinal >= 40) {
        classificacao = "Média Responsabilidade Ambiental";
      } else {
        classificacao = "Baixa Responsabilidade Ambiental";
      }

      setResultado({
        score: pontuacaoFinal,
        label: classificacao,
      });

      setLoading(false);
    } catch (err) {
      setError("Erro ao gerar resultado ambiental.");
      setLoading(false);
    }
  }

  return (
    <section id="questionario" className="max-w-4xl mx-auto px-4 py-20 text-white scroll-mt-24">
      <h1 className="text-3xl font-bold mb-8 text-green-400 text-center">
        Diagnóstico Ambiental TerraMetric
      </h1>

      {error && (
        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-center mb-6">
          <p className="text-red-400">{error}</p>
        </div>
      )}

      {resultado === null ? (
        <div className="space-y-6">
          {perguntas.map((pergunta, i) => (
            <div key={i} className="p-6 bg-slate-900/50 border border-white/10 rounded-xl">
              <p className="font-semibold mb-4 text-gray-200">{pergunta.texto}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {pergunta.opcoes.map((opcao, j) => (
                  <label
                    key={j}
                    className={`flex items-center p-3 rounded-lg cursor-pointer border transition ${
                      respostas[i] === j
                        ? "bg-green-600/20 border-green-500 text-green-400"
                        : "bg-white/5 border-transparent hover:bg-white/10"
                    }`}
                  >
                    <input
                      type="radio"
                      name={`pergunta-${i}`}
                      checked={respostas[i] === j}
                      onChange={() => responder(i, j)}
                      className="hidden"
                    />
                    <div
                      className={`w-4 h-4 rounded-full border mr-3 flex items-center justify-center ${
                        respostas[i] === j ? "border-green-500" : "border-gray-500"
                      }`}
                    >
                      {respostas[i] === j && (
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                      )}
                    </div>
                    <span className="text-sm">{opcao}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}

          <button
            onClick={enviar}
            disabled={loading}
            className="w-full py-4 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 rounded-xl font-bold text-lg transition"
          >
            {loading ? "Gerando..." : "Gerar Resultado"}

          </button>
        </div>
      ) : (
        <div className="bg-slate-900 p-8 rounded-2xl border border-white/10 text-center animate-fade-in">
          <h2 className="text-2xl font-bold mb-4 text-green-400">
            Resultado Ambiental
          </h2>

          <p className="text-5xl font-black mb-4">{resultado.score}%</p>

          <p className="text-lg text-gray-300 mb-8">{resultado.label}</p>

          <button
            onClick={() => {
              setResultado(null);
              setRespostas(Array(perguntas.length).fill(null));
              setError(null);
            }}
            className="text-green-500 hover:text-green-400 font-semibold underline"
          >
            Reiniciar diagnóstico
          </button>
        </div>
      )}
    </section>
  );
}
