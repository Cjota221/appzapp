"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Toast } from "@/components/ui/Toast";

type EditMessageModalProps = {
  initialText: string;
  title: string;
  open: boolean;
  onClose: () => void;
  onSave: (payload: { title: string; content: string }) => void;
};

export function EditMessageModal({
  initialText,
  title,
  open,
  onClose,
  onSave,
}: EditMessageModalProps) {
  const [text, setText] = useState(initialText);
  const [toastActive, setToastActive] = useState(false);

  const canSave = useMemo(() => text.trim().length > 0, [text]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setToastActive(true);
    window.setTimeout(() => setToastActive(false), 1200);
  };

  const handleSave = () => {
    if (!canSave) return;
    onSave({ title, content: text });
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4">
      <div className="w-full max-w-2xl rounded-[2rem] bg-white p-6 shadow-2xl shadow-slate-950/15">
        <div className="mb-5 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Editar mensagem</p>
            <h2 className="mt-2 text-xl font-semibold text-slate-950">{title}</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            Fechar
          </button>
        </div>

        <textarea
          value={text}
          onChange={(event) => setText(event.target.value)}
          rows={10}
          className="w-full rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
        />

        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-end">
          <Button variant="secondary" onClick={handleCopy} type="button" className="w-full sm:w-auto">
            Copiar
          </Button>
          <Button variant="primary" onClick={handleSave} type="button" className="w-full sm:w-auto" disabled={!canSave}>
            Salvar como novo modelo
          </Button>
        </div>
        <Toast message="Texto copiado" active={toastActive} />
      </div>
    </div>
  );
}
