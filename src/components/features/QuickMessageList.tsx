"use client";

import { useState } from "react";
import { Clipboard, Check } from "lucide-react";

type QuickMessage = {
  title: string;
  description: string;
  content: string;
};

type QuickMessageListProps = {
  messages: QuickMessage[];
};

export function QuickMessageList({ messages }: QuickMessageListProps) {
  const [copiedTitle, setCopiedTitle] = useState<string | null>(null);

  const handleCopy = async (message: QuickMessage) => {
    await navigator.clipboard.writeText(message.content);
    setCopiedTitle(message.title);
    window.setTimeout(() => setCopiedTitle(null), 1400);
  };

  return (
    <div className="grid gap-4 xl:grid-cols-2">
      {messages.map((message) => {
        const copied = copiedTitle === message.title;
        return (
          <article key={message.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-slate-950">{message.title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{message.description}</p>
              </div>
              <button
                type="button"
                onClick={() => handleCopy(message)}
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:bg-emerald-50 hover:text-emerald-700"
                aria-label={`Copiar ${message.title}`}
              >
                {copied ? <Check className="h-5 w-5" /> : <Clipboard className="h-5 w-5" />}
              </button>
            </div>
            <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-700">
              {message.content}
            </div>
          </article>
        );
      })}
    </div>
  );
}
