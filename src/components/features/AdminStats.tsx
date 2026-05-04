type CardStatsProps = {
  label: string;
  value: string;
};

export function CardStats({ label, value }: CardStatsProps) {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{label}</p>
      <p className="mt-4 text-3xl font-semibold text-slate-950">{value}</p>
    </div>
  );
}
