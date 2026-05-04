"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, ClipboardList, Clock3, Home, MessageCircle, User } from "lucide-react";
import { messageCategories } from "@/data/messageCategories";

const navItems = [
  { href: "/", label: "Dashboard", icon: Home },
  { href: "/saudacao", label: "Saudação", icon: MessageCircle },
  { href: "/ausencia", label: "Ausência", icon: Clock3 },
  { href: "/academia", label: "Academia", icon: BookOpen },
  { href: "/perfil", label: "Perfil", icon: User },
];

export function Sidebar() {
  const pathname = usePathname();
  const messagesActive = pathname === "/mensagens";

  return (
    <aside className="sticky top-0 hidden h-screen w-80 shrink-0 flex-col border-r border-slate-200 bg-slate-50 px-5 py-5 lg:flex">
      <div className="rounded-2xl border border-slate-200 bg-white px-5 py-6 shadow-sm">
        <Image
          src="/appzap-logo.png"
          alt="AppZap"
          width={190}
          height={114}
          className="mx-auto h-auto w-[150px] object-contain"
          priority
        />
      </div>

      <nav className="mt-5 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
        <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
          Navegação
        </p>

        {navItems.slice(0, 3).map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`group relative flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-emerald-200 ${
                active
                  ? "bg-emerald-50 text-emerald-800 ring-1 ring-emerald-200"
                  : "text-slate-700 hover:bg-slate-50 hover:text-slate-950"
              }`}
            >
              <span
                className={`inline-flex h-10 w-10 items-center justify-center rounded-xl transition ${
                  active
                    ? "bg-emerald-600 text-white shadow-sm shadow-emerald-200"
                    : "bg-slate-100 text-slate-500 group-hover:bg-white group-hover:text-emerald-700"
                }`}
              >
                <Icon className="h-5 w-5" />
              </span>
              {item.label}
            </Link>
          );
        })}

        <div className="mt-1">
          <Link
            href="/mensagens"
            className={`group flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-emerald-200 ${
              messagesActive
                ? "bg-emerald-50 text-emerald-800 ring-1 ring-emerald-200"
                : "text-slate-700 hover:bg-slate-50 hover:text-slate-950"
            }`}
          >
            <span
              className={`inline-flex h-10 w-10 items-center justify-center rounded-xl transition ${
                messagesActive
                  ? "bg-emerald-600 text-white shadow-sm shadow-emerald-200"
                  : "bg-slate-100 text-slate-500 group-hover:bg-white group-hover:text-emerald-700"
              }`}
            >
              <ClipboardList className="h-5 w-5" />
            </span>
            Mensagens
          </Link>

          {messagesActive ? (
            <div className="ml-5 mt-2 border-l border-slate-200 pl-4">
              <Link
                href="/mensagens"
                className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-950"
              >
                Todos
              </Link>
              {messageCategories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/mensagens?categoria=${category.slug}`}
                  className="mt-1 flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-950"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          ) : null}
        </div>

        {navItems.slice(3).map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`group relative flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-emerald-200 ${
                active
                  ? "bg-emerald-50 text-emerald-800 ring-1 ring-emerald-200"
                  : "text-slate-700 hover:bg-slate-50 hover:text-slate-950"
              }`}
            >
              <span
                className={`inline-flex h-10 w-10 items-center justify-center rounded-xl transition ${
                  active
                    ? "bg-emerald-600 text-white shadow-sm shadow-emerald-200"
                    : "bg-slate-100 text-slate-500 group-hover:bg-white group-hover:text-emerald-700"
                }`}
              >
                <Icon className="h-5 w-5" />
              </span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-5 rounded-2xl border border-emerald-100 bg-emerald-50 p-5 shadow-sm">
        <p className="text-sm font-semibold text-emerald-950">Pronto para vender</p>
        <p className="mt-2 text-sm leading-6 text-emerald-800">
          Configure seu perfil uma vez e use variáveis em todos os templates.
        </p>
        <Link
          href="/perfil"
          className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
        >
          Revisar perfil
        </Link>
      </div>
    </aside>
  );
}
