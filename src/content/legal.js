import { pick } from "./locale";

/**
 * Framing copy for the three legal routes.
 *
 * The QA review found /terms-conditions, /privacy-policy and /fraud-awareness
 * rendering completely blank in every language — the footer linked to routes
 * that did not exist. The legal text itself has been in the repo all along
 * (src/services/legacyPolicyText.js, where the chatbot reads it); these pages
 * publish it.
 *
 * The document body stays in its original English on purpose. It is the
 * binding wording, and a translated contract that has not been through legal
 * review is worse than an untranslated one — so the framing translates and the
 * clauses do not, with `sourceNote` saying so plainly.
 */

export const LEGAL = pick({
  en: {
    sourceNote:
      "The agreement below is published in its original English. It is the binding wording; translations are provided for guidance only. For a certified translation, write to legal@emalyami.com.",
    terms: {
      title: "Terms & conditions",
      intro:
        "This user agreement is a contract between you and eMalyami Wallet, governing your use of your eMalyami Wallet account and the eMalyami Wallet services.",
    },
    privacy: {
      title: "Privacy policy",
      intro:
        "How eMalyami collects, uses and protects your personal information. The privacy terms form part of the user agreement below — see clause 3, Privacy, and clause 2 of the Special Conditions of Use.",
    },
    fraud: {
      title: "Fraud awareness",
      intro:
        "eMalyami will never ask you for your PIN or your OTP. Read these guidelines before you transact, and keep them in mind every time you do.",
      tipsLabel: "Six rules that keep your money yours",
      tips: [
        "Never share your PIN or a one-time code (OTP) with anyone — not with a caller, not with a Paymate, not with anyone claiming to be eMalyami staff.",
        "Check the recipient's cellphone number before you send. Money sent to the wrong number is not recoverable.",
        "eMalyami staff will never phone or message you asking you to confirm a code, reverse a payment or move money to a \"safe\" account.",
        "If your phone is lost or stolen, go to your nearest Paymate with your ID and ask to freeze the account, or call customer service immediately.",
        "Three wrong passwords lock the account by design. If that happens unexpectedly, someone else has been trying — contact support before you unlock it.",
        "Report anything suspicious to support@emalyami.com or through the Help Request form on this site, and to compliance@emalyami.com if you believe fraud has occurred.",
      ],
    },
  },
  ar: {
    sourceNote:
      "الاتفاقية أدناه منشورة بلغتها الإنجليزية الأصلية، وهي الصيغة المُلزِمة؛ أما الترجمات فللاسترشاد فقط. وللحصول على ترجمة معتمدة راسلنا على legal@emalyami.com.",
    terms: {
      title: "الشروط والأحكام",
      intro:
        "اتفاقية المستخدم هذه عقد بينك وبين محفظة eMalyami، تحكم استخدامك لحسابك في محفظة eMalyami ولخدماتها.",
    },
    privacy: {
      title: "سياسة الخصوصية",
      intro:
        "كيف يجمع eMalyami بياناتك الشخصية ويستخدمها ويحميها. وتشكّل بنود الخصوصية جزءًا من اتفاقية المستخدم أدناه — راجع البند 3 «Privacy» والبند 2 من الشروط الخاصة للاستخدام.",
    },
    fraud: {
      title: "التوعية بالاحتيال",
      intro:
        "لن يطلب منك eMalyami أبدًا رقمك السري أو رمز التحقق OTP. اقرأ هذه الإرشادات قبل إجراء أي معاملة، وتذكّرها في كل مرة.",
      tipsLabel: "ست قواعد تُبقي أموالك لك",
      tips: [
        "لا تُشارك رقمك السري أو رمز التحقق لمرة واحدة (OTP) مع أحد — لا مع متصل، ولا مع وكيل Paymate، ولا مع من يدّعي أنه من موظفي eMalyami.",
        "تحقّق من رقم هاتف المستفيد قبل الإرسال. فالأموال المُرسلة إلى رقم خاطئ لا يمكن استردادها.",
        "لن يتصل بك موظفو eMalyami ولن يراسلوك أبدًا لطلب تأكيد رمز أو عكس عملية دفع أو تحويل أموالك إلى حساب «آمن».",
        "إذا فُقد هاتفك أو سُرق، توجّه إلى أقرب وكيل Paymate ومعك هويتك واطلب تجميد الحساب، أو اتصل بخدمة العملاء فورًا.",
        "ثلاث كلمات مرور خاطئة تُقفل الحساب عمدًا. فإن حدث ذلك دون سبب، فهذا يعني أن شخصًا آخر كان يحاول — تواصل مع الدعم قبل فتح القفل.",
        "أبلغ عن أي أمر مريب على support@emalyami.com أو عبر نموذج طلب المساعدة في هذا الموقع، وعلى compliance@emalyami.com إذا اعتقدت أن احتيالًا قد وقع.",
      ],
    },
  },
  fr: {
    sourceNote:
      "L'accord ci-dessous est publié dans sa version anglaise d'origine. C'est le texte qui fait foi ; les traductions sont fournies à titre indicatif. Pour une traduction certifiée, écrivez à legal@emalyami.com.",
    terms: {
      title: "Conditions générales",
      intro:
        "Cet accord utilisateur est un contrat entre vous et eMalyami Wallet, régissant l'utilisation de votre compte eMalyami Wallet et des services eMalyami Wallet.",
    },
    privacy: {
      title: "Politique de confidentialité",
      intro:
        "Comment eMalyami collecte, utilise et protège vos données personnelles. Les clauses de confidentialité font partie de l'accord utilisateur ci-dessous — voir la clause 3, « Privacy », et la clause 2 des conditions particulières d'utilisation.",
    },
    fraud: {
      title: "Prévention de la fraude",
      intro:
        "eMalyami ne vous demandera jamais votre code PIN ni votre code OTP. Lisez ces consignes avant de réaliser une opération, et gardez-les à l'esprit à chaque fois.",
      tipsLabel: "Six règles pour que votre argent reste le vôtre",
      tips: [
        "Ne communiquez jamais votre code PIN ni un code à usage unique (OTP) à qui que ce soit — ni à un appelant, ni à un Paymate, ni à quelqu'un se présentant comme un employé d'eMalyami.",
        "Vérifiez le numéro de téléphone du destinataire avant d'envoyer. L'argent envoyé au mauvais numéro n'est pas récupérable.",
        "Le personnel d'eMalyami ne vous appellera ni ne vous écrira jamais pour vous demander de confirmer un code, d'annuler un paiement ou de transférer de l'argent vers un compte « sécurisé ».",
        "Si votre téléphone est perdu ou volé, rendez-vous chez le Paymate le plus proche avec votre pièce d'identité et demandez le gel du compte, ou appelez immédiatement le service client.",
        "Trois mots de passe erronés verrouillent le compte, c'est voulu. Si cela arrive sans raison, quelqu'un d'autre a essayé : contactez l'assistance avant de déverrouiller.",
        "Signalez tout élément suspect à support@emalyami.com ou via le formulaire d'assistance de ce site, et à compliance@emalyami.com si vous pensez qu'une fraude a eu lieu.",
      ],
    },
  },
  pt: {
    sourceNote:
      "O acordo abaixo é publicado na sua versão original em inglês. É o texto vinculativo; as traduções servem apenas de orientação. Para uma tradução certificada, escreva para legal@emalyami.com.",
    terms: {
      title: "Termos e condições",
      intro:
        "Este acordo de utilizador é um contrato entre si e a eMalyami Wallet, que rege a utilização da sua conta eMalyami Wallet e dos serviços eMalyami Wallet.",
    },
    privacy: {
      title: "Política de privacidade",
      intro:
        "Como o eMalyami recolhe, usa e protege os seus dados pessoais. As cláusulas de privacidade fazem parte do acordo de utilizador abaixo — ver a cláusula 3, «Privacy», e a cláusula 2 das condições especiais de utilização.",
    },
    fraud: {
      title: "Prevenção de fraude",
      intro:
        "O eMalyami nunca lhe pedirá o PIN nem o código OTP. Leia estas orientações antes de transacionar e tenha-as presentes sempre que o fizer.",
      tipsLabel: "Seis regras para que o seu dinheiro continue a ser seu",
      tips: [
        "Nunca partilhe o seu PIN nem um código de uso único (OTP) com ninguém — nem com quem lhe telefona, nem com um Paymate, nem com quem diga ser funcionário do eMalyami.",
        "Confirme o número de telemóvel do destinatário antes de enviar. Dinheiro enviado para o número errado não é recuperável.",
        "Os colaboradores do eMalyami nunca lhe telefonam nem escrevem a pedir que confirme um código, reverta um pagamento ou transfira dinheiro para uma conta «segura».",
        "Se perder o telemóvel ou lho roubarem, vá ao Paymate mais próximo com o seu documento de identificação e peça o congelamento da conta, ou ligue de imediato para o apoio ao cliente.",
        "Três palavras-passe erradas bloqueiam a conta, por desenho. Se isso acontecer sem motivo, alguém andou a tentar: contacte o apoio antes de desbloquear.",
        "Comunique qualquer suspeita para support@emalyami.com ou através do formulário de apoio deste site, e para compliance@emalyami.com se acreditar que houve fraude.",
      ],
    },
  },
  es: {
    sourceNote:
      "El acuerdo que figura a continuación se publica en su versión original en inglés. Es el texto vinculante; las traducciones se ofrecen solo a título orientativo. Para una traducción certificada, escribe a legal@emalyami.com.",
    terms: {
      title: "Términos y condiciones",
      intro:
        "Este acuerdo de usuario es un contrato entre tú y eMalyami Wallet, que regula el uso de tu cuenta de eMalyami Wallet y de los servicios de eMalyami Wallet.",
    },
    privacy: {
      title: "Política de privacidad",
      intro:
        "Cómo eMalyami recoge, usa y protege tus datos personales. Las cláusulas de privacidad forman parte del acuerdo de usuario que figura abajo: véanse la cláusula 3, «Privacy», y la cláusula 2 de las condiciones especiales de uso.",
    },
    fraud: {
      title: "Prevención del fraude",
      intro:
        "eMalyami nunca te pedirá tu PIN ni tu código OTP. Lee estas pautas antes de operar y tenlas presentes cada vez que lo hagas.",
      tipsLabel: "Seis reglas para que tu dinero siga siendo tuyo",
      tips: [
        "Nunca compartas tu PIN ni un código de un solo uso (OTP) con nadie: ni con quien te llama, ni con un Paymate, ni con quien diga ser personal de eMalyami.",
        "Comprueba el número de móvil del destinatario antes de enviar. El dinero enviado a un número equivocado no se puede recuperar.",
        "El personal de eMalyami nunca te llamará ni te escribirá para pedirte que confirmes un código, revoques un pago o muevas dinero a una cuenta «segura».",
        "Si pierdes el teléfono o te lo roban, acude al Paymate más cercano con tu documento de identidad y pide congelar la cuenta, o llama de inmediato a atención al cliente.",
        "Tres contraseñas incorrectas bloquean la cuenta a propósito. Si ocurre sin motivo, es que alguien lo ha estado intentando: contacta con soporte antes de desbloquearla.",
        "Informa de cualquier cosa sospechosa a support@emalyami.com o mediante el formulario de ayuda de este sitio, y a compliance@emalyami.com si crees que se ha producido un fraude.",
      ],
    },
  },
});

export default LEGAL;
