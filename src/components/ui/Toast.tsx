"use client";

type ToastProps = {
  message: string;
  active: boolean;
};

export function Toast({ message, active }: ToastProps) {
  return active ? (
    <div className="fixed right-4 top-4 z-50 rounded-2xl border border-slate-200 bg-slate-950 px-4 py-3 text-sm text-white shadow-xl shadow-slate-900/10">
      {message}
    </div>
  ) : null;
}
