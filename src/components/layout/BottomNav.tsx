"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, ClipboardList, Clock3, Home, MessageCircle, User } from "lucide-react";

const navItems = [
  { href: "/", label: "Início", icon: Home },
  { href: "/saudacao", label: "Saudação", icon: MessageCircle },
  { href: "/ausencia", label: "Ausência", icon: Clock3 },
  { href: "/mensagens", label: "Mensagens", icon: ClipboardList },
  { href: "/academia", label: "Academia", icon: BookOpen },
  { href: "/perfil", label: "Perfil", icon: User },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white px-2 py-2 shadow-[0_-1px_20px_rgba(15,23,42,0.04)] lg:hidden">
      <div className="mx-auto grid max-w-4xl grid-cols-6 gap-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`inline-flex min-h-14 flex-col items-center justify-center rounded-xl px-1.5 py-2 text-[10px] font-medium transition ${
                active
                  ? "bg-emerald-50 text-emerald-700"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="mt-1 max-w-full truncate">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
