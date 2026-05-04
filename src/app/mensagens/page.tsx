import Link from "next/link";
import { ArrowRight, Layers3 } from "lucide-react";
import { MessageCard } from "@/components/features/MessageCard";
import { messagesDB } from "@/data/messagesDB";
import { getCategoryBySlug, messageCategories } from "@/data/messageCategories";

export const metadata = {
  title: "Mensagens | AppZap",
};

type MensagensPageProps = {
  searchParams?: Promise<{
    categoria?: string;
  }>;
};

export default async function MensagensPage({ searchParams }: MensagensPageProps) {
  const params = await searchParams;
  const selectedCategory = getCategoryBySlug(params?.categoria);
  const visibleMessages = selectedCategory
    ? messagesDB.filter((message) => message.category === selectedCategory.name)
    : messagesDB;

  const title = selectedCategory ? selectedCategory.name : "Todas as mensagens";
  const description = selectedCategory
    ? selectedCategory.description
    : "Escolha uma categoria no submenu de Mensagens para focar em um tipo de conversa.";

  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-xl bg-emerald-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
              <Layers3 className="h-4 w-4" />
              Banco de templates
            </div>
            <h1 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              {title}
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">{description}</p>
            <Link
              href="/perfil"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              Configurar variáveis
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Exibindo</p>
              <p className="mt-2 text-3xl font-semibold text-slate-950">{visibleMessages.length}</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Total</p>
              <p className="mt-2 text-3xl font-semibold text-slate-950">{messagesDB.length}</p>
            </div>
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">Categorias</p>
              <p className="mt-2 text-3xl font-semibold text-emerald-950">{messageCategories.length}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 xl:grid-cols-2">
        {visibleMessages.map((message) => (
          <MessageCard key={message.id} message={message} />
        ))}
      </section>
    </div>
  );
}
