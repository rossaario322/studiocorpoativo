import { Service, Review, StudioInfo, PromoOption } from '../types';

export const CLINIC_INFO: StudioInfo = {
  name: "Studio Corpo Ativo",
  fullName: "Studio Corpo Ativo - Pilates e Fisioterapia",
  tagline: "Disposição e qualidade de vida com atendimento humanizado",
  address: {
    street: "Rua Joaquim Amaral",
    number: "276",
    neighborhood: "Jardim das Américas",
    city: "Curitiba",
    state: "PR",
    zipCode: "81530-430",
    plusCode: "GQ M8+VQ Jardim das Américas, Curitiba - PR",
    fullFormatted: "Rua Joaquim Amaral, 276 - Jardim das Américas, Curitiba - PR, 81530-430"
  },
  phones: {
    mainWhatsApp: "(41) 98803-1567",
    mapsPhone: "(41) 99114-1471",
    alternatePhone: "(41) 99277-8526"
  },
  social: {
    instagramHandle: "@studio__corpoativo",
    instagramUrl: "https://www.instagram.com/studio__corpoativo/",
    googleMapsUrl: "https://www.google.com/maps/place/Studio+Corpo+Ativo+-+Pilates+e+Fisioterapia/@-25.4650502,-49.2326013,342m/data=!3m1!1e3!4m6!3m5!1s0x94dce5cc8256125f:0xb2a5c80791d56848!8m2!3d-25.4652634!4d-49.2330925!16s%2Fg%2F11rcrhs562?entry=ttu&g_ep=EgoyMDI2MDgwOS4wIKXMDSoASAFQAw%3D%3D"
  },
  googleRating: {
    score: 5.0,
    totalReviews: 7
  },
  colors: {
    primary: "#0d7a75",
    secondary: "#14b8a6"
  }
};

export const SERVICES: Service[] = [
  {
    id: "pilates-equipamentos",
    title: "Pilates de Equipamentos",
    subtitle: "Aparelhos Específicos & Exercícios Guiados",
    description: "Método de exercícios físicos em aparelhos específicos de alta qualidade (Metalife) para fortalecer o corpo, melhorar flexibilidade, postura e consciência corporal.",
    details: [
      "Aulas individuais ou em grupo",
      "Aulas preparadas individualmente conforme a necessidade de cada aluno",
      "Aparelhos limpos, aconchegantes e bem conservados",
      "Opções de frequência: 1x, 2x ou 3x por semana"
    ],
    equipmentOrTools: ["Cadillac", "Reformer", "Step Chair", "Ladder Barrel", "Bola Tonificadora"],
    iconName: "Activity"
  },
  {
    id: "pilates-solo",
    title: "Pilates de Solo",
    subtitle: "Fortalecimento & Acessórios",
    description: "Exercícios no solo utilizando o próprio peso do corpo e acessórios específicos para promover o fortalecimento do core, flexibilidade e equilíbrio.",
    details: [
      "Praticado no solo com apoio de acessórios",
      "Foco no controle corporal, respiração e postura",
      "Acompanhamento atencioso e personalizado"
    ],
    equipmentOrTools: ["Bola Tonificadora", "Acessórios de Solo"],
    iconName: "UserCheck"
  },
  {
    id: "fisioterapia",
    title: "Fisioterapia",
    subtitle: "Atendimento Humanizado & Reabilitação",
    description: "Tratamento fisioterapêutico focado na reabilitação, alívio de dores (como dores no joelho e coluna) e recuperação da mobilidade e bem-estar.",
    details: [
      "Atendimento humanizado e focado nas queixas específicas do paciente",
      "Avaliação e acompanhamento contínuo",
      "Ajuda no alívio de dores articulares e musculares"
    ],
    iconName: "HeartPulse"
  },
  {
    id: "liberacao-miofascial",
    title: "Liberação Miofascial",
    subtitle: "Alívio de Tensões & Recuperação",
    description: "Técnica preventiva e terapêutica voltada para soltar e relaxar a fáscia muscular, aliviando dores e rigidez corporal.",
    details: [
      "Alívio de pontos de tensão e nós musculares",
      "Melhora na mobilidade e circulação",
      "Combinado conforme a necessidade do praticante/paciente"
    ],
    equipmentOrTools: ["Ventosa", "Bandagem Elástica"],
    iconName: "Sparkles"
  },
  {
    id: "laserterapia",
    title: "Laserterapia",
    subtitle: "Tecnologia para Modulação e Dor",
    description: "Aplicação terapêutica de laser para auxílio nos processos de regeneração tecidual e alívio da dor.",
    details: [
      "Aplicação localizada e indolor",
      "Auxilia na modulação de processos inflamatórios",
      "Tratamento complementar de alta eficácia"
    ],
    iconName: "Zap"
  },
  {
    id: "palmilha-postural",
    title: "Palmilha Postural",
    subtitle: "Lançamento em Breve no Studio",
    description: "Serviço planejado para integração futura no studio para correção e suporte postural dos pés e pisada.",
    details: [
      "Serviço planejado para em breve no Studio Corpo Ativo",
      "Focado em alinhamento biomecânico e conforto postural"
    ],
    iconName: "Footprints",
    isUpcoming: true
  }
];

export const PROMOTION_INFO: PromoOption = {
  title: "Promoção de 10% de Desconto",
  description: "Desconto especial de 10% nas mensalidades para o Plano Trimestral ou para grupos familiares praticando no mesmo horário.",
  discountPercentage: 10,
  conditions: [
    "Aplica-se ao contratar o Plano Trimestral (em qualquer frequência: 1x, 2x ou 3x por semana)",
    "OU no Plano Familiar quando 2 ou mais pessoas da mesma família praticam no mesmo horário",
    "Garante 10% de desconto nas mensalidades correspondentes"
  ]
};

export const GOOGLE_REVIEWS: Review[] = [
  {
    id: "review-1",
    author: "Aline Camargo",
    role: "Local Guide",
    rating: 5,
    timeAgo: "Avaliação no Google",
    text: "Melhor Studio de Pilates da vida! Prof. Bianca muito atenciosa e profissional, prepara as aulas individualmente para a necessidade de cada aluno, isso é um diferencial e tanto! Amo minhas aulas.",
    ownerReply: "Obrigada pelo carinho e pela confiança Aline!!"
  },
  {
    id: "review-2",
    author: "Carolina Mondadori",
    role: "Aluna",
    rating: 5,
    timeAgo: "Avaliação no Google",
    text: "Melhor pilates, melhor prof! Eu amo demais! Faço aula com a Bia! Me ajudou mto nas dores do meu joelho!",
    ownerReply: "Obrigada pelo carinho e pela confiança Carol!!"
  },
  {
    id: "review-3",
    author: "Mari Coutinho",
    role: "Local Guide",
    rating: 5,
    timeAgo: "Avaliação no Google",
    text: "Prof. Bianca é super atenciosa. O atendimento é excelente! Equipamentos bem conservados e espaço aconchegante e limpo.",
    ownerReply: "Oi Mari!!! Obrigada pelo carinho e pela confiança!"
  }
];

export const INSTAGRAM_HIGHLIGHTS = [
  {
    id: "post-cadillac",
    title: "Conheça o Cadillac",
    category: "Equipamento",
    caption: "Aparelho clássico do Pilates para treino de força, flexibilidade e mobilidade articular com total segurança."
  },
  {
    id: "post-reformer",
    title: "Conheça o Reformer",
    category: "Equipamento",
    caption: "Exercícios fluidos com resistência de molas para fortalecimento muscular consciente e postura."
  },
  {
    id: "post-bola",
    title: "Bola Tonificadora",
    category: "Acessórios",
    caption: "Acessório indispensável para ganho de tônus, coordenação e controle do core nas aulas de Pilates."
  },
  {
    id: "post-para-todos",
    title: "Pilates para Todos",
    category: "Atendimento",
    caption: "Aulas individuais ou em grupo com atenção humanizada adaptada para cada faixa etária e objetivo."
  }
];
