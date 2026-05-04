export const metadata = {
  title: "Metodologia | AppZap",
};

const topics = [
  {
    title: "Atendimento humanizado",
    description:
      "Entenda como criar mensagens que gerem confiança, usando linguagem próxima e sentido de urgência sem perder a empatia.",
  },
  {
    title: "Segmentação de público",
    description:
      "Organize sua mensagem de acordo com o perfil do cliente e use variáveis para falar de forma mais relevante para cada grupo.",
  },
  {
    title: "Follow-up estratégico",
    description:
      "Saiba quando enviar lembretes, ofertas e confirmações para aumentar a chance de conversão sem ser invasivo.",
  },
  {
    title: "Estrutura de mensagens",
    description:
      "Aprenda a montar mensagens mais claras com abertura, proposta, benefício e call to action direto para o WhatsApp.",
  },
];

export default function MetodologiaPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm uppercase tracking-[0.3em] text-emerald-700">Metodologia</p>
        <h1 className="mt-4 text-3xl font-semibold text-slate-950">Mini curso de atendimento e vendas</h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">
          Navegue por dicas práticas para melhorar sua abordagem no WhatsApp e transformar conversas em vendas.
        </p>
      </section>

      <div className="grid gap-6 lg:grid-cols-2">
        {topics.map((topic) => (
          <article key={topic.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-950">{topic.title}</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">{topic.description}</p>
          </article>
        ))}
      </div>

      <section className="rounded-[2rem] border border-slate-200 bg-emerald-50 p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-emerald-900">Use sua metodologia no dia a dia</h2>
        <p className="mt-3 text-sm leading-7 text-emerald-950">
          Aplique cada etapa do mini curso para melhorar respostas, fazer follow-up com mais técnica e utilizar melhores gatilhos de conversão.
        </p>
      </section>
    </div>
  );
}
