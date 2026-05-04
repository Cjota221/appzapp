export type MessageCategory = {
  slug: string;
  name: string;
  description: string;
};

export const messageCategories: MessageCategory[] = [
  {
    slug: "abertura",
    name: "Abertura",
    description: "Primeiro contato, boas-vindas e início de conversa.",
  },
  {
    slug: "atendimento",
    name: "Atendimento",
    description: "Respostas para suporte, confirmação e relacionamento diário.",
  },
  {
    slug: "vendas",
    name: "Vendas",
    description: "Fechamento, cobrança, carrinho e confirmação de pedido.",
  },
  {
    slug: "promocao",
    name: "Promoção",
    description: "Ofertas, bônus, descontos e ações de urgência.",
  },
  {
    slug: "marketing",
    name: "Marketing",
    description: "Campanhas, novidades, convites e comunicação recorrente.",
  },
  {
    slug: "agenda",
    name: "Agenda",
    description: "Agendamentos, reservas, eventos e lembretes.",
  },
  {
    slug: "logistica",
    name: "Logística",
    description: "Entrega, status de pedido e acompanhamento.",
  },
  {
    slug: "follow-up",
    name: "Follow-up",
    description: "Retomadas rápidas para não deixar a venda esfriar.",
  },
  {
    slug: "retencao",
    name: "Retenção",
    description: "Reativação de clientes e recuperação de oportunidades.",
  },
  {
    slug: "relacionamento",
    name: "Relacionamento",
    description: "Confiança, agradecimento e vínculo com o cliente.",
  },
];

export function getCategoryBySlug(slug?: string) {
  return messageCategories.find((category) => category.slug === slug);
}
