import { RegisterForm } from "@/components/features/RegisterForm";
import Link from "next/link";
import { Zap, Users, TrendingUp } from "lucide-react";

export const metadata = {
  title: "Cadastro | AppZap",
};

export default function CadastroPage() {
  return (
    <div className="space-y-8">
      <section className="overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-emerald-600 to-teal-700 p-8 text-white shadow-2xl shadow-emerald-300/20 sm:p-12">
        <div className="space-y-6">
          <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-white/80">
            Comece agora
          </span>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Seus clientes vão amar receber mensagens melhores.
          </h1>
          <p className="max-w-2xl text-base leading-8 text-emerald-100 sm:text-lg">
            Crie sua conta em 2 minutos e tenha acesso a mais de 30 templates, Academia AppZap e variáveis personalizadas.
          </p>
        </div>
      </section>

      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <section className="space-y-4">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-3xl bg-emerald-100 text-emerald-700">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-slate-950">Rápido e simples</h3>
            </div>
            <p className="text-sm text-slate-600">Cadastro feito em segundos. Sem surpresas, sem complexidade.</p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-3xl bg-emerald-100 text-emerald-700">
                <Users className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-slate-950">Comunidade ativa</h3>
            </div>
            <p className="text-sm text-slate-600">Mais de 500 empreendedores já vendem melhor com AppZap.</p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-3xl bg-emerald-100 text-emerald-700">
                <TrendingUp className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-slate-950">Resultados reais</h3>
            </div>
            <p className="text-sm text-slate-600">Clientes reportam +30% em conversões após usar templates.</p>
          </div>

          <div className="rounded-[2rem] border border-emerald-200 bg-emerald-50 p-5">
            <p className="text-sm font-semibold text-emerald-900">Já tem conta?</p>
            <p className="mt-2 text-sm text-emerald-700">
              Acesse seu painel com suas credenciais.
            </p>
            <Link href="/login" className="mt-4 inline-flex rounded-full bg-emerald-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-emerald-700">
              Fazer login →
            </Link>
          </div>
        </section>

        <RegisterForm />
      </div>
    </div>
  );
}
