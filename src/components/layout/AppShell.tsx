"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, ClipboardList, Clock3, Home, MessageCircle, User, X } from "lucide-react";
import { Sidebar } from "@/components/layout/Sidebar";
import { BottomNav } from "@/components/layout/BottomNav";
import { Header } from "@/components/layout/Header";
import { messageCategories } from "@/data/messageCategories";

const navItems = [
  { href: "/", label: "Início", icon: Home },
  { href: "/saudacao", label: "Saudação", icon: MessageCircle },
  { href: "/ausencia", label: "Ausência", icon: Clock3 },
  { href: "/academia", label: "Academia AppZap", icon: BookOpen },
  { href: "/perfil", label: "Perfil", icon: User },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() ?? "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const isLandingRoute = pathname === "/";
  const isAuthRoute = pathname.startsWith("/login") || pathname.startsWith("/cadastro");
  const isAdminRoute = pathname.startsWith("/admin");
  const messagesActive = pathname === "/mensagens";

  if (isLandingRoute) {
    return <div className="min-h-screen bg-white">{children}</div>;
  }

  if (isAuthRoute) {
    return (
      <div className="min-h-screen bg-slate-50 px-4 py-6 sm:px-6 lg:px-8">
        <main className="mx-auto w-full max-w-6xl">{children}</main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {isAdminRoute ? (
        <div className="min-h-screen">
          <Header />
          <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">{children}</main>
        </div>
      ) : (
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex min-h-screen flex-1 flex-col overflow-hidden">
            <Header onMenuToggle={() => setMenuOpen((value) => !value)} />
            <main className="mx-auto w-full max-w-7xl flex-1 overflow-y-auto px-4 py-6 pb-28 sm:px-6 lg:px-8">
              {children}
            </main>
            <BottomNav />
          </div>

          {menuOpen ? (
            <div className="fixed inset-0 z-50 flex items-stretch lg:hidden">
              <div className="absolute inset-0 bg-slate-950/50" onClick={() => setMenuOpen(false)} />
              <div className="relative z-10 h-full w-[300px] overflow-y-auto bg-white p-6 shadow-2xl">
                <div className="mb-8 flex items-center justify-between">
                  <Image
                    src="/appzap-logo.png"
                    alt="AppZap"
                    width={130}
                    height={78}
                    className="h-auto w-[104px] object-contain"
                    priority
                  />
                  <button
                    type="button"
                    onClick={() => setMenuOpen(false)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition hover:bg-slate-100"
                    aria-label="Fechar menu"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <nav className="space-y-2">
                  {navItems.slice(0, 3).map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                          pathname === item.href
                            ? "bg-emerald-50 text-emerald-700"
                            : "text-slate-700 hover:bg-emerald-50 hover:text-emerald-700"
                        }`}
                        onClick={() => setMenuOpen(false)}
                      >
                        <Icon className="h-5 w-5" />
                        {item.label}
                      </Link>
                    );
                  })}

                  <div>
                    <Link
                      href="/mensagens"
                      className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                        messagesActive
                          ? "bg-emerald-50 text-emerald-700"
                          : "text-slate-700 hover:bg-emerald-50 hover:text-emerald-700"
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      <ClipboardList className="h-5 w-5" />
                      Mensagens
                    </Link>

                    {messagesActive ? (
                      <div className="ml-5 mt-2 border-l border-slate-200 pl-4">
                        <Link
                          href="/mensagens"
                          className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-950"
                          onClick={() => setMenuOpen(false)}
                        >
                          Todos
                        </Link>
                        {messageCategories.map((category) => (
                          <Link
                            key={category.slug}
                            href={`/mensagens?categoria=${category.slug}`}
                            className="mt-1 block rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-950"
                            onClick={() => setMenuOpen(false)}
                          >
                            {category.name}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>

                  {navItems.slice(3).map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                          pathname === item.href
                            ? "bg-emerald-50 text-emerald-700"
                            : "text-slate-700 hover:bg-emerald-50 hover:text-emerald-700"
                        }`}
                        onClick={() => setMenuOpen(false)}
                      >
                        <Icon className="h-5 w-5" />
                        {item.label}
                      </Link>
                    );
                  })}
                </nav>
              </div>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}
