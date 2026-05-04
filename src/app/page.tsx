import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Copy,
  Infinity,
  Layers3,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";
import { messagesDB } from "@/data/messagesDB";

const outcomes = [
  "Responder clientes sem travar na hora de escrever",
  "Usar mensagens prontas para cada etapa da venda",
  "Personalizar com nome, loja, link e PIX automaticamente",
  "Treinar o atendimento com métodos simples de venda",
];

const productPillars = [
  {
    title: "Templates por intenção",
    description: "Abertura, atendimento, vendas, promoções, follow-up, logística e relacionamento.",
    icon: Layers3,
  },
  {
    title: "Mensagens automáticas",
    description: "Modelos específicos para saudação e ausência no WhatsApp Business.",
    icon: MessageCircle,
  },
  {
    title: "Academia AppZap",
    description: "Métodos de venda aplicáveis para deixar cada conversa mais estratégica.",
    icon: Sparkles,
  },
];

const offerItems = [
  "30 templates prontos para WhatsApp",
  "Categorias organizadas por contexto de conversa",
  "Mensagens de saudação e ausência",
  "Variáveis automáticas de perfil",
  "Modelos editáveis e reutilizáveis",
  "Academia com métodos de vendas",
  "Acesso vitalício ao conteúdo atual",
];

const faqItems = [
  {
    question: "É mensalidade?",
    answer: "Não. O acesso é vitalício por pagamento único de R$ 59,90.",
  },
  {
    question: "Preciso saber vender?",
    answer: "Não. O AppZap entrega modelos prontos e orientações para você adaptar ao seu atendimento.",
  },
  {
    question: "Funciona com WhatsApp comum?",
    answer: "Os templates podem ser usados em qualquer WhatsApp. As mensagens de saudação e ausência são recursos do WhatsApp Business.",
  },
];

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#f4f7f5] text-slate-950">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Image
            src="/appzap-logo.png"
            alt="AppZap"
            width={150}
            height={90}
            className="h-auto w-[112px] object-contain brightness-0 invert"
            priority
          />
          <nav className="flex items-center gap-3">
            <Link
              href="/login"
              className="hidden rounded-xl border border-white/15 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10 sm:inline-flex"
            >
              Entrar
            </Link>
            <Link
              href="/cadastro"
              className="inline-flex items-center rounded-xl bg-emerald-400 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
            >
              Garantir acesso
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden bg-slate-950 text-white">
        <Image
          src="/fivon appzap.png"
          alt=""
          width={520}
          height={520}
          className="pointer-events-none absolute right-[-120px] top-10 hidden w-[460px] opacity-10 lg:block"
          priority
        />
        <div className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-xl border border-emerald-300/25 bg-emerald-300/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">
              <Zap className="h-4 w-4" />
              Acesso vitalício por R$ 59,90
            </div>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Pare de improvisar no WhatsApp. Responda com mensagens que vendem.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              O AppZap é um painel com templates, respostas automáticas e métodos de venda para transformar conversas soltas em atendimentos mais rápidos, claros e persuasivos.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/cadastro"
                className="inline-flex items-center justify-center rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-xl shadow-emerald-950/30 transition hover:bg-emerald-300"
              >
                Quero meu acesso vitalício
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/login"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Já tenho acesso
              </Link>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {outcomes.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
                  <p className="text-sm leading-6 text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="relative z-10 rounded-3xl border border-white/10 bg-white p-4 text-slate-950 shadow-2xl shadow-black/30">
            <div className="rounded-2xl bg-[#f4f7f5] p-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">AppZap ao vivo</p>
                  <h2 className="mt-2 text-xl font-semibold">Mensagem pronta</h2>
                </div>
                <span className="rounded-xl bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white">1 clique</span>
              </div>

              <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Recuperação de carrinho</p>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Oi {"{nome}"}, vi que seu pedido ficou quase pronto. Quer que eu te ajude a finalizar agora pelo link {"{link}"}?
                </p>
                <div className="mt-4 flex gap-2">
                  <span className="inline-flex items-center gap-1 rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">
                    <Copy className="h-3.5 w-3.5" />
                    Copiar
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-lg bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                    <MessageCircle className="h-3.5 w-3.5" />
                    Enviar
                  </span>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="rounded-xl bg-white p-3 shadow-sm">
                  <p className="text-xs font-semibold text-slate-400">Templates</p>
                  <p className="mt-1 text-2xl font-semibold">{messagesDB.length}</p>
                </div>
                <div className="rounded-xl bg-white p-3 shadow-sm">
                  <p className="text-xs font-semibold text-slate-400">Categorias</p>
                  <p className="mt-1 text-2xl font-semibold">10</p>
                </div>
                <div className="rounded-xl bg-emerald-600 p-3 text-white shadow-sm">
                  <p className="text-xs font-semibold text-emerald-100">Acesso</p>
                  <Infinity className="mt-1 h-7 w-7" />
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-2xl bg-slate-950 p-5 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">Oferta de lançamento</p>
              <div className="mt-3 flex items-end gap-2">
                <span className="text-2xl font-semibold">R$</span>
                <span className="text-6xl font-semibold tracking-tight">59,90</span>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-300">Pagamento único. Acesso vitalício.</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-8 sm:px-6 lg:grid-cols-4 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Preço</p>
            <p className="mt-2 text-3xl font-semibold">R$ 59,90</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Acesso</p>
            <p className="mt-2 text-3xl font-semibold">Vitalício</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Templates</p>
            <p className="mt-2 text-3xl font-semibold">{messagesDB.length}</p>
          </div>
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">Uso</p>
            <p className="mt-2 text-3xl font-semibold text-emerald-950">Imediato</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">O problema</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Toda venda perdida por mensagem ruim parece pequena. Até virar rotina.
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Cliente chama, pergunta preço, some. Você tenta responder rápido, mas improvisa. O AppZap resolve isso com textos prontos, tom profissional e um caminho claro para avançar a conversa.
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {productPillars.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">O que você recebe</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Um kit completo para atender, vender e voltar a falar com o cliente.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              A proposta é simples: abrir o AppZap, escolher o contexto da conversa, copiar ou enviar a mensagem e manter o atendimento fluindo.
            </p>
            <Link
              href="/cadastro"
              className="mt-7 inline-flex items-center rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
            >
              Começar por R$ 59,90
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {offerItems.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
                <p className="text-sm leading-6 text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">Para quem é</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Feito para quem vende pelo WhatsApp e precisa parecer mais preparado.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Lojas pequenas", "Para responder com padrão mesmo sem equipe grande."],
              ["Infoprodutores", "Para conduzir leads sem depender de improviso."],
              ["Prestadores", "Para explicar oferta, preço e próximos passos."],
              ["Atendentes", "Para ganhar velocidade sem perder naturalidade."],
            ].map(([title, description]) => (
              <article key={title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <Star className="h-5 w-5 text-emerald-600" />
                <h3 className="mt-4 font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">Perguntas rápidas</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">Sem enrolação antes de entrar.</h2>
            <div className="mt-6 space-y-3">
              {faqItems.map((item) => (
                <article key={item.question} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <h3 className="font-semibold">{item.question}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="rounded-3xl bg-emerald-600 p-6 text-white shadow-xl shadow-emerald-200">
            <ShieldCheck className="h-10 w-10" />
            <h2 className="mt-5 text-3xl font-semibold">Entre hoje e deixe suas respostas prontas.</h2>
            <p className="mt-4 text-sm leading-7 text-emerald-50">
              Por R$ 59,90, você ganha acesso vitalício ao painel atual do AppZap e começa a usar os templates imediatamente.
            </p>
            <Link
              href="/cadastro"
              className="mt-7 inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50"
            >
              Garantir acesso vitalício
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </aside>
        </div>
      </section>
    </main>
  );
}
