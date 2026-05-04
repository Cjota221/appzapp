import { LoginForm } from "@/components/features/LoginForm";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Login | AppZap",
};

export default function LoginPage() {
  return (
    <div className="space-y-8">
      <section className="overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-slate-950 to-slate-900 p-8 text-white shadow-2xl shadow-slate-950/20 sm:p-12">
        <div className="space-y-6">
          <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-white/80">
            Bem-vindo
          </span>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Acesse seu AppZap
          </h1>
          <p className="max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
            Entre com suas credenciais para acessar templates, configurar variáveis e usar toda a metodologia de vendas premium.
          </p>
        </div>
      </section>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <Image
              src="/appzap-logo.png"
              alt="AppZap"
              width={120}
              height={72}
              className="h-auto w-[96px] object-contain"
              priority
            />
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-600">AppZap</p>
              <p className="text-sm font-semibold text-slate-950">Seu painel WhatsApp</p>
            </div>
          </div>
          <h2 className="text-2xl font-semibold text-slate-950">Venda com eficácia</h2>
          <ul className="mt-6 space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-emerald-600 mt-1">✓</span>
              <span className="text-sm text-slate-700"><strong>Templates</strong> prontos para vender</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-600 mt-1">✓</span>
              <span className="text-sm text-slate-700"><strong>Variáveis</strong> preenchidas automaticamente</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-600 mt-1">✓</span>
              <span className="text-sm text-slate-700"><strong>Academia</strong> com 10 estratégias de vendas</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-600 mt-1">✓</span>
              <span className="text-sm text-slate-700"><strong>Painel</strong> organizado e simples</span>
            </li>
          </ul>
          <div className="mt-8 rounded-[1.75rem] border border-emerald-200 bg-emerald-50 p-5">
            <p className="text-sm font-semibold text-emerald-900">Primeira vez?</p>
            <p className="mt-2 text-sm text-emerald-700">
              Crie sua conta em segundos e comece a vender agora.
            </p>
            <Link href="/cadastro" className="mt-4 inline-flex rounded-full bg-emerald-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-emerald-700">
              Criar conta →
            </Link>
          </div>
        </section>

        <LoginForm />
      </div>
    </div>
  );
}
