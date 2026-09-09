import { pick } from "./locale";

/**
 * Pricing. The three plan cards are kept from the original design; the fee
 * table underneath states the per-module, event-based fee model.
 *
 * Two things the QA review flagged and this file now fixes: the table mixed a
 * Paymates cash handling fee with a SIBA administration fee in one confusing
 * row, and "Everyday 4% / Business 5%" gave no clue what the percentage
 * applies to. Every row now names the event that triggers the charge, and
 * `feeNote` states plainly that the published schedule is the South African
 * one — rates and limits are set per country and per KYC tier.
 */

export const PRICING = pick({
  en: {
    title: "You pay when you earn",
    subtitle:
      "No terminals to buy. No monthly rental. No lock-in contract. Most eMa fees are only charged at the moment value changes hands.",
    feeTableHeaders: { module: "Module", when: "When the fee is charged" },
    feeNote:
      "The schedule above is the South African one. Rates, daily limits and balance caps are set per country and per KYC tier, and are confirmed to you before you transact.",
    plans: [
      {
        badge: "Everyday",
        badgeStyle: "bg-black/10 border border-black text-black",
        rate: "4%",
        rateSuffix: "per transaction",
        subtitle: "Personal essentials",
        description:
          "Simple everyday banking at an affordable rate. Handle all your personal transactions with ease.",
        features: ["Send money", "Cash withdrawals", "P2P transactions"],
        cta: "Choose Everyday",
        ctaStyle: "bg-black text-white",
      },
      {
        badge: "Be our partner",
        badgeStyle: "bg-blue-100 border border-blue-600 text-blue-600",
        rate: "White label",
        subtitle: "Partnership programme",
        description:
          "Power your business with our proven fintech platform — customise our technology under your own brand.",
        features: [
          "Full brand customisation",
          "Ready to deploy",
          "Full API access",
          "Real-time analytics",
          "Dedicated support",
        ],
        cta: "Contact us",
        ctaStyle: "bg-blue-700 text-white",
      },
      {
        badge: "Business",
        badgeStyle: "bg-amber-100 border border-amber-600 text-amber-700",
        rate: "5%",
        rateSuffix: "per transaction",
        subtitle: "Business solutions",
        description:
          "A complete commercial ecosystem built for growth — from point of sale to funding.",
        features: [
          "eMaPOS",
          "eMaMall",
          "eMaServe",
          "eMaFunding",
          "eMaSave",
          "eMaTuma",
        ],
        noteLabel: "Separate rates apply to:",
        note: "Paymates cash handling · 1.5–2%   /   SIBA administration · 15%",
        cta: "Choose Business",
        ctaStyle: "bg-amber-700 text-white",
      },
    ],
    fees: [
      { module: "eWallet — Everyday (personal)", when: "4% per transaction on everyday personal transactions" },
      { module: "Business plan", when: "5% per transaction across the business modules" },
      { module: "Paymates", when: "1.5–2% per cash-in or cash-out handled by the agent" },
      { module: "SIBA", when: "15% administration fee on the group's monthly disbursement" },
      { module: "eMaTuma", when: "When you confirm the cross-border transfer — a fraction of the 8–12% conventional market rate" },
      { module: "eMaPOS", when: "Monthly, auto-debited from your eMa account, calculated on your total orders" },
      { module: "eMaMall", when: "When buyer and seller both accept the offer" },
      { module: "eMaServe", when: "When the job is marked complete" },
      { module: "eMaSave", when: "When the strongbox starts, and on payout" },
      { module: "eMaFunding", when: "When the campaign is created" },
      { module: "eMaCargo · eMaClinic · eMaExpo · eMaCom", when: "Quoted per country and per service — ask us" },
      { module: "White label", when: "Contact us" },
    ],
  },
  ar: {
    title: "تدفع عندما تربح",
    subtitle:
      "لا أجهزة تشتريها. لا إيجار شهري. لا عقود مُلزِمة. معظم رسوم eMa تُحتسب فقط في اللحظة التي تنتقل فيها القيمة.",
    feeTableHeaders: { module: "الوحدة", when: "متى تُحتسب الرسوم" },
    feeNote:
      "الجدول أعلاه هو جدول جنوب أفريقيا. وتُحدَّد الأسعار والحدود اليومية والحد الأقصى للرصيد لكل دولة ولكل مستوى تحقّق من الهوية، وتُبلَّغ بها قبل إجراء أي معاملة.",
    plans: [
      {
        badge: "يومي",
        badgeStyle: "bg-black/10 border border-black text-black",
        rate: "4%",
        rateSuffix: "لكل معاملة",
        subtitle: "الخدمات الأساسية",
        description:
          "الخدمات المصرفية اليومية البسيطة بأسعار معقولة. تعامل مع جميع معاملاتك الشخصية بسهولة.",
        features: ["إرسال الأموال", "السحوبات النقدية", "تحويلات بين الأفراد"],
        cta: "اختر اليومي",
        ctaStyle: "bg-black text-white",
      },
      {
        badge: "كن شريكنا",
        badgeStyle: "bg-blue-100 border border-blue-600 text-blue-600",
        rate: "العلامة البيضاء",
        subtitle: "برنامج الشراكة",
        description:
          "عزز عملك بمنصة التكنولوجيا المالية المثبتة لدينا — خصص تقنيتنا تحت علامتك التجارية.",
        features: [
          "تخصيص كامل للعلامة التجارية",
          "جاهز للنشر",
          "وصول كامل لواجهة برمجة التطبيقات",
          "تحليلات في الوقت الفعلي",
          "دعم مخصص",
        ],
        cta: "اتصل بنا",
        ctaStyle: "bg-blue-700 text-white",
      },
      {
        badge: "الأعمال",
        badgeStyle: "bg-amber-100 border border-amber-600 text-amber-700",
        rate: "5%",
        rateSuffix: "لكل معاملة",
        subtitle: "حلول الأعمال",
        description:
          "نظام بيئي تجاري كامل مصمم للنمو — من نقاط البيع إلى حلول التمويل.",
        features: [
          "eMaPOS",
          "eMaMall",
          "eMaServe",
          "eMaFunding",
          "eMaSave",
          "eMaTuma",
        ],
        noteLabel: "تُطبَّق أسعار منفصلة على:",
        note: "التعامل النقدي عبر Paymates · 1.5–2%   /   رسوم إدارة SIBA · 15%",
        cta: "اختر الأعمال",
        ctaStyle: "bg-amber-700 text-white",
      },
    ],
    fees: [
      { module: "eWallet — الباقة اليومية (الأفراد)", when: "4% لكل معاملة على المعاملات الشخصية اليومية" },
      { module: "باقة الأعمال", when: "5% لكل معاملة عبر وحدات الأعمال" },
      { module: "Paymates", when: "1.5–2% لكل إيداع أو سحب نقدي ينفّذه الوكيل" },
      { module: "SIBA", when: "رسوم إدارية 15% على الصرف الشهري للمجموعة" },
      { module: "eMaTuma", when: "عند تأكيدك للتحويل عبر الحدود — بجزء من سعر السوق التقليدي البالغ 8–12%" },
      { module: "eMaPOS", when: "شهريًا، تُخصم تلقائيًا من حساب eMa، وتُحسب على إجمالي طلباتك" },
      { module: "eMaMall", when: "عندما يقبل المشتري والبائع العرض معًا" },
      { module: "eMaServe", when: "عند تسجيل إنجاز المهمة" },
      { module: "eMaSave", when: "عند بدء الصندوق، وعند الصرف" },
      { module: "eMaFunding", when: "عند إنشاء الحملة" },
      { module: "eMaCargo · eMaClinic · eMaExpo · eMaCom", when: "بعرض سعر لكل دولة ولكل خدمة — تواصل معنا" },
      { module: "العلامة البيضاء", when: "تواصل معنا" },
    ],
  },
  fr: {
    title: "Vous payez quand vous gagnez",
    subtitle:
      "Aucun terminal à acheter. Aucun loyer mensuel. Aucun engagement. La plupart des frais eMa ne s'appliquent qu'au moment où la valeur change de mains.",
    feeTableHeaders: { module: "Module", when: "Quand les frais s'appliquent" },
    feeNote:
      "La grille ci-dessus est celle de l'Afrique du Sud. Les taux, plafonds journaliers et plafonds de solde sont fixés par pays et par niveau de KYC, et vous sont confirmés avant toute transaction.",
    plans: [
      {
        badge: "Quotidien",
        badgeStyle: "bg-black/10 border border-black text-black",
        rate: "4 %",
        rateSuffix: "par transaction",
        subtitle: "L'essentiel au quotidien",
        description:
          "Des services bancaires simples à un tarif abordable. Gérez toutes vos opérations personnelles en toute simplicité.",
        features: ["Envoyer de l'argent", "Retraits d'espèces", "Transferts entre particuliers"],
        cta: "Choisir Quotidien",
        ctaStyle: "bg-black text-white",
      },
      {
        badge: "Devenez partenaire",
        badgeStyle: "bg-blue-100 border border-blue-600 text-blue-600",
        rate: "Marque blanche",
        subtitle: "Programme de partenariat",
        description:
          "Développez votre activité avec notre plateforme fintech éprouvée — personnalisez notre technologie sous votre propre marque.",
        features: [
          "Personnalisation complète de la marque",
          "Prêt à déployer",
          "Accès complet à l'API",
          "Analyses en temps réel",
          "Assistance dédiée",
        ],
        cta: "Nous contacter",
        ctaStyle: "bg-blue-700 text-white",
      },
      {
        badge: "Entreprise",
        badgeStyle: "bg-amber-100 border border-amber-600 text-amber-700",
        rate: "5 %",
        rateSuffix: "par transaction",
        subtitle: "Solutions professionnelles",
        description:
          "Un écosystème commercial complet conçu pour la croissance — du point de vente au financement.",
        features: [
          "eMaPOS",
          "eMaMall",
          "eMaServe",
          "eMaFunding",
          "eMaSave",
          "eMaTuma",
        ],
        noteLabel: "Des tarifs distincts s'appliquent à :",
        note: "Manipulation d'espèces Paymates · 1,5–2 %   /   Administration SIBA · 15 %",
        cta: "Choisir Entreprise",
        ctaStyle: "bg-amber-700 text-white",
      },
    ],
    fees: [
      { module: "eWallet — Quotidien (particuliers)", when: "4 % par transaction sur les opérations personnelles courantes" },
      { module: "Offre Entreprise", when: "5 % par transaction sur les modules professionnels" },
      { module: "Paymates", when: "1,5–2 % par dépôt ou retrait d'espèces traité par l'agent" },
      { module: "SIBA", when: "Frais d'administration de 15 % sur le versement mensuel du groupe" },
      { module: "eMaTuma", when: "À la confirmation du transfert transfrontalier — une fraction du taux marché habituel de 8–12 %" },
      { module: "eMaPOS", when: "Mensuellement, prélevé automatiquement sur votre compte eMa, calculé sur le total de vos commandes" },
      { module: "eMaMall", when: "Lorsque l'acheteur et le vendeur acceptent tous deux l'offre" },
      { module: "eMaServe", when: "Lorsque la mission est marquée comme terminée" },
      { module: "eMaSave", when: "Au démarrage du coffre, puis au versement" },
      { module: "eMaFunding", when: "À la création de la campagne" },
      { module: "eMaCargo · eMaClinic · eMaExpo · eMaCom", when: "Sur devis, par pays et par service — contactez-nous" },
      { module: "Marque blanche", when: "Nous contacter" },
    ],
  },
  pt: {
    title: "Paga quando ganha",
    subtitle:
      "Sem terminais para comprar. Sem renda mensal. Sem fidelização. A maioria das taxas eMa só é cobrada no momento em que o valor muda de mãos.",
    feeTableHeaders: { module: "Módulo", when: "Quando a taxa é cobrada" },
    feeNote:
      "A tabela acima é a da África do Sul. As taxas, os limites diários e os tetos de saldo são definidos por país e por nível de KYC, e são-lhe confirmados antes de transacionar.",
    plans: [
      {
        badge: "Diário",
        badgeStyle: "bg-black/10 border border-black text-black",
        rate: "4%",
        rateSuffix: "por transação",
        subtitle: "O essencial do dia a dia",
        description:
          "Serviços bancários simples a um preço acessível. Trate de todas as suas operações pessoais com facilidade.",
        features: ["Enviar dinheiro", "Levantamentos", "Transferências entre particulares"],
        cta: "Escolher Diário",
        ctaStyle: "bg-black text-white",
      },
      {
        badge: "Seja nosso parceiro",
        badgeStyle: "bg-blue-100 border border-blue-600 text-blue-600",
        rate: "Marca branca",
        subtitle: "Programa de parceria",
        description:
          "Impulsione o seu negócio com a nossa plataforma fintech comprovada — personalize a nossa tecnologia sob a sua própria marca.",
        features: [
          "Personalização total da marca",
          "Pronto a implementar",
          "Acesso completo à API",
          "Análises em tempo real",
          "Apoio dedicado",
        ],
        cta: "Fale connosco",
        ctaStyle: "bg-blue-700 text-white",
      },
      {
        badge: "Empresas",
        badgeStyle: "bg-amber-100 border border-amber-600 text-amber-700",
        rate: "5%",
        rateSuffix: "por transação",
        subtitle: "Soluções empresariais",
        description:
          "Um ecossistema comercial completo pensado para crescer — do ponto de venda ao financiamento.",
        features: [
          "eMaPOS",
          "eMaMall",
          "eMaServe",
          "eMaFunding",
          "eMaSave",
          "eMaTuma",
        ],
        noteLabel: "Aplicam-se taxas distintas a:",
        note: "Movimentação de numerário Paymates · 1,5–2%   /   Administração SIBA · 15%",
        cta: "Escolher Empresas",
        ctaStyle: "bg-amber-700 text-white",
      },
    ],
    fees: [
      { module: "eWallet — Diário (particulares)", when: "4% por transação nas operações pessoais do dia a dia" },
      { module: "Plano Empresas", when: "5% por transação nos módulos empresariais" },
      { module: "Paymates", when: "1,5–2% por depósito ou levantamento processado pelo agente" },
      { module: "SIBA", when: "Taxa de administração de 15% sobre o desembolso mensal do grupo" },
      { module: "eMaTuma", when: "Quando confirma a transferência além-fronteiras — uma fração da taxa de mercado convencional de 8–12%" },
      { module: "eMaPOS", when: "Mensalmente, debitado automaticamente da sua conta eMa, calculado sobre o total das suas encomendas" },
      { module: "eMaMall", when: "Quando comprador e vendedor aceitam a proposta" },
      { module: "eMaServe", when: "Quando o trabalho é dado como concluído" },
      { module: "eMaSave", when: "No arranque do cofre e no levantamento" },
      { module: "eMaFunding", when: "Na criação da campanha" },
      { module: "eMaCargo · eMaClinic · eMaExpo · eMaCom", when: "Orçamentado por país e por serviço — fale connosco" },
      { module: "Marca branca", when: "Fale connosco" },
    ],
  },
  es: {
    title: "Pagas cuando ganas",
    subtitle:
      "Sin terminales que comprar. Sin cuota mensual. Sin permanencia. La mayoría de las comisiones de eMa solo se cobran en el momento en que el valor cambia de manos.",
    feeTableHeaders: { module: "Módulo", when: "Cuándo se cobra la comisión" },
    feeNote:
      "La tabla anterior corresponde a Sudáfrica. Las tarifas, los límites diarios y los topes de saldo se fijan por país y por nivel de KYC, y se te confirman antes de operar.",
    plans: [
      {
        badge: "Diario",
        badgeStyle: "bg-black/10 border border-black text-black",
        rate: "4 %",
        rateSuffix: "por transacción",
        subtitle: "Lo esencial del día a día",
        description:
          "Servicios financieros sencillos a un precio asequible. Gestiona todas tus operaciones personales sin complicaciones.",
        features: ["Enviar dinero", "Retiradas de efectivo", "Transferencias entre particulares"],
        cta: "Elegir Diario",
        ctaStyle: "bg-black text-white",
      },
      {
        badge: "Sé nuestro socio",
        badgeStyle: "bg-blue-100 border border-blue-600 text-blue-600",
        rate: "Marca blanca",
        subtitle: "Programa de alianzas",
        description:
          "Impulsa tu negocio con nuestra plataforma fintech probada: personaliza nuestra tecnología bajo tu propia marca.",
        features: [
          "Personalización total de la marca",
          "Lista para desplegar",
          "Acceso completo a la API",
          "Analítica en tiempo real",
          "Soporte dedicado",
        ],
        cta: "Contáctanos",
        ctaStyle: "bg-blue-700 text-white",
      },
      {
        badge: "Empresas",
        badgeStyle: "bg-amber-100 border border-amber-600 text-amber-700",
        rate: "5 %",
        rateSuffix: "por transacción",
        subtitle: "Soluciones empresariales",
        description:
          "Un ecosistema comercial completo pensado para crecer: del punto de venta a la financiación.",
        features: [
          "eMaPOS",
          "eMaMall",
          "eMaServe",
          "eMaFunding",
          "eMaSave",
          "eMaTuma",
        ],
        noteLabel: "Se aplican tarifas distintas a:",
        note: "Manejo de efectivo Paymates · 1,5–2 %   /   Administración SIBA · 15 %",
        cta: "Elegir Empresas",
        ctaStyle: "bg-amber-700 text-white",
      },
    ],
    fees: [
      { module: "eWallet — Diario (particulares)", when: "4 % por transacción en las operaciones personales del día a día" },
      { module: "Plan Empresas", when: "5 % por transacción en los módulos empresariales" },
      { module: "Paymates", when: "1,5–2 % por cada ingreso o retirada de efectivo gestionado por el agente" },
      { module: "SIBA", when: "Comisión de administración del 15 % sobre el desembolso mensual del grupo" },
      { module: "eMaTuma", when: "Al confirmar la transferencia transfronteriza: una fracción de la tarifa de mercado habitual del 8–12 %" },
      { module: "eMaPOS", when: "Mensual, con cargo automático a tu cuenta eMa, calculado sobre el total de tus pedidos" },
      { module: "eMaMall", when: "Cuando comprador y vendedor aceptan la oferta" },
      { module: "eMaServe", when: "Cuando el trabajo se marca como completado" },
      { module: "eMaSave", when: "Al abrir la hucha y en el reparto" },
      { module: "eMaFunding", when: "Al crear la campaña" },
      { module: "eMaCargo · eMaClinic · eMaExpo · eMaCom", when: "Presupuestado por país y por servicio: consúltanos" },
      { module: "Marca blanca", when: "Contáctanos" },
    ],
  },
});

export default PRICING;
