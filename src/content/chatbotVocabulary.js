/**
 * THE CHATBOT'S DOMAIN DICTIONARY — where most of the answer quality lives.
 *
 * Visitors do not search for "eMaPOS". They search for "card machine", "till",
 * "caisse", "آلة الدفع". Each entry maps the words real people use onto the
 * tokens the corpus is actually indexed under.
 *
 * Matching is substring-based on the folded query, so multi-word phrases work
 * and partial words ("crowdfund" inside "crowdfunding") match too.
 *
 * Adding a phrase here is the cheapest way to improve the bot. No retraining,
 * no embeddings — just another way of saying the same thing.
 *
 * It lives in src/content rather than beside the search code because it is
 * translatable copy: every entry needs all five locales, and a translator
 * extending it is doing content work, not engineering.
 */

/** Product vocabulary → module id tokens. */
export const MODULE_SYNONYMS = [
  {
    add: ["emapos", "pos"],
    phrases: {
      en: ["point of sale", "till", "cash register", "card machine", "checkout", "card reader", "swipe", "terminal", "scan barcode", "stock", "inventory", "cashier"],
      fr: ["point de vente", "caisse", "terminal de paiement", "lecteur de carte", "stock", "inventaire", "caissier"],
      pt: ["ponto de venda", "caixa", "terminal de pagamento", "stock", "inventario", "operador de caixa"],
      es: ["punto de venta", "caja", "terminal de pago", "lector de tarjeta", "inventario", "cajero"],
      ar: ["نقطه بيع", "كاشير", "اله دفع", "قاريء بطاقات", "مخزون", "جرد", "صندوق"],
    },
  },
  {
    add: ["ematuma", "remittance", "border"],
    phrases: {
      en: ["send money home", "send money abroad", "remittance", "cross border", "overseas", "another country", "diaspora", "money transfer", "western union"],
      fr: ["envoyer de l argent", "transfert d argent", "transfrontalier", "etranger", "diaspora"],
      pt: ["enviar dinheiro", "transferencia", "transfronteirico", "estrangeiro", "diaspora"],
      es: ["enviar dinero", "transferencia", "transfronterizo", "extranjero", "diaspora"],
      ar: ["تحويل اموال", "ارسال اموال", "عبر الحدود", "الخارج", "حواله"],
    },
  },
  {
    add: ["siba", "group", "saving"],
    phrases: {
      en: ["stokvel", "group saving", "savings group", "rotating savings", "chama", "susu", "tontine", "save together", "my circle"],
      fr: ["tontine", "epargne de groupe", "groupe d epargne"],
      pt: ["poupanca em grupo", "grupo de poupanca"],
      es: ["ahorro en grupo", "grupo de ahorro", "tanda"],
      ar: ["جمعيه", "ادخار جماعي", "مجموعه ادخار"],
    },
  },
  {
    add: ["emasave", "saving"],
    phrases: {
      en: ["piggy bank", "save money", "savings", "put money away", "lock away", "goal"],
      fr: ["tirelire", "epargner", "epargne", "mettre de cote"],
      pt: ["mealheiro", "poupar", "poupanca"],
      es: ["hucha", "ahorrar", "ahorro"],
      ar: ["ادخار", "توفير", "حصاله"],
    },
  },
  {
    add: ["emafunding", "crowdfunding", "capital"],
    phrases: {
      en: ["crowdfund", "raise money", "raise capital", "investor", "funding", "loan", "borrow", "finance my business", "grant"],
      fr: ["financement participatif", "lever des fonds", "investisseur", "pret", "emprunter"],
      pt: ["financiamento coletivo", "angariar fundos", "investidor", "emprestimo"],
      es: ["financiacion colectiva", "recaudar fondos", "inversor", "prestamo"],
      ar: ["تمويل جماعي", "جمع تمويل", "مستثمر", "قرض", "اقتراض"],
    },
  },
  {
    add: ["paymate", "cash", "agent"],
    phrases: {
      en: ["cash in", "cash out", "withdraw cash", "deposit cash", "agent", "atm", "get cash"],
      fr: ["retirer de l argent", "deposer de l argent", "agent", "distributeur"],
      pt: ["levantar dinheiro", "depositar dinheiro", "agente"],
      es: ["retirar efectivo", "depositar efectivo", "agente", "cajero automatico"],
      ar: ["سحب نقدي", "ايداع نقدي", "وكيل", "صراف"],
    },
  },
  {
    add: ["emamall", "shop", "online"],
    phrases: {
      en: ["online shop", "online store", "sell online", "ecommerce", "e commerce", "marketplace", "storefront", "catalogue"],
      fr: ["boutique en ligne", "vendre en ligne", "commerce electronique", "marche en ligne"],
      pt: ["loja online", "vender online", "comercio eletronico", "mercado"],
      es: ["tienda online", "vender por internet", "comercio electronico", "mercado"],
      ar: ["متجر الكتروني", "بيع اونلاين", "تجاره الكترونيه", "سوق"],
    },
  },
  {
    add: ["emaserve", "booking", "appointment"],
    phrases: {
      en: ["booking", "book appointment", "appointments", "service business", "freelancer", "plumber", "electrician", "salon", "barber", "hairdresser", "tradesman", "quote", "job"],
      fr: ["rendez vous", "reservation", "prestataire", "coiffeur", "salon", "plombier", "electricien", "devis"],
      pt: ["marcacao", "agendamento", "prestador", "cabeleireiro", "salao", "canalizador", "orcamento"],
      es: ["cita", "reserva", "proveedor", "peluqueria", "salon", "fontanero", "presupuesto"],
      ar: ["حجز موعد", "مواعيد", "صالون", "حلاق", "سباك", "كهربائي", "عرض سعر"],
    },
  },
  {
    add: ["emacargo", "freight", "logistics"],
    phrases: {
      en: ["freight", "shipping", "logistics", "cargo", "haulage", "truck", "deliver goods", "export", "import", "customs"],
      fr: ["fret", "expedition", "logistique", "cargaison", "camion", "export", "import", "douane"],
      pt: ["frete", "expedicao", "logistica", "carga", "camiao", "exportacao", "alfandega"],
      es: ["flete", "envio", "logistica", "carga", "camion", "exportacion", "aduana"],
      ar: ["شحن", "لوجستيات", "بضائع", "شاحنه", "تصدير", "استيراد", "جمارك"],
    },
  },
  {
    add: ["emaclinic", "health", "doctor"],
    phrases: {
      en: ["doctor", "clinic", "health", "medical", "consultation", "patient", "pharmacy", "telemedicine"],
      fr: ["medecin", "clinique", "sante", "medical", "consultation", "patient", "pharmacie"],
      pt: ["medico", "clinica", "saude", "consulta", "paciente", "farmacia"],
      es: ["medico", "clinica", "salud", "consulta", "paciente", "farmacia"],
      ar: ["طبيب", "عياده", "صحه", "استشاره", "مريض", "صيدليه"],
    },
  },
  {
    add: ["patele", "insurance", "cover"],
    phrases: {
      en: ["insurance", "insure", "cover", "policy", "funeral", "premium", "claim"],
      fr: ["assurance", "assurer", "couverture", "police", "obseques", "prime", "sinistre"],
      pt: ["seguro", "cobertura", "apolice", "funeral", "premio"],
      es: ["seguro", "cobertura", "poliza", "funeral", "prima"],
      ar: ["تامين", "تغطيه", "وثيقه", "جنازه", "قسط", "مطالبه"],
    },
  },
  {
    add: ["emaexpo", "exhibition"],
    phrases: {
      en: ["exhibition", "trade show", "expo", "stand", "showcase", "fair"],
      fr: ["exposition", "salon professionnel", "stand", "foire"],
      pt: ["exposicao", "feira", "stand"],
      es: ["exposicion", "feria", "stand"],
      ar: ["معرض", "جناح", "عرض منتجات"],
    },
  },
  {
    add: ["emacom", "meeting", "communication"],
    phrases: {
      en: ["meeting", "video call", "conference", "chat", "communicate", "call my team"],
      fr: ["reunion", "appel video", "conference", "communiquer"],
      pt: ["reuniao", "videochamada", "conferencia", "comunicar"],
      es: ["reunion", "videollamada", "conferencia", "comunicar"],
      ar: ["اجتماع", "مكالمه فيديو", "مؤتمر", "تواصل"],
    },
  },
  {
    add: ["ewallet", "balance", "wallet"],
    phrases: {
      en: ["wallet", "balance", "account", "top up", "load funds", "airtime", "pay bills", "qr code"],
      fr: ["portefeuille", "solde", "compte", "recharger", "credit telephonique", "payer factures"],
      pt: ["carteira", "saldo", "conta", "carregar", "saldo telefonico", "pagar contas"],
      es: ["cartera", "saldo", "cuenta", "recargar", "saldo movil", "pagar facturas"],
      ar: ["محفظه", "رصيد", "حساب", "شحن رصيد", "دفع فواتير"],
    },
  },
];

/** Question shapes → intent tokens. Consumed by intents.js. */
export const INTENT_PHRASES = {
  pricing: {
    en: ["how much", "price", "pricing", "cost", "costs", "fee", "fees", "charge", "commission", "rate", "expensive", "free"],
    fr: ["combien", "prix", "tarif", "cout", "frais", "commission", "gratuit"],
    pt: ["quanto custa", "preco", "custo", "taxa", "comissao", "gratis"],
    es: ["cuanto cuesta", "precio", "costo", "tarifa", "comision", "gratis"],
    ar: ["كم يكلف", "سعر", "تكلفه", "رسوم", "عموله", "مجانا"],
  },
  security: {
    en: ["safe", "secure", "security", "trust", "protected", "fraud", "scam", "hacked", "licence", "license", "regulated"],
    fr: ["sur", "securite", "confiance", "protege", "fraude", "arnaque", "licence", "regule"],
    pt: ["seguro", "seguranca", "confianca", "protegido", "fraude", "licenca", "regulado"],
    es: ["seguro", "seguridad", "confianza", "protegido", "fraude", "licencia", "regulado"],
    ar: ["امان", "امن", "ثقه", "محمي", "احتيال", "ترخيص", "منظم"],
  },
  getStarted: {
    en: ["how do i start", "get started", "sign up", "register", "open an account", "join", "download", "install", "first step"],
    fr: ["commencer", "s inscrire", "ouvrir un compte", "rejoindre", "telecharger", "installer"],
    pt: ["comecar", "registar", "abrir conta", "aderir", "descarregar", "instalar"],
    es: ["empezar", "registrarse", "abrir cuenta", "unirme", "descargar", "instalar"],
    ar: ["كيف ابدا", "تسجيل", "فتح حساب", "انضمام", "تحميل", "تنزيل"],
  },
  contact: {
    en: ["talk to a human", "speak to someone", "contact", "support", "phone number", "email", "call you", "complaint"],
    fr: ["parler a quelqu un", "contacter", "assistance", "numero de telephone", "courriel", "reclamation"],
    pt: ["falar com alguem", "contactar", "apoio", "numero de telefone", "email", "reclamacao"],
    es: ["hablar con alguien", "contactar", "soporte", "numero de telefono", "correo", "reclamacion"],
    ar: ["التحدث مع شخص", "اتصال", "دعم", "رقم هاتف", "بريد", "شكوى"],
  },
  recommend: {
    en: ["i run", "i own", "i have a", "i sell", "my business", "my shop", "my company", "recommend", "which module", "what should i use", "suitable for", "best for", "i am a"],
    fr: ["je gere", "je possede", "je vends", "mon entreprise", "ma boutique", "recommander", "quel module", "que dois je utiliser", "je suis"],
    pt: ["eu tenho", "eu vendo", "meu negocio", "minha loja", "recomendar", "que modulo", "o que devo usar", "eu sou"],
    es: ["tengo un", "yo vendo", "mi negocio", "mi tienda", "recomendar", "que modulo", "que deberia usar", "soy"],
    ar: ["لدي", "امتلك", "ابيع", "عملي", "متجري", "توصيه", "اي وحده", "ماذا استخدم", "انا"],
  },
  greeting: {
    en: ["hello", "hi", "hey", "good morning", "good afternoon", "good evening", "what do you do", "who are you", "help me"],
    fr: ["bonjour", "salut", "bonsoir", "que faites vous", "qui etes vous", "aidez moi"],
    pt: ["ola", "bom dia", "boa tarde", "boa noite", "o que fazem", "quem sao", "ajuda"],
    es: ["hola", "buenos dias", "buenas tardes", "buenas noches", "que hacen", "quien eres", "ayuda"],
    ar: ["مرحبا", "اهلا", "صباح الخير", "مساء الخير", "ماذا تفعلون", "من انتم", "ساعدني"],
  },
};

/** Question shapes that ask *how something works* rather than *what it is*. */
export const HOW_PHRASES = {
  en: ["how does", "how do i use", "how it works", "how to use", "steps", "set up", "setup", "process"],
  fr: ["comment ca marche", "comment utiliser", "etapes", "configurer"],
  pt: ["como funciona", "como usar", "passos", "configurar"],
  es: ["como funciona", "como usar", "pasos", "configurar"],
  ar: ["كيف يعمل", "كيف استخدم", "خطوات", "اعداد"],
};

export const WHAT_PHRASES = {
  en: ["what is", "what are", "tell me about", "explain", "what does"],
  fr: ["qu est ce que", "c est quoi", "parlez moi de", "expliquer"],
  pt: ["o que e", "fale sobre", "explicar"],
  es: ["que es", "hablame de", "explicar"],
  ar: ["ما هو", "ما هي", "اخبرني عن", "اشرح"],
};
