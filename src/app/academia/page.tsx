"use client";

import { useState } from "react";
import { BookOpen, ChevronDown, Copy } from "lucide-react";
import { Button } from "@/components/ui/Button";

const metodologias = [
  {
    id: 1,
    autor: "Robert Cialdini",
    livro: "As Armas da Persuasão",
    tag: "Gatilhos Mentais",
    conceito:
      "O cérebro utiliza atalhos mentais para economizar energia ao tomar decisões. Usar gatilhos reduz o tempo de resposta e corta a hesitação lógica, ativando o instinto de ação rápida.",
    passos: [
      "Valide o interesse do cliente.",
      "Crie um cenário de Escassez (estoque) ou Urgência (tempo) real.",
      "Faça uma pergunta fechada no final para forçar decisão.",
    ],
    exemplo:
      "Oi {nome}! O {produto} esgotou em 2 horas na última vez. Recebi mais 5 unidades agora e lembrei de você. Quer que eu reserve uma antes que acabe?",
  },
  {
    id: 2,
    autor: "Donald Miller",
    livro: "StoryBrand",
    tag: "Clareza e Narrativa",
    conceito:
      "Sua marca não é o herói, é o 'Guia'. Mensagens complexas fazem o cérebro ignorar a oferta. O foco deve ser unicamente em qual problema do cliente você resolve.",
    passos: [
      "Nomeie a dor ou frustração atual do cliente.",
      "Posicione seu produto como a 'ferramenta mágica' que elimina essa dor.",
      "Apresente um CTA óbvio.",
    ],
    exemplo:
      "Entendo sua frustração com [problema atual], {nome}. O {produto} foi pensado exatamente para te dar a paz de [benefício]. Vamos fechar seu pedido com essa cor?",
  },
  {
    id: 3,
    autor: "Neil Rackham",
    livro: "SPIN Selling",
    tag: "Venda Consultiva",
    conceito:
      "Empurrar soluções gera rejeição. O SPIN usa perguntas para que o próprio cliente perceba que o problema dele é caro demais para ser ignorado.",
    passos: [
      "Faça pergunta de Situação (contexto).",
      "Faça pergunta de Implicação (o que acontece se não agir?).",
      "Apresente o preço só depois de ancorar o valor.",
    ],
    exemplo:
      "{nome}, se continuar perdendo tempo com isso todo mês, quanto vai custar no fim do ano? O {produto} resolve isso hoje por uma fração desse custo.",
  },
  {
    id: 4,
    autor: "Jürgen Klaric",
    livro: "Neurovendas",
    tag: "Cérebro Reptiliano",
    conceito:
      "Nós compramos para reduzir medos, poupar energia ou buscar conforto. Se a mensagem parecer arriscada, o cérebro trava.",
    passos: [
      "Identifique o maior medo do cliente (ex: não servir).",
      "Remova o risco usando garantias fortes.",
      "Simplifique o próximo passo para exigir zero esforço.",
    ],
    exemplo:
      "{nome}, quero tirar todo o risco das suas costas. Você tem 7 dias para testar o {produto}. Se não amar, devolvo seu Pix na hora. Posso mandar o link seguro?",
  },
  {
    id: 5,
    autor: "Jeb Blount",
    livro: "Objeções",
    tag: "Contorno de Rejeição",
    conceito:
      "A objeção não é um 'não', é um pedido de mais informações. Isolar a objeção impede que o cliente crie desculpas em cascata.",
    passos: [
      "Valide a preocupação do cliente.",
      "Isole a objeção ('Além do preço, há algo mais?').",
      "Resolva e peça o fechamento novamente.",
    ],
    exemplo:
      "Entendo que o valor está acima do planejado, {nome}. Mas me tira uma dúvida: se conseguirmos flexibilizar no cartão, o {produto} é o que você quer levar hoje?",
  },
  {
    id: 6,
    autor: "Thiago Concer",
    livro: "Vendas não ocorrem por acaso",
    tag: "Follow-up Ágil",
    conceito:
      "Papo reto. O brasileiro precisa de follow-up direto, mas educado. O vendedor precisa assumir a rédea do fechamento e não deixar a conversa 'solta'.",
    passos: [
      "Seja direto sobre o status do pedido.",
      "Pergunte qual é o obstáculo exato.",
      "Dê duas opções claras de ação ou encerramento.",
    ],
    exemplo:
      "Fala {nome}! Vi que não finalizou o pedido. Faltou alguma informação minha ou rolou um imprevisto? Me avisa para eu saber se seguro sua reserva ou passo para o próximo!",
  },
  {
    id: 7,
    autor: "Simon Sinek",
    livro: "Comece pelo Porquê",
    tag: "Conexão de Propósito",
    conceito:
      "Pessoas não compram o que você faz, compram por que você faz. Conectar o propósito da sua loja com o cliente gera fidelidade irracional.",
    passos: [
      "Declare a missão/crença da loja.",
      "Mostre como o produto tangibiliza isso.",
      "Convide o cliente para fazer parte.",
    ],
    exemplo:
      "Nossa maior missão na {loja} não é só vender, {nome}, é garantir que você tenha [benefício maior]. É por isso que indiquei o {produto}. Posso preparar seu pacote?",
  },
  {
    id: 8,
    autor: "James McSill",
    livro: "O Poder do Storytelling",
    tag: "Visualização",
    conceito:
      "Fatos contam, histórias vendem. Colocar o cliente visualizando o uso futuro do produto cria um sentimento de posse psicológica antes mesmo da compra.",
    passos: [
      "Peça para o cliente imaginar um cenário futuro próximo.",
      "Descreva o alívio ao usar o produto.",
      "Faça o gancho para a venda.",
    ],
    exemplo:
      "Imagine só, {nome}, daqui a uma semana você abrindo a caixa, usando o {produto} e já livre de [dor do cliente]. É essa sensação que vou te enviar. Vamos fechar?",
  },
  {
    id: 9,
    autor: "Jeffrey Gitomer",
    livro: "A Bíblia de Vendas",
    tag: "Relacionamento",
    conceito:
      "Se o cliente gostar de você e confiar em você, ele compra. Tratar a venda como o conselho de um amigo especialista desarma a defesa do comprador.",
    passos: [
      "Use empatia ou humor leve.",
      "Mostre sua expertise e assuma o papel de conselheiro.",
      "Seja direto na recomendação final.",
    ],
    exemplo:
      "{nome}, como seu 'consultor oficial' hoje, eu te garanto: de todas as opções, o {produto} é o que eu levaria para mim. Pode confiar. Prefere no Pix ou Cartão?",
  },
  {
    id: 10,
    autor: "Disney Institute",
    livro: "O Jeito Disney",
    tag: "Encantamento",
    conceito:
      "A venda começa no pós-venda. Encantar é superar a expectativa básica (receber o produto) entregando atenção aos mínimos detalhes.",
    passos: [
      "Não suma após o pagamento. Avise sobre o envio.",
      "Mande mensagem surpresa no dia da entrega.",
      "Mostre entusiasmo genuíno com a experiência dele.",
    ],
    exemplo:
      "O seu pedido acabou de chegar aí, {nome}! Preparamos com muito carinho. Quando abrir, me manda uma foto? Quero saber se a sua experiência foi perfeita! ✨",
  },
];

export default function AcademiaPage() {
  const [activeId, setActiveId] = useState<number | null>(1);
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setActiveId((current) => (current === id ? null : id));
  };

  const handleCopy = async (snippet: string, id: number) => {
    await navigator.clipboard.writeText(snippet);
    setCopiedId(id);
    window.setTimeout(() => setCopiedId(null), 1800);
  };

  return (
    <div className="space-y-8">
      <section className="overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-purple-600 to-purple-700 p-8 text-white shadow-2xl shadow-purple-300/20 sm:p-12">
        <div className="space-y-6">
          <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-white/80">
            Conteúdo premium
          </span>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Conhecimento de especialistas em vendas.
          </h1>
          <p className="max-w-2xl text-base leading-8 text-purple-100 sm:text-lg">
            10 metodologias comprovadas, 10 autores respeitados, 100+ scripts prontos para copiar e aplicar no seu WhatsApp agora mesmo.
          </p>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-xs uppercase tracking-[0.3em] text-purple-600">Metodologias</p>
          <p className="mt-3 text-3xl font-semibold text-slate-950">10</p>
          <p className="mt-1 text-sm text-slate-600">Especialistas e autores renomados</p>
        </div>
        <div className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-xs uppercase tracking-[0.3em] text-purple-600">Aplicação</p>
          <p className="mt-3 text-3xl font-semibold text-slate-950">100%</p>
          <p className="mt-1 text-sm text-slate-600">Prático e testado na realidade</p>
        </div>
        <div className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-xs uppercase tracking-[0.3em] text-purple-600">Integrações</p>
          <p className="mt-3 text-3xl font-semibold text-slate-950">+100</p>
          <p className="mt-1 text-sm text-slate-600">Scripts com suas variáveis</p>
        </div>
      </section>

      <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm uppercase tracking-[0.3em] text-purple-600">Como usar</p>
        <h2 className="mt-2 text-2xl font-semibold text-slate-950">Expanda cada metodologia</h2>
        <p className="mt-3 text-sm text-slate-600">Leia o conceito, veja os passos, copie o exemplo e coloque suas variáveis. Envie em segundos.</p>
      </section>

      <div className="space-y-4">
        {metodologias.map((item) => {
          const isOpen = activeId === item.id;
          return (
            <div
              key={item.id}
              className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <button
                type="button"
                onClick={() => handleToggle(item.id)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-emerald-600 text-white shadow-sm">
                    <BookOpen className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-emerald-700">{item.tag}</p>
                    <h2 className="mt-2 text-xl font-semibold text-slate-950">{item.autor}</h2>
                    <p className="mt-1 text-sm text-slate-500">{item.livro}</p>
                  </div>
                </div>
                <ChevronDown className={`h-5 w-5 transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`} />
              </button>

              {isOpen ? (
                <div className="border-t border-slate-200 px-6 py-6">
                  <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
                    <div className="space-y-6">
                      <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Por que funciona?</p>
                        <p className="mt-3 text-sm leading-7 text-slate-700">{item.conceito}</p>
                      </div>
                      <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Framework de aplicação</p>
                        <ol className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                          {item.passos.map((step, index) => (
                            <li key={step} className="flex gap-3">
                              <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-xs font-semibold text-white">{index + 1}</span>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>

                    <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-5">
                      <div className="mb-4 flex items-center justify-between gap-4">
                        <div>
                          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Snippet Prático</p>
                          <p className="mt-2 text-sm text-slate-600">Copie o modelo e use no WhatsApp.</p>
                        </div>
                        <Button
                          variant="ghost"
                          type="button"
                          onClick={() => handleCopy(item.exemplo, item.id)}
                          className="gap-2"
                        >
                          <Copy className="h-4 w-4" />
                          Copiar Snippet
                        </Button>
                      </div>
                      <pre className="overflow-x-auto rounded-3xl bg-slate-100 px-4 py-4 text-sm leading-6 text-slate-900 font-mono">
                        {item.exemplo}
                      </pre>
                      {copiedId === item.id ? (
                        <p className="mt-3 text-sm font-semibold text-emerald-700">Snippet copiado!</p>
                      ) : null}
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
