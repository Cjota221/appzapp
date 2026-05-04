"use client";

import { useMemo, useState } from "react";
import { MessageCard } from "@/components/features/MessageCard";
import type { MessageItem } from "@/data/messagesDB";

type CategoryDetail = {
  label: string;
  description: string;
};

type MessageCategoryBrowserProps = {
  messages: MessageItem[];
  categoryOrder: string[];
  categoryDetails: Record<string, CategoryDetail>;
};

const allCategory = "Todos";

export function MessageCategoryBrowser({
  messages,
  categoryOrder,
  categoryDetails,
}: MessageCategoryBrowserProps) {
  const [activeCategory, setActiveCategory] = useState(allCategory);

  const categories = useMemo(
    () => [
      {
        category: allCategory,
        details: {
          label: "Todos",
          description: "Todos os modelos disponíveis no AppZap.",
        },
        count: messages.length,
      },
      ...categoryOrder
        .map((category) => ({
          category,
          details: categoryDetails[category] ?? {
            label: category,
            description: "Modelos prontos para usar no WhatsApp.",
          },
          count: messages.filter((message) => message.category === category).length,
        }))
        .filter((item) => item.count > 0),
    ],
    [categoryDetails, categoryOrder, messages]
  );

  const activeDetails = categories.find((item) => item.category === activeCategory)?.details ?? categories[0].details;
  const visibleMessages =
    activeCategory === allCategory
      ? messages
      : messages.filter((message) => message.category === activeCategory);

  return (
    <section className="grid gap-6 lg:grid-cols-[260px_1fr]">
      <aside className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm lg:sticky lg:top-24 lg:self-start">
        <div className="lg:hidden">
          <label className="mb-2 block text-sm font-semibold text-slate-900">Categoria</label>
          <select
            value={activeCategory}
            onChange={(event) => setActiveCategory(event.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
          >
            {categories.map((item) => (
              <option key={item.category} value={item.category}>
                {item.details.label} ({item.count})
              </option>
            ))}
          </select>
        </div>

        <div className="hidden lg:block">
          <p className="px-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Categorias</p>
          <div className="mt-3 space-y-1">
            {categories.map((item) => {
              const active = activeCategory === item.category;
              return (
                <button
                  key={item.category}
                  type="button"
                  onClick={() => setActiveCategory(item.category)}
                  className={`flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-semibold transition ${
                    active
                      ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200"
                      : "text-slate-700 hover:bg-slate-50 hover:text-slate-950"
                  }`}
                >
                  <span>{item.details.label}</span>
                  <span className={`rounded-lg px-2 py-0.5 text-xs ${active ? "bg-white text-emerald-700" : "bg-slate-100 text-slate-500"}`}>
                    {item.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </aside>

      <div className="space-y-5">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
            {visibleMessages.length} {visibleMessages.length === 1 ? "modelo" : "modelos"}
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-950">{activeDetails.label}</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">{activeDetails.description}</p>
        </div>

        <div className="grid gap-4 xl:grid-cols-2">
          {visibleMessages.map((message) => (
            <MessageCard key={message.id} message={message} />
          ))}
        </div>
      </div>
    </section>
  );
}
