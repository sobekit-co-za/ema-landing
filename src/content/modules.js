import { localize } from "./locale";

/**
 * THE MODULE REGISTRY — single source of truth for all 14 eMa modules.
 *
 * Everything downstream reads from here: the Money Stack and Business Stack
 * sections, the /modules index, every /modules/:id detail page, the pricing
 * fee table, the industry recipes, the footer, and the chatbot prompt.
 * Add a module here and it appears everywhere.
 *
 * Shared keys (id, family, status, links, …) sit at the top level.
 * Translatable copy lives in the per-locale `en` / `ar` bundles.
 *
 * `ticketCode` is the value the Help Request API expects at
 * POST /unAuth/tickets/create/{ticketCode}. Two of these carry a LEADING SPACE
 * (" EMY_SAVE", " EMY_TUMA") — that is the backend's actual naming, confirmed
 * by the eMa team. Do not "clean" them; the endpoint will 404.
 */

export const FAMILY = {
  MONEY: "money",
  BUSINESS: "business",
};

export const STATUS = {
  LIVE: "live",
  BETA: "beta",
  PLANNED: "planned",
};

const MAIN_APP =
  "https://play.google.com/store/apps/details?id=com.emalyami.mobile";

const modules = [
  // ───────────────────────────── THE MONEY STACK ─────────────────────────────
  {
    id: "ewallet",
    name: "eWallet",
    family: FAMILY.MONEY,
    status: STATUS.LIVE,
    ticketCode: "Emalyami",
    links: { android: MAIN_APP, web: null },
    related: ["paymate", "ematuma", "emapos"],
    en: {
      tagline: "Your digital balance",
      summary:
        "Load funds by card, EFT or Paymate. Get paid by QR code or phone number, pay bills, and buy airtime on any network — all from one multi-currency balance.",
      description:
        "The eWallet is the account every other eMa module settles into. It holds your balance in multiple currencies, accepts money from cards, bank transfers and cash handed to a Paymate, and pays out by QR code, phone number or cash withdrawal. One balance, one phone number, one verified identity.",
      howItWorks: [
        "Register with your cellphone number and verify it with the OTP you receive.",
        "Complete your KYC profile so your account can transact.",
        "Load funds by card, EFT, or by handing cash to any Paymate.",
        "Get paid — show your QR code, or give out your phone number.",
        "Spend, save, send across a border, or withdraw cash at a Paymate.",
      ],
      capabilities: [
        "Multi-currency balance",
        "Load by card, EFT or Paymate cash",
        "Receive by unique QR code",
        "Receive by phone number",
        "Send to any eMa member",
        "Cash withdrawal at any Paymate",
        "Payouts to your bank account",
        "Bill payments — DSTV, Netflix, utilities",
        "Airtime on every network",
        "Daily transaction limits set per country and KYC tier",
        "Full statements for any period",
        "Settles every other eMa module",
      ],
      audience: [
        "Individuals",
        "Every eMa business user",
        "The unbanked",
        "Households",
      ],
      fee: "4% on everyday personal transactions.",
      settles:
        "This is the account everything settles into — every module in the platform pays in and out of this one balance.",
    },
    ar: {
      tagline: "محفظتك الرقمية",
      summary:
        "اشحن رصيدك ببطاقة أو تحويل بنكي أو عبر وكيل Paymate. اقبض المدفوعات برمز QR أو رقم الهاتف، وادفع الفواتير، واشترِ رصيد اتصال لجميع الشبكات — من رصيد واحد متعدد العملات.",
      description:
        "محفظة eWallet هي الحساب الذي تستقرّ فيه كل وحدات eMa الأخرى. تحتفظ برصيدك بعملات متعددة، وتستقبل الأموال من البطاقات والتحويلات البنكية والنقد الذي تسلّمه لوكيل Paymate، وتصرف عبر رمز QR أو رقم الهاتف أو السحب النقدي. رصيد واحد، ورقم هاتف واحد، وهوية مُوثَّقة واحدة.",
      howItWorks: [
        "سجّل برقم هاتفك وفعّله برمز OTP الذي يصلك.",
        "استكمل ملف التحقّق من الهوية (KYC) ليصبح حسابك قادرًا على إجراء المعاملات.",
        "اشحن رصيدك ببطاقة أو تحويل بنكي أو بتسليم النقد لأي وكيل Paymate.",
        "اقبض أموالك — اعرض رمز QR الخاص بك، أو أعطِ رقم هاتفك.",
        "أنفق، أو ادّخر، أو أرسل عبر الحدود، أو اسحب نقدًا من وكيل Paymate.",
      ],
      capabilities: [
        "رصيد متعدد العملات",
        "الشحن ببطاقة أو تحويل بنكي أو نقدًا عبر Paymate",
        "الاستلام برمز QR خاص بك",
        "الاستلام برقم الهاتف",
        "الإرسال إلى أي عضو في eMa",
        "السحب النقدي من أي وكيل Paymate",
        "التحويل إلى حسابك البنكي",
        "سداد الفواتير — DSTV ونتفليكس والمرافق",
        "رصيد اتصال لجميع الشبكات",
        "حدود يومية للمعاملات تُحدَّد لكل دولة ولكل مستوى تحقّق من الهوية",
        "كشوف حساب كاملة لأي فترة",
        "تسوية جميع وحدات eMa الأخرى",
      ],
      audience: [
        "الأفراد",
        "كل مستخدمي أعمال eMa",
        "غير المتعاملين مع البنوك",
        "الأسر",
      ],
      fee: "4% على معاملات الأفراد اليومية.",
      settles:
        "هذا هو الحساب الذي يستقرّ فيه كل شيء — كل وحدة في المنصّة تدفع منه وإليه.",
    },
    fr: {
      tagline: "Votre solde numérique",
      summary:
        "Alimentez votre compte par carte, virement ou Paymate. Encaissez par code QR ou numéro de téléphone, payez vos factures et achetez du crédit sur tous les réseaux — depuis un seul solde multidevise.",
      description:
        "L'eWallet est le compte sur lequel se règlent tous les autres modules eMa. Il détient votre solde en plusieurs devises, accepte l'argent des cartes, des virements bancaires et des espèces remises à un Paymate, et verse par code QR, numéro de téléphone ou retrait d'espèces. Un seul solde, un seul numéro de téléphone, une seule identité vérifiée.",
      howItWorks: [
        "Inscrivez-vous avec votre numéro de téléphone et validez-le avec le code OTP reçu.",
        "Complétez votre profil KYC pour que votre compte puisse effectuer des transactions.",
        "Alimentez votre compte par carte, par virement, ou en remettant des espèces à un Paymate.",
        "Encaissez — présentez votre code QR ou communiquez votre numéro de téléphone.",
        "Dépensez, épargnez, envoyez à l'étranger ou retirez des espèces chez un Paymate.",
      ],
      capabilities: [
        "Solde multidevise",
        "Alimentation par carte, virement ou espèces via Paymate",
        "Encaissement par code QR personnel",
        "Encaissement par numéro de téléphone",
        "Envoi à tout membre eMa",
        "Retrait d'espèces chez tout Paymate",
        "Virements vers votre compte bancaire",
        "Paiement de factures — DSTV, Netflix, services publics",
        "Crédit téléphonique sur tous les réseaux",
        "Plafonds de transaction fixés par pays et par niveau de KYC",
        "Relevés complets sur toute période",
        "Règlement de tous les autres modules eMa",
      ],
      audience: [
        "Particuliers",
        "Tous les professionnels eMa",
        "Personnes non bancarisées",
        "Foyers",
      ],
      fee: "4 % sur les transactions personnelles courantes.",
      settles:
        "C'est le compte sur lequel tout se règle — chaque module de la plateforme y verse et y puise.",
    },
    pt: {
      tagline: "O seu saldo digital",
      summary:
        "Carregue por cartão, transferência ou Paymate. Receba por código QR ou número de telemóvel, pague contas e compre saldo em qualquer rede — tudo a partir de um saldo multimoeda.",
      description:
        "A eWallet é a conta onde todos os outros módulos eMa liquidam. Guarda o seu saldo em várias moedas, aceita dinheiro de cartões, transferências bancárias e numerário entregue a um Paymate, e paga por código QR, número de telemóvel ou levantamento. Um saldo, um número de telemóvel, uma identidade verificada.",
      howItWorks: [
        "Registe-se com o seu número de telemóvel e confirme-o com o código OTP recebido.",
        "Complete o seu perfil KYC para a conta poder transacionar.",
        "Carregue por cartão, transferência ou entregando numerário a qualquer Paymate.",
        "Receba — mostre o seu código QR ou dê o seu número de telemóvel.",
        "Gaste, poupe, envie para outro país ou levante numerário num Paymate.",
      ],
      capabilities: [
        "Saldo multimoeda",
        "Carregamento por cartão, transferência ou numerário via Paymate",
        "Receber por código QR próprio",
        "Receber por número de telemóvel",
        "Enviar para qualquer membro eMa",
        "Levantamento em qualquer Paymate",
        "Transferências para a sua conta bancária",
        "Pagamento de faturas — DSTV, Netflix, serviços públicos",
        "Saldo de telemóvel em todas as redes",
        "Limites diários de transação definidos por país e por nível de KYC",
        "Extratos completos para qualquer período",
        "Liquidação de todos os outros módulos eMa",
      ],
      audience: [
        "Particulares",
        "Todos os utilizadores empresariais eMa",
        "Pessoas não bancarizadas",
        "Famílias",
      ],
      fee: "4% nas transações pessoais do dia a dia.",
      settles:
        "É a conta onde tudo liquida — cada módulo da plataforma paga a partir dela e para ela.",
    },
    es: {
      tagline: "Tu saldo digital",
      summary:
        "Carga fondos con tarjeta, transferencia o en un Paymate. Cobra por código QR o por número de teléfono, paga facturas y compra saldo en cualquier red, todo desde un único saldo multidivisa.",
      description:
        "La eWallet es la cuenta en la que liquida cualquier otro módulo de eMa. Guarda tu saldo en varias divisas, admite dinero de tarjetas, transferencias bancarias y efectivo entregado a un Paymate, y paga por código QR, número de teléfono o retirada de efectivo. Un saldo, un número de teléfono, una identidad verificada.",
      howItWorks: [
        "Regístrate con tu número de móvil y verifícalo con el código OTP que recibas.",
        "Completa tu perfil KYC para que tu cuenta pueda operar.",
        "Carga fondos con tarjeta, por transferencia o entregando efectivo a cualquier Paymate.",
        "Cobra: muestra tu código QR o facilita tu número de teléfono.",
        "Gasta, ahorra, envía a otro país o retira efectivo en un Paymate.",
      ],
      capabilities: [
        "Saldo multidivisa",
        "Carga con tarjeta, transferencia o efectivo en Paymate",
        "Cobro mediante código QR propio",
        "Cobro por número de teléfono",
        "Envío a cualquier miembro de eMa",
        "Retirada de efectivo en cualquier Paymate",
        "Pagos a tu cuenta bancaria",
        "Pago de facturas: DSTV, Netflix, suministros",
        "Saldo telefónico en todas las redes",
        "Límites diarios de transacción fijados por país y nivel de KYC",
        "Extractos completos de cualquier periodo",
        "Liquida todos los demás módulos de eMa",
      ],
      audience: [
        "Particulares",
        "Todos los usuarios de negocio de eMa",
        "Población no bancarizada",
        "Hogares",
      ],
      fee: "4 % en las transacciones personales del día a día.",
      settles:
        "Esta es la cuenta en la que todo liquida: cada módulo de la plataforma cobra y paga contra este único saldo.",
    },
  },

  {
    id: "paymate",
    name: "Paymates",
    family: FAMILY.MONEY,
    status: STATUS.LIVE,
    ticketCode: "Emalyami",
    links: { android: MAIN_APP, web: null },
    related: ["ewallet", "ematuma", "emapos"],
    en: {
      tagline: "Cash becomes digital",
      summary:
        "A network of local partners — spaza shops, service stations, traders — who load cash into wallets and pay out withdrawals. Every Paymate is a branch, without the branch.",
      description:
        "Paymate is what connects a cash economy to a digital ledger. Local businesses you already trust act as cash-in and cash-out points: a customer hands over notes and it becomes wallet balance in seconds, or draws balance back out as cash. No bank branch, no ATM, no card. And because Paymates earn on every transaction they handle, becoming one is a business in itself.",
      howItWorks: [
        "Find your nearest Paymate — a spaza shop, service station or trusted local trader.",
        "Hand over cash to load, or ask for a withdrawal to take cash out.",
        "Confirm the transaction with the OTP sent to your phone.",
        "Your balance updates instantly and works across all 14 modules.",
        "Want to become one? Apply in the app — no capital required.",
      ],
      capabilities: [
        "Cash-in to any eMa wallet",
        "Cash-out withdrawals",
        "Cash pickup for eMaTuma remittances",
        "OTP-confirmed transactions",
        "Agent commission on every transaction",
        "Apply to become a Paymate in-app",
        "Recharge wallets on behalf of customers",
        "Disburse cash to customers",
        "Serves cash-based communities",
        "No banking infrastructure required",
      ],
      audience: [
        "Spaza shops",
        "Service stations",
        "Local traders",
        "Bakeries and food retail",
        "Anyone with a till and foot traffic",
      ],
      fee: "1.5–2% per cash-in or cash-out, earned by the Paymate.",
      settles:
        "Cash moves in and out of the same eWallet balance every other module uses.",
    },
    ar: {
      tagline: "النقد يصبح رقميًا",
      summary:
        "شبكة من الشركاء المحليين — متاجر الحي ومحطات الخدمة والتجار — يشحنون النقد في المحافظ ويصرفون السحوبات. كل وكيل Paymate هو فرع، بلا مبنى فرع.",
      description:
        "Paymate هي ما يربط الاقتصاد النقدي بالدفتر الرقمي. المتاجر المحلية التي تثق بها أصلًا تعمل كنقاط إيداع وسحب نقدي: يسلّم العميل أوراقه النقدية فتتحوّل إلى رصيد في المحفظة خلال ثوانٍ، أو يسحب رصيده نقدًا. بلا فرع بنكي، وبلا صرّاف آلي، وبلا بطاقة. ولأن وكلاء Paymate يربحون من كل معاملة ينفّذونها، فإن العمل كوكيل هو مشروع قائم بذاته.",
      howItWorks: [
        "اعثر على أقرب وكيل Paymate — متجر حي أو محطة خدمة أو تاجر محلي موثوق.",
        "سلّم النقد للشحن، أو اطلب سحبًا لاستلام النقد.",
        "أكّد المعاملة برمز OTP الذي يصل إلى هاتفك.",
        "يتحدّث رصيدك فورًا ويعمل عبر الوحدات الأربع عشرة كلها.",
        "تريد أن تصبح وكيلًا؟ قدّم طلبك من التطبيق — بلا رأس مال.",
      ],
      capabilities: [
        "إيداع نقدي في أي محفظة eMa",
        "سحوبات نقدية",
        "استلام نقدي لحوالات eMaTuma",
        "معاملات مؤكَّدة برمز OTP",
        "عمولة للوكيل على كل معاملة",
        "التقديم لتصبح وكيلًا من داخل التطبيق",
        "شحن محافظ العملاء نيابةً عنهم",
        "صرف النقد للعملاء",
        "خدمة المجتمعات التي تتعامل بالنقد",
        "لا تتطلب أي بنية بنكية",
      ],
      audience: [
        "متاجر الحي",
        "محطات الخدمة",
        "التجار المحليون",
        "المخابز ومتاجر الأغذية",
        "كل من لديه صندوق نقدي وحركة زبائن",
      ],
      fee: "1.5–2% لكل إيداع أو سحب نقدي، يكسبها الوكيل.",
      settles:
        "النقد يدخل ويخرج من رصيد eWallet نفسه الذي تستخدمه كل الوحدات الأخرى.",
    },
    fr: {
      tagline: "Les espèces deviennent numériques",
      summary:
        "Un réseau de partenaires locaux — échoppes de quartier, stations-service, commerçants — qui chargent les espèces dans les portefeuilles et versent les retraits. Chaque Paymate est une agence, sans l'agence.",
      description:
        "Paymate est ce qui relie une économie de liquide à un registre numérique. Des commerces locaux auxquels vous faites déjà confiance servent de points de dépôt et de retrait : un client remet des billets qui deviennent un solde en quelques secondes, ou récupère son solde en espèces. Sans agence bancaire, sans distributeur, sans carte. Et comme les Paymates gagnent sur chaque transaction, en devenir un est une activité à part entière.",
      howItWorks: [
        "Trouvez le Paymate le plus proche — une échoppe de quartier, une station-service ou un commerçant local de confiance.",
        "Remettez des espèces pour alimenter votre compte, ou demandez un retrait pour en récupérer.",
        "Confirmez l'opération avec le code OTP envoyé sur votre téléphone.",
        "Votre solde se met à jour instantanément et fonctionne sur les 14 modules.",
        "Envie de le devenir ? Faites votre demande dans l'application — aucun capital requis.",
      ],
      capabilities: [
        "Dépôt d'espèces sur tout portefeuille eMa",
        "Retraits d'espèces",
        "Retrait en espèces des transferts eMaTuma",
        "Transactions confirmées par code OTP",
        "Commission d'agent sur chaque transaction",
        "Candidature dans l'application pour devenir Paymate",
        "Recharge des portefeuilles pour le compte des clients",
        "Versement d'espèces aux clients",
        "Au service des communautés qui vivent au comptant",
        "Aucune infrastructure bancaire nécessaire",
      ],
      audience: [
        "Échoppes de quartier",
        "Stations-service",
        "Commerçants locaux",
        "Boulangeries et commerces alimentaires",
        "Toute activité avec une caisse et du passage",
      ],
      fee: "1,5 à 2 % par dépôt ou retrait d'espèces, perçus par le Paymate.",
      settles:
        "Les espèces entrent et sortent du même solde eWallet que tous les autres modules utilisent.",
    },
    pt: {
      tagline: "O numerário torna-se digital",
      summary:
        "Uma rede de parceiros locais — lojas de bairro, estações de serviço, comerciantes — que carregam numerário nas carteiras e pagam levantamentos. Cada Paymate é uma agência, sem o edifício.",
      description:
        "O Paymate é o que liga uma economia de numerário a um registo digital. Negócios locais em que já confia funcionam como pontos de depósito e levantamento: o cliente entrega notas que se tornam saldo em segundos, ou levanta o seu saldo em numerário. Sem balcão bancário, sem multibanco, sem cartão. E como os Paymates ganham em cada transação que processam, ser um é um negócio por si só.",
      howItWorks: [
        "Encontre o Paymate mais próximo — uma loja de bairro, uma estação de serviço ou um comerciante local de confiança.",
        "Entregue numerário para carregar, ou peça um levantamento para receber notas.",
        "Confirme a operação com o código OTP enviado para o seu telemóvel.",
        "O seu saldo é atualizado de imediato e funciona nos 14 módulos.",
        "Quer tornar-se um? Candidate-se na aplicação — sem capital necessário.",
      ],
      capabilities: [
        "Depósito em qualquer carteira eMa",
        "Levantamentos em numerário",
        "Levantamento em numerário de transferências eMaTuma",
        "Transações confirmadas por código OTP",
        "Comissão de agente em cada transação",
        "Candidatura na aplicação para ser Paymate",
        "Carregar carteiras em nome dos clientes",
        "Entregar numerário aos clientes",
        "Ao serviço de comunidades que vivem do numerário",
        "Sem necessidade de infraestrutura bancária",
      ],
      audience: [
        "Lojas de bairro",
        "Estações de serviço",
        "Comerciantes locais",
        "Padarias e comércio alimentar",
        "Qualquer negócio com caixa e movimento",
      ],
      fee: "1,5 a 2% por depósito ou levantamento, ganhos pelo Paymate.",
      settles:
        "O numerário entra e sai do mesmo saldo eWallet que todos os outros módulos usam.",
    },
    es: {
      tagline: "El efectivo se vuelve digital",
      summary:
        "Una red de socios locales —tiendas de barrio, gasolineras, comerciantes— que ingresan efectivo en las carteras y pagan las retiradas. Cada Paymate es una sucursal, sin sucursal.",
      description:
        "Paymates es lo que conecta una economía de efectivo con un libro mayor digital. Comercios locales en los que ya confías actúan como puntos de ingreso y retirada: un cliente entrega billetes y se convierten en saldo en segundos, o retira saldo en forma de efectivo. Sin sucursal bancaria, sin cajero, sin tarjeta. Y como los Paymates ganan con cada transacción que gestionan, serlo es un negocio en sí mismo.",
      howItWorks: [
        "Busca tu Paymate más cercano: una tienda de barrio, una gasolinera o un comerciante local de confianza.",
        "Entrega efectivo para cargar, o pide una retirada para sacar dinero.",
        "Confirma la operación con el código OTP enviado a tu teléfono.",
        "Tu saldo se actualiza al instante y funciona en los 14 módulos.",
        "¿Quieres ser uno? Solicítalo en la aplicación: sin capital inicial.",
      ],
      capabilities: [
        "Ingreso de efectivo en cualquier cartera eMa",
        "Retiradas de efectivo",
        "Recogida en efectivo de remesas eMaTuma",
        "Operaciones confirmadas por OTP",
        "Comisión de agente en cada transacción",
        "Solicitud para ser Paymate desde la aplicación",
        "Recarga de carteras en nombre de los clientes",
        "Entrega de efectivo a los clientes",
        "Atiende a comunidades que operan en efectivo",
        "Sin necesidad de infraestructura bancaria",
      ],
      audience: [
        "Tiendas de barrio",
        "Gasolineras",
        "Comerciantes locales",
        "Panaderías y comercios de alimentación",
        "Cualquiera con caja y afluencia de público",
      ],
      fee: "1,5–2 % por cada ingreso o retirada de efectivo, que gana el Paymate.",
      settles:
        "El efectivo entra y sale del mismo saldo de la eWallet que usan todos los demás módulos.",
    },
  },

  {
    id: "ematuma",
    name: "eMaTuma",
    family: FAMILY.MONEY,
    status: STATUS.LIVE,
    ticketCode: " EMY_TUMA", // leading space is the backend's actual code
    links: {
      android:
        "https://play.google.com/store/apps/details?id=com.sobekit.ematuma&hl=en_US",
      web: "https://ematuma.emalyami.com/",
    },
    related: ["ewallet", "paymate", "emacargo"],
    en: {
      tagline: "Money across borders",
      summary:
        "Send internationally in real time at a fraction of bank cost. Live exchange rates, a built-in currency calculator, and cash pickup at any registered Paymate.",
      description:
        "eMaTuma moves money across borders from your phone. Pick the amount and the currency, check the live rate, and send — the recipient collects it as balance or as cash from a registered Paymate. No branch visit, no multi-day wait, and none of the 8–12% that conventional remittance takes out of a family's money.",
      howItWorks: [
        "Choose the amount and the currency you want to send.",
        "Check the live exchange rate and use the calculator to convert.",
        "Confirm the transfer — the fee is charged at this moment.",
        "The recipient receives it in real time as wallet balance.",
        "Or they collect it as cash from any registered Paymate.",
      ],
      capabilities: [
        "Real-time international transfers",
        "Live, continuously updated exchange rates",
        "Built-in currency calculator",
        "Safaru amount calculator",
        "Cash pickup at any registered Paymate",
        "Full transaction history",
        "Costs a fraction of conventional remittance",
        "Settles into the recipient's eWallet",
      ],
      audience: [
        "Migrant workers",
        "Families supporting relatives abroad",
        "Cross-border traders",
        "Importers and exporters",
      ],
      fee: "Charged when you confirm the transfer.",
      settles:
        "Sends from your eWallet; arrives in theirs — or as cash at a Paymate.",
    },
    ar: {
      tagline: "الأموال عبر الحدود",
      summary:
        "أرسل دوليًا في الوقت الفعلي وبجزء من تكلفة البنوك. أسعار صرف حيّة، وحاسبة عملات مدمجة، واستلام نقدي لدى أي وكيل Paymate مسجّل.",
      description:
        "ينقل eMaTuma الأموال عبر الحدود من هاتفك. اختر المبلغ والعملة، وراجع السعر الحيّ، وأرسل — فيستلمها المستفيد رصيدًا أو نقدًا من وكيل Paymate مسجّل. بلا زيارة فرع، وبلا انتظار أيام، وبلا نسبة الـ8–12% التي تقتطعها الحوالات التقليدية من أموال الأسر.",
      howItWorks: [
        "اختر المبلغ والعملة التي تريد الإرسال بها.",
        "راجع سعر الصرف الحيّ واستخدم الحاسبة للتحويل.",
        "أكّد التحويل — وعند هذه اللحظة تُحتسب الرسوم.",
        "يستلم المستفيد المبلغ في الوقت الفعلي رصيدًا في محفظته.",
        "أو يستلمه نقدًا من أي وكيل Paymate مسجّل.",
      ],
      capabilities: [
        "تحويلات دولية في الوقت الفعلي",
        "أسعار صرف حيّة ومحدَّثة باستمرار",
        "حاسبة عملات مدمجة",
        "حاسبة مبلغ السفاري",
        "استلام نقدي لدى أي وكيل Paymate مسجّل",
        "سجل كامل للمعاملات",
        "تكلفة أقل بكثير من الحوالات التقليدية",
        "الاستقرار في محفظة المستفيد",
      ],
      audience: [
        "العمالة المغتربة",
        "الأسر التي تعيل أقارب في الخارج",
        "التجار عبر الحدود",
        "المستوردون والمصدّرون",
      ],
      fee: "تُحتسب عند تأكيدك للتحويل.",
      settles:
        "يُرسل من محفظتك ويصل إلى محفظته — أو نقدًا لدى وكيل Paymate.",
    },
    fr: {
      tagline: "L'argent au-delà des frontières",
      summary:
        "Envoyez à l'international en temps réel pour une fraction du coût bancaire. Taux de change en direct, convertisseur intégré et retrait en espèces chez tout Paymate agréé.",
      description:
        "eMaTuma fait circuler l'argent au-delà des frontières depuis votre téléphone. Choisissez le montant et la devise, vérifiez le taux en direct, et envoyez — le bénéficiaire reçoit un solde ou des espèces chez un Paymate agréé. Sans passage en agence, sans attendre plusieurs jours, et sans les 8 à 12 % que les transferts classiques prélèvent sur l'argent d'une famille.",
      howItWorks: [
        "Choisissez le montant et la devise à envoyer.",
        "Vérifiez le taux de change en direct et utilisez le convertisseur.",
        "Confirmez le transfert — les frais s'appliquent à ce moment précis.",
        "Le bénéficiaire le reçoit en temps réel sous forme de solde.",
        "Ou il le retire en espèces chez tout Paymate agréé.",
      ],
      capabilities: [
        "Transferts internationaux en temps réel",
        "Taux de change en direct, mis à jour en continu",
        "Convertisseur de devises intégré",
        "Calculateur de montant Safaru",
        "Retrait en espèces chez tout Paymate agréé",
        "Historique complet des transactions",
        "Coût bien inférieur aux transferts classiques",
        "Versement sur l'eWallet du bénéficiaire",
      ],
      audience: [
        "Travailleurs migrants",
        "Familles soutenant des proches à l'étranger",
        "Commerçants transfrontaliers",
        "Importateurs et exportateurs",
      ],
      fee: "Facturés lorsque vous confirmez le transfert.",
      settles:
        "Part de votre eWallet et arrive dans le sien — ou en espèces chez un Paymate.",
    },
    pt: {
      tagline: "Dinheiro além-fronteiras",
      summary:
        "Envie para o estrangeiro em tempo real por uma fração do custo bancário. Câmbios em direto, calculadora integrada e levantamento em numerário em qualquer Paymate registado.",
      description:
        "O eMaTuma move dinheiro além-fronteiras a partir do seu telemóvel. Escolha o montante e a moeda, veja o câmbio em direto e envie — o destinatário recebe como saldo ou em numerário num Paymate registado. Sem ir a um balcão, sem esperar dias, e sem os 8 a 12% que as remessas tradicionais retiram ao dinheiro de uma família.",
      howItWorks: [
        "Escolha o montante e a moeda que quer enviar.",
        "Veja o câmbio em direto e use a calculadora para converter.",
        "Confirme a transferência — é neste momento que a taxa é cobrada.",
        "O destinatário recebe em tempo real como saldo na carteira.",
        "Ou levanta em numerário em qualquer Paymate registado.",
      ],
      capabilities: [
        "Transferências internacionais em tempo real",
        "Câmbios em direto, atualizados continuamente",
        "Calculadora de moeda integrada",
        "Calculadora de montante Safaru",
        "Levantamento em qualquer Paymate registado",
        "Histórico completo de transações",
        "Custo muito inferior ao das remessas tradicionais",
        "Liquidação na eWallet do destinatário",
      ],
      audience: [
        "Trabalhadores emigrantes",
        "Famílias que sustentam familiares no estrangeiro",
        "Comerciantes transfronteiriços",
        "Importadores e exportadores",
      ],
      fee: "Cobrada quando confirma a transferência.",
      settles:
        "Sai da sua eWallet e chega à dele — ou em numerário num Paymate.",
    },
    es: {
      tagline: "Dinero más allá de las fronteras",
      summary:
        "Envía a otro país en tiempo real por una fracción del coste bancario. Tipos de cambio en vivo, calculadora de divisas integrada y recogida en efectivo en cualquier Paymate registrado.",
      description:
        "eMaTuma mueve dinero entre países desde tu teléfono. Elige el importe y la divisa, comprueba el tipo en vivo y envía: el destinatario lo recibe como saldo o lo recoge en efectivo en un Paymate registrado. Sin ir a una sucursal, sin esperar días y sin el 8–12 % que las remesas convencionales restan al dinero de una familia.",
      howItWorks: [
        "Elige el importe y la divisa que quieres enviar.",
        "Consulta el tipo de cambio en vivo y usa la calculadora para convertir.",
        "Confirma la transferencia: la comisión se cobra en ese momento.",
        "El destinatario la recibe en tiempo real como saldo de su cartera.",
        "O la recoge en efectivo en cualquier Paymate registrado.",
      ],
      capabilities: [
        "Transferencias internacionales en tiempo real",
        "Tipos de cambio en vivo, actualizados de forma continua",
        "Calculadora de divisas integrada",
        "Calculadora de importes Safaru",
        "Recogida en efectivo en cualquier Paymate registrado",
        "Historial completo de transacciones",
        "Cuesta una fracción de la remesa convencional",
        "Liquida en la eWallet del destinatario",
      ],
      audience: [
        "Trabajadores migrantes",
        "Familias que sostienen a parientes en el extranjero",
        "Comerciantes transfronterizos",
        "Importadores y exportadores",
      ],
      fee: "Se cobra al confirmar la transferencia.",
      settles:
        "Sale de tu eWallet y llega a la suya, o en efectivo en un Paymate.",
    },
  },

  {
    id: "siba",
    name: "SIBA",
    family: FAMILY.MONEY,
    status: STATUS.LIVE,
    ticketCode: "Emalyami",
    links: { android: MAIN_APP, web: null },
    related: ["emasave", "ewallet", "emafunding"],
    en: {
      tagline: "The rotating savings circle",
      summary:
        "The stokvel, digitised. A group contributes a fixed amount on a set cycle, and each month one member collects the whole pool. Discipline, community, and a lump sum when your turn comes.",
      description:
        "SIBA is the rotating savings system communities have run for generations, moved onto the phone. Friends, relatives or colleagues contribute a fixed amount regularly; each cycle, one member collects the full pooled sum — enough for a deposit, stock, school fees or an emergency. The cycle continues until everyone has had a turn, so nobody carries the group and nobody is left out.",
      howItWorks: [
        "Any member can create a group — you become its admin.",
        "Invite friends, relatives or colleagues. A minimum of 3 members starts a group.",
        "Set the rules and the contribution to match the group's savings goal.",
        "Everyone contributes on the cycle, and every member can see who has paid.",
        "Each cycle one member collects the whole pool, until everyone has had a turn.",
      ],
      capabilities: [
        "Any user can create a group",
        "Minimum 3 members per group",
        "One user can run many groups at once",
        "Rules customised to the group's goal",
        "Every member sees every contribution",
        "Built-in group chat",
        "Automatic deduction on the cycle",
        "Payout rotates until all members have collected",
      ],
      audience: [
        "Families and friend groups",
        "Workplace savings circles",
        "Community associations",
        "Anyone without access to credit",
      ],
      fee: "15% administration fee on the group's disbursement.",
      settles:
        "Contributions leave and payouts arrive in your eWallet, on the same phone number.",
    },
    ar: {
      tagline: "الجمعية الدوّارة",
      summary:
        "نظام الجمعية التقليدي، رقميًا. تساهم المجموعة بمبلغ ثابت في دورة محددة، ويستلم عضو واحد المبلغ المجمّع كل شهر. انضباط، وتكافل، ومبلغ كبير عندما يأتي دورك.",
      description:
        "SIBA هو نظام الادّخار الدوّار الذي تديره المجتمعات منذ أجيال، منقولًا إلى الهاتف. يساهم الأصدقاء أو الأقارب أو الزملاء بمبلغ ثابت بانتظام، وفي كل دورة يستلم عضو واحد المبلغ المجمّع كاملًا — بما يكفي لدفعة مقدّمة أو بضاعة أو مصاريف دراسة أو طارئ. وتستمر الدورة حتى يأخذ الجميع دورهم، فلا يحمل أحد المجموعة وحده ولا يُستبعد أحد.",
      howItWorks: [
        "أي عضو يستطيع إنشاء مجموعة — وتصبح أنت مديرها.",
        "ادعُ أصدقاءك أو أقاربك أو زملاءك. ويكفي 3 أعضاء كحد أدنى لبدء المجموعة.",
        "حدّد القواعد وقيمة المساهمة بما يناسب هدف المجموعة الادّخاري.",
        "يساهم الجميع وفق الدورة، ويستطيع كل عضو أن يرى من سدّد.",
        "في كل دورة يستلم عضو واحد المبلغ المجمّع، حتى يأخذ الجميع دورهم.",
      ],
      capabilities: [
        "أي مستخدم يستطيع إنشاء مجموعة",
        "3 أعضاء كحد أدنى لكل مجموعة",
        "المستخدم الواحد يدير عدة مجموعات في وقت واحد",
        "قواعد مخصّصة بحسب هدف المجموعة",
        "كل عضو يرى كل مساهمة",
        "محادثة جماعية مدمجة",
        "خصم تلقائي وفق الدورة",
        "الصرف يدور حتى يستلم كل الأعضاء",
      ],
      audience: [
        "الأسر ومجموعات الأصدقاء",
        "جمعيات زملاء العمل",
        "الروابط المجتمعية",
        "كل من لا يصل إلى التمويل",
      ],
      fee: "رسوم إدارية 15% على صرف المجموعة.",
      settles: "المساهمات تخرج والمستحقات تصل إلى محفظتك، على رقم الهاتف نفسه.",
    },
    fr: {
      tagline: "Le cercle d'épargne tournante",
      summary:
        "Le stokvel, version numérique. Un groupe cotise un montant fixe selon un cycle défini, et chaque mois un membre encaisse la totalité de la cagnotte. De la discipline, de la solidarité, et une somme conséquente quand vient votre tour.",
      description:
        "SIBA, c'est le système d'épargne tournante que les communautés pratiquent depuis des générations, porté sur le téléphone. Amis, proches ou collègues cotisent régulièrement un montant fixe ; à chaque cycle, un membre encaisse la cagnotte entière — de quoi couvrir un acompte, du stock, des frais de scolarité ou un imprévu. Le cycle se poursuit jusqu'à ce que chacun ait eu son tour : personne ne porte le groupe, personne n'est laissé de côté.",
      howItWorks: [
        "N'importe quel membre peut créer un groupe — vous en devenez l'administrateur.",
        "Invitez amis, proches ou collègues. Trois membres minimum pour démarrer.",
        "Fixez les règles et la cotisation selon l'objectif d'épargne du groupe.",
        "Chacun cotise selon le cycle, et tout le monde voit qui a payé.",
        "À chaque cycle, un membre encaisse la cagnotte, jusqu'à ce que tous soient passés.",
      ],
      capabilities: [
        "Tout utilisateur peut créer un groupe",
        "Trois membres minimum par groupe",
        "Un utilisateur peut gérer plusieurs groupes à la fois",
        "Règles adaptées à l'objectif du groupe",
        "Chaque membre voit chaque cotisation",
        "Messagerie de groupe intégrée",
        "Prélèvement automatique selon le cycle",
        "Versement tournant jusqu'à ce que tous aient encaissé",
      ],
      audience: [
        "Familles et cercles d'amis",
        "Cercles d'épargne entre collègues",
        "Associations communautaires",
        "Toute personne sans accès au crédit",
      ],
      fee: "Frais d'administration de 15 % sur le versement du groupe.",
      settles:
        "Les cotisations partent et les versements arrivent sur votre eWallet, sur le même numéro de téléphone.",
    },
    pt: {
      tagline: "O círculo de poupança rotativa",
      summary:
        "O stokvel, em versão digital. Um grupo contribui com um valor fixo num ciclo definido, e todos os meses um membro recebe o bolo inteiro. Disciplina, entreajuda e um valor considerável quando chega a sua vez.",
      description:
        "O SIBA é o sistema de poupança rotativa que as comunidades praticam há gerações, trazido para o telemóvel. Amigos, familiares ou colegas contribuem regularmente com um valor fixo; em cada ciclo, um membro recebe a totalidade — o suficiente para uma entrada, stock, propinas ou uma emergência. O ciclo continua até todos terem tido a sua vez, para que ninguém carregue o grupo sozinho nem fique de fora.",
      howItWorks: [
        "Qualquer membro pode criar um grupo — passa a ser o administrador.",
        "Convide amigos, familiares ou colegas. Bastam 3 membros para começar.",
        "Defina as regras e a contribuição conforme o objetivo de poupança do grupo.",
        "Todos contribuem conforme o ciclo, e cada membro vê quem já pagou.",
        "Em cada ciclo um membro recebe o total, até todos terem tido a sua vez.",
      ],
      capabilities: [
        "Qualquer utilizador pode criar um grupo",
        "Mínimo de 3 membros por grupo",
        "Um utilizador pode gerir vários grupos em simultâneo",
        "Regras adaptadas ao objetivo do grupo",
        "Cada membro vê cada contribuição",
        "Conversa de grupo integrada",
        "Débito automático conforme o ciclo",
        "Pagamento rotativo até todos terem recebido",
      ],
      audience: [
        "Famílias e grupos de amigos",
        "Grupos de poupança no trabalho",
        "Associações comunitárias",
        "Quem não tem acesso a crédito",
      ],
      fee: "Taxa de administração de 15% sobre o desembolso do grupo.",
      settles:
        "As contribuições saem e os pagamentos chegam à sua eWallet, no mesmo número de telemóvel.",
    },
    es: {
      tagline: "El círculo de ahorro rotativo",
      summary:
        "La tanda, digitalizada. Un grupo aporta una cantidad fija en un ciclo establecido y cada mes un miembro se lleva todo el fondo. Disciplina, comunidad y una suma completa cuando llega tu turno.",
      description:
        "SIBA es el sistema de ahorro rotativo que las comunidades llevan generaciones practicando, trasladado al teléfono. Amigos, familiares o compañeros aportan una cantidad fija con regularidad; en cada ciclo, un miembro recoge todo el fondo reunido, suficiente para una entrada, inventario, matrículas o una emergencia. El ciclo continúa hasta que todos han tenido su turno, así que nadie carga con el grupo y nadie se queda fuera.",
      howItWorks: [
        "Cualquier miembro puede crear un grupo y se convierte en su administrador.",
        "Invita a amigos, familiares o compañeros. Con un mínimo de 3 miembros arranca el grupo.",
        "Fija las reglas y la aportación según el objetivo de ahorro del grupo.",
        "Todos aportan según el ciclo y cada miembro puede ver quién ha pagado.",
        "En cada ciclo un miembro recoge todo el fondo, hasta que todos hayan tenido su turno.",
      ],
      capabilities: [
        "Cualquier usuario puede crear un grupo",
        "Mínimo de 3 miembros por grupo",
        "Un mismo usuario puede llevar varios grupos a la vez",
        "Reglas adaptadas al objetivo del grupo",
        "Cada miembro ve todas las aportaciones",
        "Chat de grupo integrado",
        "Descuento automático según el ciclo",
        "El reparto rota hasta que todos los miembros han cobrado",
      ],
      audience: [
        "Familias y grupos de amigos",
        "Círculos de ahorro en el trabajo",
        "Asociaciones vecinales",
        "Cualquiera sin acceso a crédito",
      ],
      fee: "Comisión de administración del 15 % sobre el desembolso del grupo.",
      settles:
        "Las aportaciones salen y los repartos llegan a tu eWallet, en el mismo número de teléfono.",
    },
  },

  {
    id: "emasave",
    name: "eMaSave",
    family: FAMILY.MONEY,
    status: STATUS.LIVE,
    ticketCode: " EMY_SAVE", // leading space is the backend's actual code
    links: {
      android: "https://play.google.com/store/apps/details?id=com.sobekit.emasave",
      web: "https://emasave.emalyami.com/",
    },
    related: ["siba", "ewallet", "emafunding"],
    en: {
      tagline: "The joint strongbox",
      summary:
        "Save toward a goal with people you trust. Daily, weekly or monthly cycles; every member sees every contribution; withdrawals require unanimous agreement.",
      description:
        "eMaSave is a shared strongbox. You create it, invite the people you're saving with, and choose how often everyone contributes. What makes it safe is the rule on the way out: no single member can withdraw from the box — it takes unanimous agreement from every participant. Collective money, protected by collective control.",
      howItWorks: [
        "Create a StrongBox — you become its admin.",
        "Choose the cycle: daily, weekly or monthly.",
        "Send invitations to the people you want saving with you.",
        "Once at least 3 members have joined, the box starts.",
        "Withdrawals release only on unanimous agreement from all participants.",
      ],
      capabilities: [
        "Create and administer a StrongBox",
        "Daily, weekly or monthly cycles",
        "Invite members directly",
        "Minimum 3 members to start",
        "Shared savings goals",
        "Every contribution visible to every member",
        "Withdrawals need unanimous approval",
        "Built-in member chat",
      ],
      audience: [
        "Families saving together",
        "Business partners",
        "Community projects",
        "Friend groups with a shared goal",
      ],
      fee: "Charged when the StrongBox starts, and again on payout.",
      settles: "Contributions and payouts move through each member's eWallet.",
    },
    ar: {
      tagline: "الصندوق المشترك",
      summary:
        "ادّخر نحو هدف مع من تثق بهم. دورات يومية أو أسبوعية أو شهرية؛ كل عضو يرى كل مساهمة؛ والسحب يتطلب موافقة جماعية بالإجماع.",
      description:
        "eMaSave صندوق ادّخار مشترك. تنشئه، وتدعو من تدّخر معهم، وتختار وتيرة المساهمة. وما يجعله آمنًا هو قاعدة الخروج: لا يستطيع أي عضو بمفرده السحب من الصندوق — بل يتطلّب ذلك موافقة بالإجماع من كل المشاركين. مال جماعي تحميه سيطرة جماعية.",
      howItWorks: [
        "أنشئ صندوقًا — وتصبح أنت مديره.",
        "اختر الدورة: يومية أو أسبوعية أو شهرية.",
        "أرسل الدعوات لمن تريد أن تدّخر معهم.",
        "بانضمام 3 أعضاء على الأقل، يبدأ الصندوق.",
        "لا يُفرَج عن السحب إلا بموافقة كل المشاركين بالإجماع.",
      ],
      capabilities: [
        "إنشاء الصندوق وإدارته",
        "دورات يومية أو أسبوعية أو شهرية",
        "دعوة الأعضاء مباشرة",
        "3 أعضاء كحد أدنى للبدء",
        "أهداف ادّخارية مشتركة",
        "كل مساهمة مرئية لكل عضو",
        "السحب يتطلب موافقة بالإجماع",
        "محادثة مدمجة بين الأعضاء",
      ],
      audience: [
        "الأسر التي تدّخر معًا",
        "شركاء العمل",
        "المشاريع المجتمعية",
        "مجموعات الأصدقاء ذات الهدف المشترك",
      ],
      fee: "تُحتسب عند بدء الصندوق، ومرة أخرى عند الصرف.",
      settles: "المساهمات والمستحقات تمرّ عبر محفظة كل عضو.",
    },
    fr: {
      tagline: "Le coffre commun",
      summary:
        "Épargnez vers un objectif avec des personnes de confiance. Cycles quotidiens, hebdomadaires ou mensuels ; chaque membre voit chaque cotisation ; les retraits exigent l'accord unanime.",
      description:
        "eMaSave est un coffre partagé. Vous le créez, invitez les personnes avec qui vous épargnez et choisissez la fréquence des cotisations. Ce qui le rend sûr, c'est la règle de sortie : aucun membre ne peut retirer seul — il faut l'accord unanime de tous les participants. De l'argent collectif, protégé par un contrôle collectif.",
      howItWorks: [
        "Créez un coffre — vous en devenez l'administrateur.",
        "Choisissez le cycle : quotidien, hebdomadaire ou mensuel.",
        "Envoyez des invitations aux personnes avec qui vous voulez épargner.",
        "Dès que trois membres ont rejoint, le coffre démarre.",
        "Les retraits ne se débloquent qu'avec l'accord unanime de tous les participants.",
      ],
      capabilities: [
        "Créer et administrer un coffre",
        "Cycles quotidiens, hebdomadaires ou mensuels",
        "Inviter directement des membres",
        "Trois membres minimum pour démarrer",
        "Objectifs d'épargne partagés",
        "Chaque cotisation visible par tous",
        "Retraits soumis à l'accord unanime",
        "Messagerie entre membres intégrée",
      ],
      audience: [
        "Familles qui épargnent ensemble",
        "Associés en affaires",
        "Projets communautaires",
        "Groupes d'amis avec un objectif commun",
      ],
      fee: "Facturés au démarrage du coffre, puis lors du versement.",
      settles:
        "Les cotisations et les versements transitent par l'eWallet de chaque membre.",
    },
    pt: {
      tagline: "O cofre partilhado",
      summary:
        "Poupe para um objetivo com pessoas em quem confia. Ciclos diários, semanais ou mensais; cada membro vê cada contribuição; os levantamentos exigem acordo unânime.",
      description:
        "O eMaSave é um cofre partilhado. Cria-o, convida quem vai poupar consigo e escolhe a frequência das contribuições. O que o torna seguro é a regra de saída: nenhum membro pode levantar sozinho — é preciso o acordo unânime de todos os participantes. Dinheiro coletivo, protegido por controlo coletivo.",
      howItWorks: [
        "Crie um cofre — passa a ser o administrador.",
        "Escolha o ciclo: diário, semanal ou mensal.",
        "Envie convites a quem quer poupar consigo.",
        "Assim que três membros aderirem, o cofre arranca.",
        "Os levantamentos só são libertados com o acordo unânime de todos.",
      ],
      capabilities: [
        "Criar e administrar um cofre",
        "Ciclos diários, semanais ou mensais",
        "Convidar membros diretamente",
        "Mínimo de 3 membros para começar",
        "Objetivos de poupança partilhados",
        "Cada contribuição visível para todos",
        "Levantamentos com aprovação unânime",
        "Conversa entre membros integrada",
      ],
      audience: [
        "Famílias que poupam em conjunto",
        "Sócios de negócio",
        "Projetos comunitários",
        "Grupos de amigos com um objetivo comum",
      ],
      fee: "Cobrada no arranque do cofre e novamente no levantamento.",
      settles:
        "As contribuições e os pagamentos passam pela eWallet de cada membro.",
    },
    es: {
      tagline: "La hucha conjunta",
      summary:
        "Ahorra hacia un objetivo con gente de confianza. Ciclos diarios, semanales o mensuales; cada miembro ve todas las aportaciones; las retiradas requieren acuerdo unánime.",
      description:
        "eMaSave es una hucha compartida. Tú la creas, invitas a las personas con las que ahorras y eliges cada cuánto aporta cada una. Lo que la hace segura es la regla de salida: ningún miembro puede retirar por su cuenta; hace falta el acuerdo unánime de todos los participantes. Dinero colectivo, protegido por control colectivo.",
      howItWorks: [
        "Crea una hucha y conviértete en su administrador.",
        "Elige el ciclo: diario, semanal o mensual.",
        "Envía invitaciones a las personas con las que quieres ahorrar.",
        "Cuando se hayan unido al menos 3 miembros, la hucha arranca.",
        "Las retiradas solo se liberan con el acuerdo unánime de todos los participantes.",
      ],
      capabilities: [
        "Crear y administrar una hucha",
        "Ciclos diarios, semanales o mensuales",
        "Invitar miembros directamente",
        "Mínimo de 3 miembros para empezar",
        "Objetivos de ahorro compartidos",
        "Cada aportación es visible para todos los miembros",
        "Las retiradas exigen aprobación unánime",
        "Chat de miembros integrado",
      ],
      audience: [
        "Familias que ahorran juntas",
        "Socios de un negocio",
        "Proyectos comunitarios",
        "Grupos de amigos con un objetivo común",
      ],
      fee: "Se cobra al abrir la hucha y de nuevo en el reparto.",
      settles: "Las aportaciones y los repartos pasan por la eWallet de cada miembro.",
    },
  },

  {
    id: "emafunding",
    name: "eMaFunding",
    family: FAMILY.MONEY,
    status: STATUS.LIVE,
    ticketCode: "CROWD_FUNDING",
    links: {
      android:
        "https://play.google.com/store/apps/details?id=com.sobekit.crowdfunding",
      web: "https://emafund.emalyami.com/",
    },
    related: ["emapos", "emamall", "ewallet"],
    en: {
      tagline: "Raise the capital",
      summary:
        "Publish a campaign with your documents and funding goal, receive offers from backers, sign the agreement in-app, and draw down the funds. Crowdfunding for businesses that banks won't score.",
      description:
        "eMaFunding lets a business raise capital from many people instead of one institution. You set out the project, the funding needed and the timeline, and attach the documents that make your case. Backers browse campaigns and make offers; you choose the ones that suit you; both sides sign in-app and the funds are released. For an SME with a real trading record but no collateral, this is the route to capital that conventional lending closes off.",
      howItWorks: [
        "Choose your field and create a campaign with full details and documents.",
        "Set the funding goal and timeline, and update the details any time.",
        "Backers browse campaigns and make offers on yours.",
        "Choose the offers that suit your campaign.",
        "Both sides sign the agreement, and the funds are released to your wallet.",
      ],
      capabilities: [
        "Create a campaign in your field",
        "Attach supporting documents",
        "Funding goals and timelines",
        "Receive and compare backer offers",
        "Accept or decline any offer",
        "In-app agreements signed by both sides",
        "Chat between all parties",
        "Campaign promotion to the eMa network",
      ],
      audience: [
        "SMEs without collateral",
        "Startups and new ventures",
        "Community projects",
        "Artisans and professionals",
        "Informal businesses entering the formal economy",
      ],
      fee: "Charged when the campaign is created.",
      settles: "Raised funds are released into your eWallet.",
    },
    ar: {
      tagline: "احصل على رأس المال",
      summary:
        "انشر حملتك مع مستنداتك وهدفك التمويلي، واستقبل عروض الداعمين، ووقّع الاتفاقية داخل التطبيق، واسحب الأموال. تمويل جماعي للمشاريع التي لا تصنّفها البنوك.",
      description:
        "يتيح eMaFunding للمشروع أن يجمع رأس المال من أشخاص كثيرين بدل مؤسسة واحدة. تعرض مشروعك والتمويل المطلوب والجدول الزمني، وترفق المستندات التي تدعم موقفك. يتصفّح الداعمون الحملات ويقدّمون عروضهم، فتختار ما يناسبك، ويوقّع الطرفان داخل التطبيق ويُفرَج عن الأموال. وبالنسبة لمشروع صغير له سجل تجاري حقيقي لكن بلا ضمانات، فهذا هو الطريق إلى رأس المال الذي يغلقه الإقراض التقليدي.",
      howItWorks: [
        "اختر مجالك وأنشئ حملة ببيانات كاملة ومستندات داعمة.",
        "حدّد هدف التمويل والجدول الزمني، وحدّث التفاصيل في أي وقت.",
        "يتصفّح الداعمون الحملات ويقدّمون عروضهم على حملتك.",
        "اختر العروض التي تناسب حملتك.",
        "يوقّع الطرفان الاتفاقية، وتُفرَج الأموال إلى محفظتك.",
      ],
      capabilities: [
        "إنشاء حملة في مجالك",
        "إرفاق المستندات الداعمة",
        "أهداف تمويلية وجداول زمنية",
        "استقبال عروض الداعمين ومقارنتها",
        "قبول أو رفض أي عرض",
        "اتفاقيات داخل التطبيق يوقّعها الطرفان",
        "محادثة بين جميع الأطراف",
        "الترويج للحملة داخل شبكة eMa",
      ],
      audience: [
        "المشاريع الصغيرة بلا ضمانات",
        "الشركات الناشئة والمشاريع الجديدة",
        "المشاريع المجتمعية",
        "الحرفيون والمهنيون",
        "المشاريع غير الرسمية الداخلة إلى الاقتصاد الرسمي",
      ],
      fee: "تُحتسب عند إنشاء الحملة.",
      settles: "الأموال المجمّعة تُفرَج إلى محفظتك.",
    },
    fr: {
      tagline: "Levez le capital",
      summary:
        "Publiez une campagne avec vos documents et votre objectif, recevez des offres de contributeurs, signez l'accord dans l'application et débloquez les fonds. Le financement participatif pour les entreprises que les banques ne notent pas.",
      description:
        "eMaFunding permet à une entreprise de lever du capital auprès de nombreuses personnes plutôt que d'un seul établissement. Vous présentez le projet, le financement nécessaire et le calendrier, et joignez les documents qui appuient votre dossier. Les contributeurs parcourent les campagnes et font des offres ; vous retenez celles qui vous conviennent ; les deux parties signent dans l'application et les fonds sont débloqués. Pour une PME au vrai historique commercial mais sans garanties, c'est la voie vers le capital que le crédit classique referme.",
      howItWorks: [
        "Choisissez votre domaine et créez une campagne détaillée avec vos documents.",
        "Fixez l'objectif de financement et le calendrier, modifiables à tout moment.",
        "Les contributeurs parcourent les campagnes et font des offres sur la vôtre.",
        "Retenez les offres qui conviennent à votre campagne.",
        "Les deux parties signent l'accord et les fonds sont versés sur votre portefeuille.",
      ],
      capabilities: [
        "Créer une campagne dans votre domaine",
        "Joindre des pièces justificatives",
        "Objectifs de financement et calendriers",
        "Recevoir et comparer les offres des contributeurs",
        "Accepter ou refuser toute offre",
        "Accords signés dans l'application par les deux parties",
        "Messagerie entre toutes les parties",
        "Promotion de la campagne auprès du réseau eMa",
      ],
      audience: [
        "PME sans garanties",
        "Jeunes pousses et nouveaux projets",
        "Projets communautaires",
        "Artisans et professionnels",
        "Entreprises informelles entrant dans l'économie formelle",
      ],
      fee: "Facturés à la création de la campagne.",
      settles:
        "Les fonds levés sont versés sur votre eWallet.",
    },
    pt: {
      tagline: "Obtenha o capital",
      summary:
        "Publique uma campanha com os seus documentos e o objetivo de financiamento, receba propostas de apoiantes, assine o acordo na aplicação e levante os fundos. Financiamento colaborativo para negócios que os bancos não avaliam.",
      description:
        "O eMaFunding permite que um negócio angarie capital junto de muitas pessoas em vez de uma única instituição. Apresenta o projeto, o financiamento necessário e o prazo, e anexa os documentos que sustentam a sua proposta. Os apoiantes exploram as campanhas e fazem propostas; escolhe as que lhe servem; ambas as partes assinam na aplicação e os fundos são libertados. Para uma PME com histórico comercial real mas sem garantias, é o caminho para o capital que o crédito tradicional fecha.",
      howItWorks: [
        "Escolha a sua área e crie uma campanha com todos os detalhes e documentos.",
        "Defina o objetivo de financiamento e o prazo, alteráveis a qualquer momento.",
        "Os apoiantes exploram as campanhas e fazem propostas na sua.",
        "Escolha as propostas que servem à sua campanha.",
        "Ambas as partes assinam o acordo e os fundos são libertados para a sua carteira.",
      ],
      capabilities: [
        "Criar uma campanha na sua área",
        "Anexar documentos de suporte",
        "Objetivos de financiamento e prazos",
        "Receber e comparar propostas de apoiantes",
        "Aceitar ou recusar qualquer proposta",
        "Acordos assinados na aplicação por ambas as partes",
        "Conversa entre todas as partes",
        "Divulgação da campanha na rede eMa",
      ],
      audience: [
        "PME sem garantias",
        "Startups e novos projetos",
        "Projetos comunitários",
        "Artesãos e profissionais",
        "Negócios informais a entrar na economia formal",
      ],
      fee: "Cobrada na criação da campanha.",
      settles:
        "Os fundos angariados são libertados para a sua eWallet.",
    },
    es: {
      tagline: "Consigue el capital",
      summary:
        "Publica una campaña con tus documentos y tu objetivo de financiación, recibe ofertas de patrocinadores, firma el acuerdo en la aplicación y dispón de los fondos. Financiación colectiva para negocios a los que los bancos no puntúan.",
      description:
        "eMaFunding permite a un negocio levantar capital de muchas personas en lugar de una sola institución. Expones el proyecto, la financiación necesaria y el calendario, y adjuntas los documentos que respaldan tu caso. Los patrocinadores exploran campañas y hacen ofertas; tú eliges las que te convienen; ambas partes firman en la aplicación y los fondos se liberan. Para una pyme con un historial comercial real pero sin garantías, esta es la vía al capital que la banca convencional cierra.",
      howItWorks: [
        "Elige tu sector y crea una campaña con todos los detalles y documentos.",
        "Fija el objetivo de financiación y el calendario, y actualízalos cuando quieras.",
        "Los patrocinadores exploran campañas y hacen ofertas sobre la tuya.",
        "Elige las ofertas que encajan con tu campaña.",
        "Ambas partes firman el acuerdo y los fondos se liberan en tu cartera.",
      ],
      capabilities: [
        "Crear una campaña en tu sector",
        "Adjuntar documentación de apoyo",
        "Objetivos de financiación y calendarios",
        "Recibir y comparar ofertas de patrocinadores",
        "Aceptar o rechazar cualquier oferta",
        "Acuerdos firmados en la aplicación por ambas partes",
        "Chat entre todas las partes",
        "Promoción de la campaña en la red eMa",
      ],
      audience: [
        "Pymes sin garantías",
        "Startups y nuevos proyectos",
        "Proyectos comunitarios",
        "Artesanos y profesionales",
        "Negocios informales que entran en la economía formal",
      ],
      fee: "Se cobra al crear la campaña.",
      settles: "Los fondos captados se liberan en tu eWallet.",
    },
  },

  {
    id: "patele",
    name: "Patele",
    family: FAMILY.MONEY,
    status: STATUS.LIVE,
    ticketCode: "Emalyami",
    links: { android: MAIN_APP, web: null },
    related: ["emaclinic", "ewallet", "paymate"],
    en: {
      tagline: "Cover and auto-collect",
      summary:
        "A financial-services marketplace where institutions offer loans, insurance and funeral cover, with policy sharing, automated monthly repayments and secure communication built in.",
      description:
        "Patele is an automated collection system and a financial-services marketplace in one. Institutions list loans, insurance, medical schemes and funeral cover; members subscribe and repayments collect automatically each month. It replaces the cash-in-hand, door-to-door premium collection that makes cover expensive to administer and easy to lapse.",
      howItWorks: [
        "Browse cover and credit offered by participating institutions.",
        "Subscribe to the policy or facility that fits.",
        "Your policy documents are shared to you digitally.",
        "Monthly premiums or repayments collect automatically from your wallet.",
        "Communicate securely with the provider through the module.",
      ],
      capabilities: [
        "Loans from participating institutions",
        "Insurance products",
        "Medical scheme subscriptions",
        "Funeral cover",
        "Automated monthly collection",
        "Automated repayments",
        "Digital policy sharing",
        "Secure provider communication",
        "Built for SMME administration",
      ],
      audience: [
        "Insurers and financial institutions",
        "Medical schemes",
        "Funeral parlours",
        "SMMEs administering staff cover",
        "Individuals and families",
      ],
      fee: "Set by the participating institution.",
      settles: "Premiums and repayments collect from your eWallet automatically.",
    },
    ar: {
      tagline: "التغطية والتحصيل الآلي",
      summary:
        "سوق للخدمات المالية تقدّم فيه المؤسسات القروض والتأمين وتغطية الجنازات، مع مشاركة الوثائق والسداد الشهري الآلي والتواصل الآمن.",
      description:
        "Patele نظام تحصيل آلي وسوق للخدمات المالية في آنٍ واحد. تعرض المؤسسات القروض والتأمين والبرامج الطبية وتغطية الجنازات، فيشترك الأعضاء وتُحصَّل الأقساط تلقائيًا كل شهر. وهو يستبدل التحصيل النقدي من باب إلى باب الذي يجعل التغطية مكلفة الإدارة وسهلة السقوط.",
      howItWorks: [
        "تصفّح التغطيات والتمويلات التي تقدّمها المؤسسات المشاركة.",
        "اشترك في الوثيقة أو التسهيل المناسب لك.",
        "تُشارَك معك وثائقك رقميًا.",
        "تُحصَّل الأقساط أو الأقساط الشهرية تلقائيًا من محفظتك.",
        "تواصل بأمان مع مقدّم الخدمة من داخل الوحدة.",
      ],
      capabilities: [
        "قروض من المؤسسات المشاركة",
        "منتجات تأمينية",
        "اشتراكات البرامج الطبية",
        "تغطية الجنازات",
        "تحصيل شهري آلي",
        "سداد آلي للأقساط",
        "مشاركة رقمية للوثائق",
        "تواصل آمن مع مقدّم الخدمة",
        "مصمَّم لإدارة المشاريع الصغيرة والمتوسطة",
      ],
      audience: [
        "شركات التأمين والمؤسسات المالية",
        "البرامج الطبية",
        "دور الجنازات",
        "المشاريع التي تدير تغطية موظفيها",
        "الأفراد والأسر",
      ],
      fee: "تحدّدها المؤسسة المشاركة.",
      settles: "الأقساط والسداد تُحصَّل من محفظتك تلقائيًا.",
    },
    fr: {
      tagline: "Couverture et prélèvement automatique",
      summary:
        "Une place de marché de services financiers où les institutions proposent prêts, assurances et couvertures obsèques, avec partage des contrats, remboursements mensuels automatiques et communication sécurisée.",
      description:
        "Patele est à la fois un système de prélèvement automatique et une place de marché de services financiers. Les institutions y référencent prêts, assurances, mutuelles santé et couvertures obsèques ; les membres souscrivent et les échéances sont prélevées automatiquement chaque mois. Cela remplace la collecte de primes en liquide, de porte en porte, qui rend la couverture coûteuse à gérer et facile à laisser tomber.",
      howItWorks: [
        "Parcourez les couvertures et crédits proposés par les institutions partenaires.",
        "Souscrivez au contrat ou à la facilité qui vous convient.",
        "Vos documents contractuels vous sont transmis en ligne.",
        "Primes et échéances sont prélevées automatiquement sur votre portefeuille.",
        "Échangez en toute sécurité avec le prestataire depuis le module.",
      ],
      capabilities: [
        "Prêts d'institutions partenaires",
        "Produits d'assurance",
        "Souscriptions à des mutuelles santé",
        "Couverture obsèques",
        "Prélèvement mensuel automatique",
        "Remboursements automatiques",
        "Partage de contrats en ligne",
        "Communication sécurisée avec le prestataire",
        "Conçu pour la gestion des TPE-PME",
      ],
      audience: [
        "Assureurs et institutions financières",
        "Mutuelles santé",
        "Pompes funèbres",
        "TPE-PME gérant la couverture de leurs salariés",
        "Particuliers et familles",
      ],
      fee: "Fixés par l'institution partenaire.",
      settles:
        "Primes et échéances sont prélevées automatiquement sur votre eWallet.",
    },
    pt: {
      tagline: "Cobertura e cobrança automática",
      summary:
        "Um mercado de serviços financeiros onde as instituições oferecem crédito, seguros e cobertura funerária, com partilha de apólices, pagamentos mensais automáticos e comunicação segura.",
      description:
        "O Patele é ao mesmo tempo um sistema de cobrança automática e um mercado de serviços financeiros. As instituições listam créditos, seguros, planos de saúde e cobertura funerária; os membros subscrevem e as prestações são cobradas automaticamente todos os meses. Substitui a cobrança de prémios em numerário, porta a porta, que torna a cobertura cara de gerir e fácil de perder.",
      howItWorks: [
        "Explore as coberturas e créditos das instituições aderentes.",
        "Subscreva a apólice ou o crédito que lhe serve.",
        "As suas apólices são partilhadas consigo digitalmente.",
        "Prémios e prestações são cobrados automaticamente da sua carteira.",
        "Comunique em segurança com o prestador a partir do módulo.",
      ],
      capabilities: [
        "Créditos de instituições aderentes",
        "Produtos de seguro",
        "Subscrições de planos de saúde",
        "Cobertura funerária",
        "Cobrança mensal automática",
        "Pagamentos automáticos de prestações",
        "Partilha digital de apólices",
        "Comunicação segura com o prestador",
        "Feito para a gestão de micro e pequenas empresas",
      ],
      audience: [
        "Seguradoras e instituições financeiras",
        "Planos de saúde",
        "Agências funerárias",
        "Empresas que gerem a cobertura dos colaboradores",
        "Particulares e famílias",
      ],
      fee: "Definida pela instituição aderente.",
      settles:
        "Prémios e prestações são cobrados automaticamente da sua eWallet.",
    },
    es: {
      tagline: "Cobertura y cobro automático",
      summary:
        "Un mercado de servicios financieros donde las instituciones ofrecen préstamos, seguros y coberturas de decesos, con reparto de pólizas, cuotas mensuales automáticas y comunicación segura integrada.",
      description:
        "Patele es a la vez un sistema de cobro automático y un mercado de servicios financieros. Las instituciones publican préstamos, seguros, planes médicos y coberturas de decesos; los miembros se suscriben y las cuotas se cobran automáticamente cada mes. Sustituye el cobro de primas en efectivo, puerta a puerta, que encarece la administración y facilita que una póliza caduque.",
      howItWorks: [
        "Explora las coberturas y créditos que ofrecen las instituciones participantes.",
        "Suscríbete a la póliza o al producto que encaje.",
        "Los documentos de tu póliza se te entregan en digital.",
        "Las primas o cuotas mensuales se cobran automáticamente de tu cartera.",
        "Comunícate de forma segura con el proveedor desde el propio módulo.",
      ],
      capabilities: [
        "Préstamos de instituciones participantes",
        "Productos de seguro",
        "Suscripciones a planes médicos",
        "Cobertura de decesos",
        "Cobro mensual automático",
        "Cuotas automáticas",
        "Reparto digital de pólizas",
        "Comunicación segura con el proveedor",
        "Pensado para la administración de mipymes",
      ],
      audience: [
        "Aseguradoras e instituciones financieras",
        "Planes médicos",
        "Funerarias",
        "Mipymes que gestionan la cobertura de su personal",
        "Particulares y familias",
      ],
      fee: "La fija la institución participante.",
      settles: "Las primas y las cuotas se cobran automáticamente de tu eWallet.",
    },
  },

  // ──────────────────────────── THE BUSINESS STACK ───────────────────────────
  {
    id: "emapos",
    name: "eMaPOS",
    family: FAMILY.BUSINESS,
    status: STATUS.LIVE,
    ticketCode: "POS",
    links: {
      android: "https://play.google.com/store/apps/details?id=com.sobekit.pos",
      web: "https://posbo.emalyami.com/",
    },
    related: ["emamall", "emacargo", "emafunding"],
    en: {
      tagline: "Your shop, on your phone",
      summary:
        "Run one shop or many. Take stock, scan QR codes, issue receipts, process refunds, log damaged goods, create cashier accounts, and get alerted when stock runs low — with a full web back office for the owner.",
      description:
        "eMaPOS turns any Android phone into a full point-of-sale system. It handles the sale, the stock behind the sale, the staff making the sale, and the supplier who refills the shelf — and every rand taken lands directly in your eMa wallet, ready to spend, save or send.",
      howItWorks: [
        "Create your shop — add your shop details and upload your documents. Run as many shops as you own.",
        "Load your stock — add items with prices, update details any time, and set discounts.",
        "Sell — scan the QR code, take the payment, and issue a printed or emailed receipt.",
        "Add your cashiers — each gets their own account and logs in from the POS app with a username and an OTP sent to their phone. They never touch your eMa account.",
        "Watch the numbers — today's sales, running totals, supplier list and stock levels, live on the dashboard or the web back office.",
      ],
      capabilities: [
        "Multiple shops under one owner account",
        "Full stock take and inventory control",
        "QR code scanning at checkout",
        "Receipts printed or emailed to the customer",
        "Refunds and returns processing",
        "Damaged-goods reporting and register",
        "Item-level discounting",
        "Separate cashier accounts with OTP login",
        "Automatic low-stock notification to suppliers",
        "Today's-sales and supplier views",
        "Web access to the full back office",
        "Settles straight into your eMa wallet",
      ],
      audience: [
        "Major retailers",
        "Bakeries",
        "Spaza shops",
        "Restaurants",
        "Pharmacies",
        "Any shop with a counter",
      ],
      fee: "Charged monthly, automatically debited from your eMa account, based on your total orders for the month. No terminal to buy, no monthly rental, no contract.",
      settles:
        "Every eMaPOS sale lands in the same eMa wallet as your eMaMall orders and eMaServe payouts — one balance, one statement, no reconciliation.",
    },
    ar: {
      tagline: "متجرك في هاتفك",
      summary:
        "أدِر متجرًا واحدًا أو عدة متاجر. جرد المخزون، وامسح رموز QR، وأصدر الإيصالات، وعالج المرتجعات، وسجّل التالف، وأنشئ حسابات للكاشيرات، واستقبل تنبيهات نفاد المخزون — مع لوحة تحكّم كاملة على الويب للمالك.",
      description:
        "تحوّل eMaPOS أي هاتف أندرويد إلى نظام نقطة بيع متكامل. تدير عملية البيع، والمخزون خلفها، والموظفين الذين ينفّذونها، والمورّد الذي يعيد ملء الرفوف — وكل مبلغ يُحصَّل يصل مباشرة إلى محفظة eMa الخاصة بك، جاهزًا للإنفاق أو الادّخار أو التحويل.",
      howItWorks: [
        "أنشئ متجرك — أضف بيانات المتجر وارفع مستنداته. أدِر أي عدد تملكه من المتاجر.",
        "أدخل مخزونك — أضف الأصناف بأسعارها، وحدّث بياناتها في أي وقت، وحدّد الخصومات.",
        "بِع — امسح رمز QR، واستلم الدفعة، وأصدر إيصالًا مطبوعًا أو عبر البريد الإلكتروني.",
        "أضف الكاشيرات — لكل كاشير حساب خاص يدخل به من تطبيق نقطة البيع باسم مستخدم ورمز OTP يصل إلى هاتفه. ولا يصل أحد منهم إلى حساب eMa الخاص بك.",
        "راقب الأرقام — مبيعات اليوم والإجماليات وقائمة الموردين ومستويات المخزون، مباشرة على لوحة التحكّم أو من الويب.",
      ],
      capabilities: [
        "متاجر متعددة تحت حساب مالك واحد",
        "جرد كامل وإدارة للمخزون",
        "مسح رموز QR عند الدفع",
        "إيصالات مطبوعة أو مُرسلة إلى بريد العميل",
        "معالجة المرتجعات والاستردادات",
        "الإبلاغ عن البضائع التالفة وتسجيلها",
        "خصومات على مستوى الصنف",
        "حسابات منفصلة للكاشيرات بتسجيل دخول عبر OTP",
        "تنبيه تلقائي للموردين عند انخفاض المخزون",
        "عرض مبيعات اليوم وقائمة الموردين",
        "وصول كامل إلى لوحة التحكّم عبر الويب",
        "التحصيل مباشرة في محفظة eMa",
      ],
      audience: [
        "متاجر التجزئة الكبرى",
        "المخابز",
        "متاجر الحي",
        "المطاعم",
        "الصيدليات",
        "أي متجر له كاونتر",
      ],
      fee: "رسوم شهرية تُخصم تلقائيًا من حساب eMa، محسوبة على إجمالي طلباتك خلال الشهر. لا جهاز تشتريه، ولا إيجار شهري، ولا عقد.",
      settles:
        "كل عملية بيع في eMaPOS تصل إلى محفظة eMa نفسها التي تصلها طلبات eMaMall ومستحقات eMaServe — رصيد واحد، وكشف حساب واحد، وبلا تسوية يدوية.",
    },
    fr: {
      tagline: "Votre boutique, sur votre téléphone",
      summary:
        "Gérez une boutique ou plusieurs. Inventoriez, scannez les codes QR, éditez les reçus, traitez les remboursements, enregistrez la casse, créez des comptes caissiers et soyez alerté quand le stock baisse — avec une interface web complète pour le gérant.",
      description:
        "eMaPOS transforme n'importe quel téléphone Android en système de caisse complet. Il gère la vente, le stock derrière la vente, le personnel qui encaisse et le fournisseur qui réapprovisionne — et chaque rand encaissé arrive directement sur votre portefeuille eMa, prêt à être dépensé, épargné ou envoyé.",
      howItWorks: [
        "Créez votre boutique — renseignez ses informations et téléversez vos documents. Gérez autant de boutiques que vous en possédez.",
        "Chargez votre stock — ajoutez les articles et leurs prix, modifiez-les à tout moment et définissez des remises.",
        "Vendez — scannez le code QR, encaissez, et éditez un reçu imprimé ou envoyé par e-mail.",
        "Ajoutez vos caissiers — chacun dispose de son compte et se connecte à l'application de caisse avec un identifiant et un code OTP envoyé sur son téléphone. Ils n'accèdent jamais à votre compte eMa.",
        "Suivez les chiffres — ventes du jour, totaux, liste des fournisseurs et niveaux de stock, en direct sur le tableau de bord ou l'interface web.",
      ],
      capabilities: [
        "Plusieurs boutiques sous un compte propriétaire",
        "Inventaire complet et gestion du stock",
        "Lecture de codes QR à l'encaissement",
        "Reçus imprimés ou envoyés par e-mail",
        "Traitement des remboursements et retours",
        "Déclaration et registre de la casse",
        "Remises au niveau de l'article",
        "Comptes caissiers distincts avec connexion par OTP",
        "Alerte automatique aux fournisseurs en cas de stock bas",
        "Vues ventes du jour et fournisseurs",
        "Accès web à toute l'interface de gestion",
        "Règlement direct sur votre portefeuille eMa",
      ],
      audience: [
        "Grandes surfaces",
        "Boulangeries",
        "Échoppes de quartier",
        "Restaurants",
        "Pharmacies",
        "Tout commerce avec un comptoir",
      ],
      fee: "Facturés mensuellement, prélevés automatiquement sur votre compte eMa et calculés sur le total de vos commandes du mois. Aucun terminal à acheter, aucun loyer mensuel, aucun engagement.",
      settles:
        "Chaque vente eMaPOS arrive sur le même portefeuille eMa que vos commandes eMaMall et vos versements eMaServe — un seul solde, un seul relevé, aucun rapprochement.",
    },
    pt: {
      tagline: "A sua loja, no seu telemóvel",
      summary:
        "Gira uma loja ou várias. Faça inventário, leia códigos QR, emita recibos, processe devoluções, registe quebras, crie contas de operador de caixa e receba alertas quando o stock baixa — com um back office web completo para o proprietário.",
      description:
        "O eMaPOS transforma qualquer telemóvel Android num sistema de ponto de venda completo. Trata da venda, do stock por trás da venda, dos funcionários que a fazem e do fornecedor que repõe a prateleira — e cada rand recebido chega diretamente à sua carteira eMa, pronto a gastar, poupar ou enviar.",
      howItWorks: [
        "Crie a sua loja — adicione os dados e carregue os documentos. Gira tantas lojas quantas tiver.",
        "Carregue o stock — adicione artigos com preços, atualize a qualquer momento e defina descontos.",
        "Venda — leia o código QR, receba o pagamento e emita um recibo impresso ou por e-mail.",
        "Adicione os operadores de caixa — cada um tem a sua conta e entra na aplicação de vendas com um nome de utilizador e um código OTP enviado para o telemóvel dele. Nunca acedem à sua conta eMa.",
        "Acompanhe os números — vendas do dia, totais, lista de fornecedores e níveis de stock, em direto no painel ou no back office web.",
      ],
      capabilities: [
        "Várias lojas numa conta de proprietário",
        "Inventário completo e gestão de stock",
        "Leitura de códigos QR no pagamento",
        "Recibos impressos ou enviados por e-mail",
        "Processamento de devoluções e trocas",
        "Registo e comunicação de quebras",
        "Descontos ao nível do artigo",
        "Contas separadas de operador de caixa com entrada por OTP",
        "Aviso automático aos fornecedores quando o stock baixa",
        "Vistas de vendas do dia e de fornecedores",
        "Acesso web ao back office completo",
        "Liquidação direta na sua carteira eMa",
      ],
      audience: [
        "Grandes superfícies",
        "Padarias",
        "Lojas de bairro",
        "Restaurantes",
        "Farmácias",
        "Qualquer loja com balcão",
      ],
      fee: "Cobrada mensalmente, debitada automaticamente da sua conta eMa, calculada sobre o total das encomendas do mês. Sem terminal para comprar, sem renda mensal, sem contrato.",
      settles:
        "Cada venda no eMaPOS chega à mesma carteira eMa que as encomendas do eMaMall e os pagamentos do eMaServe — um saldo, um extrato, sem reconciliação.",
    },
    es: {
      tagline: "Tu tienda, en tu teléfono",
      summary:
        "Lleva una tienda o muchas. Haz inventario, escanea códigos QR, emite tickets, tramita devoluciones, registra mercancía dañada, crea cuentas de cajero y recibe avisos cuando baje el stock, con una trastienda web completa para el propietario.",
      description:
        "eMaPOS convierte cualquier teléfono Android en un sistema de punto de venta completo. Gestiona la venta, el inventario que hay detrás, el personal que la realiza y el proveedor que repone el estante, y cada moneda cobrada llega directamente a tu cartera eMa, lista para gastar, ahorrar o enviar.",
      howItWorks: [
        "Crea tu tienda: añade sus datos y sube tus documentos. Gestiona tantas tiendas como tengas.",
        "Carga tu inventario: añade artículos con precios, actualízalos cuando quieras y aplica descuentos.",
        "Vende: escanea el código QR, cobra y emite un ticket impreso o por correo.",
        "Añade a tus cajeros: cada uno recibe su cuenta y entra desde la aplicación de TPV con un usuario y un código OTP enviado a su teléfono. Nunca acceden a tu cuenta eMa.",
        "Vigila los números: ventas del día, totales acumulados, lista de proveedores y niveles de stock, en vivo en el panel o en la trastienda web.",
      ],
      capabilities: [
        "Varias tiendas bajo una misma cuenta de propietario",
        "Inventario completo y control de existencias",
        "Escaneo de códigos QR en el cobro",
        "Tickets impresos o enviados por correo al cliente",
        "Gestión de devoluciones y reembolsos",
        "Registro y parte de mercancía dañada",
        "Descuentos por artículo",
        "Cuentas de cajero independientes con acceso por OTP",
        "Aviso automático de stock bajo a los proveedores",
        "Vistas de ventas del día y de proveedores",
        "Acceso web a toda la trastienda",
        "Liquida directamente en tu cartera eMa",
      ],
      audience: [
        "Grandes superficies",
        "Panaderías",
        "Tiendas de barrio",
        "Restaurantes",
        "Farmacias",
        "Cualquier comercio con mostrador",
      ],
      fee: "Se cobra mensualmente, con cargo automático a tu cuenta eMa, según el total de tus pedidos del mes. Sin terminal que comprar, sin cuota mensual, sin contrato.",
      settles:
        "Cada venta de eMaPOS llega a la misma cartera eMa que tus pedidos de eMaMall y tus cobros de eMaServe: un saldo, un extracto, sin conciliación.",
    },
  },

  {
    id: "emamall",
    name: "eMaMall",
    family: FAMILY.BUSINESS,
    status: STATUS.LIVE,
    ticketCode: "EMY_MALL",
    links: {
      android: "https://play.google.com/store/apps/details?id=com.sobekit.mall",
      web: "https://mall.emalyami.com/",
    },
    related: ["emapos", "emacargo", "emaexpo"],
    en: {
      tagline: "Your storefront, online",
      summary:
        "Open a virtual shop in minutes. List products, receive and negotiate offers, chat with buyers, track every order from packing to delivery, and settle safely through built-in escrow.",
      description:
        "eMaMall is a virtual marketplace that replicates a physical shopping mall on your phone. Businesses and individuals both trade: list what you sell, take offers, negotiate in chat, and let escrow hold the money until the buyer has what they paid for. Customer ratings and reviews build the reputation that turns a first sale into a repeat one.",
      howItWorks: [
        "Choose your category and add your product with full details and images.",
        "Buyers browse, search and make offers on your listing.",
        "Negotiate in chat — accept or decline any offer.",
        "Escrow holds the payment while you prepare and ship the order.",
        "The buyer tracks progress from packing to delivery, then leaves a review.",
      ],
      capabilities: [
        "Create a virtual shop",
        "Add and update product listings",
        "Easy product search",
        "Offers you can accept or decline",
        "Buyer–seller chat",
        "Built-in escrow protection",
        "Order tracking from preparation to delivery",
        "Customer ratings and reviews",
        "Problem reporting on any product",
        "Web access as well as mobile",
        "Businesses and individuals both trade",
      ],
      audience: [
        "Retailers going online",
        "Artisans and makers",
        "Individuals selling occasionally",
        "Wholesalers",
        "Exporters",
      ],
      fee: "Charged when the seller and the buyer both accept the offer.",
      settles:
        "Escrow releases into your eWallet — the same balance your eMaPOS takings land in.",
    },
    ar: {
      tagline: "واجهتك على الإنترنت",
      summary:
        "افتح متجرًا افتراضيًا في دقائق. اعرض منتجاتك، واستقبل العروض وتفاوض عليها، وتحدّث مع المشترين، وتتبّع كل طلب من التغليف إلى التسليم، واستلم أموالك بأمان عبر نظام الضمان المدمج.",
      description:
        "eMaMall سوق افتراضي ينقل تجربة المركز التجاري إلى هاتفك. تتاجر فيه الشركات والأفراد على حدٍّ سواء: اعرض ما تبيعه، واستقبل العروض، وتفاوض في المحادثة، ودع نظام الضمان يحتفظ بالمال حتى يستلم المشتري ما دفع مقابله. وتبني تقييمات العملاء ومراجعاتهم السمعة التي تحوّل أول عملية بيع إلى عملية متكررة.",
      howItWorks: [
        "اختر فئتك وأضف منتجك ببيانات كاملة وصور.",
        "يتصفّح المشترون ويبحثون ويقدّمون عروضهم على إعلانك.",
        "تفاوض في المحادثة — واقبل أي عرض أو ارفضه.",
        "يحتفظ نظام الضمان بالدفعة بينما تجهّز الطلب وتشحنه.",
        "يتتبّع المشتري التقدّم من التغليف إلى التسليم، ثم يترك مراجعته.",
      ],
      capabilities: [
        "إنشاء متجر افتراضي",
        "إضافة المنتجات وتحديثها",
        "بحث سهل عن المنتجات",
        "عروض يمكنك قبولها أو رفضها",
        "محادثة بين البائع والمشتري",
        "حماية بنظام ضمان مدمج",
        "تتبّع الطلب من التجهيز إلى التسليم",
        "تقييمات العملاء ومراجعاتهم",
        "الإبلاغ عن أي مشكلة في أي منتج",
        "الوصول عبر الويب إضافة إلى الهاتف",
        "الشركات والأفراد يتاجرون معًا",
      ],
      audience: [
        "متاجر التجزئة المتجهة إلى الإنترنت",
        "الحرفيون والصنّاع",
        "الأفراد الذين يبيعون أحيانًا",
        "تجار الجملة",
        "المصدّرون",
      ],
      fee: "تُحتسب عندما يقبل البائع والمشتري العرض معًا.",
      settles:
        "يُفرَج الضمان إلى محفظتك — الرصيد نفسه الذي تصله متحصّلات eMaPOS.",
    },
    fr: {
      tagline: "Votre vitrine, en ligne",
      summary:
        "Ouvrez une boutique virtuelle en quelques minutes. Référencez vos produits, recevez et négociez les offres, discutez avec les acheteurs, suivez chaque commande de l'emballage à la livraison, et encaissez en toute sécurité grâce au séquestre intégré.",
      description:
        "eMaMall est une place de marché virtuelle qui reproduit un centre commercial sur votre téléphone. Entreprises et particuliers y commercent : référencez ce que vous vendez, recevez des offres, négociez par messagerie, et laissez le séquestre retenir l'argent jusqu'à ce que l'acheteur ait reçu son achat. Les notes et avis clients bâtissent la réputation qui transforme une première vente en vente récurrente.",
      howItWorks: [
        "Choisissez votre catégorie et ajoutez votre produit avec ses détails et ses photos.",
        "Les acheteurs parcourent, recherchent et font des offres sur votre annonce.",
        "Négociez par messagerie — acceptez ou refusez toute offre.",
        "Le séquestre retient le paiement pendant que vous préparez et expédiez la commande.",
        "L'acheteur suit l'avancement de l'emballage à la livraison, puis laisse un avis.",
      ],
      capabilities: [
        "Créer une boutique virtuelle",
        "Ajouter et modifier des annonces produits",
        "Recherche de produits simple",
        "Offres à accepter ou refuser",
        "Messagerie acheteur-vendeur",
        "Protection par séquestre intégré",
        "Suivi de commande de la préparation à la livraison",
        "Notes et avis clients",
        "Signalement de problème sur tout produit",
        "Accès web en plus du mobile",
        "Entreprises et particuliers commercent ensemble",
      ],
      audience: [
        "Commerçants passant en ligne",
        "Artisans et créateurs",
        "Particuliers vendant occasionnellement",
        "Grossistes",
        "Exportateurs",
      ],
      fee: "Facturés lorsque le vendeur et l'acheteur acceptent tous deux l'offre.",
      settles:
        "Le séquestre se libère sur votre eWallet — le même solde que celui de vos recettes eMaPOS.",
    },
    pt: {
      tagline: "A sua montra, online",
      summary:
        "Abra uma loja virtual em minutos. Publique produtos, receba e negoceie propostas, converse com compradores, acompanhe cada encomenda da embalagem à entrega, e receba em segurança através do sistema de garantia integrado.",
      description:
        "O eMaMall é um mercado virtual que reproduz um centro comercial no seu telemóvel. Empresas e particulares negoceiam lado a lado: publique o que vende, receba propostas, negoceie na conversa, e deixe o sistema de garantia reter o dinheiro até o comprador ter o que pagou. As avaliações e comentários constroem a reputação que transforma uma primeira venda numa venda recorrente.",
      howItWorks: [
        "Escolha a sua categoria e adicione o produto com todos os detalhes e imagens.",
        "Os compradores exploram, pesquisam e fazem propostas no seu anúncio.",
        "Negoceie na conversa — aceite ou recuse qualquer proposta.",
        "O sistema de garantia retém o pagamento enquanto prepara e expede a encomenda.",
        "O comprador acompanha da embalagem à entrega e deixa uma avaliação.",
      ],
      capabilities: [
        "Criar uma loja virtual",
        "Adicionar e atualizar anúncios de produtos",
        "Pesquisa fácil de produtos",
        "Propostas que pode aceitar ou recusar",
        "Conversa entre comprador e vendedor",
        "Proteção por sistema de garantia integrado",
        "Acompanhamento da encomenda da preparação à entrega",
        "Avaliações e comentários de clientes",
        "Comunicação de problemas em qualquer produto",
        "Acesso web além do telemóvel",
        "Empresas e particulares negoceiam em conjunto",
      ],
      audience: [
        "Retalhistas a passar para online",
        "Artesãos e criadores",
        "Particulares que vendem ocasionalmente",
        "Grossistas",
        "Exportadores",
      ],
      fee: "Cobrada quando comprador e vendedor aceitam a proposta.",
      settles:
        "A garantia liberta para a sua eWallet — o mesmo saldo onde entram as receitas do eMaPOS.",
    },
    es: {
      tagline: "Tu escaparate, en línea",
      summary:
        "Abre una tienda virtual en minutos. Publica productos, recibe y negocia ofertas, conversa con los compradores, sigue cada pedido desde el empaquetado hasta la entrega y liquida con seguridad mediante depósito en garantía.",
      description:
        "eMaMall es un mercado virtual que reproduce un centro comercial físico en tu teléfono. Comercian tanto empresas como particulares: publica lo que vendes, recibe ofertas, negocia por chat y deja que el depósito en garantía retenga el dinero hasta que el comprador tenga lo que pagó. Las valoraciones y reseñas construyen la reputación que convierte una primera venta en una venta recurrente.",
      howItWorks: [
        "Elige tu categoría y añade tu producto con todos los detalles e imágenes.",
        "Los compradores exploran, buscan y hacen ofertas por tu anuncio.",
        "Negocia por chat: acepta o rechaza cualquier oferta.",
        "El depósito en garantía retiene el pago mientras preparas y envías el pedido.",
        "El comprador sigue el avance desde el empaquetado hasta la entrega y deja una reseña.",
      ],
      capabilities: [
        "Crear una tienda virtual",
        "Añadir y actualizar anuncios de productos",
        "Búsqueda sencilla de productos",
        "Ofertas que puedes aceptar o rechazar",
        "Chat entre comprador y vendedor",
        "Protección por depósito en garantía",
        "Seguimiento del pedido desde la preparación hasta la entrega",
        "Valoraciones y reseñas de clientes",
        "Aviso de incidencias sobre cualquier producto",
        "Acceso web además del móvil",
        "Comercian tanto empresas como particulares",
      ],
      audience: [
        "Comercios que dan el salto a internet",
        "Artesanos y creadores",
        "Particulares que venden de forma ocasional",
        "Mayoristas",
        "Exportadores",
      ],
      fee: "Se cobra cuando vendedor y comprador aceptan la oferta.",
      settles:
        "El depósito en garantía se libera en tu eWallet, el mismo saldo donde entran tus cobros de eMaPOS.",
    },
  },

  {
    id: "emaserve",
    name: "eMaServe",
    family: FAMILY.BUSINESS,
    status: STATUS.LIVE,
    ticketCode: "EMY_SERVICES",
    links: {
      android:
        "https://play.google.com/store/apps/details?id=com.sobekit.emaservices",
      web: "https://emaserve.emalyami.com/",
    },
    related: ["emafunding", "ewallet", "emacom"],
    en: {
      tagline: "Get hired, get done",
      summary:
        "Post the job or find the work. Bid on nearby jobs, hire the right agent, track progress from start to completion, keep it all on a shared calendar, and rate each other at the end.",
      description:
        "eMaServe connects service providers with the people who need them. One side posts a job with the detail and the budget; the other side bids, filtered to the work nearest them. The owner hires, both sides track the job from start to completion on a shared calendar, and payment releases when the work is done. For an artisan or professional, it turns word-of-mouth into a pipeline.",
      howItWorks: [
        "Post a job — choose the field, add the details, and update them any time.",
        "Providers find work in their field, filtered to the jobs nearest them, and bid.",
        "The job owner hires the bid that suits, and pays into the platform.",
        "Both sides track the job status from start to complete — or cancel it.",
        "On completion the payment releases, and both sides rate each other.",
      ],
      capabilities: [
        "Post a job in any field",
        "Find work filtered by proximity",
        "Bid on jobs",
        "Hire the bid that fits",
        "Job status from start to completion",
        "Cancel a job",
        "Two-way ratings and reviews",
        "Owner–provider chat",
        "Shared calendar of job dates",
        "Easy payment on completion",
      ],
      audience: [
        "Artisans and tradespeople",
        "Professionals and consultants",
        "Households needing work done",
        "Businesses outsourcing tasks",
      ],
      fee: "Charged when the job is marked complete.",
      settles: "Payment releases from escrow into the provider's eWallet.",
    },
    ar: {
      tagline: "وظِّف وأنجِز",
      summary:
        "انشر المهمة أو ابحث عن العمل. قدّم عروضك على الوظائف القريبة، ووظّف الشخص المناسب، وتابع التقدّم من البداية إلى الإنجاز، وأدر كل ذلك على تقويم مشترك، وقيّموا بعضكم في النهاية.",
      description:
        "يربط eMaServe مقدّمي الخدمات بمن يحتاجونهم. طرف ينشر مهمة بتفاصيلها وميزانيتها، وطرف يقدّم عرضه على الوظائف الأقرب إليه. يوظّف صاحب العمل، ويتابع الطرفان المهمة من البداية إلى الإنجاز على تقويم مشترك، ويُفرَج عن الدفع عند إتمام العمل. وبالنسبة لحرفي أو مهني، فهو يحوّل السمعة المتناقَلة إلى تدفّق عمل منتظم.",
      howItWorks: [
        "انشر مهمة — اختر المجال، وأضف التفاصيل، وحدّثها في أي وقت.",
        "يجد مقدّمو الخدمة العمل في مجالهم، مُرشَّحًا بحسب القرب، ويقدّمون عروضهم.",
        "يوظّف صاحب المهمة العرض المناسب، ويدفع داخل المنصّة.",
        "يتابع الطرفان حالة المهمة من البداية إلى الإنجاز — أو يلغيانها.",
        "عند الإنجاز يُفرَج عن الدفع، ويقيّم كل طرف الآخر.",
      ],
      capabilities: [
        "نشر مهمة في أي مجال",
        "البحث عن عمل مُرشَّح بحسب القرب",
        "تقديم عروض على الوظائف",
        "توظيف العرض المناسب",
        "حالة المهمة من البداية إلى الإنجاز",
        "إلغاء المهمة",
        "تقييمات ومراجعات من الطرفين",
        "محادثة بين صاحب العمل ومقدّم الخدمة",
        "تقويم مشترك بمواعيد المهام",
        "دفع سهل عند الإنجاز",
      ],
      audience: [
        "الحرفيون وأصحاب المهن اليدوية",
        "المهنيون والاستشاريون",
        "الأسر التي تحتاج إنجاز أعمال",
        "الشركات التي تسند مهامها للخارج",
      ],
      fee: "تُحتسب عند تسجيل إنجاز المهمة.",
      settles: "يُفرَج الدفع من الضمان إلى محفظة مقدّم الخدمة.",
    },
    fr: {
      tagline: "Trouvez la mission, livrez le travail",
      summary:
        "Publiez la mission ou trouvez le travail. Répondez aux offres proches de vous, recrutez le bon prestataire, suivez l'avancement du début à la fin, partagez un calendrier commun, et notez-vous mutuellement à la fin.",
      description:
        "eMaServe met en relation les prestataires de services et ceux qui en ont besoin. D'un côté, on publie une mission avec son descriptif et son budget ; de l'autre, on postule, avec un filtrage sur les missions les plus proches. Le donneur d'ordre recrute, les deux parties suivent la mission du début à la fin sur un calendrier partagé, et le paiement se libère une fois le travail terminé. Pour un artisan ou un professionnel, cela transforme le bouche-à-oreille en flux d'activité.",
      howItWorks: [
        "Publiez une mission — choisissez le domaine, ajoutez les détails, modifiables à tout moment.",
        "Les prestataires trouvent des missions dans leur domaine, filtrées par proximité, et postulent.",
        "Le donneur d'ordre retient l'offre qui convient et règle sur la plateforme.",
        "Les deux parties suivent le statut du début à la fin — ou annulent.",
        "À la livraison, le paiement se libère et chacun note l'autre.",
      ],
      capabilities: [
        "Publier une mission dans tout domaine",
        "Trouver du travail filtré par proximité",
        "Répondre aux missions",
        "Recruter l'offre qui convient",
        "Statut de la mission du début à la fin",
        "Annuler une mission",
        "Notes et avis réciproques",
        "Messagerie donneur d'ordre / prestataire",
        "Calendrier partagé des échéances",
        "Paiement simple à la livraison",
      ],
      audience: [
        "Artisans et gens de métier",
        "Professionnels et consultants",
        "Particuliers ayant des travaux à faire",
        "Entreprises qui externalisent",
      ],
      fee: "Facturés lorsque la mission est marquée comme terminée.",
      settles:
        "Le paiement se libère du séquestre vers l'eWallet du prestataire.",
    },
    pt: {
      tagline: "Seja contratado, entregue o trabalho",
      summary:
        "Publique o trabalho ou encontre-o. Concorra a trabalhos perto de si, contrate o profissional certo, acompanhe do início à conclusão, mantenha tudo num calendário partilhado e avaliem-se no fim.",
      description:
        "O eMaServe liga prestadores de serviços a quem deles precisa. De um lado publica-se um trabalho com o detalhe e o orçamento; do outro concorre-se, com filtragem pelos trabalhos mais próximos. Quem publica contrata, ambas as partes acompanham do início à conclusão num calendário partilhado, e o pagamento é libertado quando o trabalho fica feito. Para um artesão ou profissional, transforma o passa-palavra num fluxo de trabalho.",
      howItWorks: [
        "Publique um trabalho — escolha a área, acrescente os detalhes e atualize quando quiser.",
        "Os prestadores encontram trabalho na sua área, filtrado por proximidade, e concorrem.",
        "Quem publicou contrata a proposta que serve e paga na plataforma.",
        "Ambas as partes acompanham o estado do início à conclusão — ou cancelam.",
        "Na conclusão o pagamento é libertado e cada parte avalia a outra.",
      ],
      capabilities: [
        "Publicar um trabalho em qualquer área",
        "Encontrar trabalho filtrado por proximidade",
        "Concorrer a trabalhos",
        "Contratar a proposta que serve",
        "Estado do trabalho do início à conclusão",
        "Cancelar um trabalho",
        "Avaliações mútuas",
        "Conversa entre cliente e prestador",
        "Calendário partilhado com as datas",
        "Pagamento simples na conclusão",
      ],
      audience: [
        "Artesãos e profissionais de ofício",
        "Profissionais e consultores",
        "Famílias com trabalhos a fazer",
        "Empresas que subcontratam",
      ],
      fee: "Cobrada quando o trabalho é dado como concluído.",
      settles:
        "O pagamento é libertado da garantia para a eWallet do prestador.",
    },
    es: {
      tagline: "Contrata y haz el trabajo",
      summary:
        "Publica el encargo o encuentra trabajo. Puja por encargos cercanos, contrata al profesional adecuado, sigue el avance de principio a fin, mantén todo en un calendario compartido y valoraos al terminar.",
      description:
        "eMaServe conecta a los profesionales de servicios con quien los necesita. Una parte publica un encargo con el detalle y el presupuesto; la otra puja, con los trabajos filtrados por cercanía. El cliente contrata, ambas partes siguen el encargo de principio a fin en un calendario compartido y el pago se libera cuando el trabajo está hecho. Para un artesano o un profesional, convierte el boca a boca en una cartera de encargos.",
      howItWorks: [
        "Publica un encargo: elige el sector, añade los detalles y actualízalos cuando quieras.",
        "Los profesionales encuentran trabajo en su sector, filtrado por cercanía, y pujan.",
        "El cliente contrata la puja que le conviene y paga a la plataforma.",
        "Ambas partes siguen el estado del encargo de inicio a fin, o lo cancelan.",
        "Al completarse se libera el pago y ambas partes se valoran mutuamente.",
      ],
      capabilities: [
        "Publicar un encargo en cualquier sector",
        "Encontrar trabajo filtrado por proximidad",
        "Pujar por encargos",
        "Contratar la puja que encaja",
        "Estado del encargo de principio a fin",
        "Cancelar un encargo",
        "Valoraciones y reseñas en ambos sentidos",
        "Chat entre cliente y profesional",
        "Calendario compartido de fechas de trabajo",
        "Pago sencillo al completar",
      ],
      audience: [
        "Artesanos y oficios",
        "Profesionales y consultores",
        "Hogares que necesitan un trabajo",
        "Empresas que externalizan tareas",
      ],
      fee: "Se cobra cuando el encargo se marca como completado.",
      settles: "El pago se libera del depósito en garantía a la eWallet del profesional.",
    },
  },

  {
    id: "emaexpo",
    name: "eMaExpo",
    family: FAMILY.BUSINESS,
    status: STATUS.LIVE,
    ticketCode: null,
    links: { android: MAIN_APP, web: null },
    related: ["emamall", "emapos", "emacom"],
    en: {
      tagline: "Get discovered",
      summary:
        "Digital advertising and virtual exhibition space that puts your products in front of buyers already inside the eMa network — so the audience you advertise to is one tap away from paying you.",
      description:
        "eMaExpo is where businesses get seen. It's a digital advertising and virtual exhibition platform built inside the eMa network, so the people viewing your stand already have a funded wallet and a verified identity. Advertising elsewhere sends a stranger to find you; advertising here puts your product in front of someone who can buy it immediately.",
      howItWorks: [
        "Set up your virtual stand with your products and branding.",
        "Publish it into the eMa network.",
        "Buyers already inside the platform browse and discover you.",
        "They move straight from your stand to buying — no new account, no new payment method.",
      ],
      capabilities: [
        "Digital advertising campaigns",
        "Virtual exhibition stands",
        "Product promotion inside the eMa network",
        "Reach buyers with funded wallets",
        "Links straight through to eMaMall listings",
      ],
      audience: [
        "Retailers and wholesalers",
        "Manufacturers",
        "Artisans and makers",
        "Exporters seeking new markets",
        "Anyone launching a product",
      ],
      fee: "Campaign-based. Contact us for rates.",
      settles: "Advertising spend draws from your eWallet.",
    },
    ar: {
      tagline: "كن مرئيًا",
      summary:
        "إعلان رقمي ومساحة معارض افتراضية تضع منتجاتك أمام مشترين موجودين أصلًا داخل شبكة eMa — فيكون الجمهور الذي تعلن له على بُعد نقرة واحدة من الدفع لك.",
      description:
        "eMaExpo هو المكان الذي تُرى فيه الأعمال. منصّة إعلان رقمي ومعارض افتراضية مبنية داخل شبكة eMa، بحيث يكون من يشاهدون جناحك أصحاب محافظ ممولة وهويات مُوثَّقة أصلًا. الإعلان في مكان آخر يرسل غريبًا ليبحث عنك، أما الإعلان هنا فيضع منتجك أمام من يستطيع شراءه فورًا.",
      howItWorks: [
        "أنشئ جناحك الافتراضي بمنتجاتك وهويتك البصرية.",
        "انشره داخل شبكة eMa.",
        "يتصفّح المشترون الموجودون داخل المنصّة ويكتشفونك.",
        "ينتقلون من جناحك إلى الشراء مباشرة — بلا حساب جديد وبلا وسيلة دفع جديدة.",
      ],
      capabilities: [
        "حملات إعلانية رقمية",
        "أجنحة معارض افتراضية",
        "الترويج للمنتجات داخل شبكة eMa",
        "الوصول إلى مشترين بمحافظ ممولة",
        "روابط مباشرة إلى إعلاناتك في eMaMall",
      ],
      audience: [
        "تجار التجزئة والجملة",
        "المصنّعون",
        "الحرفيون والصنّاع",
        "المصدّرون الباحثون عن أسواق جديدة",
        "كل من يطلق منتجًا جديدًا",
      ],
      fee: "بحسب الحملة. تواصل معنا لمعرفة الأسعار.",
      settles: "تُخصم تكلفة الإعلان من محفظتك.",
    },
    fr: {
      tagline: "Faites-vous découvrir",
      summary:
        "Publicité numérique et espace d'exposition virtuel qui placent vos produits devant des acheteurs déjà présents dans le réseau eMa — le public auquel vous vous adressez est à un geste de vous payer.",
      description:
        "eMaExpo, c'est là que les entreprises se font voir. Une plateforme de publicité numérique et d'exposition virtuelle intégrée au réseau eMa : les personnes qui visitent votre stand disposent déjà d'un portefeuille approvisionné et d'une identité vérifiée. Faire de la publicité ailleurs envoie un inconnu vous chercher ; ici, votre produit se retrouve devant quelqu'un capable de l'acheter immédiatement.",
      howItWorks: [
        "Montez votre stand virtuel avec vos produits et votre identité visuelle.",
        "Publiez-le sur le réseau eMa.",
        "Les acheteurs déjà présents sur la plateforme le parcourent et vous découvrent.",
        "Ils passent directement de votre stand à l'achat — sans nouveau compte, sans nouveau moyen de paiement.",
      ],
      capabilities: [
        "Campagnes de publicité numérique",
        "Stands d'exposition virtuels",
        "Promotion des produits dans le réseau eMa",
        "Toucher des acheteurs au portefeuille approvisionné",
        "Liens directs vers vos annonces eMaMall",
      ],
      audience: [
        "Commerçants et grossistes",
        "Fabricants",
        "Artisans et créateurs",
        "Exportateurs en quête de nouveaux marchés",
        "Toute personne lançant un produit",
      ],
      fee: "Selon la campagne. Contactez-nous pour les tarifs.",
      settles:
        "Les dépenses publicitaires sont prélevées sur votre eWallet.",
    },
    pt: {
      tagline: "Faça-se descobrir",
      summary:
        "Publicidade digital e espaço de exposição virtual que colocam os seus produtos diante de compradores já dentro da rede eMa — o público a quem anuncia está a um toque de lhe pagar.",
      description:
        "O eMaExpo é onde os negócios se dão a ver. Uma plataforma de publicidade digital e exposição virtual integrada na rede eMa, onde quem visita o seu stand já tem carteira carregada e identidade verificada. Anunciar noutro sítio manda um desconhecido procurá-lo; aqui, o seu produto fica diante de alguém que o pode comprar de imediato.",
      howItWorks: [
        "Monte o seu stand virtual com os seus produtos e a sua imagem.",
        "Publique-o na rede eMa.",
        "Os compradores já presentes na plataforma exploram e descobrem-no.",
        "Passam do seu stand diretamente à compra — sem conta nova, sem novo meio de pagamento.",
      ],
      capabilities: [
        "Campanhas de publicidade digital",
        "Stands de exposição virtuais",
        "Promoção de produtos dentro da rede eMa",
        "Chegar a compradores com carteira carregada",
        "Ligações diretas aos seus anúncios no eMaMall",
      ],
      audience: [
        "Retalhistas e grossistas",
        "Fabricantes",
        "Artesãos e criadores",
        "Exportadores à procura de novos mercados",
        "Quem está a lançar um produto",
      ],
      fee: "Consoante a campanha. Fale connosco para saber os preços.",
      settles:
        "O investimento em publicidade é debitado da sua eWallet.",
    },
    es: {
      tagline: "Hazte visible",
      summary:
        "Publicidad digital y espacio de exposición virtual que pone tus productos ante compradores que ya están dentro de la red eMa, de modo que el público al que anuncias está a un toque de pagarte.",
      description:
        "eMaExpo es donde los negocios se dan a ver. Es una plataforma de publicidad digital y exposición virtual construida dentro de la red eMa, así que quienes visitan tu estand ya tienen una cartera con fondos y una identidad verificada. Anunciarse en otro sitio envía a un desconocido a buscarte; anunciarse aquí pone tu producto ante alguien que puede comprarlo de inmediato.",
      howItWorks: [
        "Monta tu estand virtual con tus productos y tu marca.",
        "Publícalo en la red eMa.",
        "Los compradores que ya están dentro de la plataforma te descubren mientras exploran.",
        "Pasan directamente de tu estand a la compra: sin cuenta nueva, sin método de pago nuevo.",
      ],
      capabilities: [
        "Campañas de publicidad digital",
        "Estands de exposición virtual",
        "Promoción de productos dentro de la red eMa",
        "Alcance a compradores con cartera con fondos",
        "Enlace directo a los anuncios de eMaMall",
      ],
      audience: [
        "Comercios y mayoristas",
        "Fabricantes",
        "Artesanos y creadores",
        "Exportadores en busca de nuevos mercados",
        "Cualquiera que lance un producto",
      ],
      fee: "Por campaña. Consúltanos las tarifas.",
      settles: "La inversión publicitaria se carga a tu eWallet.",
    },
  },

  {
    id: "emacargo",
    name: "eMaCargo",
    family: FAMILY.BUSINESS,
    status: STATUS.LIVE,
    ticketCode: null,
    links: { android: MAIN_APP, web: null },
    related: ["emamall", "ematuma", "emapos"],
    en: {
      tagline: "Ship it, bid it, track it",
      summary:
        "Post a shipment once and let carriers compete for it. Pick the best offer on price, date and rating for the international leg and both local legs, pay once, and track the whole chain in one place.",
      description:
        "eMaCargo is a competitive freight marketplace. You post a shipment once; carriers bid for it. Instead of phoning around for quotes, you receive offers and pick the best one on price, delivery date, rating and feedback — for the international leg and the local collection and delivery at both ends. Freight is where most small exporters lose their margin, and it's the reason a good product never leaves the country. eMaCargo turns an opaque, phone-based quoting process into a competitive market, and syncs the legs so a shipment can't strand between carriers. Together with eMaTuma it brings African smallholder farmers into cross-border commodity markets, opening the way to carbon-credit monetisation and to the $100bn+ agricultural trade financing gap.",
      howItWorks: [
        "Post the shipment — origin, destination, sender, recipient, package details and any special requirements.",
        "Phase 1: international carriers see your shipment and bid. Compare on price, estimated delivery date, feedback and rating, and select the best.",
        "Phase 2: local companies at both ends bid for first-mile pickup and last-mile delivery. Their dates generate automatically to line up with the cargo provider's schedule.",
        "Pay once — a single payment from your eMa wallet accepts every selected offer at once.",
        "Track end to end — every company on the chain posts tracking records to the same shipment.",
        "Rate them — once delivered, your feedback feeds the ratings the next shipper bids against.",
      ],
      capabilities: [
        "Structured shipment creation",
        "Origin, destination, sender and recipient details",
        "Package and special-requirement details",
        "Competitive carrier bidding",
        "Multi-phase award: international, origin-local, destination-local",
        "Automatic schedule sync between legs",
        "Selection on price, date, feedback and rating",
        "Single consolidated payment",
        "Shared multi-carrier tracking log",
        "Post-delivery feedback and carrier ratings",
      ],
      audience: [
        "Exporters and importers",
        "eMaMall sellers shipping across borders",
        "Manufacturers",
        "Cargo and freight companies",
        "Local courier and delivery firms",
      ],
      fee: "Set by the winning carrier's offer. eMa charges on the consolidated payment.",
      settles:
        "One payment from your eWallet accepts all selected offers across every leg.",
    },
    ar: {
      tagline: "اشحن، وقارن العروض، وتتبّع",
      summary:
        "انشر شحنتك مرة واحدة ودع شركات الشحن تتنافس عليها. اختر أفضل عرض بالسعر والتاريخ والتقييم للمرحلة الدولية وللمرحلتين المحليتين، وادفع مرة واحدة، وتتبّع السلسلة كاملة في مكان واحد.",
      description:
        "eMaCargo سوق تنافسي للشحن. تنشر شحنتك مرة واحدة، فتتنافس شركات الشحن عليها. وبدلًا من الاتصال بعشرات الجهات لطلب عروض الأسعار، تصلك العروض وتختار أفضلها بحسب السعر وتاريخ التسليم والتقييم وآراء العملاء — للمرحلة الدولية وكذلك للتحصيل والتسليم المحلي في الطرفين. الشحن هو ما يلتهم هامش ربح صغار المصدّرين، وهو السبب في أن منتجًا جيدًا قد لا يغادر بلده أبدًا. تحوّل eMaCargo عملية تسعير غامضة تعتمد على المكالمات إلى سوق تنافسي، وتزامن مراحل الرحلة حتى لا تعلق الشحنة بين ناقلين. وهي مع eMaTuma تُدخل صغار المزارعين الأفارقة في أسواق السلع عبر الحدود، ما يفتح الطريق أمام تسييل أرصدة الكربون وأمام فجوة تمويل التجارة الزراعية التي تتجاوز 100 مليار دولار.",
      howItWorks: [
        "انشر الشحنة — بيانات المصدر والوجهة والمُرسِل والمُستلِم وتفاصيل الطرد وأي متطلبات خاصة.",
        "المرحلة 1: تطّلع شركات الشحن الدولية على شحنتك وتقدّم عروضها. قارنها بالسعر وتاريخ التسليم المتوقع والتقييم وآراء العملاء، واختر الأفضل.",
        "المرحلة 2: تتقدّم الشركات المحلية في الطرفين بعروض للتحصيل من الباب وللتسليم النهائي. وتُولَّد تواريخها تلقائيًا لتتوافق مع جدول شركة الشحن الدولية.",
        "ادفع مرة واحدة — دفعة واحدة من محفظة eMa تعتمد كل العروض المختارة دفعة واحدة.",
        "تتبّع من الطرف إلى الطرف — كل شركة في السلسلة تسجّل تحديثات التتبّع على الشحنة نفسها.",
        "قيّمهم — بعد التسليم يغذّي تقييمك التقييمات التي يعتمد عليها الشاحن التالي.",
      ],
      capabilities: [
        "إنشاء شحنة ببيانات منظّمة",
        "بيانات المصدر والوجهة والمُرسِل والمُستلِم",
        "تفاصيل الطرد والمتطلبات الخاصة",
        "مزايدة تنافسية بين الناقلين",
        "ترسية متعددة المراحل: دولية ومحلية عند المصدر ومحلية عند الوجهة",
        "مزامنة تلقائية للجداول بين المراحل",
        "الاختيار بحسب السعر والتاريخ والتقييم والآراء",
        "دفعة واحدة موحّدة",
        "سجل تتبّع مشترك بين كل الناقلين",
        "تقييم وآراء بعد التسليم",
      ],
      audience: [
        "المصدّرون والمستوردون",
        "بائعو eMaMall الذين يشحنون عبر الحدود",
        "المصنّعون",
        "شركات الشحن والنقل",
        "شركات التوصيل المحلية",
      ],
      fee: "يحدّدها عرض الناقل الفائز. وتُحتسب رسوم eMa على الدفعة الموحّدة.",
      settles:
        "دفعة واحدة من محفظتك تعتمد كل العروض المختارة عبر جميع المراحل.",
    },
    fr: {
      tagline: "Expédiez, comparez, suivez",
      summary:
        "Publiez un envoi une fois et laissez les transporteurs se disputer. Choisissez la meilleure offre sur le prix, la date et la note, pour le trajet international et les deux trajets locaux, payez une seule fois, et suivez toute la chaîne au même endroit.",
      description:
        "eMaCargo est une place de marché du fret par mise en concurrence. Vous publiez un envoi une fois ; les transporteurs se positionnent. Au lieu de téléphoner partout pour des devis, vous recevez des offres et retenez la meilleure sur le prix, la date de livraison, la note et les avis — pour le trajet international comme pour l'enlèvement et la livraison locaux aux deux extrémités. Le fret est ce qui ronge la marge des petits exportateurs, et la raison pour laquelle un bon produit ne quitte jamais le pays. eMaCargo transforme un processus de devis opaque, mené au téléphone, en un marché concurrentiel, et synchronise les trajets pour qu'un envoi ne reste jamais bloqué entre deux transporteurs. Avec eMaTuma, il intègre les petits exploitants africains aux marchés de matières premières transfrontaliers, ouvrant la voie à la monétisation des crédits carbone et au déficit de financement du commerce agricole de plus de 100 milliards de dollars.",
      howItWorks: [
        "Publiez l'envoi — origine, destination, expéditeur, destinataire, détails du colis et exigences particulières.",
        "Phase 1 : les transporteurs internationaux voient votre envoi et font une offre. Comparez sur le prix, la date estimée, les avis et la note, puis retenez la meilleure.",
        "Phase 2 : les sociétés locales aux deux extrémités se positionnent sur l'enlèvement et la livraison finale. Leurs dates sont générées automatiquement pour s'aligner sur le calendrier du transporteur international.",
        "Payez une seule fois — un unique paiement depuis votre portefeuille eMa valide toutes les offres retenues.",
        "Suivez de bout en bout — chaque société de la chaîne alimente le même suivi d'envoi.",
        "Notez-les — après livraison, votre avis alimente les notes sur lesquelles s'appuiera le prochain expéditeur.",
      ],
      capabilities: [
        "Création d'envoi structurée",
        "Détails origine, destination, expéditeur et destinataire",
        "Détails du colis et exigences particulières",
        "Mise en concurrence des transporteurs",
        "Attribution en plusieurs phases : international, local au départ, local à l'arrivée",
        "Synchronisation automatique des calendriers entre trajets",
        "Sélection sur le prix, la date, les avis et la note",
        "Paiement unique regroupé",
        "Journal de suivi partagé entre transporteurs",
        "Avis et notation après livraison",
      ],
      audience: [
        "Exportateurs et importateurs",
        "Vendeurs eMaMall expédiant à l'étranger",
        "Fabricants",
        "Sociétés de fret et de transport",
        "Coursiers et sociétés de livraison locales",
      ],
      fee: "Fixés par l'offre du transporteur retenu. eMa se rémunère sur le paiement regroupé.",
      settles:
        "Un seul paiement depuis votre eWallet valide toutes les offres retenues, sur l'ensemble des trajets.",
    },
    pt: {
      tagline: "Expeça, compare propostas, acompanhe",
      summary:
        "Publique um envio uma vez e deixe as transportadoras concorrer. Escolha a melhor proposta pelo preço, data e avaliação, para o trajeto internacional e para os dois trajetos locais, pague uma só vez e acompanhe toda a cadeia num só sítio.",
      description:
        "O eMaCargo é um mercado de frete por concorrência. Publica um envio uma vez; as transportadoras concorrem por ele. Em vez de telefonar a toda a gente à procura de orçamentos, recebe propostas e escolhe a melhor pelo preço, data de entrega, avaliação e comentários — tanto para o trajeto internacional como para a recolha e entrega locais nas duas pontas. O frete é onde a maioria dos pequenos exportadores perde a margem, e a razão pela qual um bom produto nunca sai do país. O eMaCargo transforma um processo de orçamentação opaco, feito ao telefone, num mercado concorrencial, e sincroniza os trajetos para que um envio não fique preso entre transportadoras. Em conjunto com o eMaTuma, integra os pequenos agricultores africanos nos mercados de mercadorias além-fronteiras, abrindo caminho à monetização de créditos de carbono e ao défice de financiamento do comércio agrícola superior a 100 mil milhões de dólares.",
      howItWorks: [
        "Publique o envio — origem, destino, remetente, destinatário, detalhes do volume e requisitos especiais.",
        "Fase 1: as transportadoras internacionais veem o seu envio e apresentam propostas. Compare pelo preço, data prevista, comentários e avaliação, e escolha a melhor.",
        "Fase 2: as empresas locais nas duas pontas concorrem pela recolha inicial e pela entrega final. As datas são geradas automaticamente para encaixar no calendário da transportadora internacional.",
        "Pague uma só vez — um único pagamento da sua carteira eMa aceita todas as propostas escolhidas.",
        "Acompanhe de ponta a ponta — cada empresa da cadeia regista atualizações no mesmo envio.",
        "Avalie-as — depois da entrega, a sua avaliação alimenta as classificações em que o próximo expedidor se baseia.",
      ],
      capabilities: [
        "Criação estruturada do envio",
        "Dados de origem, destino, remetente e destinatário",
        "Detalhes do volume e requisitos especiais",
        "Concorrência entre transportadoras",
        "Adjudicação em várias fases: internacional, local na origem, local no destino",
        "Sincronização automática de calendários entre trajetos",
        "Escolha pelo preço, data, comentários e avaliação",
        "Pagamento único consolidado",
        "Registo de rastreio partilhado por todas as transportadoras",
        "Comentários e avaliações após a entrega",
      ],
      audience: [
        "Exportadores e importadores",
        "Vendedores do eMaMall que expedem para o estrangeiro",
        "Fabricantes",
        "Empresas de carga e frete",
        "Empresas locais de estafeta e entrega",
      ],
      fee: "Definida pela proposta da transportadora vencedora. O eMa cobra sobre o pagamento consolidado.",
      settles:
        "Um pagamento da sua eWallet aceita todas as propostas escolhidas em todos os trajetos.",
    },
    es: {
      tagline: "Envíalo, subástalo, síguelo",
      summary:
        "Publica un envío una sola vez y deja que los transportistas compitan por él. Elige la mejor oferta por precio, fecha y valoración para el tramo internacional y los dos tramos locales, paga una vez y sigue toda la cadena en un mismo lugar.",
      description:
        "eMaCargo es un mercado competitivo de transporte de mercancías. Publicas un envío una vez y los transportistas pujan por él. En lugar de llamar de puerta en puerta pidiendo presupuestos, recibes ofertas y eliges la mejor por precio, fecha estimada de entrega, comentarios y valoración, tanto para el tramo internacional como para la recogida y la entrega locales en ambos extremos. El flete es donde la mayoría de los pequeños exportadores pierde su margen, y la razón por la que un buen producto nunca sale del país. eMaCargo convierte un proceso de presupuestos opaco y telefónico en un mercado competitivo, y sincroniza los tramos para que un envío no quede varado entre transportistas. Junto con eMaTuma, incorpora a los pequeños agricultores africanos a los mercados transfronterizos de materias primas, abriendo la puerta a la monetización de créditos de carbono y a la brecha de financiación del comercio agrícola superior a 100.000 millones de dólares.",
      howItWorks: [
        "Publica el envío: origen, destino, remitente, destinatario, detalles del bulto y requisitos especiales.",
        "Fase 1: los transportistas internacionales ven tu envío y pujan. Compara por precio, fecha estimada de entrega, comentarios y valoración, y elige la mejor.",
        "Fase 2: las empresas locales de ambos extremos pujan por la recogida inicial y la entrega final. Sus fechas se generan automáticamente para encajar con el calendario del transportista principal.",
        "Paga una vez: un solo pago desde tu cartera eMa acepta de golpe todas las ofertas seleccionadas.",
        "Sigue el envío de punta a punta: cada empresa de la cadena registra su seguimiento en el mismo envío.",
        "Valóralas: una vez entregado, tus comentarios alimentan las valoraciones con las que pujarán para el siguiente remitente.",
      ],
      capabilities: [
        "Creación estructurada del envío",
        "Datos de origen, destino, remitente y destinatario",
        "Detalles del bulto y requisitos especiales",
        "Pujas competitivas de transportistas",
        "Adjudicación en varias fases: internacional, local en origen y local en destino",
        "Sincronización automática de calendarios entre tramos",
        "Selección por precio, fecha, comentarios y valoración",
        "Un único pago consolidado",
        "Registro de seguimiento compartido entre transportistas",
        "Comentarios y valoraciones tras la entrega",
      ],
      audience: [
        "Exportadores e importadores",
        "Vendedores de eMaMall que envían a otros países",
        "Fabricantes",
        "Empresas de carga y transporte",
        "Empresas locales de mensajería y reparto",
      ],
      fee: "La fija la oferta del transportista adjudicatario. eMa cobra sobre el pago consolidado.",
      settles:
        "Un único pago desde tu eWallet acepta todas las ofertas seleccionadas en todos los tramos.",
    },
  },

  {
    id: "emacom",
    name: "eMaCom",
    family: FAMILY.BUSINESS,
    status: STATUS.LIVE,
    ticketCode: "EMY_COM",
    links: { android: MAIN_APP, web: null },
    related: ["emaserve", "emamall", "emaclinic"],
    en: {
      tagline: "Talk to your customers",
      summary:
        "Pay-as-you-go VoIP, video conferencing and encrypted messaging, plus a hosted call centre for your business — no PBX, no contract.",
      description:
        "eMaCom is the communications layer of the platform. It connects buyers, sellers and members with VoIP calling, video conferencing and secure messaging on a pay-as-you-go basis, and gives a business a tailored call centre without buying a switchboard. Meetings, webinars and online classes run on the same account as everything else.",
      howItWorks: [
        "Call, message or start a video conference from inside the platform.",
        "Pay only for what you use — no line rental, no contract.",
        "Run webinars, online classes or team meetings with screen sharing.",
        "Set up a tailored call centre for your company when you need one.",
      ],
      capabilities: [
        "VoIP calling (rolling out in selected countries)",
        "Video conferencing",
        "Pay-as-you-go billing",
        "Secure, encrypted messaging",
        "Screen sharing",
        "Session recording",
        "Webinars and online classes",
        "Tailored company call centres",
        "Cross-device access",
      ],
      audience: [
        "Businesses with customer support",
        "Sellers talking to buyers",
        "Teams working remotely",
        "Trainers and educators",
      ],
      fee: "Pay as you go, billed from your eWallet.",
      settles: "Usage draws from the same eMa balance as everything else.",
    },
    ar: {
      tagline: "تواصل مع عملائك",
      summary:
        "اتصال صوتي عبر الإنترنت ومؤتمرات فيديو ورسائل مشفّرة بنظام الدفع حسب الاستخدام، إضافة إلى مركز اتصال مُدار لشركتك — بلا سنترال وبلا عقود.",
      description:
        "eMaCom هو طبقة الاتصالات في المنصّة. يربط المشترين والبائعين والأعضاء عبر المكالمات الصوتية ومؤتمرات الفيديو والرسائل الآمنة بنظام الدفع حسب الاستخدام، ويمنح الشركة مركز اتصال مخصّصًا دون شراء سنترال. وتعمل الاجتماعات والندوات والحصص الإلكترونية على الحساب نفسه.",
      howItWorks: [
        "اتصل أو راسل أو ابدأ مؤتمر فيديو من داخل المنصّة.",
        "ادفع مقابل ما تستخدمه فقط — بلا إيجار خط وبلا عقد.",
        "أدِر ندوات أو حصصًا إلكترونية أو اجتماعات فريق مع مشاركة الشاشة.",
        "أنشئ مركز اتصال مخصّصًا لشركتك عند الحاجة.",
      ],
      capabilities: [
        "مكالمات صوتية عبر الإنترنت (قيد الطرح في دول مختارة)",
        "مؤتمرات فيديو",
        "فوترة بنظام الدفع حسب الاستخدام",
        "رسائل آمنة ومشفّرة",
        "مشاركة الشاشة",
        "تسجيل الجلسات",
        "ندوات وحصص إلكترونية",
        "مراكز اتصال مخصّصة للشركات",
        "الوصول من مختلف الأجهزة",
      ],
      audience: [
        "الشركات التي لديها دعم عملاء",
        "البائعون المتحدثون مع المشترين",
        "الفرق التي تعمل عن بُعد",
        "المدربون والمعلّمون",
      ],
      fee: "الدفع حسب الاستخدام، ويُخصم من محفظتك.",
      settles: "الاستخدام يُخصم من رصيد eMa نفسه.",
    },
    fr: {
      tagline: "Parlez à vos clients",
      summary:
        "VoIP, visioconférence et messagerie chiffrée à l'usage, plus un centre d'appels hébergé pour votre entreprise — sans standard téléphonique, sans engagement.",
      description:
        "eMaCom est la couche communication de la plateforme. Elle relie acheteurs, vendeurs et membres par appels VoIP, visioconférence et messagerie sécurisée facturés à l'usage, et dote une entreprise d'un centre d'appels sur mesure sans acheter de standard. Réunions, webinaires et cours en ligne fonctionnent sur le même compte que le reste.",
      howItWorks: [
        "Appelez, écrivez ou lancez une visioconférence depuis la plateforme.",
        "Ne payez que ce que vous consommez — sans abonnement de ligne, sans engagement.",
        "Organisez webinaires, cours en ligne ou réunions d'équipe avec partage d'écran.",
        "Mettez en place un centre d'appels sur mesure pour votre société quand vous en avez besoin.",
      ],
      capabilities: [
        "Appels VoIP (déploiement dans certains pays)",
        "Visioconférence",
        "Facturation à l'usage",
        "Messagerie sécurisée et chiffrée",
        "Partage d'écran",
        "Enregistrement des sessions",
        "Webinaires et cours en ligne",
        "Centres d'appels sur mesure pour entreprises",
        "Accès multi-appareils",
      ],
      audience: [
        "Entreprises avec un service client",
        "Vendeurs en contact avec des acheteurs",
        "Équipes en télétravail",
        "Formateurs et enseignants",
      ],
      fee: "À l'usage, prélevés sur votre eWallet.",
      settles:
        "La consommation est prélevée sur le même solde eMa que tout le reste.",
    },
    pt: {
      tagline: "Fale com os seus clientes",
      summary:
        "VoIP, videoconferência e mensagens cifradas com pagamento por utilização, mais um centro de atendimento alojado para a sua empresa — sem central telefónica, sem contrato.",
      description:
        "O eMaCom é a camada de comunicação da plataforma. Liga compradores, vendedores e membros através de chamadas VoIP, videoconferência e mensagens seguras com pagamento por utilização, e dá a uma empresa um centro de atendimento à medida sem comprar uma central. Reuniões, webinars e aulas online funcionam na mesma conta que tudo o resto.",
      howItWorks: [
        "Ligue, envie mensagens ou inicie uma videoconferência a partir da plataforma.",
        "Pague apenas o que usar — sem aluguer de linha, sem contrato.",
        "Faça webinars, aulas online ou reuniões de equipa com partilha de ecrã.",
        "Monte um centro de atendimento à medida da sua empresa quando precisar.",
      ],
      capabilities: [
        "Chamadas VoIP (em implementação em países selecionados)",
        "Videoconferência",
        "Faturação por utilização",
        "Mensagens seguras e cifradas",
        "Partilha de ecrã",
        "Gravação de sessões",
        "Webinars e aulas online",
        "Centros de atendimento à medida",
        "Acesso em vários dispositivos",
      ],
      audience: [
        "Empresas com apoio ao cliente",
        "Vendedores em contacto com compradores",
        "Equipas em teletrabalho",
        "Formadores e professores",
      ],
      fee: "Pagamento por utilização, debitado da sua eWallet.",
      settles:
        "O consumo é debitado do mesmo saldo eMa que tudo o resto.",
    },
    es: {
      tagline: "Habla con tus clientes",
      summary:
        "VoIP de pago por uso, videoconferencia y mensajería cifrada, más un centro de llamadas alojado para tu negocio: sin centralita, sin contrato.",
      description:
        "eMaCom es la capa de comunicaciones de la plataforma. Conecta a compradores, vendedores y miembros con llamadas VoIP, videoconferencia y mensajería segura en modalidad de pago por uso, y da a un negocio un centro de llamadas a medida sin comprar una centralita. Reuniones, seminarios web y clases en línea funcionan en la misma cuenta que todo lo demás.",
      howItWorks: [
        "Llama, escribe o inicia una videoconferencia desde dentro de la plataforma.",
        "Paga solo por lo que usas: sin cuota de línea, sin contrato.",
        "Organiza seminarios web, clases en línea o reuniones de equipo con pantalla compartida.",
        "Monta un centro de llamadas a medida para tu empresa cuando lo necesites.",
      ],
      capabilities: [
        "Llamadas VoIP (en despliegue en países seleccionados)",
        "Videoconferencia",
        "Facturación de pago por uso",
        "Mensajería segura y cifrada",
        "Pantalla compartida",
        "Grabación de sesiones",
        "Seminarios web y clases en línea",
        "Centros de llamadas a medida para empresas",
        "Acceso desde cualquier dispositivo",
      ],
      audience: [
        "Empresas con atención al cliente",
        "Vendedores que hablan con compradores",
        "Equipos que trabajan en remoto",
        "Formadores y docentes",
      ],
      fee: "Pago por uso, facturado desde tu eWallet.",
      settles: "El consumo se carga al mismo saldo eMa que todo lo demás.",
    },
  },

  {
    id: "emaclinic",
    name: "eMaClinic",
    family: FAMILY.BUSINESS,
    status: STATUS.LIVE,
    ticketCode: "EMY_CLINIC",
    links: { android: MAIN_APP, web: null },
    related: ["patele", "ewallet", "emacom"],
    en: {
      tagline: "Your doctor, one click away",
      summary:
        "Search by specialty or availability, book a verified doctor, consult by video, and get your prescription by email — paid from the wallet your Patele cover sits in.",
      description:
        "eMaClinic is a telemedicine platform that connects patients with verified doctors — booking, video consultation, prescriptions, medical records and payment, all in one place. It works both ways: patients find and book care; doctors manage appointments, consultations and their practice.",
      howItWorks: [
        "Patients: search by specialty or by the date you're free, and browse verified professionals.",
        "Pick the specialisation, the date, then the doctor available that day. View their profile and available times, and choose your slot.",
        "Choose your payment method and confirm — it settles from your eMa wallet.",
        "Consult by video straight from the reservation, or chat beforehand. The meeting link is emailed to you too.",
        "The doctor uploads your prescription report — view it, download it, and it arrives in your email.",
        "Doctors: work from a calendar dashboard, complete or cancel a reservation, or refer the patient to another specialisation — prescriptions carry across so the next doctor sees the full history.",
      ],
      capabilities: [
        "Search by specialty or by availability",
        "Verified, experienced professional profiles",
        "Appointment booking with live availability",
        "In-app payment",
        "Secure doctor–patient chat with file sharing",
        "One-click video consultation, link emailed",
        "Prescription reports, downloadable and emailed",
        "Patient personal, medical and insurance records",
        "Specialisation directory",
        "Doctor calendar dashboard",
        "Referral to another specialisation, history carried across",
        "Doctor licence management",
        "Searchable reservation history",
      ],
      audience: [
        "Patients anywhere",
        "GPs and specialists",
        "Clinics",
        "Medical schemes and insurers",
      ],
      fee: "Set per consultation by the doctor.",
      settles:
        "Consultations are paid from the same eMa wallet as everything else — so cover bought through Patele can actually be spent on care.",
    },
    ar: {
      tagline: "طبيبك على بُعد نقرة واحدة",
      summary:
        "ابحث بالتخصص أو بالتوافر، واحجز مع طبيب موثّق، واستشره بالفيديو، واستلم وصفتك على بريدك — بالدفع من المحفظة نفسها التي تحمل تغطية Patele الخاصة بك.",
      description:
        "eMaClinic منصّة طب عن بُعد تربط المرضى بأطباء موثّقين — الحجز، والاستشارة بالفيديو، ووصفات الدواء، والسجلات الطبية، والدفع، كلها في مكان واحد. وهي تعمل في الاتجاهين: المريض يجد الرعاية ويحجزها، والطبيب يدير مواعيده واستشاراته وعيادته.",
      howItWorks: [
        "للمريض: ابحث بالتخصص أو بالتاريخ المتاح لديك، وتصفّح المهنيين المُوثَّقين.",
        "اختر التخصص ثم التاريخ ثم الطبيب المتاح في ذلك اليوم. اطّلع على ملفه وأوقاته المتاحة، واختر موعدك.",
        "اختر وسيلة الدفع وأكّد — وتُخصم من محفظة eMa الخاصة بك.",
        "استشِر بالفيديو مباشرة من الحجز، أو تحدّث قبلها. ويصلك رابط الاجتماع على بريدك أيضًا.",
        "يرفع الطبيب تقرير وصفتك — فتطّلع عليه وتحمّله، ويصلك على بريدك الإلكتروني.",
        "للطبيب: اعمل من لوحة تقويم، وأنجِز الحجز أو ألغِه، أو حوّل المريض إلى تخصص آخر — وتنتقل الوصفات معه ليرى الطبيب التالي السجل كاملًا.",
      ],
      capabilities: [
        "بحث بالتخصص أو بالتوافر",
        "ملفات مهنيين موثّقين وذوي خبرة",
        "حجز مواعيد بتوافر حيّ",
        "دفع داخل التطبيق",
        "محادثة آمنة بين الطبيب والمريض مع مشاركة الملفات",
        "استشارة فيديو بنقرة واحدة مع إرسال الرابط بالبريد",
        "تقارير وصفات قابلة للتحميل وتُرسل بالبريد",
        "سجلات المريض الشخصية والطبية والتأمينية",
        "دليل التخصصات",
        "لوحة تقويم للطبيب",
        "التحويل إلى تخصص آخر مع نقل السجل",
        "إدارة ترخيص الطبيب",
        "سجل حجوزات قابل للبحث",
      ],
      audience: [
        "المرضى في أي مكان",
        "أطباء الأسرة والاختصاصيون",
        "العيادات",
        "شركات التأمين والبرامج الطبية",
      ],
      fee: "يحدّدها الطبيب لكل استشارة.",
      settles:
        "تُدفع الاستشارات من محفظة eMa نفسها — فتُصرَف التغطية المشتراة عبر Patele فعليًا على الرعاية.",
    },
    fr: {
      tagline: "Votre médecin, à un clic",
      summary:
        "Cherchez par spécialité ou par disponibilité, réservez un médecin vérifié, consultez en visio et recevez votre ordonnance par e-mail — payé depuis le portefeuille où se trouve votre couverture Patele.",
      description:
        "eMaClinic est une plateforme de télémédecine qui met en relation patients et médecins vérifiés — réservation, consultation vidéo, ordonnances, dossier médical et paiement, le tout au même endroit. Elle fonctionne dans les deux sens : les patients trouvent et réservent des soins ; les médecins gèrent rendez-vous, consultations et cabinet.",
      howItWorks: [
        "Patients : cherchez par spécialité ou par la date qui vous arrange, et parcourez des professionnels vérifiés.",
        "Choisissez la spécialité, la date, puis le médecin disponible ce jour-là. Consultez son profil et ses créneaux, et choisissez le vôtre.",
        "Choisissez votre moyen de paiement et confirmez — le règlement se fait depuis votre portefeuille eMa.",
        "Consultez en visio directement depuis la réservation, ou échangez par messagerie avant. Le lien vous est aussi envoyé par e-mail.",
        "Le médecin dépose votre ordonnance — consultez-la, téléchargez-la, et elle arrive dans votre boîte mail.",
        "Médecins : travaillez depuis un tableau de bord calendrier, clôturez ou annulez une réservation, ou orientez le patient vers une autre spécialité — les ordonnances suivent, pour que le médecin suivant ait tout l'historique.",
      ],
      capabilities: [
        "Recherche par spécialité ou par disponibilité",
        "Profils de professionnels vérifiés et expérimentés",
        "Réservation avec disponibilités en direct",
        "Paiement dans l'application",
        "Messagerie sécurisée médecin-patient avec partage de fichiers",
        "Consultation vidéo en un clic, lien envoyé par e-mail",
        "Ordonnances téléchargeables et envoyées par e-mail",
        "Dossiers personnels, médicaux et d'assurance du patient",
        "Annuaire des spécialités",
        "Tableau de bord calendrier du médecin",
        "Orientation vers une autre spécialité, historique transmis",
        "Gestion de la licence du médecin",
        "Historique des réservations consultable",
      ],
      audience: [
        "Patients, où qu'ils soient",
        "Médecins généralistes et spécialistes",
        "Cliniques",
        "Mutuelles santé et assureurs",
      ],
      fee: "Fixés par le médecin, par consultation.",
      settles:
        "Les consultations sont payées depuis le même portefeuille eMa que tout le reste — la couverture souscrite via Patele peut donc réellement servir à se soigner.",
    },
    pt: {
      tagline: "O seu médico, a um clique",
      summary:
        "Pesquise por especialidade ou disponibilidade, marque com um médico verificado, consulte por vídeo e receba a receita por e-mail — pago da carteira onde está a sua cobertura Patele.",
      description:
        "O eMaClinic é uma plataforma de telemedicina que liga doentes a médicos verificados — marcação, consulta por vídeo, receitas, registos clínicos e pagamento, tudo num só sítio. Funciona nos dois sentidos: os doentes encontram e marcam cuidados; os médicos gerem consultas, atendimentos e o seu consultório.",
      howItWorks: [
        "Doentes: pesquise por especialidade ou pela data em que está disponível, e explore profissionais verificados.",
        "Escolha a especialidade, a data e depois o médico disponível nesse dia. Veja o perfil e os horários e escolha o seu.",
        "Escolha o meio de pagamento e confirme — é debitado da sua carteira eMa.",
        "Consulte por vídeo diretamente a partir da marcação, ou converse antes. O link da reunião também lhe é enviado por e-mail.",
        "O médico carrega a sua receita — veja-a, descarregue-a, e ela chega ao seu e-mail.",
        "Médicos: trabalhe a partir de um painel com calendário, conclua ou cancele uma marcação, ou encaminhe o doente para outra especialidade — as receitas seguem, para que o médico seguinte veja todo o historial.",
      ],
      capabilities: [
        "Pesquisa por especialidade ou disponibilidade",
        "Perfis de profissionais verificados e experientes",
        "Marcação com disponibilidade em direto",
        "Pagamento na aplicação",
        "Conversa segura entre médico e doente com partilha de ficheiros",
        "Consulta por vídeo num clique, com link por e-mail",
        "Receitas descarregáveis e enviadas por e-mail",
        "Registos pessoais, clínicos e de seguro do doente",
        "Diretório de especialidades",
        "Painel com calendário do médico",
        "Encaminhamento para outra especialidade com historial",
        "Gestão da licença do médico",
        "Histórico de marcações pesquisável",
      ],
      audience: [
        "Doentes em qualquer lugar",
        "Médicos de família e especialistas",
        "Clínicas",
        "Planos de saúde e seguradoras",
      ],
      fee: "Definida pelo médico, por consulta.",
      settles:
        "As consultas são pagas da mesma carteira eMa que tudo o resto — para que a cobertura comprada via Patele possa realmente ser usada em cuidados de saúde.",
    },
    es: {
      tagline: "Tu médico, a un clic",
      summary:
        "Busca por especialidad o disponibilidad, reserva con un médico verificado, consulta por vídeo y recibe tu receta por correo, pagado desde la cartera donde está tu cobertura de Patele.",
      description:
        "eMaClinic es una plataforma de telemedicina que conecta a pacientes con médicos verificados: reserva, consulta por vídeo, recetas, historial médico y pago, todo en un mismo sitio. Funciona en ambos sentidos: los pacientes encuentran y reservan atención; los médicos gestionan sus citas, sus consultas y su consulta profesional.",
      howItWorks: [
        "Pacientes: busca por especialidad o por la fecha en que estés libre, y explora profesionales verificados.",
        "Elige la especialidad, la fecha y después el médico disponible ese día. Consulta su perfil y sus horas libres, y elige tu hueco.",
        "Elige tu método de pago y confirma: se liquida desde tu cartera eMa.",
        "Consulta por vídeo directamente desde la reserva, o conversa antes por chat. El enlace de la reunión también te llega por correo.",
        "El médico sube tu informe con la receta: puedes verlo, descargarlo y te llega al correo.",
        "Médicos: trabajad desde un panel de calendario, completad o cancelad una reserva, o derivad al paciente a otra especialidad; las recetas se trasladan para que el siguiente médico vea el historial completo.",
      ],
      capabilities: [
        "Búsqueda por especialidad o por disponibilidad",
        "Perfiles de profesionales verificados y con experiencia",
        "Reserva de cita con disponibilidad en vivo",
        "Pago desde la aplicación",
        "Chat seguro médico-paciente con envío de archivos",
        "Videoconsulta a un clic, con enlace enviado por correo",
        "Informes de receta, descargables y enviados por correo",
        "Historial personal, médico y de seguro del paciente",
        "Directorio de especialidades",
        "Panel de calendario para el médico",
        "Derivación a otra especialidad con el historial incluido",
        "Gestión de las licencias del médico",
        "Historial de reservas con búsqueda",
      ],
      audience: [
        "Pacientes en cualquier lugar",
        "Médicos de familia y especialistas",
        "Clínicas",
        "Planes médicos y aseguradoras",
      ],
      fee: "La fija el médico por consulta.",
      settles:
        "Las consultas se pagan desde la misma cartera eMa que todo lo demás, de modo que la cobertura contratada con Patele puede gastarse realmente en atención sanitaria.",
    },
  },
];

/** All modules, resolved to the active locale. */
export const ALL_MODULES = modules.map(localize);

/** The 7 financial modules. */
export const MONEY_MODULES = ALL_MODULES.filter(
  (m) => m.family === FAMILY.MONEY
);

/** The 7 commercial modules. */
export const BUSINESS_MODULES = ALL_MODULES.filter(
  (m) => m.family === FAMILY.BUSINESS
);

/** Look one up by its id — used by /modules/:id. */
export function getModule(id) {
  return ALL_MODULES.find((m) => m.id === id);
}

/** Resolve a list of ids to modules, skipping any that don't exist. */
export function getModules(ids = []) {
  return ids.map(getModule).filter(Boolean);
}

/**
 * Modules that accept a support ticket, for the Help Request dropdown.
 * eWallet / SIBA / Patele / Paymates all share the "Emalyami" code, so they are
 * listed individually but post the same value.
 */
export const TICKET_MODULES = ALL_MODULES.filter((m) => m.ticketCode);

export default ALL_MODULES;
