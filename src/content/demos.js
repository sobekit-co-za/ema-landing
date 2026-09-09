import { pick } from "./locale";

/**
 * Demo clips per module, recovered from the legacy Angular site and
 * re-encoded by scripts/transcode-demos.mjs into public/demos/.
 *
 * `slug` matches the transcoded filename, so a clip resolves to
 * /demos/<moduleId>/<slug>.mp4 with a /demos/<moduleId>/<slug>.webp poster.
 */

const demos = {
  emapos: [
    { slug: "accessing-the-menu", en: "Accessing the menu", ar: "الدخول إلى القائمة", fr: "Accéder au menu", pt: "Aceder ao menu", es: "Acceder al menú" },
    { slug: "adding-stock", en: "Adding stock", ar: "إضافة المخزون", fr: "Ajouter du stock", pt: "Adicionar stock", es: "Añadir inventario" },
    { slug: "making-a-sale", en: "Making a sale", ar: "إتمام عملية بيع", fr: "Réaliser une vente", pt: "Fazer uma venda", es: "Realizar una venta" },
    { slug: "viewing-sales", en: "Viewing sales", ar: "استعراض المبيعات", fr: "Consulter les ventes", pt: "Consultar as vendas", es: "Consultar las ventas" },
    { slug: "the-dashboard", en: "The dashboard", ar: "لوحة التحكّم", fr: "Le tableau de bord", pt: "O painel de controlo", es: "El panel de control" },
    { slug: "managing-cashiers", en: "Managing cashiers", ar: "إدارة الكاشيرات", fr: "Gérer les caissiers", pt: "Gerir os operadores de caixa", es: "Gestionar los cajeros" },
  ],
  ewallet: [
    { slug: "registering", en: "Registering your account", ar: "تسجيل حسابك", fr: "Créer votre compte", pt: "Criar a sua conta", es: "Crear tu cuenta" },
    { slug: "kyc-profile", en: "Updating your profile for KYC", ar: "تحديث ملفك للتحقّق من الهوية", fr: "Compléter votre profil KYC", pt: "Atualizar o perfil para KYC", es: "Actualizar tu perfil para el KYC" },
    { slug: "sending-money", en: "Sending money", ar: "إرسال الأموال", fr: "Envoyer de l'argent", pt: "Enviar dinheiro", es: "Enviar dinero" },
    { slug: "depositing-money", en: "Depositing money", ar: "إيداع الأموال", fr: "Déposer de l'argent", pt: "Depositar dinheiro", es: "Depositar dinero" },
    { slug: "your-qr-code", en: "Your QR code", ar: "رمز QR الخاص بك", fr: "Votre code QR", pt: "O seu código QR", es: "Tu código QR" },
    { slug: "payout", en: "Payout", ar: "الصرف", fr: "Versement", pt: "Pagamento", es: "Pago" },
    { slug: "cash-withdrawal", en: "Cash withdrawal", ar: "السحب النقدي", fr: "Retrait d'espèces", pt: "Levantamento em numerário", es: "Retirada de efectivo" },
    { slug: "changing-password", en: "Changing your password", ar: "تغيير كلمة المرور", fr: "Changer votre mot de passe", pt: "Alterar a palavra-passe", es: "Cambiar la contraseña" },
  ],
  paymate: [
    { slug: "becoming-a-paymate", en: "Applying to become a Paymate", ar: "التقديم لتصبح وكيل Paymate", fr: "Devenir Paymate", pt: "Tornar-se Paymate", es: "Solicitar ser Paymate" },
    { slug: "withdrawing-at-a-paymate", en: "Withdrawing at a Paymate", ar: "السحب لدى وكيل Paymate", fr: "Retirer chez un Paymate", pt: "Levantar num Paymate", es: "Retirar en un Paymate" },
  ],
  siba: [
    { slug: "creating-a-group", en: "Creating a group", ar: "إنشاء مجموعة", fr: "Créer un groupe", pt: "Criar um grupo", es: "Crear un grupo" },
  ],
  emamall: [{ slug: "using-emamall", en: "Using eMaMall", ar: "استخدام eMaMall", fr: "Utiliser eMaMall", pt: "Usar o eMaMall", es: "Usar eMaMall" }],
  emaserve: [{ slug: "using-emaserve", en: "Using eMaServe", ar: "استخدام eMaServe", fr: "Utiliser eMaServe", pt: "Usar o eMaServe", es: "Usar eMaServe" }],
  emasave: [
    { slug: "opening-emasave", en: "Opening eMaSave", ar: "فتح eMaSave", fr: "Ouvrir eMaSave", pt: "Abrir o eMaSave", es: "Abrir eMaSave" },
    { slug: "using-emasave", en: "Using eMaSave", ar: "استخدام eMaSave", fr: "Utiliser eMaSave", pt: "Usar o eMaSave", es: "Usar eMaSave" },
  ],
  emafunding: [
    { slug: "opening-emafunding", en: "Opening eMaFunding", ar: "فتح eMaFunding", fr: "Ouvrir eMaFunding", pt: "Abrir o eMaFunding", es: "Abrir eMaFunding" },
    { slug: "adding-a-campaign", en: "Adding a campaign", ar: "إضافة حملة", fr: "Ajouter une campagne", pt: "Adicionar uma campanha", es: "Añadir una campaña" },
    { slug: "using-emafunding", en: "Using eMaFunding", ar: "استخدام eMaFunding", fr: "Utiliser eMaFunding", pt: "Usar o eMaFunding", es: "Usar eMaFunding" },
  ],
  ematuma: [
    { slug: "opening-ematuma", en: "Opening eMaTuma", ar: "فتح eMaTuma", fr: "Ouvrir eMaTuma", pt: "Abrir o eMaTuma", es: "Abrir eMaTuma" },
    { slug: "using-ematuma", en: "Using eMaTuma", ar: "استخدام eMaTuma", fr: "Utiliser eMaTuma", pt: "Usar o eMaTuma", es: "Usar eMaTuma" },
  ],
  emacom: [{ slug: "using-emacom", en: "Using eMaCom", ar: "استخدام eMaCom", fr: "Utiliser eMaCom", pt: "Usar o eMaCom", es: "Usar eMaCom" }],
  patele: [{ slug: "using-patele", en: "Using Patele", ar: "استخدام Patele", fr: "Utiliser Patele", pt: "Usar o Patele", es: "Usar Patele" }],
  emaexpo: [{ slug: "inside-emaexpo", en: "Inside eMaExpo", ar: "داخل eMaExpo", fr: "À l'intérieur d'eMaExpo", pt: "Dentro do eMaExpo", es: "Dentro de eMaExpo" }],
};

/** Demo clips for one module, resolved to the active locale. */
export function getDemos(moduleId) {
  return (demos[moduleId] ?? []).map(({ slug, ...labels }) => ({
    slug,
    label: pick(labels),
    src: `/demos/${moduleId}/${slug}.mp4`,
    poster: `/demos/${moduleId}/${slug}.webp`,
  }));
}

export default demos;
