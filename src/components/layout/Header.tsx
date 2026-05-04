"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useAuthStore } from "@/store/useAuthStore";

type HeaderProps = {
  onMenuToggle?: () => void;
};

export function Header({ onMenuToggle }: HeaderProps) {
  const currentUserEmail = useAuthStore((state) => state.currentUserEmail);
  const firstName = currentUserEmail ? currentUserEmail.split("@")[0] : "Empreendedor";

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between gap-4 border-b border-slate-200 bg-white/95 px-4 py-3 shadow-sm shadow-slate-950/5 backdrop-blur sm:px-6 lg:px-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-600">Painel AppZap</p>
        <h1 className="mt-1 text-xl font-semibold text-slate-950 sm:text-2xl">Olá, {firstName}</h1>
        <p className="hidden text-sm text-slate-500 sm:block">Mensagens, modelos e método em um só lugar.</p>
      </div>

      <div className="flex items-center gap-3">
        {onMenuToggle ? (
          <button
            type="button"
            onClick={onMenuToggle}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition hover:bg-slate-100 lg:hidden"
            aria-label="Abrir menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        ) : null}

        <Link
          href="/mensagens"
          className="hidden rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700 sm:inline-flex"
        >
          Mensagens
        </Link>
        <Link
          href="/perfil"
          className="hidden rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 sm:inline-flex"
        >
          Perfil
        </Link>
      </div>
    </header>
  );
}
