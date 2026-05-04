"use client";

import { FormEvent, useState } from "react";
import { useAppStore } from "@/store/useAppStore";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Check, Zap } from "lucide-react";

export default function PerfilPage() {
  const { profile, setProfile } = useAppStore();
  const [atendente, setAtendente] = useState(profile.atendente ?? "");
  const [loja, setLoja] = useState(profile.loja ?? "");
  const [link, setLink] = useState(profile.link ?? "");
  const [pix, setPix] = useState(profile.pix ?? "");
  const [saved, setSaved] = useState(false);

  const handleSave = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setProfile({
      atendente: atendente.trim() || "Seu nome",
      loja: loja.trim() || "Sua loja",
      link: link.trim() || "https://appzap.com",
      pix: pix.trim() || "0000 0000 0000 0000",
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-8">
      <section className="overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-slate-950 to-slate-900 p-8 text-white shadow-2xl shadow-slate-950/20 sm:p-12">
        <div className="space-y-6">
          <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-white/80">
            Seu Perfil
          </span>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Configure suas variáveis uma única vez.
          </h1>
          <p className="max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
            Preencha seu nome, loja, link e PIX aqui. Todas as mensagens vão usar essas informações automaticamente quando enviadas.
          </p>
        </div>
      </section>

      <div className="grid gap-8 lg:grid-cols-3">
        <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:col-span-2">
          <h2 className="text-2xl font-semibold text-slate-950">Informações principais</h2>
          <form className="mt-8 space-y-6" onSubmit={handleSave}>
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-900">Nome do atendente</label>
              <p className="mb-3 text-xs text-slate-500">Como você quer aparecer nas mensagens? Use seu primeiro nome ou apelido.</p>
              <Input
                value={atendente}
                onChange={(event) => setAtendente(event.target.value)}
                placeholder="Ex: Caroline"
                className="text-base"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-900">Nome da loja</label>
              <p className="mb-3 text-xs text-slate-500">Usado para personalizações em massa nas mensagens.</p>
              <Input
                value={loja}
                onChange={(event) => setLoja(event.target.value)}
                placeholder="Ex: Ateliê Bella"
                className="text-base"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-900">Link rápido</label>
              <p className="mb-3 text-xs text-slate-500">Link para seu produto, catálogo ou loja online.</p>
              <Input
                value={link}
                onChange={(event) => setLink(event.target.value)}
                placeholder="Ex: https://meulink.com"
                className="text-base"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-900">Chave PIX</label>
              <p className="mb-3 text-xs text-slate-500">Seu PIX para receber pagamentos (CPF, email ou telefone).</p>
              <Input
                value={pix}
                onChange={(event) => setPix(event.target.value)}
                placeholder="Ex: 0000 0000 0000 0000"
                className="text-base"
              />
            </div>

            <Button type="submit" className="w-full text-base">
              {saved ? (
                <>
                  <Check className="mr-2 h-5 w-5" /> Perfil salvo com sucesso!
                </>
              ) : (
                <>Salvar todas as variáveis</>
              )}
            </Button>
          </form>
        </section>

        <aside className="space-y-4">
          <div className="rounded-[2rem] border border-slate-200 bg-emerald-50 p-6">
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-emerald-600" />
              <p className="font-semibold text-emerald-900">Atalhos de variáveis</p>
            </div>
            <div className="mt-4 space-y-3 text-sm">
              <div>
                <p className="font-mono text-emerald-700">{"{nome}"}</p>
                <p className="text-slate-600">Nome do atendente</p>
              </div>
              <div>
                <p className="font-mono text-emerald-700">{"{loja}"}</p>
                <p className="text-slate-600">Nome da loja</p>
              </div>
              <div>
                <p className="font-mono text-emerald-700">{"{link}"}</p>
                <p className="text-slate-600">Link rápido</p>
              </div>
              <div>
                <p className="font-mono text-emerald-700">{"{pix}"}</p>
                <p className="text-slate-600">Sua chave PIX</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-slate-950">Quer adicionar mais variáveis?</p>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Fale conosco para customizar variáveis extras como código de desconto, cidade ou produto específico.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
