import { pick } from "./locale";

/**
 * Section copy for the home page.
 * One entry per section; components read from here instead of hardcoding text,
 * so a translation is an edit to this file rather than an edit to 18 JSX files.
 *
 * Figures and claims here are taken from "All about eMa" (the platform deck):
 * the COMESA Business Council partnership (21 member states, 580M people,
 * $900B+ combined GDP, MoU signed Feb 2026), the licensing footprint, and the
 * vision and mission wording. Country-specific limits are deliberately NOT
 * stated as absolutes — they vary by country and KYC tier.
 */

export const HERO = pick({
  en: {
    kicker: "eMa-CBC — the private-sector execution layer for COMESA",
    titleLead: "Everything your business needs.",
    titleAccent: "One account, 21 COMESA states.",
    subtitle:
      "eMa is the digital operating system for Africa's small and medium enterprises — and, as eMa-CBC, the execution arm of a signed COMESA Business Council partnership reaching 21 member states, 580 million people and over $900bn of combined GDP. Sell in your shop and online, take payments by QR or cash, restock, raise capital, save with your group, and trade across borders — all settling into one wallet, on one phone number.",
    primaryCta: "Start free",
    secondaryCta: "See the 14 modules",
    trustChips: [
      "Licensed in South Africa and eSwatini",
      "COMESA Business Council MoU",
      "Cash-in at any Paymate",
      "Android app · web access ready",
    ],
  },
  ar: {
    kicker: "eMa-CBC — الذراع التنفيذية للقطاع الخاص في الكوميسا",
    titleLead: "كل ما يحتاجه عملك.",
    titleAccent: "حساب واحد، و21 دولة في الكوميسا.",
    subtitle:
      "eMa هو النظام التشغيلي الرقمي للمشاريع الصغيرة والمتوسطة في أفريقيا — وهو، تحت اسم eMa-CBC، الذراع التنفيذية لشراكة موقّعة مع مجلس الأعمال للكوميسا تمتدّ إلى 21 دولة عضوًا و580 مليون نسمة وأكثر من 900 مليار دولار من الناتج المحلي المجمّع. بِع في متجرك وعلى الإنترنت، واقبض المدفوعات برمز QR أو نقدًا، وأعِد التخزين، واحصل على التمويل، وادّخر مع مجموعتك، وتاجر عبر الحدود — وكل ذلك يستقرّ في محفظة واحدة، على رقم هاتف واحد.",
    primaryCta: "ابدأ مجانًا",
    secondaryCta: "استعرض الوحدات الـ14",
    trustChips: [
      "مرخَّص في جنوب أفريقيا وإسواتيني",
      "مذكرة تفاهم مع مجلس الأعمال للكوميسا",
      "إيداع نقدي لدى أي وكيل Paymate",
      "تطبيق أندرويد · وجاهز للوصول عبر الويب",
    ],
  },
  fr: {
    kicker: "eMa-CBC — le bras d'exécution du secteur privé pour le COMESA",
    titleLead: "Tout ce dont votre entreprise a besoin.",
    titleAccent: "Un seul compte, 21 États du COMESA.",
    subtitle:
      "eMa est le système d'exploitation numérique des petites et moyennes entreprises africaines — et, sous le nom d'eMa-CBC, le bras d'exécution d'un partenariat signé avec le COMESA Business Council, couvrant 21 États membres, 580 millions d'habitants et plus de 900 milliards de dollars de PIB cumulé. Vendez en boutique et en ligne, encaissez par QR ou en espèces, réapprovisionnez, levez des fonds, épargnez en groupe et commercez au-delà des frontières — le tout sur un seul portefeuille, un seul numéro de téléphone.",
    primaryCta: "Commencer gratuitement",
    secondaryCta: "Voir les 14 modules",
    trustChips: [
      "Agréé en Afrique du Sud et en Eswatini",
      "Protocole d'accord avec le COMESA Business Council",
      "Dépôt d'espèces chez tout Paymate",
      "Application Android · accès web disponible",
    ],
  },
  pt: {
    kicker: "eMa-CBC — o braço de execução do setor privado para o COMESA",
    titleLead: "Tudo o que o seu negócio precisa.",
    titleAccent: "Uma só conta, 21 Estados do COMESA.",
    subtitle:
      "O eMa é o sistema operativo digital das pequenas e médias empresas africanas — e, sob o nome eMa-CBC, o braço de execução de uma parceria assinada com o COMESA Business Council, que abrange 21 Estados-membros, 580 milhões de pessoas e mais de 900 mil milhões de dólares de PIB combinado. Venda na loja e online, receba por QR ou em numerário, reponha stock, obtenha capital, poupe com o seu grupo e negoceie além-fronteiras — tudo a liquidar numa só carteira, num só número de telemóvel.",
    primaryCta: "Começar gratuitamente",
    secondaryCta: "Ver os 14 módulos",
    trustChips: [
      "Licenciado na África do Sul e em Essuatíni",
      "Memorando com o COMESA Business Council",
      "Depósito em numerário em qualquer Paymate",
      "Aplicação Android · acesso web disponível",
    ],
  },
  es: {
    kicker: "eMa-CBC — el brazo ejecutor del sector privado para el COMESA",
    titleLead: "Todo lo que tu negocio necesita.",
    titleAccent: "Una sola cuenta, 21 Estados del COMESA.",
    subtitle:
      "eMa es el sistema operativo digital de las pequeñas y medianas empresas africanas y, bajo el nombre eMa-CBC, el brazo ejecutor de una alianza firmada con el COMESA Business Council que alcanza 21 Estados miembros, 580 millones de personas y más de 900.000 millones de dólares de PIB combinado. Vende en tu tienda y en línea, cobra por QR o en efectivo, repón inventario, consigue capital, ahorra con tu grupo y comercia más allá de las fronteras: todo se liquida en una sola cartera, con un solo número de teléfono.",
    primaryCta: "Empieza gratis",
    secondaryCta: "Ver los 14 módulos",
    trustChips: [
      "Con licencia en Sudáfrica y Esuatini",
      "Memorando con el COMESA Business Council",
      "Ingreso de efectivo en cualquier Paymate",
      "Aplicación Android · acceso web disponible",
    ],
  },
});

export const PROBLEM = pick({
  en: {
    title: "Running a small business shouldn't take six apps",
    subtitle:
      "Most African SMEs stitch together tools that don't talk to each other. eMa replaces the stack with one account.",
    beforeLabel: "Without eMa",
    afterLabel: "With eMa",
    before: [
      "A card machine from the bank, a wallet from the telco, a loan from a lender who can't see your sales",
      "Cash takings that never become digital balance",
      "Stock counted on paper, sales counted in a notebook",
      "No trading history, so no credit — even after ten profitable years",
      "Cross-border payments that cost 8–12% and take days",
      "Reconciliation by hand, every single night",
    ],
    after: [
      "One balance behind every module — POS, marketplace, savings, loans",
      "Any Paymate turns cash into digital balance in seconds",
      "Stock, sales, cashiers and suppliers in one back office",
      "Your transaction history is your credit record",
      "Cross-border transfer in real time, at a fraction of the cost",
      "Reconciliation happens automatically, because it's one ledger",
    ],
  },
  ar: {
    title: "إدارة مشروع صغير لا ينبغي أن تتطلّب ستة تطبيقات",
    subtitle:
      "معظم المشاريع الصغيرة والمتوسطة في أفريقيا تجمع أدوات لا يتحدّث بعضها إلى بعض. eMa يستبدل هذه المنظومة بحساب واحد.",
    beforeLabel: "بدون eMa",
    afterLabel: "مع eMa",
    before: [
      "جهاز دفع من البنك، ومحفظة من شركة الاتصالات، وقرض من ممول لا يرى مبيعاتك",
      "متحصّلات نقدية لا تتحوّل أبدًا إلى رصيد رقمي",
      "مخزون يُحصى على الورق، ومبيعات تُسجَّل في دفتر",
      "لا سجل تجاري، وبالتالي لا تمويل — حتى بعد عشر سنوات من الربح",
      "مدفوعات عبر الحدود تكلّف 8–12% وتستغرق أيامًا",
      "تسوية حسابات يدوية، كل ليلة",
    ],
    after: [
      "رصيد واحد خلف كل وحدة — نقطة البيع، والسوق، والادّخار، والتمويل",
      "أي وكيل Paymate يحوّل النقد إلى رصيد رقمي في ثوانٍ",
      "المخزون والمبيعات والكاشيرات والموردون في لوحة تحكّم واحدة",
      "سجلّ معاملاتك هو سجلّك الائتماني",
      "تحويل عبر الحدود في الوقت الفعلي وبجزء من التكلفة",
      "التسوية تتمّ تلقائيًا، لأنه دفتر حسابات واحد",
    ],
  },
  fr: {
    title: "Gérer une petite entreprise ne devrait pas demander six applications",
    subtitle:
      "La plupart des PME africaines assemblent des outils qui ne se parlent pas. eMa remplace cet empilement par un seul compte.",
    beforeLabel: "Sans eMa",
    afterLabel: "Avec eMa",
    before: [
      "Un terminal de la banque, un portefeuille de l'opérateur, un prêt d'un organisme qui ne voit pas vos ventes",
      "Des recettes en espèces qui ne deviennent jamais un solde numérique",
      "Le stock compté sur papier, les ventes notées dans un cahier",
      "Aucun historique commercial, donc aucun crédit — même après dix ans de bénéfices",
      "Des paiements transfrontaliers à 8–12 % qui prennent des jours",
      "Un rapprochement des comptes à la main, tous les soirs",
    ],
    after: [
      "Un seul solde derrière chaque module — caisse, boutique en ligne, épargne, crédit",
      "N'importe quel Paymate transforme les espèces en solde numérique en quelques secondes",
      "Stock, ventes, caissiers et fournisseurs dans une seule interface",
      "Votre historique de transactions est votre historique de crédit",
      "Un transfert transfrontalier en temps réel, à une fraction du coût",
      "Le rapprochement se fait tout seul, puisqu'il n'y a qu'un seul registre",
    ],
  },
  pt: {
    title: "Gerir um pequeno negócio não devia exigir seis aplicações",
    subtitle:
      "A maioria das PME africanas junta ferramentas que não comunicam entre si. O eMa substitui esse conjunto por uma só conta.",
    beforeLabel: "Sem o eMa",
    afterLabel: "Com o eMa",
    before: [
      "Um terminal do banco, uma carteira do operador, um crédito de quem não vê as suas vendas",
      "Receitas em numerário que nunca se tornam saldo digital",
      "Stock contado em papel, vendas registadas num caderno",
      "Sem histórico comercial e, por isso, sem crédito — mesmo após dez anos de lucro",
      "Pagamentos além-fronteiras que custam 8–12% e demoram dias",
      "Reconciliação feita à mão, todas as noites",
    ],
    after: [
      "Um só saldo por trás de cada módulo — ponto de venda, mercado, poupança, crédito",
      "Qualquer Paymate transforma numerário em saldo digital em segundos",
      "Stock, vendas, operadores de caixa e fornecedores num só painel",
      "O seu histórico de transações é o seu histórico de crédito",
      "Transferência além-fronteiras em tempo real, por uma fração do custo",
      "A reconciliação acontece sozinha, porque é um só registo",
    ],
  },
  es: {
    title: "Llevar un pequeño negocio no debería exigir seis aplicaciones",
    subtitle:
      "La mayoría de las pymes africanas combinan herramientas que no se comunican entre sí. eMa sustituye ese conjunto por una sola cuenta.",
    beforeLabel: "Sin eMa",
    afterLabel: "Con eMa",
    before: [
      "Un datáfono del banco, una cartera de la operadora, un préstamo de quien no ve tus ventas",
      "Ingresos en efectivo que nunca llegan a ser saldo digital",
      "Inventario contado en papel, ventas anotadas en un cuaderno",
      "Sin historial comercial y, por tanto, sin crédito, incluso tras diez años rentables",
      "Pagos transfronterizos que cuestan entre el 8 % y el 12 % y tardan días",
      "Conciliación a mano, todas las noches",
    ],
    after: [
      "Un solo saldo detrás de cada módulo: punto de venta, mercado, ahorro, crédito",
      "Cualquier Paymate convierte el efectivo en saldo digital en segundos",
      "Inventario, ventas, cajeros y proveedores en un único panel",
      "Tu historial de transacciones es tu historial crediticio",
      "Transferencia transfronteriza en tiempo real, por una fracción del coste",
      "La conciliación ocurre sola, porque hay un único libro mayor",
    ],
  },
});

export const ARCHITECTURE = pick({
  en: {
    title: "One identity. One balance. Fourteen tools.",
    subtitle:
      "Every eMa module settles into the same wallet, under the same verified identity. That is what makes the platform interoperable — and what makes your business finally legible to lenders, partners and buyers.",
    layers: [
      {
        label: "Identity",
        title: "One verified phone number",
        detail: "KYC, OTP, geo-tagging.",
      },
      {
        label: "Balance",
        title: "One multi-currency eWallet",
        detail: "Load by card, EFT or Paymate.",
      },
      {
        label: "Money Stack",
        title: "Move, save, borrow, insure",
        detail: "Paymates · eMaTuma · SIBA · eMaSave · eMaFunding · Patele",
      },
      {
        label: "Business Stack",
        title: "Sell, serve, promote, ship",
        detail: "eMaPOS · eMaMall · eMaServe · eMaExpo · eMaCargo · eMaCom · eMaClinic",
      },
      {
        label: "Ledger",
        title: "One statement",
        detail:
          "Every transaction in every module lands in the same place, with regulator, admin and super-admin oversight.",
      },
    ],
  },
  ar: {
    title: "هوية واحدة. رصيد واحد. أربع عشرة أداة.",
    subtitle:
      "كل وحدة في eMa تستقرّ في المحفظة نفسها، تحت الهوية المُوثَّقة نفسها. هذا ما يجعل المنصّة متكاملة — وما يجعل عملك أخيرًا مقروءًا أمام المموّلين والشركاء والمشترين.",
    layers: [
      {
        label: "الهوية",
        title: "رقم هاتف واحد مُوثَّق",
        detail: "تحقّق KYC ورمز OTP وتحديد الموقع.",
      },
      {
        label: "الرصيد",
        title: "محفظة واحدة متعددة العملات",
        detail: "الشحن ببطاقة أو تحويل بنكي أو عبر وكيل Paymate.",
      },
      {
        label: "المنظومة المالية",
        title: "حرِّك أموالك، وادّخر، واقترض، وأمِّن",
        detail: "Paymates · eMaTuma · SIBA · eMaSave · eMaFunding · Patele",
      },
      {
        label: "المنظومة التجارية",
        title: "بِع، وقدِّم خدماتك، وروّج، واشحن",
        detail: "eMaPOS · eMaMall · eMaServe · eMaExpo · eMaCargo · eMaCom · eMaClinic",
      },
      {
        label: "دفتر الحسابات",
        title: "كشف حساب واحد",
        detail:
          "كل معاملة في كل وحدة تصل إلى المكان نفسه، مع إشراف على مستوى الجهة الرقابية والمشرف والمشرف العام.",
      },
    ],
  },
  fr: {
    title: "Une identité. Un solde. Quatorze outils.",
    subtitle:
      "Chaque module eMa se règle sur le même portefeuille, sous la même identité vérifiée. C'est ce qui rend la plateforme interopérable — et ce qui rend enfin votre entreprise lisible pour les prêteurs, les partenaires et les acheteurs.",
    layers: [
      {
        label: "Identité",
        title: "Un numéro de téléphone vérifié",
        detail: "KYC, code OTP, géolocalisation.",
      },
      {
        label: "Solde",
        title: "Un eWallet multidevise",
        detail: "Alimenté par carte, virement ou Paymate.",
      },
      {
        label: "Pôle financier",
        title: "Transférer, épargner, emprunter, assurer",
        detail: "Paymates · eMaTuma · SIBA · eMaSave · eMaFunding · Patele",
      },
      {
        label: "Pôle commercial",
        title: "Vendre, servir, promouvoir, expédier",
        detail: "eMaPOS · eMaMall · eMaServe · eMaExpo · eMaCargo · eMaCom · eMaClinic",
      },
      {
        label: "Registre",
        title: "Un seul relevé",
        detail:
          "Chaque transaction de chaque module arrive au même endroit, avec une supervision régulateur, admin et super-admin.",
      },
    ],
  },
  pt: {
    title: "Uma identidade. Um saldo. Catorze ferramentas.",
    subtitle:
      "Cada módulo eMa liquida na mesma carteira, sob a mesma identidade verificada. É isso que torna a plataforma interoperável — e o que finalmente torna o seu negócio legível para financiadores, parceiros e compradores.",
    layers: [
      {
        label: "Identidade",
        title: "Um número de telemóvel verificado",
        detail: "KYC, código OTP, geolocalização.",
      },
      {
        label: "Saldo",
        title: "Uma eWallet multimoeda",
        detail: "Carregada por cartão, transferência ou Paymate.",
      },
      {
        label: "Bloco financeiro",
        title: "Movimentar, poupar, financiar, segurar",
        detail: "Paymates · eMaTuma · SIBA · eMaSave · eMaFunding · Patele",
      },
      {
        label: "Bloco comercial",
        title: "Vender, servir, promover, expedir",
        detail: "eMaPOS · eMaMall · eMaServe · eMaExpo · eMaCargo · eMaCom · eMaClinic",
      },
      {
        label: "Registo",
        title: "Um só extrato",
        detail:
          "Cada transação de cada módulo chega ao mesmo sítio, com supervisão de regulador, administrador e super-administrador.",
      },
    ],
  },
  es: {
    title: "Una identidad. Un saldo. Catorce herramientas.",
    subtitle:
      "Cada módulo de eMa liquida en la misma cartera, bajo la misma identidad verificada. Eso es lo que hace interoperable a la plataforma, y lo que por fin hace legible tu negocio ante prestamistas, socios y compradores.",
    layers: [
      {
        label: "Identidad",
        title: "Un número de teléfono verificado",
        detail: "KYC, código OTP, geolocalización.",
      },
      {
        label: "Saldo",
        title: "Una eWallet multidivisa",
        detail: "Recarga con tarjeta, transferencia o Paymate.",
      },
      {
        label: "Bloque financiero",
        title: "Mover, ahorrar, financiar, asegurar",
        detail: "Paymates · eMaTuma · SIBA · eMaSave · eMaFunding · Patele",
      },
      {
        label: "Bloque comercial",
        title: "Vender, atender, promocionar, enviar",
        detail: "eMaPOS · eMaMall · eMaServe · eMaExpo · eMaCargo · eMaCom · eMaClinic",
      },
      {
        label: "Libro mayor",
        title: "Un solo extracto",
        detail:
          "Cada transacción de cada módulo llega al mismo sitio, con supervisión de regulador, administrador y superadministrador.",
      },
    ],
  },
});

export const DIFFERENCE = pick({
  en: {
    title: "The eMa difference",
    subtitle:
      "eMa-CBC — the private-sector execution layer for the COMESA Business Council",
    cards: [
      { value: "21", description: "COMESA member states in the eMa-CBC footprint" },
      { value: "580M", description: "people inside that single market" },
      { value: "$900B+", description: "combined GDP the partnership reaches" },
      { value: "14", description: "interoperable modules on one account" },
    ],
  },
  ar: {
    title: "فرق eMa",
    subtitle: "eMa-CBC — الذراع التنفيذية للقطاع الخاص لمجلس الأعمال للكوميسا",
    cards: [
      { value: "21", description: "دولة عضوًا في الكوميسا ضمن نطاق eMa-CBC" },
      { value: "580 مليون", description: "نسمة داخل هذه السوق الموحّدة" },
      { value: "900+ مليار $", description: "ناتج محلي مجمّع تصل إليه الشراكة" },
      { value: "14", description: "وحدة متكاملة على حساب واحد" },
    ],
  },
  fr: {
    title: "La différence eMa",
    subtitle:
      "eMa-CBC — le bras d'exécution du secteur privé pour le COMESA Business Council",
    cards: [
      { value: "21", description: "États membres du COMESA dans le périmètre eMa-CBC" },
      { value: "580 M", description: "d'habitants dans ce marché unique" },
      { value: "900 Md$+", description: "de PIB cumulé touché par le partenariat" },
      { value: "14", description: "modules interopérables sur un seul compte" },
    ],
  },
  pt: {
    title: "A diferença eMa",
    subtitle:
      "eMa-CBC — o braço de execução do setor privado para o COMESA Business Council",
    cards: [
      { value: "21", description: "Estados-membros do COMESA no perímetro eMa-CBC" },
      { value: "580M", description: "de pessoas dentro desse mercado único" },
      { value: "900 mil M$+", description: "de PIB combinado alcançado pela parceria" },
      { value: "14", description: "módulos interoperáveis numa só conta" },
    ],
  },
  es: {
    title: "La diferencia eMa",
    subtitle:
      "eMa-CBC: el brazo ejecutor del sector privado para el COMESA Business Council",
    cards: [
      { value: "21", description: "Estados miembros del COMESA en el alcance de eMa-CBC" },
      { value: "580 M", description: "de personas dentro de ese mercado único" },
      { value: "900.000 M$+", description: "de PIB combinado al que llega la alianza" },
      { value: "14", description: "módulos interoperables en una sola cuenta" },
    ],
  },
});

export const WHO_WE_ARE = pick({
  en: {
    title: "Who are we?",
    subtitle:
      "A mission-driven fintech creating transparent, inclusive growth for every entrepreneur — a Sobek Group platform, operated under licence by SobekIMF.",
    groupLine: [
      "Part of the",
      "Sobek Group",
      "— licensed in South Africa and eSwatini, present from Mauritius to Morocco, Botswana, Nigeria, Qatar and the USA.",
    ],
    badge: "Complete solution",
    missionLabel: "Our mission",
    mission:
      "To empower communities with ethical financial services — promoting transparency in e-commerce and fintech, supporting remote communities towards financial inclusion, and partnering to build wealth for all, across more than 14 innovative modules.",
    visionLabel: "Our vision",
    vision:
      "To be the leading pan-African digital financial services platform, promoting inclusive growth through trade and commerce: facilitating trade in Africa by developing SMEs, connecting buyers and sellers seamlessly, integrating digital payments and logistics and automating trade processes to cut costs; and driving financial inclusion through accessible banking, capital raising, mobile banking for the unbanked, microfinance for lower-income earners, cross-border remittances and crowdfunding.",
    buildersLabel: "Who builds it",
    builders:
      "eMalyami is a Sobek Group platform, operated under licence by SobekIMF (Pty) Ltd — eSwatini, with the technology built by Sobek IT (Pty) Ltd. Group companies span SOBEK Group (Pty) Ltd — Mauritius, SOBEK Holding, SOBEK, SOBEK IT and SOBEK IMF — South Africa, SE Maroc — Morocco, Sobek Engineering — Botswana, Sobek Consult — Nigeria, Sobek Partnership — Doha, Qatar, and Sobek Group LLC — Texas and Delaware, USA.",
  },
  ar: {
    title: "من نحن؟",
    subtitle:
      "شركة تكنولوجيا مالية قائمة على رسالة تخلق نموًا شفافًا وشاملاً لكل رائد أعمال — منصّة من مجموعة Sobek، تُشغَّل بترخيص من SobekIMF.",
    groupLine: [
      "جزء من",
      "مجموعة سوبك",
      "— مرخَّصة في جنوب أفريقيا وإسواتيني، وحاضرة من موريشيوس إلى المغرب وبوتسوانا ونيجيريا وقطر والولايات المتحدة.",
    ],
    badge: "حل شامل",
    missionLabel: "رسالتنا",
    mission:
      "تمكين المجتمعات بخدمات مالية أخلاقية — وتعزيز الشفافية في التجارة الإلكترونية والتكنولوجيا المالية، ودعم المجتمعات النائية نحو الشمول المالي، والشراكة في بناء الثروة للجميع، عبر أكثر من 14 وحدة مبتكرة.",
    visionLabel: "رؤيتنا",
    vision:
      "أن نكون المنصّة الرائدة للخدمات المالية الرقمية في عموم أفريقيا، ونعزّز النمو الشامل عبر التجارة والأعمال: بتيسير التجارة في أفريقيا من خلال تنمية المشاريع الصغيرة والمتوسطة، وربط المشترين بالبائعين بسلاسة، ودمج المدفوعات الرقمية والخدمات اللوجستية، وأتمتة العمليات التجارية لخفض التكاليف؛ وبدفع الشمول المالي عبر خدمات مصرفية ميسورة، وجمع رأس المال، والخدمات المصرفية عبر الهاتف لغير المتعاملين مع البنوك، والتمويل الأصغر لذوي الدخل المحدود، والتحويلات عبر الحدود، والتمويل الجماعي.",
    buildersLabel: "من يبنيها",
    builders:
      "eMalyami منصّة من مجموعة Sobek، تُشغَّل بترخيص من SobekIMF (Pty) Ltd — إسواتيني، وتقنيتها من بناء Sobek IT (Pty) Ltd. وتضمّ المجموعة SOBEK Group (Pty) Ltd — موريشيوس، وSOBEK Holding وSOBEK وSOBEK IT وSOBEK IMF — جنوب أفريقيا، وSE Maroc — المغرب، وSobek Engineering — بوتسوانا، وSobek Consult — نيجيريا، وSobek Partnership — الدوحة، قطر، وSobek Group LLC — تكساس وديلاوير، الولايات المتحدة.",
  },
  fr: {
    title: "Qui sommes-nous ?",
    subtitle:
      "Une fintech portée par une mission : une croissance transparente et inclusive pour chaque entrepreneur — une plateforme du groupe Sobek, exploitée sous licence par SobekIMF.",
    groupLine: [
      "Membre du",
      "groupe Sobek",
      "— agréé en Afrique du Sud et en Eswatini, présent de Maurice au Maroc, au Botswana, au Nigeria, au Qatar et aux États-Unis.",
    ],
    badge: "Solution complète",
    missionLabel: "Notre mission",
    mission:
      "Donner aux communautés des services financiers éthiques — promouvoir la transparence dans le e-commerce et la fintech, accompagner les communautés isolées vers l'inclusion financière et bâtir la richesse pour tous, à travers plus de 14 modules innovants.",
    visionLabel: "Notre vision",
    vision:
      "Être la première plateforme panafricaine de services financiers numériques, au service d'une croissance inclusive par le commerce : faciliter les échanges en Afrique en développant les PME, en connectant acheteurs et vendeurs sans friction, en intégrant paiements numériques et logistique et en automatisant les processus commerciaux pour réduire les coûts ; et porter l'inclusion financière par une banque accessible, la levée de capitaux, la banque mobile pour les non-bancarisés, le microcrédit pour les bas revenus, les transferts transfrontaliers et le financement participatif.",
    buildersLabel: "Qui la construit",
    builders:
      "eMalyami est une plateforme du groupe Sobek, exploitée sous licence par SobekIMF (Pty) Ltd — Eswatini, dont la technologie est développée par Sobek IT (Pty) Ltd. Le groupe réunit SOBEK Group (Pty) Ltd — Maurice, SOBEK Holding, SOBEK, SOBEK IT et SOBEK IMF — Afrique du Sud, SE Maroc — Maroc, Sobek Engineering — Botswana, Sobek Consult — Nigeria, Sobek Partnership — Doha, Qatar, et Sobek Group LLC — Texas et Delaware, États-Unis.",
  },
  pt: {
    title: "Quem somos?",
    subtitle:
      "Uma fintech movida por uma missão: crescimento transparente e inclusivo para cada empreendedor — uma plataforma do grupo Sobek, operada sob licença pela SobekIMF.",
    groupLine: [
      "Parte do",
      "grupo Sobek",
      "— licenciado na África do Sul e em Essuatíni, presente das Maurícias a Marrocos, Botsuana, Nigéria, Catar e EUA.",
    ],
    badge: "Solução completa",
    missionLabel: "A nossa missão",
    mission:
      "Capacitar comunidades com serviços financeiros éticos — promovendo transparência no comércio eletrónico e na fintech, apoiando comunidades remotas rumo à inclusão financeira e construindo riqueza para todos, através de mais de 14 módulos inovadores.",
    visionLabel: "A nossa visão",
    vision:
      "Ser a principal plataforma pan-africana de serviços financeiros digitais, promovendo crescimento inclusivo através do comércio: facilitando o comércio em África com o desenvolvimento das PME, ligando compradores e vendedores sem atritos, integrando pagamentos digitais e logística e automatizando processos comerciais para reduzir custos; e impulsionando a inclusão financeira com banca acessível, captação de capital, banca móvel para os não bancarizados, microfinanciamento para rendimentos baixos, remessas além-fronteiras e financiamento colaborativo.",
    buildersLabel: "Quem a constrói",
    builders:
      "O eMalyami é uma plataforma do grupo Sobek, operada sob licença pela SobekIMF (Pty) Ltd — Essuatíni, com tecnologia construída pela Sobek IT (Pty) Ltd. O grupo inclui SOBEK Group (Pty) Ltd — Maurícias, SOBEK Holding, SOBEK, SOBEK IT e SOBEK IMF — África do Sul, SE Maroc — Marrocos, Sobek Engineering — Botsuana, Sobek Consult — Nigéria, Sobek Partnership — Doha, Catar, e Sobek Group LLC — Texas e Delaware, EUA.",
  },
  es: {
    title: "¿Quiénes somos?",
    subtitle:
      "Una fintech con una misión: crecimiento transparente e inclusivo para cada emprendedor. Una plataforma del grupo Sobek, operada bajo licencia por SobekIMF.",
    groupLine: [
      "Parte del",
      "grupo Sobek",
      "— con licencia en Sudáfrica y Esuatini, presente desde Mauricio hasta Marruecos, Botsuana, Nigeria, Catar y EE. UU.",
    ],
    badge: "Solución completa",
    missionLabel: "Nuestra misión",
    mission:
      "Empoderar a las comunidades con servicios financieros éticos: promover la transparencia en el comercio electrónico y las finanzas digitales, acompañar a las comunidades remotas hacia la inclusión financiera y construir riqueza para todos, a través de más de 14 módulos innovadores.",
    visionLabel: "Nuestra visión",
    vision:
      "Ser la principal plataforma panafricana de servicios financieros digitales, impulsando un crecimiento inclusivo mediante el comercio: facilitar el comercio en África desarrollando las pymes, conectando compradores y vendedores sin fricciones, integrando pagos digitales y logística y automatizando los procesos comerciales para reducir costes; e impulsar la inclusión financiera con banca accesible, captación de capital, banca móvil para la población no bancarizada, microfinanzas para rentas bajas, remesas transfronterizas y financiación colectiva.",
    buildersLabel: "Quién la construye",
    builders:
      "eMalyami es una plataforma del grupo Sobek, operada bajo licencia por SobekIMF (Pty) Ltd — Esuatini, con tecnología desarrollada por Sobek IT (Pty) Ltd. El grupo reúne a SOBEK Group (Pty) Ltd — Mauricio, SOBEK Holding, SOBEK, SOBEK IT y SOBEK IMF — Sudáfrica, SE Maroc — Marruecos, Sobek Engineering — Botsuana, Sobek Consult — Nigeria, Sobek Partnership — Doha, Catar, y Sobek Group LLC — Texas y Delaware, EE. UU.",
  },
});

export const MONEY_STACK = pick({
  en: {
    title: "The Money Stack",
    subtitle:
      "Seven ways value moves in, around and out of your business — all settling into the same wallet.",
  },
  ar: {
    title: "المنظومة المالية",
    subtitle:
      "سبع طرق تتحرك بها الأموال داخل عملك وخارجه — وكلها تستقرّ في المحفظة نفسها.",
  },
  fr: {
    title: "Le pôle financier",
    subtitle:
      "Sept façons de faire circuler la valeur dans votre entreprise — toutes réglées sur le même portefeuille.",
  },
  pt: {
    title: "O bloco financeiro",
    subtitle:
      "Sete formas de o dinheiro entrar, circular e sair do seu negócio — todas a liquidar na mesma carteira.",
  },
  es: {
    title: "El bloque financiero",
    subtitle:
      "Siete formas de que el dinero entre, circule y salga de tu negocio, todas liquidando en la misma cartera.",
  },
});

export const BUSINESS_STACK = pick({
  en: {
    title: "The Business Stack",
    subtitle:
      "Everything you need to trade — in person, online, and across the continent.",
  },
  ar: {
    title: "المنظومة التجارية",
    subtitle: "كل ما تحتاجه للتجارة — وجهًا لوجه، وعبر الإنترنت، وعبر القارة.",
  },
  fr: {
    title: "Le pôle commercial",
    subtitle:
      "Tout ce qu'il faut pour commercer — en personne, en ligne et à travers le continent.",
  },
  pt: {
    title: "O bloco comercial",
    subtitle:
      "Tudo o que precisa para negociar — presencialmente, online e por todo o continente.",
  },
  es: {
    title: "El bloque comercial",
    subtitle:
      "Todo lo que necesitas para comerciar: en persona, en línea y por todo el continente.",
  },
});

export const PAYMATE_LOOP = pick({
  en: {
    title: "Your customers pay cash. That's fine.",
    subtitle:
      "The Paymates network is what connects a cash economy to a digital ledger — in both directions.",
    steps: [
      {
        title: "Cash in",
        detail:
          "A customer hands cash to any Paymate: a spaza shop, a service station, a trusted local trader. It becomes wallet balance in seconds.",
      },
      {
        title: "Transact",
        detail:
          "That balance now works across all 14 modules: buy stock, pay a supplier, contribute to your SIBA, send it across a border.",
      },
      {
        title: "Cash out",
        detail:
          "Need physical notes? Withdraw at any Paymate — no bank branch, no ATM, no card.",
      },
      {
        title: "Become one",
        detail:
          "Paymates earn on every transaction they handle. It's a business in itself.",
        cta: "Become a Paymate",
      },
    ],
  },
  ar: {
    title: "عملاؤك يدفعون نقدًا. لا مشكلة.",
    subtitle:
      "شبكة Paymates هي ما يربط الاقتصاد النقدي بالدفتر الرقمي — في الاتجاهين.",
    steps: [
      {
        title: "الإيداع النقدي",
        detail:
          "يسلّم العميل النقد لأي وكيل Paymate: متجر حي أو محطة خدمة أو تاجر محلي موثوق. فيتحوّل إلى رصيد في المحفظة خلال ثوانٍ.",
      },
      {
        title: "التعامل",
        detail:
          "هذا الرصيد يعمل الآن عبر الوحدات الأربع عشرة: اشترِ مخزونًا، وادفع لمورّد، وساهم في جمعيتك، وأرسله عبر الحدود.",
      },
      {
        title: "السحب النقدي",
        detail:
          "تحتاج أوراقًا نقدية؟ اسحب من أي وكيل Paymate — بلا فرع بنكي، وبلا صرّاف آلي، وبلا بطاقة.",
      },
      {
        title: "كن وكيلًا",
        detail:
          "وكلاء Paymates يربحون من كل معاملة ينفّذونها. إنه عمل قائم بذاته.",
        cta: "كن وكيل Paymate",
      },
    ],
  },
  fr: {
    title: "Vos clients paient en espèces. C'est très bien.",
    subtitle:
      "Le réseau Paymates est ce qui relie une économie de liquide à un registre numérique — dans les deux sens.",
    steps: [
      {
        title: "Dépôt d'espèces",
        detail:
          "Le client remet des espèces à n'importe quel Paymate : une échoppe de quartier, une station-service, un commerçant local de confiance. Elles deviennent un solde en quelques secondes.",
      },
      {
        title: "Transaction",
        detail:
          "Ce solde fonctionne désormais sur les 14 modules : acheter du stock, payer un fournisseur, cotiser à votre SIBA, l'envoyer à l'étranger.",
      },
      {
        title: "Retrait d'espèces",
        detail:
          "Besoin de billets ? Retirez chez n'importe quel Paymate — sans agence bancaire, sans distributeur, sans carte.",
      },
      {
        title: "Devenez-en un",
        detail:
          "Les Paymates gagnent sur chaque transaction qu'ils traitent. C'est une activité à part entière.",
        cta: "Devenir Paymate",
      },
    ],
  },
  pt: {
    title: "Os seus clientes pagam em numerário. Não há problema.",
    subtitle:
      "A rede Paymates é o que liga uma economia de numerário a um registo digital — nos dois sentidos.",
    steps: [
      {
        title: "Depósito em numerário",
        detail:
          "O cliente entrega numerário a qualquer Paymate: uma loja de bairro, uma estação de serviço, um comerciante local de confiança. Torna-se saldo em segundos.",
      },
      {
        title: "Transacionar",
        detail:
          "Esse saldo funciona agora nos 14 módulos: comprar stock, pagar a um fornecedor, contribuir para o seu SIBA, enviá-lo para outro país.",
      },
      {
        title: "Levantamento",
        detail:
          "Precisa de notas? Levante em qualquer Paymate — sem balcão bancário, sem multibanco, sem cartão.",
      },
      {
        title: "Torne-se um",
        detail:
          "Os Paymates ganham em cada transação que processam. É um negócio por si só.",
        cta: "Tornar-se Paymate",
      },
    ],
  },
  es: {
    title: "Tus clientes pagan en efectivo. No pasa nada.",
    subtitle:
      "La red Paymates es lo que conecta una economía de efectivo con un libro mayor digital, en ambos sentidos.",
    steps: [
      {
        title: "Ingreso de efectivo",
        detail:
          "El cliente entrega el efectivo a cualquier Paymate: una tienda de barrio, una gasolinera, un comerciante local de confianza. Se convierte en saldo de la cartera en segundos.",
      },
      {
        title: "Operar",
        detail:
          "Ese saldo funciona ya en los 14 módulos: comprar inventario, pagar a un proveedor, aportar a tu SIBA o enviarlo a otro país.",
      },
      {
        title: "Retirada de efectivo",
        detail:
          "¿Necesitas billetes? Retira en cualquier Paymate: sin sucursal bancaria, sin cajero, sin tarjeta.",
      },
      {
        title: "Conviértete en uno",
        detail:
          "Los Paymates ganan con cada transacción que gestionan. Es un negocio en sí mismo.",
        cta: "Hazte Paymate",
      },
    ],
  },
});

export const SERVICES = pick({
  en: {
    title: "From your first sale to your first loan",
    subtitle: "eMa covers the whole life of a small business, not one moment in it.",
    items: [
      {
        title: "Get paid",
        points: [
          "QR and phone-number payments",
          "Daily limits vary by country and KYC tier",
          "Bill payments — DSTV, Netflix, utilities",
          "Airtime on every network",
        ],
      },
      {
        title: "Grow",
        points: [
          "SME capital access",
          "Crowdfunding via eMaFunding",
          "Community savings via SIBA and eMaSave",
          "AI credit scoring on alternative data (under testing)",
        ],
      },
      {
        title: "Operate",
        points: [
          "B2B payments and invoice collection",
          "Creditor management",
          "Bulk payments to staff and suppliers",
          "Statements for any period",
        ],
      },
    ],
  },
  ar: {
    title: "من أول عملية بيع إلى أول تمويل",
    subtitle: "eMa يغطي عمر المشروع الصغير بأكمله، لا لحظة واحدة منه.",
    items: [
      {
        title: "اقبض",
        points: [
          "الدفع برمز QR ورقم الهاتف",
          "الحدود اليومية تختلف بحسب الدولة ومستوى التحقق من الهوية",
          "سداد الفواتير — DSTV ونتفليكس والمرافق",
          "رصيد اتصال لجميع الشبكات",
        ],
      },
      {
        title: "انمُ",
        points: [
          "تمويل المشاريع الصغيرة والمتوسطة",
          "التمويل الجماعي عبر eMaFunding",
          "الادّخار المجتمعي عبر SIBA وeMaSave",
          "تقييم ائتماني بالذكاء الاصطناعي على بيانات بديلة (قيد الاختبار)",
        ],
      },
      {
        title: "شغّل",
        points: [
          "مدفوعات بين الشركات وتحصيل الفواتير",
          "إدارة الدائنين",
          "مدفوعات جماعية للموظفين والموردين",
          "كشوف حساب لأي فترة",
        ],
      },
    ],
  },
  fr: {
    title: "De votre première vente à votre premier crédit",
    subtitle: "eMa couvre toute la vie d'une petite entreprise, pas un seul instant.",
    items: [
      {
        title: "Encaisser",
        points: [
          "Paiements par QR et par numéro de téléphone",
          "Les plafonds journaliers varient selon le pays et le niveau de KYC",
          "Paiement de factures — DSTV, Netflix, services publics",
          "Crédit téléphonique sur tous les réseaux",
        ],
      },
      {
        title: "Grandir",
        points: [
          "Accès au capital pour les PME",
          "Financement participatif via eMaFunding",
          "Épargne communautaire via SIBA et eMaSave",
          "Scoring de crédit par IA sur données alternatives (en test)",
        ],
      },
      {
        title: "Opérer",
        points: [
          "Paiements interentreprises et recouvrement de factures",
          "Gestion des créanciers",
          "Paiements groupés aux employés et fournisseurs",
          "Relevés sur n'importe quelle période",
        ],
      },
    ],
  },
  pt: {
    title: "Da primeira venda ao primeiro financiamento",
    subtitle: "O eMa acompanha toda a vida de um pequeno negócio, não apenas um momento.",
    items: [
      {
        title: "Receber",
        points: [
          "Pagamentos por QR e por número de telemóvel",
          "Os limites diários variam consoante o país e o nível de KYC",
          "Pagamento de faturas — DSTV, Netflix, serviços públicos",
          "Saldo de telemóvel em todas as redes",
        ],
      },
      {
        title: "Crescer",
        points: [
          "Acesso a capital para PME",
          "Financiamento colaborativo via eMaFunding",
          "Poupança comunitária via SIBA e eMaSave",
          "Scoring de crédito por IA sobre dados alternativos (em testes)",
        ],
      },
      {
        title: "Operar",
        points: [
          "Pagamentos entre empresas e cobrança de faturas",
          "Gestão de credores",
          "Pagamentos em massa a colaboradores e fornecedores",
          "Extratos para qualquer período",
        ],
      },
    ],
  },
  es: {
    title: "De tu primera venta a tu primer crédito",
    subtitle: "eMa acompaña toda la vida de un pequeño negocio, no solo un momento.",
    items: [
      {
        title: "Cobrar",
        points: [
          "Pagos por QR y por número de teléfono",
          "Los límites diarios varían según el país y el nivel de KYC",
          "Pago de facturas: DSTV, Netflix, suministros",
          "Saldo telefónico en todas las redes",
        ],
      },
      {
        title: "Crecer",
        points: [
          "Acceso a capital para pymes",
          "Financiación colectiva con eMaFunding",
          "Ahorro comunitario con SIBA y eMaSave",
          "Scoring crediticio con IA sobre datos alternativos (en pruebas)",
        ],
      },
      {
        title: "Operar",
        points: [
          "Pagos entre empresas y cobro de facturas",
          "Gestión de acreedores",
          "Pagos masivos a personal y proveedores",
          "Extractos de cualquier periodo",
        ],
      },
    ],
  },
});

export const WHITE_LABEL = pick({
  en: {
    title: "White label solutions",
    subtitle:
      "Launch your own branded platform in weeks, on our 14-module ecosystem.",
    headline: ["Your brand,", "our technology"],
    lead: "Transform your institution with a fully customisable digital finance platform carrying",
    bars: ["your name", "your identity", "your colours"],
    whatYouGetLabel: "What you get",
    whatYouGet: [
      "The full 14-module platform under your brand",
      "Your name, logo and colour system",
      "Full API access",
      "Real-time analytics dashboard",
      "Flexible deployment — integrate directly, or take a branded dashboard on eMalyami's backend",
      "Zero-downtime infrastructure — master-replica database with load balancing and automatic failover",
      "Disaster recovery — geographic redundancy designed for data integrity",
      "Dedicated integration support",
      "Deployment in weeks, not years",
    ],
    corporateLabel: "Built for corporates",
    corporate: [
      "Pay bills, salaries and suppliers in bulk",
      "Collect bulk payments",
      "Daily, weekly and monthly statements for any period",
      "Joint company accounts",
      "A private closed-loop corporate scheme where funds arrive automatically",
      "Move money to and from your bank account",
      "Collect subscription fees from any number of subscribers into one account",
    ],
  },
  ar: {
    title: "حلول العلامة البيضاء",
    subtitle:
      "أطلق منصتك ذات العلامة التجارية في أسابيع، على نظامنا البيئي المكوّن من 14 وحدة.",
    headline: ["علامتك التجارية،", "تقنيتنا"],
    lead: "حوّل مؤسستك بمنصة مالية رقمية قابلة للتخصيص بالكامل، تحمل",
    bars: ["اسمك", "هويتك", "ألوانك"],
    whatYouGetLabel: "ما تحصل عليه",
    whatYouGet: [
      "المنصّة الكاملة بوحداتها الأربع عشرة تحت علامتك",
      "اسمك وشعارك ونظام ألوانك",
      "وصول كامل لواجهات البرمجة (API)",
      "لوحة تحليلات في الوقت الفعلي",
      "نشر مرن — تكامل مباشر، أو لوحة تحكّم بعلامتك تعمل على منظومة eMalyami الخلفية",
      "بنية بلا توقّف — قاعدة بيانات رئيسية ونسخ متماثلة مع موازنة أحمال وتحويل تلقائي عند الأعطال",
      "التعافي من الكوارث — تكرار جغرافي مصمَّم لسلامة البيانات",
      "دعم تكامل مخصّص",
      "إطلاق في أسابيع لا سنوات",
    ],
    corporateLabel: "مصمَّم للشركات",
    corporate: [
      "سداد الفواتير والرواتب والموردين دفعة واحدة",
      "تحصيل المدفوعات الجماعية",
      "كشوف حساب يومية وأسبوعية وشهرية لأي فترة",
      "حسابات شركات مشتركة",
      "نظام مؤسسي مغلق وخاص تصل فيه الأموال تلقائيًا",
      "التحويل من وإلى حسابك البنكي",
      "تحصيل رسوم الاشتراك من أي عدد من المشتركين إلى حساب واحد",
    ],
  },
  fr: {
    title: "Solutions en marque blanche",
    subtitle:
      "Lancez votre propre plateforme sous votre marque en quelques semaines, sur notre écosystème de 14 modules.",
    headline: ["Votre marque,", "notre technologie"],
    lead: "Transformez votre institution avec une plateforme financière numérique entièrement personnalisable, portant",
    bars: ["votre nom", "votre identité", "vos couleurs"],
    whatYouGetLabel: "Ce que vous obtenez",
    whatYouGet: [
      "La plateforme complète de 14 modules sous votre marque",
      "Votre nom, votre logo et votre charte graphique",
      "Accès complet à l'API",
      "Tableau de bord analytique en temps réel",
      "Déploiement flexible — intégration directe, ou tableau de bord à votre marque adossé au backend eMalyami",
      "Infrastructure sans interruption — base maître-réplique avec répartition de charge et bascule automatique",
      "Reprise après sinistre — redondance géographique conçue pour l'intégrité des données",
      "Assistance dédiée à l'intégration",
      "Déploiement en semaines, pas en années",
    ],
    corporateLabel: "Conçu pour les entreprises",
    corporate: [
      "Payer factures, salaires et fournisseurs en masse",
      "Encaisser des paiements groupés",
      "Relevés quotidiens, hebdomadaires et mensuels sur toute période",
      "Comptes d'entreprise conjoints",
      "Un circuit fermé privé où les fonds arrivent automatiquement",
      "Transférer de l'argent depuis et vers votre compte bancaire",
      "Collecter les cotisations d'un nombre illimité d'abonnés sur un seul compte",
    ],
  },
  pt: {
    title: "Soluções de marca branca",
    subtitle:
      "Lance a sua própria plataforma de marca em semanas, sobre o nosso ecossistema de 14 módulos.",
    headline: ["A sua marca,", "a nossa tecnologia"],
    lead: "Transforme a sua instituição com uma plataforma financeira digital totalmente personalizável, com",
    bars: ["o seu nome", "a sua identidade", "as suas cores"],
    whatYouGetLabel: "O que recebe",
    whatYouGet: [
      "A plataforma completa de 14 módulos sob a sua marca",
      "O seu nome, logótipo e sistema de cores",
      "Acesso completo à API",
      "Painel de análise em tempo real",
      "Implementação flexível — integração direta ou painel com a sua marca sobre o backend do eMalyami",
      "Infraestrutura sem paragens — base de dados mestre-réplica com balanceamento de carga e failover automático",
      "Recuperação de desastres — redundância geográfica pensada para a integridade dos dados",
      "Apoio dedicado à integração",
      "Implementação em semanas, não em anos",
    ],
    corporateLabel: "Feito para empresas",
    corporate: [
      "Pagar faturas, salários e fornecedores em massa",
      "Cobrar pagamentos em massa",
      "Extratos diários, semanais e mensais para qualquer período",
      "Contas de empresa conjuntas",
      "Um circuito fechado privado onde os fundos chegam automaticamente",
      "Movimentar dinheiro de e para a sua conta bancária",
      "Cobrar quotas de um número ilimitado de subscritores numa só conta",
    ],
  },
  es: {
    title: "Soluciones de marca blanca",
    subtitle:
      "Lanza tu propia plataforma de marca en semanas, sobre nuestro ecosistema de 14 módulos.",
    headline: ["Tu marca,", "nuestra tecnología"],
    lead: "Transforma tu institución con una plataforma financiera digital totalmente personalizable, con",
    bars: ["tu nombre", "tu identidad", "tus colores"],
    whatYouGetLabel: "Qué obtienes",
    whatYouGet: [
      "La plataforma completa de 14 módulos bajo tu marca",
      "Tu nombre, tu logotipo y tu sistema de color",
      "Acceso completo a la API",
      "Panel de analítica en tiempo real",
      "Despliegue flexible: integración directa o un panel con tu marca sobre el backend de eMalyami",
      "Infraestructura sin caídas: base de datos maestro-réplica con balanceo de carga y conmutación automática",
      "Recuperación ante desastres: redundancia geográfica diseñada para la integridad de los datos",
      "Soporte de integración dedicado",
      "Despliegue en semanas, no en años",
    ],
    corporateLabel: "Pensado para empresas",
    corporate: [
      "Pagar facturas, nóminas y proveedores de forma masiva",
      "Cobrar pagos masivos",
      "Extractos diarios, semanales y mensuales de cualquier periodo",
      "Cuentas de empresa conjuntas",
      "Un circuito cerrado privado donde los fondos llegan automáticamente",
      "Mover dinero desde y hacia tu cuenta bancaria",
      "Cobrar cuotas de un número ilimitado de suscriptores en una sola cuenta",
    ],
  },
});

export const PARTNER = pick({
  en: {
    title: "Four ways to build with eMa",
    subtitle:
      "Whether you have a shop counter, a lending book or a national mandate — there's a way in. Phase One markets: eSwatini, Kenya, Zambia, Zimbabwe, Uganda, Mauritius and Malawi.",
    tracks: [
      {
        title: "Become a Paymate",
        detail:
          "Turn your shop into a cash-in/cash-out point. Earn on every transaction you handle, and bring foot traffic through your door.",
        note: "No capital required.",
      },
      {
        title: "Governments & development agencies",
        detail:
          "Digitise SME support and disbursement, and eliminate ghost beneficiaries with verified KYC identity on every payment. Through the COMESA Business Council MoU, eMa-CBC reaches SMEs, cooperatives and exporters across the region.",
      },
      {
        title: "Banks & financial institutions",
        detail:
          "Reach the unbanked without building branches. Offer loans, insurance and cover through Patele to a market you can finally see — supported by AI credit scoring on alternative data.",
      },
      {
        title: "White-label partners",
        detail:
          "Launch the full platform under your own brand in weeks.",
        cta: "See white label",
      },
    ],
  },
  ar: {
    title: "أربع طرق للبناء مع eMa",
    subtitle:
      "سواء كان لديك متجر أو محفظة إقراض أو تفويض وطني — هناك طريق للدخول. أسواق المرحلة الأولى: إسواتيني وكينيا وزامبيا وزيمبابوي وأوغندا وموريشيوس ومالاوي.",
    tracks: [
      {
        title: "كن وكيل Paymate",
        detail:
          "حوّل متجرك إلى نقطة إيداع وسحب نقدي. اربح من كل معاملة تنفّذها، واجذب زبائن إلى بابك.",
        note: "بلا رأس مال.",
      },
      {
        title: "الحكومات وجهات التنمية",
        detail:
          "رقمنة دعم المشاريع الصغيرة والمتوسطة وصرفه، والقضاء على المستفيدين الوهميين عبر هوية مُوثَّقة (KYC) في كل دفعة. ومن خلال مذكرة التفاهم مع مجلس الأعمال للكوميسا، يصل eMa-CBC إلى المشاريع الصغيرة والتعاونيات والمصدّرين في عموم المنطقة.",
      },
      {
        title: "البنوك والمؤسسات المالية",
        detail:
          "الوصول إلى غير المتعاملين مع البنوك دون بناء فروع. قدّم القروض والتأمين والتغطية عبر Patele لسوق أصبح أخيرًا مرئيًا أمامك — بدعم من تقييم ائتماني بالذكاء الاصطناعي يعتمد على بيانات بديلة.",
      },
      {
        title: "شركاء العلامة البيضاء",
        detail: "أطلق المنصّة كاملة تحت علامتك خلال أسابيع.",
        cta: "استعرض العلامة البيضاء",
      },
    ],
  },
  fr: {
    title: "Quatre façons de bâtir avec eMa",
    subtitle:
      "Que vous ayez un comptoir de boutique, un portefeuille de crédits ou un mandat national — il existe une porte d'entrée. Marchés de la phase un : Eswatini, Kenya, Zambie, Zimbabwe, Ouganda, Maurice et Malawi.",
    tracks: [
      {
        title: "Devenir Paymate",
        detail:
          "Faites de votre boutique un point de dépôt et de retrait d'espèces. Gagnez sur chaque transaction traitée et attirez du passage.",
        note: "Aucun capital requis.",
      },
      {
        title: "États et agences de développement",
        detail:
          "Numérisez le soutien aux PME et les versements, et éliminez les bénéficiaires fictifs grâce à une identité KYC vérifiée sur chaque paiement. Via le protocole d'accord avec le COMESA Business Council, eMa-CBC atteint PME, coopératives et exportateurs de toute la région.",
      },
      {
        title: "Banques et institutions financières",
        detail:
          "Touchez les non-bancarisés sans ouvrir d'agences. Proposez prêts, assurances et couvertures via Patele à un marché enfin visible — appuyé par un scoring de crédit par IA sur données alternatives.",
      },
      {
        title: "Partenaires en marque blanche",
        detail: "Lancez la plateforme complète sous votre propre marque en quelques semaines.",
        cta: "Voir la marque blanche",
      },
    ],
  },
  pt: {
    title: "Quatro formas de construir com o eMa",
    subtitle:
      "Quer tenha um balcão de loja, uma carteira de crédito ou um mandato nacional — há uma porta de entrada. Mercados da fase um: Essuatíni, Quénia, Zâmbia, Zimbabué, Uganda, Maurícias e Maláui.",
    tracks: [
      {
        title: "Tornar-se Paymate",
        detail:
          "Transforme a sua loja num ponto de depósito e levantamento. Ganhe em cada transação que processa e atraia movimento à sua porta.",
        note: "Sem capital necessário.",
      },
      {
        title: "Governos e agências de desenvolvimento",
        detail:
          "Digitalize o apoio às PME e os pagamentos, e elimine beneficiários fantasma com identidade KYC verificada em cada pagamento. Através do memorando com o COMESA Business Council, o eMa-CBC chega a PME, cooperativas e exportadores de toda a região.",
      },
      {
        title: "Bancos e instituições financeiras",
        detail:
          "Chegue aos não bancarizados sem construir balcões. Ofereça crédito, seguros e coberturas através do Patele a um mercado finalmente visível — apoiado por scoring de crédito com IA sobre dados alternativos.",
      },
      {
        title: "Parceiros de marca branca",
        detail: "Lance a plataforma completa sob a sua própria marca em semanas.",
        cta: "Ver marca branca",
      },
    ],
  },
  es: {
    title: "Cuatro formas de construir con eMa",
    subtitle:
      "Tanto si tienes un mostrador, una cartera de crédito o un mandato nacional, hay una puerta de entrada. Mercados de la fase uno: Esuatini, Kenia, Zambia, Zimbabue, Uganda, Mauricio y Malaui.",
    tracks: [
      {
        title: "Hazte Paymate",
        detail:
          "Convierte tu tienda en un punto de ingreso y retirada de efectivo. Gana con cada transacción que gestionas y atrae clientes a tu puerta.",
        note: "Sin capital inicial.",
      },
      {
        title: "Gobiernos y agencias de desarrollo",
        detail:
          "Digitaliza el apoyo a las pymes y los desembolsos, y elimina beneficiarios fantasma con identidad KYC verificada en cada pago. A través del memorando con el COMESA Business Council, eMa-CBC llega a pymes, cooperativas y exportadores de toda la región.",
      },
      {
        title: "Bancos e instituciones financieras",
        detail:
          "Llega a la población no bancarizada sin abrir sucursales. Ofrece créditos, seguros y coberturas mediante Patele a un mercado por fin visible, con el apoyo de scoring crediticio por IA sobre datos alternativos.",
      },
      {
        title: "Socios de marca blanca",
        detail: "Lanza la plataforma completa bajo tu propia marca en semanas.",
        cta: "Ver marca blanca",
      },
    ],
  },
});

export const QUICK_STEPS = pick({
  en: [
    {
      title: "Discovery call",
      subtitle:
        "A quick introductory meeting to understand your needs and see whether we're a fit.",
    },
    {
      title: "Custom demo",
      subtitle:
        "We build and show exactly how our solution works for your specific case.",
    },
    {
      title: "Pilot programme",
      subtitle:
        "A small-scale test with real users, to prove it works before full launch.",
    },
    {
      title: "Full deployment",
      subtitle: "Complete rollout to all users, with full support and integration.",
    },
  ],
  ar: [
    {
      title: "مكالمة الاكتشاف",
      subtitle:
        "اجتماع تعريفي سريع لفهم احتياجاتك ومعرفة ما إذا كنا مناسبين لك.",
    },
    {
      title: "عرض توضيحي مخصص",
      subtitle: "نقوم ببناء وإظهار كيفية عمل حلنا بالضبط لحالتك المحددة.",
    },
    {
      title: "برنامج تجريبي",
      subtitle:
        "اختبار على نطاق صغير مع مستخدمين حقيقيين لإثبات أنه يعمل قبل الإطلاق الكامل.",
    },
    {
      title: "النشر الكامل",
      subtitle: "طرح كامل لجميع المستخدمين مع دعم كامل وتكامل.",
    },
  ],
  fr: [
    {
      title: "Appel de découverte",
      subtitle:
        "Une brève rencontre pour comprendre vos besoins et voir si nous sommes faits pour vous.",
    },
    {
      title: "Démo sur mesure",
      subtitle:
        "Nous construisons et montrons exactement comment notre solution répond à votre cas.",
    },
    {
      title: "Programme pilote",
      subtitle:
        "Un test à petite échelle avec de vrais utilisateurs, pour faire ses preuves avant le lancement.",
    },
    {
      title: "Déploiement complet",
      subtitle:
        "Mise en service auprès de tous les utilisateurs, avec assistance et intégration complètes.",
    },
  ],
  pt: [
    {
      title: "Chamada de diagnóstico",
      subtitle:
        "Uma breve reunião para perceber as suas necessidades e ver se somos a escolha certa.",
    },
    {
      title: "Demonstração à medida",
      subtitle:
        "Construímos e mostramos exatamente como a nossa solução funciona no seu caso.",
    },
    {
      title: "Programa-piloto",
      subtitle:
        "Um teste em pequena escala com utilizadores reais, para provar que funciona antes do lançamento.",
    },
    {
      title: "Implementação completa",
      subtitle:
        "Disponibilização a todos os utilizadores, com apoio e integração completos.",
    },
  ],
  es: [
    {
      title: "Llamada de diagnóstico",
      subtitle:
        "Una breve reunión para entender tus necesidades y ver si encajamos.",
    },
    {
      title: "Demostración a medida",
      subtitle:
        "Construimos y mostramos exactamente cómo funciona nuestra solución en tu caso.",
    },
    {
      title: "Programa piloto",
      subtitle:
        "Una prueba a pequeña escala con usuarios reales, para demostrar que funciona antes del lanzamiento.",
    },
    {
      title: "Despliegue completo",
      subtitle:
        "Puesta en marcha para todos los usuarios, con soporte e integración completos.",
    },
  ],
});

export const PARTNER_STEPS_TITLE = pick({
  en: "4 quick steps to becoming our partner",
  ar: "4 خطوات سريعة لتصبح شريكنا",
  fr: "4 étapes rapides pour devenir notre partenaire",
  pt: "4 passos rápidos para se tornar nosso parceiro",
  es: "4 pasos rápidos para convertirte en socio",
});

export const CTA_BANNER = pick({
  en: {
    headline: ["Launch your", "branded platform"],
    subhead: "Build your digital platform",
    cta: "Request a white-label demo",
    items: [
      "Launch in weeks, not years",
      "Zero-downtime infrastructure",
      "Complete brand control",
    ],
  },
  ar: {
    headline: ["ابدأ منصتك", "ذات العلامة التجارية"],
    subhead: "أنشئ منصتك الرقمية",
    cta: "اطلب عرضًا توضيحيًا للعلامة البيضاء",
    items: [
      "أطلق في أسابيع، وليس سنوات",
      "بنية تحتية بلا توقّف",
      "التحكم الكامل في العلامة التجارية",
    ],
  },
  fr: {
    headline: ["Lancez votre plateforme", "sous votre marque"],
    subhead: "Construisez votre plateforme numérique",
    cta: "Demander une démo en marque blanche",
    items: [
      "Lancez en semaines, pas en années",
      "Infrastructure sans interruption",
      "Contrôle total de la marque",
    ],
  },
  pt: {
    headline: ["Lance a sua plataforma", "com a sua marca"],
    subhead: "Construa a sua plataforma digital",
    cta: "Pedir uma demonstração de marca branca",
    items: [
      "Lance em semanas, não em anos",
      "Infraestrutura sem paragens",
      "Controlo total da marca",
    ],
  },
  es: {
    headline: ["Lanza tu plataforma", "con tu marca"],
    subhead: "Construye tu plataforma digital",
    cta: "Solicitar una demo de marca blanca",
    items: [
      "Lanza en semanas, no en años",
      "Infraestructura sin caídas",
      "Control total de la marca",
    ],
  },
});

export const MODULES_PAGE = pick({
  en: {
    title: "Fourteen tools. One account.",
    subtitle:
      "Every module works on its own and works better together. Pick the ones your business needs today — the rest are waiting on the same login.",
  },
  ar: {
    title: "أربع عشرة أداة. حساب واحد.",
    subtitle:
      "كل وحدة تعمل بمفردها، وتعمل بشكل أفضل مع غيرها. اختر ما يحتاجه عملك اليوم — والبقية بانتظارك على تسجيل الدخول نفسه.",
  },
  fr: {
    title: "Quatorze outils. Un seul compte.",
    subtitle:
      "Chaque module fonctionne seul et fonctionne mieux ensemble. Choisissez ceux dont votre entreprise a besoin aujourd'hui — les autres vous attendent sur le même identifiant.",
  },
  pt: {
    title: "Catorze ferramentas. Uma só conta.",
    subtitle:
      "Cada módulo funciona sozinho e funciona melhor em conjunto. Escolha os que o seu negócio precisa hoje — os restantes esperam por si no mesmo início de sessão.",
  },
  es: {
    title: "Catorce herramientas. Una sola cuenta.",
    subtitle:
      "Cada módulo funciona por sí solo y funciona mejor en conjunto. Elige los que tu negocio necesita hoy: el resto te espera en el mismo inicio de sesión.",
  },
});

export const HELP_PAGE = pick({
  en: {
    title: "Need help?",
    subtitle:
      "Tell us which module, what happened, and how to reach you. Attach anything that helps. Our support team replies by email.",
    fields: {
      fullName: "Full name",
      email: "Email address",
      phone: "Phone number",
      module: "Which module?",
      modulePlaceholder: "Select the module",
      title: "Subject",
      desc: "What happened?",
      documents: "Attachments (optional)",
    },
    submit: "Submit request",
    submitting: "Sending…",
    success:
      "Thank you — your request has been received. Our support team will reply by email.",
    error:
      "We couldn't send your request. Please try again, or email support@emalyami.com directly.",
    required: "This field is required",
    invalidEmail: "Please enter a valid email address",
  },
  ar: {
    title: "تحتاج مساعدة؟",
    subtitle:
      "أخبرنا بالوحدة المعنية، وبما حدث، وكيف نصل إليك. وأرفق ما يفيد. يردّ فريق الدعم عبر البريد الإلكتروني.",
    fields: {
      fullName: "الاسم الكامل",
      email: "البريد الإلكتروني",
      phone: "رقم الهاتف",
      module: "أي وحدة؟",
      modulePlaceholder: "اختر الوحدة",
      title: "الموضوع",
      desc: "ماذا حدث؟",
      documents: "المرفقات (اختياري)",
    },
    submit: "أرسل الطلب",
    submitting: "جارٍ الإرسال…",
    success:
      "شكرًا لك — تم استلام طلبك. وسيردّ فريق الدعم عبر البريد الإلكتروني.",
    error:
      "تعذّر إرسال طلبك. يرجى المحاولة مرة أخرى، أو المراسلة مباشرة على support@emalyami.com.",
    required: "هذا الحقل مطلوب",
    invalidEmail: "يرجى إدخال بريد إلكتروني صحيح",
  },
  fr: {
    title: "Besoin d'aide ?",
    subtitle:
      "Dites-nous quel module est concerné, ce qui s'est passé et comment vous joindre. Joignez tout élément utile. Notre équipe d'assistance répond par e-mail.",
    fields: {
      fullName: "Nom complet",
      email: "Adresse e-mail",
      phone: "Numéro de téléphone",
      module: "Quel module ?",
      modulePlaceholder: "Sélectionnez le module",
      title: "Objet",
      desc: "Que s'est-il passé ?",
      documents: "Pièces jointes (facultatif)",
    },
    submit: "Envoyer la demande",
    submitting: "Envoi en cours…",
    success:
      "Merci — votre demande a bien été reçue. Notre équipe d'assistance vous répondra par e-mail.",
    error:
      "Nous n'avons pas pu envoyer votre demande. Réessayez, ou écrivez directement à support@emalyami.com.",
    required: "Ce champ est obligatoire",
    invalidEmail: "Veuillez saisir une adresse e-mail valide",
  },
  pt: {
    title: "Precisa de ajuda?",
    subtitle:
      "Diga-nos qual o módulo, o que aconteceu e como o podemos contactar. Anexe o que for útil. A nossa equipa de apoio responde por e-mail.",
    fields: {
      fullName: "Nome completo",
      email: "Endereço de e-mail",
      phone: "Número de telemóvel",
      module: "Qual módulo?",
      modulePlaceholder: "Selecione o módulo",
      title: "Assunto",
      desc: "O que aconteceu?",
      documents: "Anexos (opcional)",
    },
    submit: "Enviar pedido",
    submitting: "A enviar…",
    success:
      "Obrigado — o seu pedido foi recebido. A nossa equipa de apoio responderá por e-mail.",
    error:
      "Não foi possível enviar o seu pedido. Tente novamente ou escreva diretamente para support@emalyami.com.",
    required: "Este campo é obrigatório",
    invalidEmail: "Introduza um endereço de e-mail válido",
  },
  es: {
    title: "¿Necesitas ayuda?",
    subtitle:
      "Dinos qué módulo, qué ocurrió y cómo contactarte. Adjunta lo que ayude. Nuestro equipo de soporte responde por correo electrónico.",
    fields: {
      fullName: "Nombre completo",
      email: "Correo electrónico",
      phone: "Número de teléfono",
      module: "¿Qué módulo?",
      modulePlaceholder: "Selecciona el módulo",
      title: "Asunto",
      desc: "¿Qué ocurrió?",
      documents: "Archivos adjuntos (opcional)",
    },
    submit: "Enviar solicitud",
    submitting: "Enviando…",
    success:
      "Gracias, hemos recibido tu solicitud. Nuestro equipo de soporte te responderá por correo electrónico.",
    error:
      "No hemos podido enviar tu solicitud. Vuelve a intentarlo o escribe directamente a support@emalyami.com.",
    required: "Este campo es obligatorio",
    invalidEmail: "Introduce una dirección de correo válida",
  },
});

export const BEFORE_AFTER = pick({
  en: {
    beforeAlt: "before white label",
    beforeTitle: "Generic platform",
    beforeBody:
      "The standard eMa interface, carrying our branding and corporate design.",
    afterAlt: "after white label",
    afterTitle: "Your branded solution",
    afterBody:
      "The same powerful technology with your logo, your colours and a design tailored to your industry.",
  },
  ar: {
    beforeAlt: "قبل-العلامة-البيضاء",
    beforeTitle: "منصة عامة",
    beforeBody: "واجهة eMa القياسية مع علامتنا التجارية والتصميم المؤسسي",
    afterAlt: "بعد-العلامة-البيضاء",
    afterTitle: "حل علامتك التجارية",
    afterBody:
      "نفس التكنولوجيا القوية مع شعارك وألوانك وتصميم خاص بصناعتك",
  },
  fr: {
    beforeAlt: "avant la marque blanche",
    beforeTitle: "Plateforme générique",
    beforeBody:
      "L'interface eMa standard, portant notre marque et notre design institutionnel.",
    afterAlt: "après la marque blanche",
    afterTitle: "Votre solution sous votre marque",
    afterBody:
      "La même technologie puissante avec votre logo, vos couleurs et un design adapté à votre secteur.",
  },
  pt: {
    beforeAlt: "antes da marca branca",
    beforeTitle: "Plataforma genérica",
    beforeBody:
      "A interface eMa padrão, com a nossa marca e o nosso design institucional.",
    afterAlt: "depois da marca branca",
    afterTitle: "A sua solução de marca",
    afterBody:
      "A mesma tecnologia poderosa com o seu logótipo, as suas cores e um design à medida do seu setor.",
  },
  es: {
    beforeAlt: "antes de la marca blanca",
    beforeTitle: "Plataforma genérica",
    beforeBody:
      "La interfaz eMa estándar, con nuestra marca y nuestro diseño corporativo.",
    afterAlt: "después de la marca blanca",
    afterTitle: "Tu solución de marca",
    afterBody:
      "La misma tecnología potente con tu logotipo, tus colores y un diseño adaptado a tu sector.",
  },
});

export const PARTNER_CTA = pick({
  en: { title: "Start the partnership conversation today", cta: "Schedule a call" },
  ar: { title: "ابدأ مناقشة الشراكة اليوم", cta: "جدولة مكالمة" },
  fr: { title: "Lancez la discussion dès aujourd'hui", cta: "Planifier un appel" },
  pt: { title: "Comece hoje a conversa de parceria", cta: "Agendar uma chamada" },
  es: { title: "Empieza hoy la conversación de alianza", cta: "Agendar una llamada" },
});
