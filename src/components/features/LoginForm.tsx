"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Toast } from "@/components/ui/Toast";
import { useAuthStore } from "@/store/useAuthStore";
import { LogIn } from "lucide-react";

export function LoginForm() {
  const router = useRouter();
  const login = useAuthStore((state) => state.login);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toastActive, setToastActive] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = login(email, password);
    if (!response.success) {
      setError(response.message);
      return;
    }

    setError("");
    setToastActive(true);
    window.setTimeout(() => setToastActive(false), 1400);
    router.push("/mensagens");
  };

  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
      <div className="mb-8 flex items-center gap-3">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-950 text-white">
          <LogIn className="h-6 w-6" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Entrada</p>
          <h2 className="text-xl font-semibold text-slate-950">Use suas credenciais</h2>
        </div>
      </div>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-900">E-mail de acesso</label>
          <Input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="seu@exemplo.com"
            required
            className="text-base"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-900">Senha</label>
          <Input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="••••••••"
            required
            className="text-base"
          />
        </div>

        {error ? <p className="rounded-3xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-600">{error}</p> : null}

        <Button type="submit" className="w-full text-base">Entrar no AppZap</Button>
      </form>

      <p className="mt-6 text-center text-sm text-slate-600">
        Não tem conta?{' '}
        <Link href="/cadastro" className="font-semibold text-emerald-700 hover:text-emerald-900">
          Crie uma agora
        </Link>
      </p>

      <Toast message="Login realizado com sucesso" active={toastActive} />
    </div>
  );
}
