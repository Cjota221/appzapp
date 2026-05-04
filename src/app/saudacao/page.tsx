import { MessageCircle, Settings, UserRound } from "lucide-react";
import { QuickMessageList } from "@/components/features/QuickMessageList";

export const metadata = {
  title: "Saudação | AppZap",
};

const greetingMessages = [
  {
    title: "Boas-vindas direta",
    description: "Para responder automaticamente quando alguém chama pela primeira vez.",
    content:
      "Olá! Seja bem-vindo(a) à {loja}. Sou {atendente} e já vou te ajudar. Me conta rapidinho o que você procura hoje?",
  },
  {
    title: "Saudação com catálogo",
    description: "Boa para lojas que querem levar o cliente para o link principal.",
    content:
      "Oi! Que bom ter você aqui na {loja}. Para agilizar, você pode ver nossas opções neste link: {link}. Se preferir, me diga o que procura que eu te ajudo por aqui.",
  },
  {
    title: "Saudação consultiva",
    description: "Para iniciar a conversa com tom humano e vender com orientação.",
    content:
      "Olá! Obrigado por chamar a {loja}. Vou te orientar para escolher a melhor opção. Você está procurando algo para uso próprio, presente ou reposição?",
  },
  {
    title: "Saudação com prazo de resposta",
    description: "Alinha expectativa quando a equipe não responde instantaneamente.",
    content:
      "Olá! Recebemos sua mensagem. Nosso atendimento responde por ordem de chegada e já vamos falar com você. Enquanto isso, pode deixar aqui sua dúvida ou pedido.",
  },
];

const setupSteps = [
  "Abra o WhatsApp Business.",
  "Toque em Ferramentas comerciais.",
  "Entre em Mensagem de saudação.",
  "Ative Enviar mensagem de saudação.",
  "Cole a mensagem escolhida e ajuste as variáveis.",
  "Defina os destinatários e toque em Salvar.",
];

export default function SaudacaoPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-xl bg-emerald-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
            <MessageCircle className="h-4 w-4" />
            Mensagem de saudação
          </div>
          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Modelos prontos para receber clientes no WhatsApp.
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            Use estas mensagens na saudação automática do WhatsApp Business para dar boas-vindas, orientar o cliente e iniciar a conversa com clareza.
          </p>
        </div>
      </section>

      <QuickMessageList messages={greetingMessages} />

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

        <aside className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm">
          <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white text-emerald-700">
            <UserRound className="h-5 w-5" />
          </div>
          <h2 className="mt-4 text-xl font-semibold text-emerald-950">Dica de uso</h2>
          <p className="mt-3 text-sm leading-7 text-emerald-900">
            Evite mensagens frias demais. Uma boa saudação precisa confirmar que o cliente chegou no lugar certo e conduzir o próximo passo com uma pergunta simples.
          </p>
        </aside>
      </section>
    </div>
  );
}
