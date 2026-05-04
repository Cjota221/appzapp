export type MessageItem = {
  id: string;
  title: string;
  category: string;
  content: string;
};

export const messagesDB: MessageItem[] = [
  {
    id: "1",
    title: "Bem-vindo ao AppZap",
    category: "Abertura",
    content: "Olá {nome}, aqui é {atendente} da {loja}. Vamos acelerar suas vendas com mensagens prontas e personalizadas?",
  },
  {
    id: "2",
    title: "Confirmação de Pedido",
    category: "Vendas",
    content: "Oi {nome}, seu pedido foi confirmado! Em breve enviaremos o link de pagamento: {link}.",
  },
  {
    id: "3",
    title: "Lembrete de Pagamento",
    category: "Follow-up",
    content: "Bom dia {nome}, tudo certo? Seu pagamento ainda está pendente. Use este PIX: {pix} para finalizar com prioridade.",
  },
  {
    id: "4",
    title: "Oferta Especial",
    category: "Promoção",
    content: "Aproveite hoje: desconto especial no produto que você pediu. Acesse: {link} e garanta sua vaga.",
  },
  {
    id: "5",
    title: "Agendamento",
    category: "Agenda",
    content: "Olá {nome}, gostaria de agendar nossa conversa para esta semana. Qual horário é melhor para você?",
  },
  {
    id: "6",
    title: "Confirmação de Visita",
    category: "Atendimento",
    content: "Olá {nome}, sua visita está confirmada para amanhã. Qualquer dúvida, responda por aqui.",
  },
  {
    id: "7",
    title: "Mensagem de Boas-vindas",
    category: "Abertura",
    content: "Olá {nome}, seja muito bem-vindo! {atendente} da {loja} está à disposição para ajudar você a escolher o melhor produto.",
  },
  {
    id: "8",
    title: "Entrega Programada",
    category: "Logística",
    content: "Seu pedido está a caminho, {nome}. Acompanhe o status pelo link: {link}. Obrigado pela confiança.",
  },
  {
    id: "9",
    title: "Promoção de Retenção",
    category: "Promoção",
    content: "{nome}, sentimos sua falta! Volte agora e ganhe 10% de desconto direto na {loja}.",
  },
  {
    id: "10",
    title: "Follow-up Pós-venda",
    category: "Atendimento",
    content: "Olá {nome}, tudo certo com sua compra? Se precisar de suporte rápido, responda por aqui.",
  },
  {
    id: "11",
    title: "Cobrança Amigável",
    category: "Vendas",
    content: "Oi {nome}, só lembrando que seu boleto vence em breve. Pague com PIX: {pix} e evite juros.",
  },
  {
    id: "12",
    title: "Nova Coleção",
    category: "Promoção",
    content: "Chegou a nova coleção! Veja os destaques e peça agora pelo link: {link}.",
  },
  {
    id: "13",
    title: "Confirmação de Reserva",
    category: "Agenda",
    content: "Sua reserva foi confirmada, {nome}. Enviarei o endereço completo assim que você confirmar o horário.",
  },
  {
    id: "14",
    title: "Convite VIP",
    category: "Marketing",
    content: "Oi {nome}, você está convidado para nossa oferta VIP. Aproveite antes que acabe: {link}.",
  },
  {
    id: "15",
    title: "Mensagem de Reativação",
    category: "Retenção",
    content: "Percebemos que você não finalizou a compra. Quer ajuda para concluir o pedido?",
  },
  {
    id: "16",
    title: "Atualização de Status",
    category: "Logística",
    content: "Seu pedido foi processado e estará pronto para envio hoje. Acompanhe pelo link: {link}.",
  },
  {
    id: "17",
    title: "Pedido de Feedback",
    category: "Atendimento",
    content: "{nome}, sua opinião é muito importante. Pode me dizer como foi sua experiência com o produto?",
  },
  {
    id: "18",
    title: "Mensagem de Boletim",
    category: "Marketing",
    content: "Novidades da semana: lançamentos, ofertas e temas para você vender mais. Confira em {link}.",
  },
  {
    id: "19",
    title: "Confirmação de Atendimento",
    category: "Atendimento",
    content: "Recebemos sua solicitação e iniciamos o atendimento. Em breve envio uma resposta completa.",
  },
  {
    id: "20",
    title: "Oferta Relâmpago",
    category: "Promoção",
    content: "Oferta relâmpago para quem abrir esta mensagem agora: acesse {link} e garanta seu desconto.",
  },
  {
    id: "21",
    title: "Agradecimento",
    category: "Relacionamento",
    content: "Muito obrigado pela sua confiança, {nome}. Se precisar, estou sempre por aqui.",
  },
  {
    id: "22",
    title: "Abertura de Conversa",
    category: "Atendimento",
    content: "Olá {nome}, como posso ajudar você hoje? Estou pronto para responder rapidinho.",
  },
  {
    id: "23",
    title: "Notificação de Promoção",
    category: "Marketing",
    content: "Promoção exclusiva para você: produtos selecionados com desconto no link {link}.",
  },
  {
    id: "24",
    title: "Recuperação de Carrinho",
    category: "Vendas",
    content: "{nome}, seu carrinho está quase completo. Precisa de ajuda para finalizar?",
  },
  {
    id: "25",
    title: "Mensagem de Confiança",
    category: "Relacionamento",
    content: "Estamos juntos na sua jornada. Qualquer dúvida, me chame e deixo tudo pronto para você.",
  },
  {
    id: "26",
    title: "Lembrete de Evento",
    category: "Agenda",
    content: "Lembrete: o evento está amanhã. Tudo pronto para você? Enviarei o link para participar em breve.",
  },
  {
    id: "27",
    title: "Comprovação de Pagamento",
    category: "Vendas",
    content: "Recebi seu comprovante. Muito obrigado, {nome}. Agora vamos finalizar seu pedido!",
  },
  {
    id: "28",
    title: "Oferta de Bônus",
    category: "Promoção",
    content: "Ganhe um brinde extra nesta compra. Confira as regras no link {link}.",
  },
  {
    id: "29",
    title: "Mensagem de Confirmação",
    category: "Atendimento",
    content: "Tudo certo, {nome}. Sua solicitação foi registrada e já estou cuidando disso para você.",
  },
  {
    id: "30",
    title: "Atualização de Oferta",
    category: "Marketing",
    content: "Novos planos e condições acabaram de chegar. Veja o que mudou em {link}.",
  },
];
