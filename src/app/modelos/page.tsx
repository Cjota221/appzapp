"use client";

import { FormEvent, useState } from "react";
import { useAppStore } from "@/store/useAppStore";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function ModelosPage() {
  const { models, addModel } = useAppStore();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSave = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!title.trim() || !content.trim()) return;

    addModel({
      id: `${Date.now()}`,
      title: title.trim(),
      content: content.trim(),
      createdAt: Date.now(),
    });

    setTitle("");
    setContent("");
  };

  return (
    <div className="space-y-6">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm uppercase tracking-[0.3em] text-emerald-700">Modelos</p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-950">Seus modelos personalizados</h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
          Crie novos modelos do zero e salve no navegador para reutilizar sempre que quiser.
        </p>
      </div>

      <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <form className="grid gap-4" onSubmit={handleSave}>
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-900">Título do modelo</label>
            <Input
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Ex: Follow-up rápido"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-900">Conteúdo</label>
            <textarea
              value={content}
              onChange={(event) => setContent(event.target.value)}
              rows={6}
              className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
              placeholder="Escreva o modelo com variáveis como {nome}, {link} ou {pix}"
            />
          </div>
          <Button type="submit">Salvar modelo</Button>
        </form>
      </section>

      <div className="grid gap-4">
        {models.length === 0 ? (
          <div className="rounded-[2rem] border border-dashed border-slate-300 bg-slate-50 p-8 text-slate-600">
            Você ainda não tem modelos salvos. Crie seu primeiro modelo agora.
          </div>
        ) : (
          models.map((model) => (
            <article key={model.id} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold text-slate-950">{model.title}</h2>
                  <p className="mt-2 text-sm text-slate-500">Criado em {new Date(model.createdAt).toLocaleDateString("pt-BR")}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-600">{model.content}</p>
            </article>
          ))
        )}
      </div>
    </div>
  );
}
