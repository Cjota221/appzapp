"use client";

import { useMemo, useState } from "react";
import { CheckCircle2, Clipboard, Copy, Library, Lightbulb, Target } from "lucide-react";
import { Button } from "@/components/ui/Button";

const metodologias = [
  {
    id: 1,
    autor: "Robert Cialdini",
    livro: "As Armas da Persuasão",
    tag: "Gatilhos mentais",
    resumo: "Use urgência, escassez e prova social para reduzir indecisão.",
    conceito:
      "O cérebro usa atalhos mentais para tomar decisões com menos esforço. Quando a mensagem apresenta um motivo claro para agir agora, o cliente entende melhor o valor da oportunidade.",
    passos: [
      "Valide o interesse do cliente.",
      "Apresente escassez ou urgência real.",
      "Finalize com uma pergunta simples de decisão.",
    ],
    exemplo:
      "Oi {nome}! O {produto} saiu muito rápido na última reposição. Recebi poucas unidades agora e lembrei de você. Quer que eu reserve uma antes que acabe?",
  },
  {
    id: 2,
    autor: "Donald Miller",
    livro: "StoryBrand",
    tag: "Clareza e narrativa",
    resumo: "Posicione sua loja como guia e deixe o cliente como protagonista.",
    conceito:
      "Mensagens confusas fazem o cliente perder interesse. A comunicação precisa mostrar qual problema você resolve, qual transformação entrega e qual é o próximo passo.",
    passos: [
      "Nomeie a dor ou desejo do cliente.",
      "Mostre como o produto resolve esse ponto.",
      "Faça uma chamada para ação objetiva.",
    ],
    exemplo:
      "Entendo sua dúvida, {nome}. O {produto} foi pensado para resolver [problema] sem complicar sua rotina. Quer que eu te mande as opções disponíveis?",
  },
  {
    id: 3,
    autor: "Neil Rackham",
    livro: "SPIN Selling",
    tag: "Venda consultiva",
    resumo: "Faça perguntas para o cliente perceber o custo de não agir.",
    conceito:
      "A venda consultiva evita empurrar produto. Ela conduz o cliente por perguntas de situação, problema, implicação e necessidade até a decisão ficar mais natural.",
    passos: [
      "Entenda o contexto do cliente.",
      "Pergunte o impacto de continuar sem solução.",
      "Apresente o preço depois de ancorar valor.",
    ],
    exemplo:
      "{nome}, se esse problema continuar acontecendo todo mês, quanto isso pode te custar no fim do ano? O {produto} resolve isso hoje por um investimento menor.",
  },
  {
    id: 4,
    autor: "Jürgen Klaric",
    livro: "Neurovendas",
    tag: "Redução de risco",
    resumo: "Remova medo, simplifique a escolha e deixe a compra segura.",
    conceito:
      "O cliente tende a evitar risco. Quanto mais segura, simples e concreta a proposta parece, menor a resistência para avançar.",
    passos: [
      "Identifique o principal medo do cliente.",
      "Reduza risco com garantia, troca ou orientação.",
      "Simplifique o próximo passo.",
    ],
    exemplo:
      "{nome}, para tirar o risco da sua decisão: você pode testar o {produto} e, se não fizer sentido, eu te ajudo com a troca. Posso separar para você?",
  },
  {
    id: 5,
    autor: "Jeb Blount",
    livro: "Objeções",
    tag: "Contorno de objeção",
    resumo: "Trate objeção como pedido de informação, não como rejeição final.",
    conceito:
      "Muitas objeções aparecem porque o cliente ainda precisa de segurança. Isolar a dúvida ajuda a descobrir se existe algo além do preço, prazo ou condição.",
    passos: [
      "Valide a preocupação do cliente.",
      "Isole a objeção principal.",
      "Resolva e peça uma nova decisão.",
    ],
    exemplo:
      "Entendo o ponto do valor, {nome}. Além do preço, existe algo que esteja te impedindo de fechar hoje? Se ajustarmos a condição, faz sentido seguir?",
  },
  {
    id: 6,
    autor: "Thiago Concer",
    livro: "Vendas não ocorrem por acaso",
    tag: "Follow-up direto",
    resumo: "Retome conversas paradas com clareza, educação e comando.",
    conceito:
      "O follow-up precisa ser direto sem ser invasivo. O vendedor deve assumir a condução e deixar o cliente escolher entre avançar, pausar ou encerrar.",
    passos: [
      "Retome o status do pedido.",
      "Pergunte o obstáculo real.",
      "Dê duas opções claras de ação.",
    ],
    exemplo:
      "Fala {nome}! Vi que o pedido ficou parado. Faltou alguma informação minha ou você prefere deixar para outro momento? Me avisa para eu saber como seguir.",
  },
  {
    id: 7,
    autor: "Simon Sinek",
    livro: "Comece pelo Porquê",
    tag: "Propósito",
    resumo: "Conecte a compra ao motivo por trás da sua marca.",
    conceito:
      "Pessoas se conectam com motivos, não apenas com produtos. Quando a mensagem mostra por que sua loja existe, ela cria vínculo e confiança.",
    passos: [
      "Declare a missão ou crença da loja.",
      "Mostre como o produto materializa isso.",
      "Convide o cliente para participar dessa experiência.",
    ],
    exemplo:
      "Na {loja}, a gente acredita que [propósito]. Por isso indiquei o {produto}: ele combina com o que você busca. Quer que eu prepare seu pedido?",
  },
  {
    id: 8,
    autor: "James McSill",
    livro: "O Poder do Storytelling",
    tag: "Visualização",
    resumo: "Ajude o cliente a imaginar a vida depois da compra.",
    conceito:
      "Histórias criam imagem mental. Quando o cliente se vê usando o produto, ele percebe valor antes mesmo de finalizar a compra.",
    passos: [
      "Peça para o cliente imaginar uma situação concreta.",
      "Descreva o alívio ou ganho esperado.",
      "Conecte a visualização ao fechamento.",
    ],
    exemplo:
      "Imagina você usando o {produto} ainda esta semana e resolvendo [dor]. É exatamente essa praticidade que quero te entregar. Vamos fechar?",
  },
  {
    id: 9,
    autor: "Jeffrey Gitomer",
    livro: "A Bíblia de Vendas",
    tag: "Relacionamento",
    resumo: "Venda como conselheiro confiável, não como atendente genérico.",
    conceito:
      "Confiança reduz resistência. Quando o cliente sente que recebeu uma recomendação honesta, a decisão fica mais fácil.",
    passos: [
      "Use empatia e linguagem natural.",
      "Mostre sua recomendação com segurança.",
      "Dê uma orientação final objetiva.",
    ],
    exemplo:
      "{nome}, sendo bem direto: entre as opções, eu escolheria o {produto} para o seu caso. Ele entrega melhor o que você precisa. Quer seguir com ele?",
  },
  {
    id: 10,
    autor: "Disney Institute",
    livro: "O Jeito Disney",
    tag: "Encantamento",
    resumo: "Use o pós-venda para surpreender e gerar recompra.",
    conceito:
      "A experiência não termina no pagamento. Um pós-venda cuidadoso faz o cliente se sentir acompanhado e aumenta a chance de indicação.",
    passos: [
      "Avise sobre o andamento após a compra.",
      "Mande uma mensagem no momento da entrega.",
      "Demonstre interesse pela experiência do cliente.",
    ],
    exemplo:
      "Seu pedido acabou de chegar, {nome}! Preparamos tudo com cuidado. Quando abrir, me conta se ficou como você esperava?",
  },
];

export default function AcademiaPage() {
  const [activeId, setActiveId] = useState(1);
  const [copied, setCopied] = useState(false);

  const activeMethod = useMemo(
    () => metodologias.find((item) => item.id === activeId) ?? metodologias[0],
    [activeId]
  );

  const handleCopy = async () => {
    await navigator.clipboard.writeText(activeMethod.exemplo);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  };

  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-xl bg-emerald-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
              <Library className="h-4 w-4" />
              Academia AppZap
            </div>
            <h1 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Métodos de venda organizados para aplicar no WhatsApp.
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Escolha uma metodologia, entenda quando usar, siga o framework e copie um exemplo pronto para adaptar ao seu atendimento.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Métodos</p>
              <p className="mt-2 text-3xl font-semibold text-slate-950">{metodologias.length}</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Uso</p>
              <p className="mt-2 text-3xl font-semibold text-slate-950">Prático</p>
            </div>
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">Copiar</p>
              <p className="mt-2 text-3xl font-semibold text-emerald-950">1 clique</p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[300px_1fr]">
        <aside className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm lg:sticky lg:top-24 lg:self-start">
          <label className="mb-2 block text-sm font-semibold text-slate-900 lg:hidden">
            Escolha uma metodologia
          </label>
          <select
            value={activeId}
            onChange={(event) => setActiveId(Number(event.target.value))}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 lg:hidden"
          >
            {metodologias.map((item) => (
              <option key={item.id} value={item.id}>
                {item.autor} - {item.tag}
              </option>
            ))}
          </select>

          <div className="hidden lg:block">
            <p className="px-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Biblioteca
            </p>
            <div className="mt-3 space-y-1">
              {metodologias.map((item) => {
                const active = item.id === activeId;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveId(item.id)}
                    className={`w-full rounded-xl px-3 py-3 text-left transition ${
                      active
                        ? "bg-emerald-50 text-emerald-800 ring-1 ring-emerald-200"
                        : "text-slate-700 hover:bg-slate-50 hover:text-slate-950"
                    }`}
                  >
                    <span className="block text-sm font-semibold">{item.autor}</span>
                    <span className="mt-1 block text-xs text-slate-500">{item.tag}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

        <div className="space-y-5">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                  {activeMethod.tag}
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-950">{activeMethod.autor}</h2>
                <p className="mt-1 text-sm text-slate-500">{activeMethod.livro}</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700">
                {activeMethod.resumo}
              </div>
            </div>

            <div className="mt-6 grid gap-5 xl:grid-cols-[1fr_0.95fr]">
              <section className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-emerald-700" />
                  <h3 className="font-semibold text-slate-950">Por que funciona</h3>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-700">{activeMethod.conceito}</p>
              </section>

              <section className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-emerald-700" />
                  <h3 className="font-semibold text-slate-950">Framework de aplicação</h3>
                </div>
                <ol className="mt-4 space-y-3">
                  {activeMethod.passos.map((step, index) => (
                    <li key={step} className="flex gap-3 text-sm leading-6 text-slate-700">
                      <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-xs font-semibold text-white">
                        {index + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </section>
            </div>
          </article>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <Clipboard className="h-5 w-5 text-emerald-700" />
                  <h3 className="text-xl font-semibold text-slate-950">Exemplo pronto</h3>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Copie, substitua as variáveis e ajuste o tom para sua conversa.
                </p>
              </div>
              <Button type="button" variant="secondary" onClick={handleCopy} className="gap-2">
                <Copy className="h-4 w-4" />
                {copied ? "Copiado" : "Copiar exemplo"}
              </Button>
            </div>

            <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-950 p-5 text-sm leading-7 text-slate-100">
              {activeMethod.exemplo}
            </div>
          </section>

          <section className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" />
              <p className="text-sm leading-7 text-emerald-900">
                Melhor uso: escolha uma metodologia antes de escrever a mensagem. Isso evita texto genérico e ajuda cada atendimento a ter uma intenção clara.
              </p>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
