import { pick } from "./locale";

/** Per-route titles and descriptions. `%s` is replaced with the module name. */
export const SEO = pick({
  en: {
    siteName: "eMalyami",
    titleTemplate: "%s · eMa",
    home: {
      title: "eMa · Everything your business needs. One account, 21 COMESA states.",
      description:
        "eMa is the digital operating system for Africa's small and medium enterprises, and eMa-CBC is the private-sector execution layer for the COMESA Business Council across 21 member states. Sell in store and online, take payments by QR or cash, restock, raise capital, save with your group and trade across borders, all from one wallet.",
    },
    modules: {
      title: "Fourteen tools. One account.",
      description:
        "Every eMa module — eWallet, Paymates, eMaTuma, SIBA, eMaSave, eMaFunding, Patele, eMaPOS, eMaMall, eMaServe, eMaExpo, eMaCargo, eMaCom and eMaClinic — settling into a single balance.",
    },
    faq: {
      title: "Questions, answered",
      description:
        "How to activate eMa, receive money, withdraw cash, run a SIBA group, transaction limits, licensing, security and support.",
    },
    help: {
      title: "Need help?",
      description:
        "Submit a Help Request to the eMalyami support team — tell us the module, what happened, and how to reach you.",
    },
    news: {
      title: "Latest news and updates · eMa",
      description: "Product news and updates from eMalyami.",
    },
  },
  ar: {
    siteName: "eMalyami",
    titleTemplate: "%s · eMa",
    home: {
      title: "eMa · كل ما يحتاجه عملك. حساب واحد، و21 دولة في الكوميسا.",
      description:
        "eMa هو النظام التشغيلي الرقمي للمشاريع الصغيرة والمتوسطة في أفريقيا، وeMa-CBC هو الذراع التنفيذية للقطاع الخاص لمجلس الأعمال للكوميسا في 21 دولة عضوًا. بِع في متجرك وعلى الإنترنت، واقبض برمز QR أو نقدًا، وأعِد التخزين، واحصل على التمويل، وادّخر مع مجموعتك، وتاجر عبر الحدود، من محفظة واحدة.",
    },
    modules: {
      title: "أربع عشرة أداة. حساب واحد.",
      description:
        "كل وحدات eMa — eWallet وPaymates وeMaTuma وSIBA وeMaSave وeMaFunding وPatele وeMaPOS وeMaMall وeMaServe وeMaExpo وeMaCargo وeMaCom وeMaClinic — تستقرّ في رصيد واحد.",
    },
    faq: {
      title: "أسئلة وأجوبة",
      description:
        "كيفية تفعيل eMa، واستلام الأموال، والسحب النقدي، وإدارة مجموعة SIBA، وحدود المعاملات، والتراخيص، والأمان والدعم.",
    },
    help: {
      title: "تحتاج مساعدة؟",
      description:
        "قدّم طلب مساعدة إلى فريق دعم eMalyami — أخبرنا بالوحدة، وبما حدث، وكيف نصل إليك.",
    },
    news: {
      title: "آخر الأخبار والتحديثات · eMa",
      description: "أخبار المنتج وآخر المستجدات من eMalyami.",
    },
  },
  fr: {
    siteName: "eMalyami",
    titleTemplate: "%s · eMa",
    home: {
      title: "eMa · Tout ce dont votre entreprise a besoin. Un compte, 21 États du COMESA.",
      description:
        "eMa est le système d'exploitation numérique des PME africaines, et eMa-CBC le bras d'exécution du secteur privé pour le COMESA Business Council dans 21 États membres. Vendez en boutique et en ligne, encaissez par QR ou en espèces, réapprovisionnez, levez des fonds, épargnez en groupe et commercez au-delà des frontières, depuis un seul portefeuille.",
    },
    modules: {
      title: "Quatorze outils. Un seul compte.",
      description:
        "Tous les modules eMa — eWallet, Paymates, eMaTuma, SIBA, eMaSave, eMaFunding, Patele, eMaPOS, eMaMall, eMaServe, eMaExpo, eMaCargo, eMaCom et eMaClinic — réglés sur un solde unique.",
    },
    faq: {
      title: "Vos questions, nos réponses",
      description:
        "Activer eMa, recevoir de l'argent, retirer des espèces, gérer un groupe SIBA, plafonds de transaction, agréments, sécurité et assistance.",
    },
    help: {
      title: "Besoin d'aide ?",
      description:
        "Envoyez une demande d'assistance à l'équipe eMalyami — indiquez le module, ce qui s'est passé et comment vous joindre.",
    },
    news: {
      title: "Actualités et nouveautés · eMa",
      description: "Actualités produit et nouveautés d'eMalyami.",
    },
  },
  pt: {
    siteName: "eMalyami",
    titleTemplate: "%s · eMa",
    home: {
      title: "eMa · Tudo o que o seu negócio precisa. Uma conta, 21 Estados do COMESA.",
      description:
        "O eMa é o sistema operativo digital das PME africanas, e o eMa-CBC é o braço de execução do setor privado para o COMESA Business Council em 21 Estados-membros. Venda na loja e online, receba por QR ou em numerário, reponha stock, obtenha capital, poupe com o seu grupo e negoceie além-fronteiras, tudo a partir de uma só carteira.",
    },
    modules: {
      title: "Catorze ferramentas. Uma só conta.",
      description:
        "Todos os módulos eMa — eWallet, Paymates, eMaTuma, SIBA, eMaSave, eMaFunding, Patele, eMaPOS, eMaMall, eMaServe, eMaExpo, eMaCargo, eMaCom e eMaClinic — liquidados num saldo único.",
    },
    faq: {
      title: "Perguntas respondidas",
      description:
        "Como ativar o eMa, receber dinheiro, levantar numerário, gerir um grupo SIBA, limites de transação, licenciamento, segurança e apoio.",
    },
    help: {
      title: "Precisa de ajuda?",
      description:
        "Envie um pedido de apoio à equipa eMalyami — indique o módulo, o que aconteceu e como o podemos contactar.",
    },
    news: {
      title: "Notícias e novidades · eMa",
      description: "Notícias de produto e novidades da eMalyami.",
    },
  },
  es: {
    siteName: "eMalyami",
    titleTemplate: "%s · eMa",
    home: {
      title: "eMa · Todo lo que tu negocio necesita. Una cuenta, 21 Estados del COMESA.",
      description:
        "eMa es el sistema operativo digital de las pymes africanas, y eMa-CBC es el brazo ejecutor del sector privado para el COMESA Business Council en 21 Estados miembros. Vende en tienda y en línea, cobra por QR o en efectivo, repón inventario, consigue capital, ahorra con tu grupo y comercia más allá de las fronteras, todo desde una sola cartera.",
    },
    modules: {
      title: "Catorce herramientas. Una sola cuenta.",
      description:
        "Todos los módulos de eMa — eWallet, Paymates, eMaTuma, SIBA, eMaSave, eMaFunding, Patele, eMaPOS, eMaMall, eMaServe, eMaExpo, eMaCargo, eMaCom y eMaClinic — liquidando en un único saldo.",
    },
    faq: {
      title: "Preguntas respondidas",
      description:
        "Cómo activar eMa, recibir dinero, retirar efectivo, gestionar un grupo SIBA, límites de transacción, licencias, seguridad y soporte.",
    },
    help: {
      title: "¿Necesitas ayuda?",
      description:
        "Envía una solicitud de ayuda al equipo de soporte de eMalyami: dinos el módulo, qué ocurrió y cómo contactarte.",
    },
    news: {
      title: "Noticias y novedades · eMa",
      description: "Noticias de producto y novedades de eMalyami.",
    },
  },
});

export default SEO;
