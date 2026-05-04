"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Toast } from "@/components/ui/Toast";
import { useAuthStore } from "@/store/useAuthStore";

export function RegisterForm() {
  const router = useRouter();
  const registerUser = useAuthStore((state) => state.registerUser);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [toastActive, setToastActive] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("As senhas não conferem.");
      return;
    }

    const response = registerUser({
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      password,
    });

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
      <form className="grid gap-5" onSubmit={handleSubmit}>
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-900">Nome completo</label>
          <Input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Seu nome completo"
            required
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-900">E-mail</label>
          <Input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="seu@exemplo.com"
            required
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-900">Telefone</label>
          <Input
            type="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            placeholder="(00) 00000-0000"
            required
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
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-900">Confirmar senha</label>
          <Input
            type="password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            placeholder="••••••••"
            required
          />
        </div>

        <Button type="submit">Criar conta</Button>
      </form>
      {error ? <p className="mt-4 text-sm font-semibold text-red-600">{error}</p> : null}
      <p className="mt-5 text-sm text-slate-600">
        Já tem conta?{' '}
        <Link href="/login" className="font-semibold text-emerald-700 hover:text-emerald-900">
          Faça login
        </Link>
      </p>
      <Toast message="Cadastro realizado com sucesso" active={toastActive} />
    </div>
  );
}
