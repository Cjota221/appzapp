import { Clock3, Moon, Settings } from "lucide-react";
import { QuickMessageList } from "@/components/features/QuickMessageList";

export const metadata = {
  title: "Ausência | AppZap",
};

const awayMessages = [
  {
    title: "Fora do horário",
    description: "Para usar fora do expediente com retorno claro.",
    content:
      "Olá! No momento estamos fora do horário de atendimento. Nosso retorno acontece em breve no próximo período comercial. Deixe sua mensagem que vamos responder assim que possível.",
  },
  {
    title: "Ausência com horário definido",
    description: "Boa quando você quer informar exatamente quando volta.",
    content:
      "Oi! Obrigado por chamar a {loja}. Estamos ausentes agora e retornamos o atendimento às [horário]. Pode deixar sua dúvida por aqui que responderemos assim que voltarmos.",
  },
  {
    title: "Ausência com link",
    description: "Mantém o cliente ativo enquanto espera resposta.",
    content:
      "Olá! Estamos ausentes no momento, mas você pode consultar nossas opções por aqui: {link}. Assim que retornarmos, seguimos seu atendimento por esta conversa.",
  },
  {
    title: "Ausência em alta demanda",
    description: "Para dias com volume alto de mensagens.",
    content:
      "Olá! Estamos com um volume maior de atendimentos agora. Sua mensagem foi recebida e responderemos por ordem de chegada. Obrigado pela paciência.",
  },
];

const setupSteps = [
  "Abra o WhatsApp Business.",
  "Toque em Ferramentas comerciais.",
  "Entre em Mensagem de ausência.",
  "Ative Enviar mensagem de ausência.",
  "Cole a mensagem escolhida.",
  "Defina o horário: sempre, fora do horário comercial ou personalizado.",
  "Escolha os destinatários e toque em Salvar.",
];

export default function AusenciaPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-xl bg-emerald-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
            <Clock3 className="h-4 w-4" />
            Mensagem de ausência
          </div>
          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Respostas prontas para quando sua equipe não puder atender.
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            Use estas mensagens automáticas para alinhar expectativa, reduzir ansiedade do cliente e manter a conversa organizada fora do horário de atendimento.
          </p>
        </div>
      </section>

      <QuickMessageList messages={awayMessages} />

      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
            <Settings className="h-5 w-5" />
          </div>
          <h2 className="mt-4 text-xl font-semibold text-slate-950">Como configurar no WhatsApp</h2>
          <ol className="mt-5 space-y-3">
            {setupSteps.map((step, index) => (
              <li key={step} className="flex gap-3 text-sm leading-6 text-slate-700">
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-xs font-semibold text-white">
                  {index + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <aside className="rounded-2xl border border-slate-200 bg-slate-950 p-6 text-white shadow-sm">
          <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-emerald-200">
            <Moon className="h-5 w-5" />
          </div>
          <h2 className="mt-4 text-xl font-semibold">Dica de uso</h2>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            A mensagem de ausência não deve parecer abandono. Informe que a mensagem foi recebida, explique quando haverá retorno e, se possível, ofereça um link útil para o cliente consultar enquanto espera.
          </p>
        </aside>
      </section>
    </div>
  );
}
