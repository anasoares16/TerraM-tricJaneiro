import { useEffect, useState } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState("App.js");

  useEffect(() => {
    function handleMouseMove(event) {
      setMousePosition({ x: event.clientX, y: event.clientY });
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const codeExamples = {
    "Início": `Desde os primórdios, a humanidade sempre produziu lixo, mas em pequenas quantidades e majoritariamente orgânico. Com o avanço das sociedades, surgiram novos materiais como cerâmica, metais e, mais tarde, plásticos. A Revolução Industrial marcou um grande aumento na produção de resíduos. O consumo em massa intensificou esse problema no século XX. Atualmente, a quantidade de lixo gerada é muito maior do que a capacidade natural de absorção do planeta. Isso torna a gestão de resíduos um dos maiores desafios ambientais da história.`,
    "Resíduos": `O lixo urbano é o mais visível, pois é gerado diariamente pelas cidades e residências. No entanto, o setor industrial produz uma quantidade muito maior de resíduos, incluindo materiais tóxicos e de difícil tratamento. Já o setor agropecuário gera grandes volumes de resíduos orgânicos e químicos, como embalagens de agrotóxicos. Apesar disso, esses tipos de lixo recebem menos atenção da população. A soma dos três setores mostra a complexidade do problema dos resíduos sólidos. Cada um exige formas diferentes de tratamento e controle.`,
    "Desigualdades": `A produção de lixo está diretamente ligada às condições sociais e econômicas da população. Regiões mais ricas costumam gerar mais resíduos, mas também contam com coleta regular e tratamento adequado. Em áreas mais pobres, a coleta muitas vezes é precária ou inexistente. Isso faz com que o lixo se acumule em ruas, rios e terrenos baldios. Essa realidade aumenta riscos à saúde e ao meio ambiente. Assim, a gestão do lixo revela e reforça desigualdades sociais já existentes.`,
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-16 overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(
              600px circle at ${mousePosition.x}px ${mousePosition.y}px,
              rgba(59, 130, 246, 0.15),
              transparent 40%
            )`,
          }}
        />

        {/* Container principal */}
        <div className="relative z-10 flex flex-col items-center gap-10 w-full max-w-7xl">
          {/* Seção TerraMetric */}
          <div className="w-full flex flex-col items-center gap-10">
            {/* TÍTULO */}
            <div className="w-full text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                <span className="text-green-500">TerraMetric</span> <br />
                Calculando <br />
                Futuro
              </h1>
            </div>

            {/* BOTÃO */}
            <div className="text-center">
              <a
                href="/login"
                className="inline-block px-6 py-3 text-base font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Comece Aqui
              </a>
            </div>

            {/* CAIXA CINZA */}
            <div className="w-full flex justify-center">
              <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/10">
                <div className="bg-gradient-to-br from-gray-900/30 to-gray-800/30 backdrop-blur-sm rounded-lg overflow-hidden h-[200px] sm:h-[250px] lg:h-[300px] w-full max-w-[600px] border border-white/5">
                  {/* IDE header */}
                  <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 bg-white/10 backdrop-blur-sm border-b border-white/10">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500" />
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500" />
                    <span className="text-xs sm:text-sm text-gray-300">
                      TerraMetric
                    </span>
                  </div>

                  <div className="p-3 sm:p-4 relative h-full">
                    {/* Tabs */}
                    <div className="flex space-x-1 sm:space-x-2 mb-1 sm:mb-2 overflow-x-auto">
                      {["Início", "Resíduos", "Desigualdades"].map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setActiveTab(tab)}
                          className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border transition-all duration-200 whitespace-nowrap ${
                            activeTab === tab
                              ? "bg-green-500 text-white border-green-500"
                              : "bg-white/5 text-gray-300 hover:bg-white/10"
                          }`}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>

                    {/* Código */}
                    <div className="h-full overflow-y-auto">
                      <pre className="text-xs sm:text-sm text-gray-300 whitespace-pre-wrap leading-relaxed">
                        {codeExamples[activeTab]}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Seção Plafon Engenharia */}
          <div className="w-full text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              <span className="text-pink-500">PLAFON</span> <br />
              Engenharia e <br />
              Energia Solar
            </h1>

            {/* DESCRIÇÃO */}
            <p className="mt-6 text-gray-300 text-base sm:text-lg max-w-xl mx-auto">
              Nós da Plafon Engenharia, buscamos promover soluções eficientes e inovadoras,
              com o intuito de satisfazer as necessidades do cliente visando sempre a
              pontualidade, qualidade dos serviços prestados e economia.
              <br /><br />
              Nosso time de profissionais é formado por engenheiros e técnicos. Atendemos a
              região metropolitana de Campinas, Grande São Paulo e Sul de Minas Gerais.
            </p>

            {/* LOCAL */}
            <p className="mt-4 text-gray-400 text-sm">
              R. Salvador Allende, 334 – Jardim Nova Esperança, <br />
              Campinas - SP, 13058-489
            </p>

            {/* BOTÃO */}
            <div className="mt-8 text-center">
              <a
                href="/contato"
                className="inline-block px-6 py-3 text-base font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors duration-300"
              >
                Entre em Contato
              </a>
            </div>
          </div>

          {/* Seção Uniao Turismo */}
          <div className="w-full text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              <span className="text-blue-500">UNIAO</span> <br />
              TURISMO
            </h1>

            {/* DESCRIÇÃO */}
            <p className="mt-6 text-gray-300 text-base sm:text-lg max-w-xl mx-auto">
              Oferecemos serviços premium de fretamento contínuo, turismo e transporte
              executivo, garantindo conforto, segurança e pontualidade em todas as
              viagens.
            </p>

            {/* ENDEREÇO */}
            <p className="mt-6 text-gray-400 text-sm">
              R. Siqueira Campos, 840 – Jardim Santa Isabel<br />
              Monte Mor - SP, 13190-000<br />
              (19) 3879-1029
            </p>

            {/* BOTÃO */}
            <div className="mt-8 text-center">
              <a
                href="/contato"
                className="inline-block px-6 py-3 text-base font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Solicitar Orçamento
              </a>
            </div>
          </div>

          {/* Seção Cooperativa Águia de Ouro */}
          <div className="w-full text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              <span className="text-yellow-500">Cooperativa</span> <br />
              Águia de Ouro
            </h1>

            {/* DESCRIÇÃO */}
            <p className="mt-6 text-gray-300 text-base sm:text-lg max-w-xl mx-auto">
              Oferecemos serviços premium de fretamento contínuo, turismo e transporte
              executivo, com foco em conforto, segurança e pontualidade.
            </p>

            {/* ENDEREÇO */}
            <p className="mt-6 text-gray-400 text-sm">
              Estr. Mun. de Hortolândia, 426 – Jardim Nova América<br />
              Hortolândia - SP<br />
              (19) 99983-39764
            </p>

            {/* BOTÃO */}
            <div className="mt-8 text-center">
              <a
                href="/contato"
                className="inline-block px-6 py-3 text-base font-semibold text-white bg-yellow-600 rounded-lg hover:bg-yellow-700 transition-colors duration-300"
              >
                Solicitar Orçamento
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}