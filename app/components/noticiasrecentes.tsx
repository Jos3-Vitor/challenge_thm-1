import { useState } from "react";

export default function NoticiasRecentes() {
  const [mostrarMais, setMostrarMais] = useState(false);

  const noticias = [
    { titulo: "Chuvas fortes atingem a Zona Norte de SP", resumo: "Previsão de mais chuvas ao longo da semana; Defesa Civil em alerta.", data: "19/05/2025" },
    { titulo: "Novos abrigos temporários são abertos", resumo: "Regiões com maior risco de alagamento recebem apoio emergencial.", data: "18/05/2025" },
    { titulo: "Campanha de doações mobiliza voluntários", resumo: "Itens de higiene e cobertores são prioridade nos pontos de coleta.", data: "17/05/2025" },
    { titulo: "Alagamentos afetam transporte público", resumo: "Linhas de ônibus e metrô têm operação parcial em algumas regiões.", data: "17/05/2025" },
    { titulo: "Aplicativo do SOS Enchentes recebe melhorias", resumo: "Nova versão inclui mapa interativo e notificações em tempo real.", data: "16/05/2025" },
    { titulo: "Voluntários ajudam na limpeza de ruas", resumo: "Ações comunitárias aceleram a recuperação de áreas afetadas.", data: "15/05/2025" },
    { titulo: "Defesa Civil amplia alerta para novas regiões", resumo: "Mais bairros entram na zona de risco nas próximas 48 horas.", data: "15/05/2025" },
    { titulo: "Mutirão de saúde atende desabrigados", resumo: "Equipes oferecem atendimento médico e vacinação emergencial.", data: "14/05/2025" },
    { titulo: "Enchente danifica escola municipal", resumo: "Aulas suspensas temporariamente; prefeitura avalia reformas.", data: "13/05/2025" },
    { titulo: "Moradores criam grupo de monitoramento", resumo: "Comunidade usa redes sociais para relatar riscos em tempo real.", data: "12/05/2025" },
    { titulo: "Ajuda federal será enviada a São Paulo", resumo: "Recursos emergenciais são liberados para infraestrutura.", data: "12/05/2025" },
    { titulo: "Estudantes fazem campanha de conscientização", resumo: "Escolas promovem palestras e cartazes sobre prevenção de enchentes.", data: "11/05/2025" },
  ];

  return (
    <section className="max-w-6xl mx-auto my-10 px-6">
      <h2 className="text-2xl font-semibold text-red-700 mb-6 text-center">
        Últimas Notícias
      </h2>

      {/* PRIMEIRAS 6 NOTÍCIAS */}
      <div className="grid md:grid-cols-3 gap-6">
        {noticias.slice(0, 6).map((noticia, index) => (
          <button
            key={index}
            className="bg-white/80 text-left p-4 rounded-xl shadow-md hover:shadow-lg transition-all hover:bg-red-50"
            style={{ backgroundColor: "#A3000017" }}
            onClick={() => alert(`Notícia: ${noticia.titulo}`)}
          >
            <h3 className="text-lg font-bold text-black mb-2">{noticia.titulo}</h3>
            <p className="text-sm text-gray-700 mb-2">{noticia.resumo}</p>
            <p className="text-xs text-gray-500 text-right">{noticia.data}</p>
          </button>
        ))}
      </div>

      {/* BOTÃO VER MAIS */}
      {!mostrarMais && (
        <div className="text-center mt-6">
          <button
            className="text-red-700 font-semibold hover:underline text-lg"
            onClick={() => setMostrarMais(true)}
          >
            Ver mais
          </button>
        </div>
      )}

      {/* NOTÍCIAS ADICIONAIS */}
      {mostrarMais && (
        <>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {noticias.slice(6).map((noticia, index) => (
              <button
                key={index}
                className="bg-white/80 text-left p-4 rounded-xl shadow-md hover:shadow-lg transition-all hover:bg-red-50"
                style={{ backgroundColor: "#A3000017" }}
                onClick={() => alert(`Notícia: ${noticia.titulo}`)}
              >
                <h3 className="text-lg font-bold text-black mb-2">{noticia.titulo}</h3>
                <p className="text-sm text-gray-700 mb-2">{noticia.resumo}</p>
                <p className="text-xs text-gray-500 text-right">{noticia.data}</p>
              </button>
            ))}
          </div>

          {/* BOTÃO FECHAR */}
          <div className="text-center mt-6">
            <button
              className="text-red-700 font-semibold hover:underline text-lg"
              onClick={() => setMostrarMais(false)}
            >
              Fechar
            </button>
          </div>
        </>
      )}
    </section>
  );
}
