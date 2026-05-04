"use client";

import { useMemo, useState } from "react";
import { Heart, MessageSquare, Send, Sparkles } from "lucide-react";
import { fillTemplate } from "@/utils/textParser";
import { useAppStore } from "@/store/useAppStore";
import { Button } from "@/components/ui/Button";
import { EditMessageModal } from "@/components/features/EditMessageModal";
import { Toast } from "@/components/ui/Toast";
import type { MessageItem } from "@/data/messagesDB";

export function MessageCard({ message }: { message: MessageItem }) {
  const { profile, favorites, toggleFavorite, addModel } = useAppStore();
  const [isOpen, setIsOpen] = useState(false);
  const [toastActive, setToastActive] = useState(false);

  const isFavorite = favorites.includes(message.id);
  const previewText = useMemo(() => fillTemplate(message.content, profile), [message.content, profile]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(previewText);
    setToastActive(true);
    window.setTimeout(() => setToastActive(false), 1200);
  };

  const handleSend = () => {
    const encoded = encodeURIComponent(previewText);
    window.open(`https://wa.me/?text=${encoded}`, "_blank");
  };

  const handleSaveModel = (payload: { title: string; content: string }) => {
    addModel({
      id: `${Date.now()}`,
      title: payload.title,
      content: payload.content,
      createdAt: Date.now(),
    });
  };

  return (
    <article className="group rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{message.category}</p>
          <h3 className="mt-2 text-lg font-semibold text-slate-950">{message.title}</h3>
        </div>
        <button
          type="button"
          onClick={() => toggleFavorite(message.id)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-3xl border border-slate-200 text-emerald-600 transition hover:bg-emerald-50"
          aria-label="Favoritar"
        >
          <Heart
            className="h-5 w-5"
            fill={isFavorite ? "currentColor" : "none"}
            strokeWidth={2.2}
          />
        </button>
      </div>

      <div className="mb-6 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-slate-700">
        {previewText}
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Button variant="secondary" onClick={handleCopy} type="button">
          <MessageSquare className="mr-2 h-4 w-4" /> Copiar
        </Button>
        <Button variant="ghost" onClick={() => setIsOpen(true)} type="button">
          <Sparkles className="mr-2 h-4 w-4" /> Editar
        </Button>
        <Button variant="primary" onClick={handleSend} type="button">
          <Send className="mr-2 h-4 w-4" /> Enviar
        </Button>
      </div>

      <EditMessageModal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        initialText={previewText}
        title={message.title}
        onSave={handleSaveModel}
      />
      <Toast message="Mensagem copiada" active={toastActive} />
    </article>
  );
}
