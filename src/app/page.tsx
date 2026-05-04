import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Clock3,
  Infinity,
  Layers3,
  MessageCircle,
  Sparkles,
  Zap,
} from "lucide-react";
import { messagesDB } from "@/data/messagesDB";

const benefits = [
  "30 mensagens prontas para vender no WhatsApp",
  "Categorias para atendimento, vendas, promoção e follow-up",
  "Variáveis automáticas para nome, loja, link e PIX",
  "Academia AppZap com métodos de vendas aplicáveis",
  "Modelos editáveis para reaproveitar todos os dias",
  "Acesso vitalício por pagamento único",
];

const steps = [
  {
    title: "Configure seu perfil",
    description: "Preencha nome, loja, link e PIX uma única vez.",
    icon: BadgeCheck,
  },
  {
    title: "Escolha a mensagem",
    description: "Filtre por categoria e use o modelo certo para cada conversa.",
    icon: Layers3,
  },
  {
    title: "Envie no WhatsApp",
    description: "Copie ou abra o envio com a mensagem já personalizada.",
    icon: MessageCircle,
  },
];

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#f6f8f7] text-slate-950">
      <header className="border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Image
            src="/appzap-logo.png"
            alt="AppZap"
            width={150}
            height={90}
            className="h-auto w-[112px] object-contain"
            priority
          />
          <nav className="flex items-center gap-3">
            <Link
              href="/login"
              className="hidden rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 sm:inline-flex"
            >
              Entrar
            </Link>
            <Link
              href="/cadastro"
              className="inline-flex rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              Começar agora
            </Link>
          </nav>
        </div>
      </header>

      <section className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-xl bg-emerald-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
            <Sparkles className="h-4 w-4" />
            Acesso vitalício
          </div>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Venda melhor no WhatsApp com mensagens prontas e estratégicas.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            O AppZap reúne templates, variáveis automáticas e métodos de venda para você responder clientes com mais rapidez, clareza e confiança.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/cadastro"
              className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-200 transition hover:bg-emerald-700"
            >
              Garantir acesso por R$ 59,90
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/login"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
            >
              Já tenho acesso
            </Link>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Templates</p>
              <p className="mt-2 text-3xl font-semibold text-slate-950">{messagesDB.length}</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Categorias</p>
              <p className="mt-2 text-3xl font-semibold text-slate-950">10</p>
            </div>
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">Pagamento</p>
              <p className="mt-2 text-3xl font-semibold text-emerald-950">Único</p>
            </div>
          </div>
        </div>

        <aside className="rounded-3xl border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-200/60">
          <div className="rounded-2xl bg-slate-950 p-6 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">Oferta AppZap</p>
            <div className="mt-5 flex items-end gap-2">
              <span className="text-2xl font-semibold">R$</span>
              <span className="text-6xl font-semibold tracking-tight">59,90</span>
            </div>
            <p className="mt-4 inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-sm font-semibold text-emerald-100">
              <Infinity className="h-4 w-4" />
              Acesso vitalício
            </p>
          </div>

          <div className="mt-5 space-y-3">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-3 rounded-xl bg-slate-50 p-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                <p className="text-sm leading-6 text-slate-700">{benefit}</p>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-8 sm:px-6 lg:grid-cols-3 lg:px-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <article key={step.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                  <Icon className="h-5 w-5" />
                </span>
                <h2 className="mt-4 text-lg font-semibold text-slate-950">{step.title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
            <Zap className="h-5 w-5" />
          </div>
          <h2 className="mt-5 text-2xl font-semibold text-slate-950">Para quem é o AppZap?</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Para empreendedores, vendedores e atendentes que conversam pelo WhatsApp e querem parar de improvisar respostas importantes.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
            <Clock3 className="h-5 w-5" />
          </div>
          <h2 className="mt-5 text-2xl font-semibold text-slate-950">O ganho é velocidade com consistência.</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Em vez de escrever tudo do zero, você escolhe o contexto, ajusta se quiser e envia uma mensagem mais clara para o cliente.
          </p>
        </div>
      </section>
    </main>
  );
}
