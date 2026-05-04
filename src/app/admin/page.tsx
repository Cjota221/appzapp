import { CardStats } from "@/components/features/AdminStats";

export const metadata = {
  title: "Admin | AppZap",
};

const stats = [
  { label: "Usuários ativos", value: "128" },
  { label: "Faturamento hoje", value: "R$ 0,00" },
  { label: "Acessos na semana", value: "430" },
  { label: "Modelos criados", value: "24" },
];

const users = [
  { name: "Ana Silva", email: "ana@exemplo.com", status: "Ativo" },
  { name: "Bruno Costa", email: "bruno@exemplo.com", status: "Ativo" },
  { name: "Carla Mendes", email: "carla@exemplo.com", status: "Inativo" },
];

export default function AdminPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm uppercase tracking-[0.3em] text-emerald-700">Administração</p>
        <h1 className="mt-4 text-3xl font-semibold text-slate-950">Painel administrativo</h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">
          Controle usuários, veja métricas iniciais e acompanhe a evolução do faturamento e dos acessos.
        </p>
      </section>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <CardStats key={item.label} label={item.label} value={item.value} />
        ))}
      </div>

      <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold text-slate-950">Usuários recentes</h2>
          <p className="text-sm text-slate-500">Visualize e gerencie novos cadastros</p>
        </div>

        <div className="mt-6 grid gap-4">
          {users.map((user) => (
            <div key={user.email} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <div className="flex flex-col gap-1">
                <p className="text-base font-semibold text-slate-950">{user.name}</p>
                <p className="text-sm text-slate-600">{user.email}</p>
              </div>
              <span className="mt-3 inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700">
                {user.status}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
