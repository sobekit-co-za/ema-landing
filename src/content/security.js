import { pick } from "./locale";

/**
 * Security, trust and infrastructure.
 *
 * Six account-level controls from the eMa feature deck, plus the three
 * platform-level guarantees the deck documents and the site was omitting:
 * fraud prevention rule engines, zero-downtime infrastructure and disaster
 * recovery. An institutional partner asks about those before it asks about
 * anything else.
 */

export const SECURITY = pick({
  en: {
    title: "Built to be trusted with your revenue",
    subtitle:
      "Nine controls that protect every account, every transaction, every day.",
    items: [
      {
        title: "KYC verification",
        detail: "Every account is identity-verified before it can transact.",
        icon: "id",
      },
      {
        title: "OTP on every sensitive action",
        detail:
          "A one-time code to your verified phone, valid for a short window.",
        icon: "key",
      },
      {
        title: "Phone-number binding",
        detail: "Only a verified cellphone can access the wallet tied to it.",
        icon: "phone",
      },
      {
        title: "Geo-tagging",
        detail:
          "Transactions carry location data, making anomalies visible.",
        icon: "pin",
      },
      {
        title: "Auto-logout after 2 minutes",
        detail:
          "An idle session closes itself, so a put-down phone isn't an open till.",
        icon: "timer",
      },
      {
        title: "Three-strike lockout",
        detail:
          "Three wrong passwords disables the account until it's properly recovered.",
        icon: "lock",
      },
      {
        title: "Fraud prevention",
        detail:
          "Real-time transaction monitoring with customisable rule engines that identify anomalies and enforce controls instantly.",
        icon: "shield",
      },
      {
        title: "Zero-downtime infrastructure",
        detail:
          "Master-replica database architecture with load balancing across dual servers, and automatic failover during an outage.",
        icon: "server",
      },
      {
        title: "Disaster recovery",
        detail:
          "Geographic redundancy and automatic failover, designed to keep financial transaction data intact.",
        icon: "recovery",
      },
    ],
    footnote:
      "Lost your phone? Visit your nearest Paymate with your ID and ask to freeze the account — or call customer service. Your funds stay safe.",
  },
  ar: {
    title: "مبنيّ ليكون جديرًا بثقتك بإيراداتك",
    subtitle: "تسعة ضوابط تحمي كل حساب وكل معاملة كل يوم.",
    items: [
      {
        title: "التحقّق من الهوية (KYC)",
        detail: "كل حساب يُوثَّق قبل أن يتمكّن من إجراء أي معاملة.",
        icon: "id",
      },
      {
        title: "رمز OTP لكل إجراء حسّاس",
        detail: "رمز لمرة واحدة يصل إلى هاتفك المُوثَّق وصالح لفترة قصيرة.",
        icon: "key",
      },
      {
        title: "الربط برقم الهاتف",
        detail: "لا يصل إلى المحفظة إلا الهاتف المُوثَّق المرتبط بها.",
        icon: "phone",
      },
      {
        title: "تحديد الموقع الجغرافي",
        detail: "كل معاملة تحمل بيانات موقعها، فتظهر الحالات الشاذّة بوضوح.",
        icon: "pin",
      },
      {
        title: "تسجيل خروج تلقائي بعد دقيقتين",
        detail:
          "الجلسة الخاملة تُغلق نفسها، فلا يتحوّل هاتف مُهمَل إلى صندوق مفتوح.",
        icon: "timer",
      },
      {
        title: "الإيقاف بعد ثلاث محاولات",
        detail:
          "ثلاث كلمات مرور خاطئة تُعطّل الحساب حتى تتم استعادته بالطريقة الصحيحة.",
        icon: "lock",
      },
      {
        title: "منع الاحتيال",
        detail:
          "مراقبة المعاملات في الوقت الفعلي عبر محرّكات قواعد قابلة للتخصيص تكتشف الحالات الشاذّة وتطبّق الضوابط فورًا.",
        icon: "shield",
      },
      {
        title: "بنية تحتية بلا توقّف",
        detail:
          "قاعدة بيانات رئيسية ونسخ متماثلة مع موازنة أحمال عبر خادمين، وتحويل تلقائي عند حدوث أي انقطاع.",
        icon: "server",
      },
      {
        title: "التعافي من الكوارث",
        detail:
          "تكرار جغرافي وتحويل تلقائي عند الأعطال، مصمَّم للحفاظ على سلامة بيانات المعاملات المالية.",
        icon: "recovery",
      },
    ],
    footnote:
      "فقدت هاتفك؟ توجّه إلى أقرب وكيل Paymate ومعك هويتك واطلب تجميد الحساب — أو اتصل بخدمة العملاء. أموالك تبقى في أمان.",
  },
  fr: {
    title: "Conçu pour mériter la confiance de vos recettes",
    subtitle:
      "Neuf protections qui sécurisent chaque compte, chaque transaction, chaque jour.",
    items: [
      {
        title: "Vérification KYC",
        detail:
          "L'identité de chaque compte est vérifiée avant toute transaction.",
        icon: "id",
      },
      {
        title: "Code OTP à chaque action sensible",
        detail:
          "Un code à usage unique envoyé à votre téléphone vérifié, valable quelques instants.",
        icon: "key",
      },
      {
        title: "Liaison au numéro de téléphone",
        detail:
          "Seul le téléphone vérifié associé au portefeuille peut y accéder.",
        icon: "phone",
      },
      {
        title: "Géolocalisation",
        detail:
          "Chaque transaction porte sa position, ce qui rend les anomalies visibles.",
        icon: "pin",
      },
      {
        title: "Déconnexion après 2 minutes",
        detail:
          "Une session inactive se ferme d'elle-même : un téléphone posé n'est pas une caisse ouverte.",
        icon: "timer",
      },
      {
        title: "Blocage après trois tentatives",
        detail:
          "Trois mots de passe erronés désactivent le compte jusqu'à sa récupération en bonne et due forme.",
        icon: "lock",
      },
      {
        title: "Prévention de la fraude",
        detail:
          "Surveillance des transactions en temps réel avec des moteurs de règles personnalisables qui repèrent les anomalies et appliquent les contrôles instantanément.",
        icon: "shield",
      },
      {
        title: "Infrastructure sans interruption",
        detail:
          "Architecture de base maître-réplique avec répartition de charge sur deux serveurs et bascule automatique en cas de panne.",
        icon: "server",
      },
      {
        title: "Reprise après sinistre",
        detail:
          "Redondance géographique et bascule automatique, conçues pour préserver l'intégrité des données de transaction.",
        icon: "recovery",
      },
    ],
    footnote:
      "Téléphone perdu ? Rendez-vous chez le Paymate le plus proche avec votre pièce d'identité et demandez le gel du compte — ou appelez le service client. Vos fonds restent en sécurité.",
  },
  pt: {
    title: "Feito para merecer a confiança das suas receitas",
    subtitle:
      "Nove proteções que defendem cada conta, cada transação, todos os dias.",
    items: [
      {
        title: "Verificação KYC",
        detail:
          "A identidade de cada conta é verificada antes de poder transacionar.",
        icon: "id",
      },
      {
        title: "Código OTP em cada ação sensível",
        detail:
          "Um código de uso único enviado para o seu telemóvel verificado, válido por poucos instantes.",
        icon: "key",
      },
      {
        title: "Ligação ao número de telemóvel",
        detail:
          "Só o telemóvel verificado associado à carteira lhe pode aceder.",
        icon: "phone",
      },
      {
        title: "Geolocalização",
        detail:
          "Cada transação regista a sua localização, tornando as anomalias visíveis.",
        icon: "pin",
      },
      {
        title: "Encerramento automático após 2 minutos",
        detail:
          "Uma sessão inativa fecha-se sozinha: um telemóvel pousado não é uma caixa aberta.",
        icon: "timer",
      },
      {
        title: "Bloqueio à terceira tentativa",
        detail:
          "Três palavras-passe erradas desativam a conta até ser devidamente recuperada.",
        icon: "lock",
      },
      {
        title: "Prevenção de fraude",
        detail:
          "Monitorização de transações em tempo real com motores de regras personalizáveis que identificam anomalias e aplicam controlos de imediato.",
        icon: "shield",
      },
      {
        title: "Infraestrutura sem paragens",
        detail:
          "Arquitetura de base de dados mestre-réplica com balanceamento de carga em dois servidores e failover automático durante uma falha.",
        icon: "server",
      },
      {
        title: "Recuperação de desastres",
        detail:
          "Redundância geográfica e failover automático, pensados para manter íntegros os dados das transações financeiras.",
        icon: "recovery",
      },
    ],
    footnote:
      "Perdeu o telemóvel? Dirija-se ao Paymate mais próximo com o seu documento de identificação e peça o congelamento da conta — ou ligue para o apoio ao cliente. Os seus fundos ficam seguros.",
  },
  es: {
    title: "Construido para merecer la confianza de tus ingresos",
    subtitle:
      "Nueve controles que protegen cada cuenta, cada transacción, todos los días.",
    items: [
      {
        title: "Verificación KYC",
        detail:
          "La identidad de cada cuenta se verifica antes de poder operar.",
        icon: "id",
      },
      {
        title: "Código OTP en cada acción sensible",
        detail:
          "Un código de un solo uso enviado a tu teléfono verificado, válido durante unos instantes.",
        icon: "key",
      },
      {
        title: "Vinculación al número de teléfono",
        detail:
          "Solo el teléfono verificado asociado a la cartera puede acceder a ella.",
        icon: "phone",
      },
      {
        title: "Geolocalización",
        detail:
          "Cada transacción registra su ubicación, lo que hace visibles las anomalías.",
        icon: "pin",
      },
      {
        title: "Cierre de sesión automático a los 2 minutos",
        detail:
          "Una sesión inactiva se cierra sola: un teléfono dejado sobre la mesa no es una caja abierta.",
        icon: "timer",
      },
      {
        title: "Bloqueo al tercer intento",
        detail:
          "Tres contraseñas incorrectas desactivan la cuenta hasta recuperarla debidamente.",
        icon: "lock",
      },
      {
        title: "Prevención del fraude",
        detail:
          "Monitorización de transacciones en tiempo real con motores de reglas configurables que detectan anomalías y aplican controles al instante.",
        icon: "shield",
      },
      {
        title: "Infraestructura sin caídas",
        detail:
          "Arquitectura de base de datos maestro-réplica con balanceo de carga en servidores duplicados y conmutación automática ante una caída.",
        icon: "server",
      },
      {
        title: "Recuperación ante desastres",
        detail:
          "Redundancia geográfica y conmutación automática, diseñadas para preservar la integridad de los datos de las transacciones financieras.",
        icon: "recovery",
      },
    ],
    footnote:
      "¿Has perdido el teléfono? Acude al Paymate más cercano con tu documento de identidad y pide congelar la cuenta, o llama a atención al cliente. Tus fondos siguen seguros.",
  },
});

export default SECURITY;
