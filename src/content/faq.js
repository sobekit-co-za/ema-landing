import { localize, pick } from "./locale";

/**
 * FAQ — the 17 questions ported from the legacy Angular site (which also
 * published them as JSON-LD FAQPage structured data), plus 6 new SME-focused
 * questions written for the repositioned site.
 *
 * `home: true` marks the ones surfaced on the home page; /faq shows all.
 */

export const FAQ_HEADER = pick({
  en: {
    title: "Questions, answered",
    subtitle: "The things people ask most before they start.",
    seeAll: "See all questions",
  },
  ar: {
    title: "أسئلة وأجوبة",
    subtitle: "أكثر ما يسأل عنه الناس قبل أن يبدأوا.",
    seeAll: "استعرض كل الأسئلة",
  },
  fr: {
    title: "Vos questions, nos réponses",
    subtitle: "Ce que l'on nous demande le plus souvent avant de commencer.",
    seeAll: "Voir toutes les questions",
  },
  pt: {
    title: "Perguntas respondidas",
    subtitle: "O que mais nos perguntam antes de começar.",
    seeAll: "Ver todas as perguntas",
  },
  es: {
    title: "Preguntas respondidas",
    subtitle: "Lo que más nos preguntan antes de empezar.",
    seeAll: "Ver todas las preguntas",
  },
});

const faqs = [
  {
    id: "who-can-receive",
    home: true,
    en: {
      q: "Who can receive money from the eMalyami service?",
      a: "Anyone with a valid cellphone number in a market where eMalyami is live may receive funds. Phase One markets under the eMa-CBC programme are eSwatini, Kenya, Zambia, Zimbabwe, Uganda, Mauritius and Malawi, alongside South Africa where the service already operates. Activation in each country follows local permissions.",
    },
    ar: {
      q: "من يستطيع استلام الأموال عبر خدمة eMalyami؟",
      a: "يستطيع أي شخص لديه رقم هاتف صالح في سوق يعمل فيها eMalyami استلام الأموال. وأسواق المرحلة الأولى ضمن برنامج eMa-CBC هي إسواتيني وكينيا وزامبيا وزيمبابوي وأوغندا وموريشيوس ومالاوي، إلى جانب جنوب أفريقيا حيث تعمل الخدمة بالفعل. ويخضع التفعيل في كل دولة للتصاريح المحلية.",
    },
    fr: {
      q: "Qui peut recevoir de l'argent via le service eMalyami ?",
      a: "Toute personne disposant d'un numéro de téléphone valide dans un pays où eMalyami est actif peut recevoir des fonds. Les marchés de la phase un du programme eMa-CBC sont l'Eswatini, le Kenya, la Zambie, le Zimbabwe, l'Ouganda, Maurice et le Malawi, aux côtés de l'Afrique du Sud où le service opère déjà. L'activation dans chaque pays dépend des autorisations locales.",
    },
    pt: {
      q: "Quem pode receber dinheiro através do serviço eMalyami?",
      a: "Qualquer pessoa com um número de telemóvel válido num mercado onde o eMalyami esteja ativo pode receber fundos. Os mercados da fase um do programa eMa-CBC são Essuatíni, Quénia, Zâmbia, Zimbabué, Uganda, Maurícias e Maláui, a par da África do Sul, onde o serviço já opera. A ativação em cada país segue as autorizações locais.",
    },
    es: {
      q: "¿Quién puede recibir dinero a través del servicio eMalyami?",
      a: "Cualquier persona con un número de móvil válido en un mercado en el que eMalyami esté activo puede recibir fondos. Los mercados de la fase uno del programa eMa-CBC son Esuatini, Kenia, Zambia, Zimbabue, Uganda, Mauricio y Malaui, además de Sudáfrica, donde el servicio ya opera. La activación en cada país depende de las autorizaciones locales.",
    },
  },
  {
    id: "how-do-i-know",
    en: {
      q: "How do I know that I have been sent money?",
      a: "You will receive an SMS as the result of a successful transaction by the sender. This SMS confirms the send transaction and contains information on how to activate the eMalyami. You must activate the eMalyami before being able to use the funds.",
    },
    ar: {
      q: "كيف أعرف أن أموالًا أُرسلت إليّ؟",
      a: "تصلك رسالة نصية عند نجاح المعاملة من المُرسِل. تؤكد هذه الرسالة عملية الإرسال وتتضمّن كيفية تفعيل حساب eMalyami. ويجب تفعيل الحساب قبل التمكّن من استخدام الأموال.",
    },
    fr: {
      q: "Comment savoir que de l'argent m'a été envoyé ?",
      a: "Vous recevez un SMS dès que l'expéditeur a effectué la transaction avec succès. Ce SMS confirme l'envoi et explique comment activer eMalyami. Vous devez activer eMalyami avant de pouvoir utiliser les fonds.",
    },
    pt: {
      q: "Como sei que me enviaram dinheiro?",
      a: "Recebe um SMS assim que o remetente concluir a transação com sucesso. Esse SMS confirma o envio e explica como ativar o eMalyami. Tem de ativar o eMalyami antes de poder usar os fundos.",
    },
    es: {
      q: "¿Cómo sé que me han enviado dinero?",
      a: "Recibirás un SMS en cuanto el remitente complete la transacción con éxito. Ese SMS confirma el envío y explica cómo activar el eMalyami. Debes activarlo antes de poder usar los fondos.",
    },
  },
  {
    id: "how-to-activate",
    en: {
      q: "How do I activate the eMalyami?",
      a: "To activate eMalyami, you will be sent an SMS OTP that you have to register within a minute of receiving the SMS. Otherwise, you will be expected to re-register into eMalyami.",
    },
    ar: {
      q: "كيف أفعّل حساب eMalyami؟",
      a: "لتفعيل الحساب تصلك رسالة نصية تحتوي رمز OTP يجب تسجيله خلال دقيقة من استلام الرسالة. وإلا سيتعيّن عليك إعادة التسجيل في eMalyami.",
    },
    fr: {
      q: "Comment activer eMalyami ?",
      a: "Pour activer eMalyami, vous recevrez un code OTP par SMS que vous devez enregistrer dans la minute qui suit sa réception. Sinon, vous devrez recommencer votre inscription.",
    },
    pt: {
      q: "Como ativo o eMalyami?",
      a: "Para ativar o eMalyami, receberá um código OTP por SMS que deve registar no minuto seguinte à receção da mensagem. Caso contrário, terá de se registar novamente no eMalyami.",
    },
    es: {
      q: "¿Cómo activo el eMalyami?",
      a: "Para activarlo recibirás un código OTP por SMS que debes registrar en el minuto siguiente a su recepción. De lo contrario, tendrás que volver a registrarte en eMalyami.",
    },
  },
  {
    id: "if-not-activated",
    en: {
      q: "What happens if I don't activate the eMalyami?",
      a: "You will be expected to re-register into eMalyami. The SMS OTP must be registered within a minute of receiving it.",
    },
    ar: {
      q: "ماذا يحدث إن لم أفعّل الحساب؟",
      a: "سيتعيّن عليك إعادة التسجيل في eMalyami. إذ يجب تسجيل رمز OTP خلال دقيقة من استلامه.",
    },
    fr: {
      q: "Que se passe-t-il si je n'active pas eMalyami ?",
      a: "Vous devrez recommencer votre inscription à eMalyami. Le code OTP reçu par SMS doit être enregistré dans la minute qui suit sa réception.",
    },
    pt: {
      q: "O que acontece se não ativar o eMalyami?",
      a: "Terá de se registar novamente no eMalyami. O código OTP enviado por SMS deve ser registado no minuto seguinte à sua receção.",
    },
    es: {
      q: "¿Qué pasa si no activo el eMalyami?",
      a: "Tendrás que volver a registrarte en eMalyami. El código OTP enviado por SMS debe registrarse en el minuto siguiente a su recepción.",
    },
  },
  {
    id: "funds-safe",
    home: true,
    en: {
      q: "Are the funds in the eMalyami safe?",
      a: "It is safe as long as you keep your PIN and cellphone number safe. For activation, you will receive a designated SMS OTP.",
    },
    ar: {
      q: "هل الأموال في eMalyami آمنة؟",
      a: "هي آمنة ما دمت تحافظ على سرّية رقمك السري ورقم هاتفك. وللتفعيل يصلك رمز OTP مخصّص عبر رسالة نصية.",
    },
    fr: {
      q: "Les fonds dans eMalyami sont-ils en sécurité ?",
      a: "Ils le sont tant que vous gardez votre code PIN et votre numéro de téléphone en sécurité. Pour l'activation, vous recevrez un code OTP dédié par SMS.",
    },
    pt: {
      q: "Os fundos no eMalyami estão seguros?",
      a: "Estão seguros desde que mantenha o seu PIN e o seu número de telemóvel em segurança. Para a ativação, receberá um código OTP dedicado por SMS.",
    },
    es: {
      q: "¿Están seguros los fondos en el eMalyami?",
      a: "Lo están mientras mantengas a salvo tu PIN y tu número de móvil. Para la activación recibirás un código OTP específico por SMS.",
    },
  },
  {
    id: "change-number",
    en: {
      q: "What happens if I change my cellphone number?",
      a: "In case you changed your number, it is always best to instantly visit your Paymate and request a change of number. Provide your ID and proof of residence when you request the change. Or log into eMalyami and change your number through your settings. Your funds are safe until you complete the process.",
    },
    ar: {
      q: "ماذا يحدث إن غيّرت رقم هاتفي؟",
      a: "إن غيّرت رقمك، فالأفضل دائمًا زيارة وكيل Paymate فورًا وطلب تغيير الرقم. وقدّم هويتك وإثبات محل إقامتك عند تقديم الطلب. أو سجّل الدخول إلى eMalyami وغيّر رقمك من الإعدادات. وتبقى أموالك آمنة حتى تُكمل العملية.",
    },
    fr: {
      q: "Que se passe-t-il si je change de numéro de téléphone ?",
      a: "Si vous changez de numéro, le mieux est de vous rendre immédiatement chez votre Paymate et de demander un changement de numéro. Présentez votre pièce d'identité et un justificatif de domicile. Vous pouvez aussi vous connecter à eMalyami et modifier votre numéro dans vos paramètres. Vos fonds restent en sécurité jusqu'à la fin de la procédure.",
    },
    pt: {
      q: "O que acontece se mudar de número de telemóvel?",
      a: "Se mudar de número, o melhor é dirigir-se de imediato ao seu Paymate e pedir a alteração do número. Apresente o seu documento de identificação e um comprovativo de morada. Em alternativa, entre no eMalyami e altere o número nas definições. Os seus fundos permanecem seguros até concluir o processo.",
    },
    es: {
      q: "¿Qué pasa si cambio de número de móvil?",
      a: "Si cambias de número, lo mejor es acudir de inmediato a tu Paymate y solicitar el cambio. Presenta tu documento de identidad y un justificante de domicilio. También puedes entrar en eMalyami y cambiar el número desde los ajustes. Tus fondos permanecen seguros hasta completar el proceso.",
    },
  },
  {
    id: "lost-phone",
    home: true,
    en: {
      q: "What happens if my cellphone is lost or stolen?",
      a: "Visit your nearest Paymate with your ID and request to halt your account until you receive a new phone. Or simply call our customer service to assist you with keeping your funds safe.",
    },
    ar: {
      q: "ماذا يحدث إذا فُقد هاتفي أو سُرق؟",
      a: "توجّه إلى أقرب وكيل Paymate ومعك هويتك واطلب إيقاف حسابك حتى تحصل على هاتف جديد. أو اتصل بخدمة العملاء لمساعدتك في الحفاظ على أموالك آمنة.",
    },
    fr: {
      q: "Que se passe-t-il si mon téléphone est perdu ou volé ?",
      a: "Rendez-vous chez le Paymate le plus proche avec votre pièce d'identité et demandez la suspension de votre compte jusqu'à ce que vous receviez un nouveau téléphone. Ou appelez simplement notre service client, qui vous aidera à mettre vos fonds à l'abri.",
    },
    pt: {
      q: "O que acontece se perder o telemóvel ou mo roubarem?",
      a: "Dirija-se ao Paymate mais próximo com o seu documento de identificação e peça a suspensão da conta até ter um telemóvel novo. Ou ligue simplesmente para o nosso apoio ao cliente, que o ajudará a manter os fundos seguros.",
    },
    es: {
      q: "¿Qué pasa si pierdo el móvil o me lo roban?",
      a: "Acude al Paymate más cercano con tu documento de identidad y pide bloquear la cuenta hasta que tengas un teléfono nuevo. O llama a nuestro servicio de atención al cliente, que te ayudará a mantener tus fondos seguros.",
    },
  },
  {
    id: "documents-needed",
    en: {
      q: "What documents do I need to open an eMalyami?",
      a: "These documents are needed if you require a virtual credit card (VCC) or a personal loan: a government-issued ID or passport accepted in your country, and proof of residence. Other requirements apply depending on whether you want to use the Siba system or a virtual credit card.",
    },
    ar: {
      q: "ما المستندات التي أحتاجها لفتح حساب eMalyami؟",
      a: "تُطلب هذه المستندات إذا كنت تحتاج بطاقة ائتمان افتراضية أو قرضًا شخصيًا: هوية رسمية أو جواز سفر معتمد في بلدك، وإثبات محل الإقامة. وتنطبق متطلبات أخرى بحسب رغبتك في استخدام نظام Siba أو البطاقة الائتمانية الافتراضية.",
    },
    fr: {
      q: "Quels documents faut-il pour ouvrir un compte eMalyami ?",
      a: "Ces documents sont nécessaires si vous souhaitez une carte de crédit virtuelle (VCC) ou un prêt personnel : une pièce d'identité officielle ou un passeport reconnu dans votre pays, et un justificatif de domicile. D'autres conditions s'appliquent selon que vous souhaitez utiliser le système Siba ou une carte de crédit virtuelle.",
    },
    pt: {
      q: "Que documentos preciso para abrir uma conta eMalyami?",
      a: "Estes documentos são necessários se pretender um cartão de crédito virtual (VCC) ou um crédito pessoal: documento de identificação oficial ou passaporte aceite no seu país e comprovativo de morada. Aplicam-se outros requisitos consoante pretenda usar o sistema Siba ou o cartão de crédito virtual.",
    },
    es: {
      q: "¿Qué documentos necesito para abrir un eMalyami?",
      a: "Estos documentos son necesarios si quieres una tarjeta de crédito virtual (VCC) o un préstamo personal: un documento de identidad o pasaporte válido en tu país, y un justificante de domicilio. Se aplican otros requisitos según quieras usar el sistema Siba o la tarjeta de crédito virtual.",
    },
  },
  {
    id: "get-cash",
    home: true,
    en: {
      q: "How do I get cash out of the eMalyami?",
      a: "You can get cash by withdrawing the funds at an approved Paymate, at selected ATMs with automated deposits, and at participating retailers.",
    },
    ar: {
      q: "كيف أسحب النقد من eMalyami؟",
      a: "يمكنك سحب أموالك من وكيل Paymate معتمد، أو من صرّافات آلية مختارة تدعم الإيداع الآلي، أو من متاجر التجزئة المشاركة.",
    },
    fr: {
      q: "Comment retirer des espèces depuis eMalyami ?",
      a: "Vous pouvez retirer vos fonds chez un Paymate agréé, à certains distributeurs automatiques équipés du dépôt automatisé, et chez les commerçants partenaires.",
    },
    pt: {
      q: "Como levanto dinheiro do eMalyami?",
      a: "Pode levantar os seus fundos num Paymate autorizado, em caixas automáticas selecionadas com depósito automatizado e em comerciantes aderentes.",
    },
    es: {
      q: "¿Cómo saco efectivo del eMalyami?",
      a: "Puedes retirar tus fondos en un Paymate autorizado, en cajeros seleccionados con depósito automatizado y en comercios adheridos.",
    },
  },
  {
    id: "do-i-pay",
    en: {
      q: "Do I have to pay to use the eMalyami service?",
      a: "You don't pay to receive; the sender is charged a fee for creating and funding an eMalyami. You may be charged when getting cash at an approved Paymate or selected ATM — in some cases this is free. eMalyami does not pay interest on positive balances. Your cellphone service provider may charge for certain services. If an eMalyami has been activated but is unused for six months, a monthly dormancy fee of R6.00 applies; you will receive an SMS before it begins. The fee continues until another transaction occurs or the balance reaches R0.00. An eMalyami with a zero balance cannot be accessed.",
    },
    ar: {
      q: "هل أدفع مقابل استخدام خدمة eMalyami؟",
      a: "لا تدفع عند الاستلام؛ إذ تُحتسب الرسوم على المُرسِل مقابل إنشاء الحساب وتمويله. وقد تُحتسب عليك رسوم عند سحب النقد من وكيل Paymate معتمد أو صرّاف آلي مختار — وفي بعض الحالات يكون ذلك مجانًا. ولا يدفع eMalyami فوائد على الأرصدة الدائنة. وقد يفرض مشغّل هاتفك رسومًا على بعض الخدمات. وإذا فُعّل الحساب ثم لم يُستخدم لمدة ستة أشهر، تُطبَّق رسوم ركود شهرية قدرها 6.00 راند، وتصلك رسالة نصية قبل بدء تطبيقها. وتستمر الرسوم حتى تتم معاملة أخرى أو يصل الرصيد إلى صفر. ولا يمكن الوصول إلى حساب رصيده صفر.",
    },
    fr: {
      q: "Dois-je payer pour utiliser le service eMalyami ?",
      a: "Vous ne payez rien pour recevoir ; c'est l'expéditeur qui est facturé pour la création et l'approvisionnement d'un eMalyami. Des frais peuvent s'appliquer lors d'un retrait chez un Paymate agréé ou à certains distributeurs — dans certains cas, c'est gratuit. eMalyami ne verse aucun intérêt sur les soldes créditeurs. Votre opérateur téléphonique peut facturer certains services. Si un eMalyami est activé mais reste inutilisé pendant six mois, des frais d'inactivité mensuels de 6,00 R s'appliquent ; vous recevrez un SMS avant leur mise en place. Ces frais courent jusqu'à la transaction suivante ou jusqu'à ce que le solde atteigne 0,00 R. Un eMalyami au solde nul n'est plus accessible.",
    },
    pt: {
      q: "Tenho de pagar para usar o serviço eMalyami?",
      a: "Não paga para receber; é ao remetente que são cobradas as taxas de criação e carregamento de um eMalyami. Poderão ser cobradas taxas ao levantar dinheiro num Paymate autorizado ou em caixas automáticas selecionadas — em alguns casos é gratuito. O eMalyami não paga juros sobre saldos credores. O seu operador de telecomunicações pode cobrar por certos serviços. Se um eMalyami for ativado mas ficar sem utilização durante seis meses, aplica-se uma taxa mensal de inatividade de 6,00 R; receberá um SMS antes de esta começar. A taxa mantém-se até ocorrer nova transação ou até o saldo chegar a 0,00 R. Um eMalyami com saldo zero deixa de ser acessível.",
    },
    es: {
      q: "¿Tengo que pagar por usar el servicio eMalyami?",
      a: "No pagas por recibir; es al remitente a quien se le cobra por crear y financiar un eMalyami. Puede cobrarse una comisión al retirar efectivo en un Paymate autorizado o en cajeros seleccionados; en algunos casos es gratuito. eMalyami no paga intereses sobre saldos positivos. Tu operador de telefonía puede cobrar por ciertos servicios. Si un eMalyami se activa pero queda sin uso durante seis meses, se aplica una comisión mensual de inactividad de 6,00 R; recibirás un SMS antes de que empiece. La comisión continúa hasta que se produzca otra transacción o el saldo llegue a 0,00 R. Un eMalyami con saldo cero deja de ser accesible.",
    },
  },
  {
    id: "limits",
    home: true,
    en: {
      q: "Are there any limits to using the eMalyami service?",
      a: "Yes, and they vary by country and KYC tier. In South Africa the amount held in an eMalyami cannot exceed R5,000.00 at any time — so you cannot be sent more than R5,000.00 unless you spend some — and use of the funds is limited to R3,000.00 in a day. In other markets the limits are set by the local regulator and are confirmed to you before you transact.",
    },
    ar: {
      q: "هل هناك حدود لاستخدام خدمة eMalyami؟",
      a: "نعم، وهي تختلف بحسب الدولة ومستوى التحقّق من الهوية. ففي جنوب أفريقيا لا يمكن أن يتجاوز الرصيد في حساب eMalyami مبلغ 5,000.00 راند في أي وقت — أي لا يمكن أن يُرسل إليك أكثر من ذلك ما لم تُنفق جزءًا منه — واستخدام الأموال محدود بـ3,000.00 راند يوميًا. وفي الأسواق الأخرى تُحدَّد الحدود من الجهة الرقابية المحلية وتُبلَّغ بها قبل إجراء أي معاملة.",
    },
    fr: {
      q: "Y a-t-il des plafonds au service eMalyami ?",
      a: "Oui, et ils varient selon le pays et le niveau de KYC. En Afrique du Sud, le montant détenu dans un eMalyami ne peut jamais dépasser 5 000,00 R — vous ne pouvez donc pas recevoir plus sans en dépenser une partie — et l'utilisation des fonds est limitée à 3 000,00 R par jour. Dans les autres marchés, les plafonds sont fixés par le régulateur local et vous sont confirmés avant toute transaction.",
    },
    pt: {
      q: "Existem limites na utilização do serviço eMalyami?",
      a: "Sim, e variam consoante o país e o nível de KYC. Na África do Sul, o montante existente num eMalyami nunca pode exceder 5 000,00 R — ou seja, não lhe podem enviar mais sem que gaste parte do saldo — e a utilização dos fundos está limitada a 3 000,00 R por dia. Nos restantes mercados, os limites são definidos pelo regulador local e são-lhe confirmados antes de transacionar.",
    },
    es: {
      q: "¿Hay límites para usar el servicio eMalyami?",
      a: "Sí, y varían según el país y el nivel de KYC. En Sudáfrica, el saldo de un eMalyami no puede superar los 5.000,00 R en ningún momento, por lo que no pueden enviarte más de esa cantidad sin que gastes parte; y el uso de los fondos está limitado a 3.000,00 R al día. En los demás mercados, los límites los fija el regulador local y se te confirman antes de operar.",
    },
  },
  {
    id: "suspend",
    en: {
      q: "Can SOBEKIMF suspend the eMalyami service?",
      a: "Yes. Your eMalyami service can be suspended if it is used fraudulently, illegally or outside the specification of these guidelines; if the cellphone provider terminates the number from its network; if the service is compromised in any way; if required to do so by law; or if it is necessary to protect eMalyami, its customers, its systems or any recipient.",
    },
    ar: {
      q: "هل تستطيع SOBEKIMF تعليق خدمة eMalyami؟",
      a: "نعم. يمكن تعليق الخدمة إذا استُخدمت بشكل احتيالي أو غير قانوني أو خارج نطاق هذه الإرشادات؛ أو إذا ألغى مشغّل الهاتف الرقم من شبكته؛ أو إذا تعرّضت الخدمة للاختراق بأي شكل؛ أو إذا اقتضى القانون ذلك؛ أو إذا لزم لحماية eMalyami أو عملائها أو أنظمتها أو أي مستفيد.",
    },
    fr: {
      q: "SOBEKIMF peut-elle suspendre le service eMalyami ?",
      a: "Oui. Votre service eMalyami peut être suspendu s'il est utilisé de manière frauduleuse, illégale ou en dehors des présentes règles ; si l'opérateur téléphonique retire le numéro de son réseau ; si le service est compromis d'une quelconque manière ; si la loi l'exige ; ou si cela s'avère nécessaire pour protéger eMalyami, ses clients, ses systèmes ou un bénéficiaire.",
    },
    pt: {
      q: "A SOBEKIMF pode suspender o serviço eMalyami?",
      a: "Sim. O seu serviço eMalyami pode ser suspenso se for usado de forma fraudulenta, ilegal ou fora do âmbito destas regras; se o operador retirar o número da sua rede; se o serviço for comprometido de alguma forma; se a lei o exigir; ou se for necessário para proteger o eMalyami, os seus clientes, os seus sistemas ou qualquer beneficiário.",
    },
    es: {
      q: "¿Puede SOBEKIMF suspender el servicio eMalyami?",
      a: "Sí. Tu servicio eMalyami puede suspenderse si se usa de forma fraudulenta, ilegal o fuera de lo previsto en estas normas; si el operador de telefonía da de baja el número en su red; si el servicio se ve comprometido de algún modo; si la ley lo exige; o si resulta necesario para proteger a eMalyami, a sus clientes, a sus sistemas o a cualquier beneficiario.",
    },
  },
  {
    id: "complaint",
    en: {
      q: "How can I make a complaint about the eMalyami service?",
      a: "All complaints must be sent to the eMalyami Disputes Division — see www.emalyami.com or contact 011 674 1745. You may also submit a Help Request on this site. If you believe the matter has not been resolved satisfactorily, you may refer the complaint to the NCR, or the Consumer or Banking Ombudsman.",
    },
    ar: {
      q: "كيف أقدّم شكوى بخصوص خدمة eMalyami؟",
      a: "تُرسل جميع الشكاوى إلى قسم المنازعات في eMalyami — راجع www.emalyami.com أو اتصل على 011 674 1745. ويمكنك أيضًا تقديم طلب مساعدة من هذا الموقع. وإذا رأيت أن الأمر لم يُحلّ بشكل مُرضٍ، يمكنك إحالة الشكوى إلى NCR أو إلى أمين المظالم للمستهلك أو المصارف.",
    },
    fr: {
      q: "Comment déposer une réclamation concernant le service eMalyami ?",
      a: "Toutes les réclamations doivent être adressées à la division des litiges d'eMalyami — voir www.emalyami.com ou appeler le 011 674 1745. Vous pouvez également envoyer une demande d'assistance depuis ce site. Si vous estimez que le litige n'a pas été réglé de façon satisfaisante, vous pouvez saisir le NCR, ou le médiateur de la consommation ou bancaire.",
    },
    pt: {
      q: "Como apresento uma reclamação sobre o serviço eMalyami?",
      a: "Todas as reclamações devem ser enviadas à Divisão de Litígios do eMalyami — consulte www.emalyami.com ou contacte o 011 674 1745. Pode também enviar um pedido de apoio a partir deste site. Se considerar que o assunto não foi resolvido de forma satisfatória, pode encaminhar a reclamação para o NCR ou para o Provedor do Consumidor ou da Banca.",
    },
    es: {
      q: "¿Cómo presento una reclamación sobre el servicio eMalyami?",
      a: "Todas las reclamaciones deben dirigirse a la División de Litigios de eMalyami: consulta www.emalyami.com o llama al 011 674 1745. También puedes enviar una solicitud de ayuda desde este sitio. Si consideras que el asunto no se ha resuelto satisfactoriamente, puedes elevar la reclamación al NCR o al Defensor del Consumidor o de la Banca.",
    },
  },
  {
    id: "personal-info",
    en: {
      q: "What does SOBEKIMF do with my personal information?",
      a: "eMalyami treats personal information as confidential and takes all reasonable steps to protect it. It is processed only where: the data subject has consented; the law requires it; it is needed to detect, prevent and report theft, fraud, money laundering and other crimes; it is in the public interest; eMalyami's interests require disclosure, such as a default or breach of agreement; or internal marketing and product development require it to process payment instructions. Some information may be disclosed to specific third parties, who are themselves obliged to keep it secure and confidential.",
    },
    ar: {
      q: "ماذا تفعل SOBEKIMF ببياناتي الشخصية؟",
      a: "يتعامل eMalyami مع البيانات الشخصية بسرّية ويتخذ كل الخطوات المعقولة لحمايتها. ولا تُعالَج إلا في الحالات التالية: موافقة صاحب البيانات؛ أو اقتضاء القانون؛ أو الحاجة لكشف الاحتيال والسرقة وغسل الأموال والجرائم الأخرى ومنعها والإبلاغ عنها؛ أو المصلحة العامة؛ أو اقتضاء مصالح eMalyami الإفصاح، كحالات التعثّر أو الإخلال بالاتفاق؛ أو حاجة التسويق الداخلي وتطوير المنتجات إليها لتنفيذ تعليمات الدفع. وقد يُفصح عن بعض البيانات لأطراف ثالثة محددة، تلتزم هي أيضًا بحفظها بشكل آمن وسرّي.",
    },
    fr: {
      q: "Que fait SOBEKIMF de mes données personnelles ?",
      a: "eMalyami traite les données personnelles de manière confidentielle et prend toutes les mesures raisonnables pour les protéger. Elles ne sont traitées que lorsque : la personne concernée y a consenti ; la loi l'exige ; elles sont nécessaires pour détecter, prévenir et signaler vol, fraude, blanchiment et autres délits ; l'intérêt public le justifie ; les intérêts d'eMalyami imposent une divulgation, par exemple en cas de défaut ou de manquement au contrat ; ou le marketing interne et le développement produit en ont besoin pour exécuter les instructions de paiement. Certaines informations peuvent être communiquées à des tiers précis, eux-mêmes tenus de les garder sécurisées et confidentielles.",
    },
    pt: {
      q: "O que faz a SOBEKIMF com os meus dados pessoais?",
      a: "O eMalyami trata os dados pessoais como confidenciais e toma todas as medidas razoáveis para os proteger. Só são tratados quando: o titular deu consentimento; a lei o exige; são necessários para detetar, prevenir e comunicar furto, fraude, branqueamento de capitais e outros crimes; existe interesse público; os interesses do eMalyami exigem a divulgação, por exemplo em caso de incumprimento do contrato; ou o marketing interno e o desenvolvimento de produto deles necessitam para executar instruções de pagamento. Alguma informação pode ser divulgada a terceiros específicos, também eles obrigados a mantê-la segura e confidencial.",
    },
    es: {
      q: "¿Qué hace SOBEKIMF con mis datos personales?",
      a: "eMalyami trata los datos personales como confidenciales y adopta todas las medidas razonables para protegerlos. Solo se tratan cuando: el interesado ha dado su consentimiento; la ley lo exige; son necesarios para detectar, prevenir y comunicar robo, fraude, blanqueo de capitales y otros delitos; existe interés público; los intereses de eMalyami exigen la divulgación, por ejemplo ante un impago o incumplimiento del contrato; o el marketing interno y el desarrollo de producto los necesitan para ejecutar instrucciones de pago. Parte de la información puede comunicarse a terceros concretos, obligados también a mantenerla segura y confidencial.",
    },
  },
  {
    id: "geo-payments",
    en: {
      q: "What are eMalyami GEO PAYMENTS?",
      a: "For transfers or payments made to an eMalyami from an eMalyami transactional account using GEO payments, there is a cost. The pricing applied depends on the pricing option selected by the sender. See the pricing guide on www.emalyami.com for fees and eMalyami services.",
    },
    ar: {
      q: "ما هي مدفوعات GEO من eMalyami؟",
      a: "بالنسبة للتحويلات أو المدفوعات التي تتم إلى حساب eMalyami من حساب معاملات eMalyami باستخدام مدفوعات GEO، هناك تكلفة. ويعتمد التسعير المُطبَّق على خيار التسعير الذي يختاره المُرسِل. راجع دليل الأسعار على www.emalyami.com لمعرفة الرسوم وخدمات eMalyami.",
    },
    fr: {
      q: "Que sont les GEO PAYMENTS d'eMalyami ?",
      a: "Pour les virements ou paiements effectués vers un eMalyami depuis un compte transactionnel eMalyami via les GEO payments, des frais s'appliquent. La tarification dépend de l'option choisie par l'expéditeur. Consultez le guide tarifaire sur www.emalyami.com pour les frais et les services eMalyami.",
    },
    pt: {
      q: "O que são os GEO PAYMENTS do eMalyami?",
      a: "Nas transferências ou pagamentos feitos para um eMalyami a partir de uma conta transacional eMalyami através de GEO payments, há um custo. O preço aplicado depende da opção escolhida pelo remetente. Consulte o guia de preços em www.emalyami.com para saber as taxas e os serviços eMalyami.",
    },
    es: {
      q: "¿Qué son los GEO PAYMENTS de eMalyami?",
      a: "En las transferencias o pagos realizados a un eMalyami desde una cuenta transaccional eMalyami mediante GEO payments hay un coste. El precio aplicado depende de la opción elegida por el remitente. Consulta la guía de precios en www.emalyami.com para conocer las comisiones y los servicios de eMalyami.",
    },
  },
  {
    id: "siba-how",
    home: true,
    en: {
      q: "How does the Siba system work?",
      a: "It originates from the practice whereby money was collected house to house by an individual who kept it and returned it to its owners after 30 days, with no interest changing hands. Our platform enables a group of at least 3 to collect money, with the system taking over the scheme's management. eMalyami collects a fee for administering it. Members can check who has defaulted on payments and chat with each other about their finances. A group can either save for a fixed period — 6 or 12 months, for example — or create a cycle payment whereby each month a specific amount is paid to each member. Contributions can be made through Paymates, electronic transfer, eKwena voucher or coins.",
    },
    ar: {
      q: "كيف يعمل نظام Siba؟",
      a: "ينحدر النظام من عادة جمع المال من منزل إلى منزل بواسطة شخص يحتفظ به ثم يعيده إلى أصحابه بعد 30 يومًا دون أي فوائد. وتتيح منصّتنا لمجموعة من 3 أشخاص على الأقل جمع المال، مع تولّي النظام إدارة الجمعية. ويحصّل eMalyami رسومًا مقابل إدارتها. ويستطيع الأعضاء معرفة من تعثّر في السداد والتحدّث فيما بينهم بشأن أمورهم المالية. ويمكن للمجموعة إما الادّخار لفترة محددة — ستة أو اثني عشر شهرًا مثلًا — أو إنشاء دورة دفع يُصرف فيها كل شهر مبلغ محدد لكل عضو. ويمكن تقديم المساهمات عبر وكلاء Paymate أو التحويل الإلكتروني أو قسيمة eKwena أو العملات المعدنية.",
    },
    fr: {
      q: "Comment fonctionne le système Siba ?",
      a: "Il trouve son origine dans la pratique où une personne collectait l'argent de maison en maison, le conservait, puis le restituait à ses propriétaires au bout de 30 jours, sans aucun intérêt. Notre plateforme permet à un groupe d'au moins 3 personnes de collecter de l'argent, la gestion du système étant prise en charge par la plateforme. eMalyami perçoit des frais pour cette administration. Les membres peuvent voir qui n'a pas payé et échanger entre eux sur leurs finances. Un groupe peut soit épargner sur une durée fixe — 6 ou 12 mois par exemple — soit créer un cycle de versements où, chaque mois, un montant déterminé est versé à un membre. Les contributions peuvent se faire via les Paymates, par virement électronique, par bon eKwena ou en pièces.",
    },
    pt: {
      q: "Como funciona o sistema Siba?",
      a: "Tem origem na prática em que uma pessoa recolhia dinheiro de casa em casa, o guardava e o devolvia aos donos ao fim de 30 dias, sem quaisquer juros. A nossa plataforma permite que um grupo de pelo menos 3 pessoas junte dinheiro, ficando a gestão do esquema a cargo do sistema. O eMalyami cobra uma taxa por essa administração. Os membros podem ver quem falhou pagamentos e conversar entre si sobre as suas finanças. O grupo pode poupar por um período fixo — 6 ou 12 meses, por exemplo — ou criar um ciclo de pagamentos em que, todos os meses, é pago um valor determinado a cada membro. As contribuições podem ser feitas através de Paymates, transferência eletrónica, voucher eKwena ou moedas.",
    },
    es: {
      q: "¿Cómo funciona el sistema Siba?",
      a: "Nace de la costumbre por la que una persona recogía el dinero casa por casa, lo custodiaba y lo devolvía a sus dueños a los 30 días, sin intereses de por medio. Nuestra plataforma permite que un grupo de al menos 3 personas reúna dinero, y el sistema se encarga de la gestión del esquema. eMalyami cobra una comisión por administrarlo. Los miembros pueden ver quién ha dejado de pagar y conversar entre ellos sobre sus finanzas. El grupo puede ahorrar durante un plazo fijo —6 o 12 meses, por ejemplo— o crear un ciclo de pagos en el que cada mes se abona una cantidad concreta a cada miembro. Las aportaciones pueden hacerse a través de Paymates, transferencia electrónica, vale eKwena o monedas.",
    },
  },
  {
    id: "siba-requirements",
    en: {
      q: "What are the requirements for having a Siba group?",
      a: "You must have been using an eMalyami for a period of 30 days, have conducted your eMalyami account in an excellent manner, and each member of the group should be willing to guarantee the others in case of any defaults.",
    },
    ar: {
      q: "ما متطلبات إنشاء مجموعة Siba؟",
      a: "يجب أن تكون قد استخدمت حساب eMalyami لمدة 30 يومًا، وأن تكون قد أدرت حسابك بشكل ممتاز، وأن يكون كل عضو في المجموعة مستعدًا لضمان الآخرين في حال حدوث أي تعثّر.",
    },
    fr: {
      q: "Quelles sont les conditions pour créer un groupe Siba ?",
      a: "Vous devez utiliser un eMalyami depuis 30 jours, avoir géré votre compte eMalyami de manière irréprochable, et chaque membre du groupe doit accepter de se porter garant des autres en cas de défaut.",
    },
    pt: {
      q: "Quais são os requisitos para ter um grupo Siba?",
      a: "Tem de usar um eMalyami há 30 dias, ter gerido a sua conta eMalyami de forma exemplar, e cada membro do grupo deve estar disposto a servir de garante dos restantes em caso de incumprimento.",
    },
    es: {
      q: "¿Qué requisitos hay para tener un grupo Siba?",
      a: "Debes llevar 30 días usando un eMalyami, haber gestionado tu cuenta de forma impecable, y cada miembro del grupo debe estar dispuesto a avalar a los demás en caso de impago.",
    },
  },

  // ── New, SME-focused ──────────────────────────────────────────────────────
  {
    id: "multiple-shops",
    home: true,
    en: {
      q: "Can I run more than one shop on eMaPOS?",
      a: "Yes. One owner account can create and manage as many shops as you need, each with its own stock, cashiers and reports.",
    },
    ar: {
      q: "هل يمكنني إدارة أكثر من متجر على eMaPOS؟",
      a: "نعم. يستطيع حساب المالك الواحد إنشاء وإدارة أي عدد تحتاجه من المتاجر، لكل منها مخزونه وكاشيراته وتقاريره.",
    },
    fr: {
      q: "Puis-je gérer plusieurs boutiques sur eMaPOS ?",
      a: "Oui. Un seul compte propriétaire peut créer et gérer autant de boutiques que nécessaire, chacune avec son propre stock, ses caissiers et ses rapports.",
    },
    pt: {
      q: "Posso gerir mais do que uma loja no eMaPOS?",
      a: "Sim. Uma única conta de proprietário pode criar e gerir tantas lojas quantas precisar, cada uma com o seu stock, operadores de caixa e relatórios.",
    },
    es: {
      q: "¿Puedo gestionar más de una tienda en eMaPOS?",
      a: "Sí. Una sola cuenta de propietario puede crear y gestionar tantas tiendas como necesites, cada una con su propio inventario, cajeros e informes.",
    },
  },
  {
    id: "cashier-access",
    en: {
      q: "Can my cashier see my personal money?",
      a: "No. Cashiers get their own POS-only account, log in with a username and an OTP sent to their own phone, and never touch your eMa account.",
    },
    ar: {
      q: "هل يستطيع الكاشير رؤية أموالي الشخصية؟",
      a: "لا. لكل كاشير حساب خاص بنقطة البيع فقط، يدخل به باسم مستخدم ورمز OTP يصل إلى هاتفه، ولا يصل أبدًا إلى حساب eMa الخاص بك.",
    },
    fr: {
      q: "Mon caissier peut-il voir mon argent personnel ?",
      a: "Non. Les caissiers disposent de leur propre compte limité au point de vente, se connectent avec un identifiant et un code OTP envoyé sur leur téléphone, et n'accèdent jamais à votre compte eMa.",
    },
    pt: {
      q: "O meu operador de caixa consegue ver o meu dinheiro pessoal?",
      a: "Não. Os operadores de caixa têm uma conta própria, limitada ao ponto de venda, entram com um nome de utilizador e um código OTP enviado para o telemóvel deles, e nunca acedem à sua conta eMa.",
    },
    es: {
      q: "¿Puede mi cajero ver mi dinero personal?",
      a: "No. Los cajeros tienen su propia cuenta limitada al punto de venta, entran con un usuario y un código OTP enviado a su propio teléfono, y nunca acceden a tu cuenta eMa.",
    },
  },
  {
    id: "card-machine",
    home: true,
    en: {
      q: "Do I need a card machine?",
      a: "No. eMaPOS runs on the Android phone you already have. There's no terminal to buy, no monthly rental and no contract.",
    },
    ar: {
      q: "هل أحتاج جهاز دفع بالبطاقة؟",
      a: "لا. يعمل eMaPOS على هاتف الأندرويد الذي تملكه بالفعل. لا جهاز تشتريه، ولا إيجار شهري، ولا عقد.",
    },
    fr: {
      q: "Ai-je besoin d'un terminal de paiement ?",
      a: "Non. eMaPOS fonctionne sur le téléphone Android que vous possédez déjà. Aucun terminal à acheter, aucun loyer mensuel, aucun engagement.",
    },
    pt: {
      q: "Preciso de um terminal de pagamento?",
      a: "Não. O eMaPOS funciona no telemóvel Android que já tem. Não há terminal para comprar, nem renda mensal, nem contrato.",
    },
    es: {
      q: "¿Necesito un datáfono?",
      a: "No. eMaPOS funciona en el teléfono Android que ya tienes. No hay terminal que comprar, ni cuota mensual, ni contrato.",
    },
  },
  {
    id: "cash-customers",
    en: {
      q: "What if my customers only pay cash?",
      a: "Any Paymate converts their cash into your digital balance, and back again when you need notes. That's what the Paymate network is for.",
    },
    ar: {
      q: "ماذا لو كان عملائي يدفعون نقدًا فقط؟",
      a: "أي وكيل Paymate يحوّل نقدهم إلى رصيدك الرقمي، ويعيده نقدًا عندما تحتاج أوراقًا نقدية. وهذا هو الغرض من شبكة Paymate.",
    },
    fr: {
      q: "Et si mes clients ne paient qu'en espèces ?",
      a: "N'importe quel Paymate convertit leurs espèces en solde numérique, et inversement lorsque vous avez besoin de billets. C'est précisément le rôle du réseau Paymate.",
    },
    pt: {
      q: "E se os meus clientes só pagarem em numerário?",
      a: "Qualquer Paymate converte o numerário deles no seu saldo digital, e devolve-o em notas quando precisar. É precisamente para isso que existe a rede Paymate.",
    },
    es: {
      q: "¿Y si mis clientes solo pagan en efectivo?",
      a: "Cualquier Paymate convierte su efectivo en tu saldo digital, y lo devuelve en billetes cuando necesitas dinero en mano. Para eso existe la red Paymate.",
    },
  },
  {
    id: "funding-no-bank",
    en: {
      q: "Can I get funding without a bank record?",
      a: "That's what eMaFunding is for. Publish a campaign with your documents and funding goal, receive offers from backers, and sign the agreement in-app.",
    },
    ar: {
      q: "هل أحصل على تمويل بلا سجل بنكي؟",
      a: "هذا هو الغرض من eMaFunding. انشر حملتك مع مستنداتك وهدفك التمويلي، واستقبل عروض الداعمين، ووقّع الاتفاقية داخل التطبيق.",
    },
    fr: {
      q: "Puis-je obtenir un financement sans historique bancaire ?",
      a: "C'est précisément l'objet d'eMaFunding. Publiez une campagne avec vos documents et votre objectif de financement, recevez des offres de contributeurs, et signez l'accord directement dans l'application.",
    },
    pt: {
      q: "Consigo financiamento sem histórico bancário?",
      a: "É exatamente para isso que serve o eMaFunding. Publique uma campanha com os seus documentos e o objetivo de financiamento, receba propostas de apoiantes e assine o acordo dentro da aplicação.",
    },
    es: {
      q: "¿Puedo conseguir financiación sin historial bancario?",
      a: "Para eso está eMaFunding. Publica una campaña con tus documentos y tu objetivo de financiación, recibe ofertas de patrocinadores y firma el acuerdo dentro de la aplicación.",
    },
  },
  {
    id: "one-balance",
    home: true,
    en: {
      q: "Do all the modules share one balance?",
      a: "Yes — that's the point. Every module settles into the same wallet, on the same phone number, under the same KYC. A sale in eMaPOS, a payout from eMaServe and a contribution to your SIBA all land in one place, so there is nothing to reconcile.",
    },
    ar: {
      q: "هل تتشارك كل الوحدات رصيدًا واحدًا؟",
      a: "نعم — وهذا هو جوهر الفكرة. كل وحدة تستقرّ في المحفظة نفسها، على رقم الهاتف نفسه، تحت التحقّق نفسه. فعملية بيع في eMaPOS، ومستحق من eMaServe، ومساهمة في جمعيتك، كلها تصل إلى مكان واحد، فلا يبقى شيء لتسويته.",
    },
    fr: {
      q: "Tous les modules partagent-ils un même solde ?",
      a: "Oui — c'est tout l'intérêt. Chaque module se règle sur le même portefeuille, sur le même numéro de téléphone, sous la même vérification KYC. Une vente dans eMaPOS, un versement d'eMaServe et une contribution à votre SIBA arrivent au même endroit : il n'y a plus rien à rapprocher.",
    },
    pt: {
      q: "Todos os módulos partilham um único saldo?",
      a: "Sim — é esse o objetivo. Cada módulo liquida na mesma carteira, no mesmo número de telemóvel, sob a mesma verificação KYC. Uma venda no eMaPOS, um pagamento do eMaServe e uma contribuição para o seu SIBA chegam todos ao mesmo sítio, pelo que não há nada para reconciliar.",
    },
    es: {
      q: "¿Todos los módulos comparten un mismo saldo?",
      a: "Sí, esa es la idea. Cada módulo liquida en la misma cartera, con el mismo número de teléfono y bajo el mismo KYC. Una venta en eMaPOS, un cobro de eMaServe y una aportación a tu SIBA llegan al mismo sitio, así que no queda nada por conciliar.",
    },
  },

  // ── Licensing, footprint and roadmap ──────────────────────────────────────
  // Added after the content audit: the site published no regulator
  // registrations, no mention of the COMESA Business Council partnership and
  // nothing about the modules still in development, all of which the platform
  // deck documents.
  {
    id: "licensing",
    home: true,
    en: {
      q: "Who licenses and regulates eMalyami?",
      a: "eMalyami is a Sobek Group platform, operated under licence by SobekIMF. In South Africa it holds registered operating capacities with the FSCA (FSP 52672), the National Credit Regulator (NCRP11969), PASA (Third-Party Payment Provider and System Operator) and the Financial Intelligence Centre (50161, AML/CFT). In eSwatini it holds a full mobile-money licence from the Central Bank of eSwatini — and eSwatini is a COMESA member, so that is a live licence inside the region. Payments operate via sponsor-bank arrangements, and an entity-by-licence mapping is provided in diligence.",
    },
    ar: {
      q: "من يرخّص eMalyami ومن ينظّمه؟",
      a: "eMalyami منصّة من مجموعة Sobek، تُشغَّل بترخيص من SobekIMF. وفي جنوب أفريقيا تملك صفات تشغيلية مسجّلة لدى FSCA (رقم FSP 52672)، والجهة الوطنية لتنظيم الائتمان NCR (رقم NCRP11969)، وPASA (مزوّد مدفوعات طرف ثالث ومشغّل نظام)، ومركز الاستخبارات المالية FIC (رقم 50161 لمكافحة غسل الأموال وتمويل الإرهاب). وفي إسواتيني تملك ترخيصًا كاملًا للأموال عبر الهاتف من البنك المركزي لإسواتيني — وإسواتيني عضو في الكوميسا، أي أنه ترخيص فعّال داخل المنطقة. وتُنفَّذ المدفوعات عبر ترتيبات بنك راعٍ، ويُقدَّم بيان تفصيلي بالكيانات والتراخيص عند الفحص النافي للجهالة.",
    },
    fr: {
      q: "Qui agrée et supervise eMalyami ?",
      a: "eMalyami est une plateforme du groupe Sobek, exploitée sous licence par SobekIMF. En Afrique du Sud, elle dispose de capacités d'exploitation enregistrées auprès de la FSCA (FSP 52672), du National Credit Regulator (NCRP11969), de PASA (prestataire de paiement tiers et opérateur de système) et du Financial Intelligence Centre (50161, LBC/FT). En Eswatini, elle détient une licence complète de mobile money délivrée par la Banque centrale d'Eswatini — et l'Eswatini est membre du COMESA, ce qui en fait une licence active à l'intérieur de la région. Les paiements passent par des accords de banque partenaire, et la correspondance entité-agrément est fournie lors de la due diligence.",
    },
    pt: {
      q: "Quem licencia e regula o eMalyami?",
      a: "O eMalyami é uma plataforma do grupo Sobek, operada sob licença pela SobekIMF. Na África do Sul detém capacidades operacionais registadas junto da FSCA (FSP 52672), do National Credit Regulator (NCRP11969), da PASA (prestador de pagamentos de terceiros e operador de sistema) e do Financial Intelligence Centre (50161, BC/FT). Em Essuatíni detém uma licença completa de mobile money do Banco Central de Essuatíni — e Essuatíni é membro do COMESA, pelo que é uma licença ativa dentro da região. Os pagamentos operam através de acordos com bancos patrocinadores, e o mapeamento entidade-licença é fornecido em due diligence.",
    },
    es: {
      q: "¿Quién concede la licencia a eMalyami y quién lo regula?",
      a: "eMalyami es una plataforma del grupo Sobek, operada bajo licencia por SobekIMF. En Sudáfrica cuenta con capacidades operativas registradas ante la FSCA (FSP 52672), el National Credit Regulator (NCRP11969), PASA (proveedor de pagos de terceros y operador de sistema) y el Financial Intelligence Centre (50161, PBC/FT). En Esuatini posee una licencia completa de dinero móvil del Banco Central de Esuatini, y Esuatini es miembro del COMESA, por lo que se trata de una licencia activa dentro de la región. Los pagos se ejecutan mediante acuerdos con bancos patrocinadores, y el detalle de entidad por licencia se facilita en la diligencia debida.",
    },
  },
  {
    id: "comesa",
    home: true,
    en: {
      q: "What is eMa-CBC and what does the COMESA partnership cover?",
      a: "eMa-CBC is the private-sector execution layer for the COMESA Business Council, under a cooperation MoU signed between Sobek Group and the CBC to deploy eMa modules across selected markets. COMESA spans 21 member states, 580 million people and over $900bn of combined GDP, and the CBC has been a COMESA-recognised private-sector institution since 2005. The partnership gives direct access to SMEs, cooperatives and exporters, plus co-marketing inside the COMESA business community. Phase One targets seven markets: eSwatini, Kenya, Zambia, Zimbabwe, Uganda, Mauritius and Malawi. Regional engagement is region-wide; country activation follows local permissions.",
    },
    ar: {
      q: "ما هو eMa-CBC وما الذي تغطّيه شراكة الكوميسا؟",
      a: "eMa-CBC هو الذراع التنفيذية للقطاع الخاص لمجلس الأعمال للكوميسا، بموجب مذكرة تفاهم للتعاون وُقّعت بين مجموعة Sobek والمجلس لنشر وحدات eMa في أسواق مختارة. وتضمّ الكوميسا 21 دولة عضوًا و580 مليون نسمة وأكثر من 900 مليار دولار من الناتج المحلي المجمّع، والمجلس مؤسسة قطاع خاص معترف بها لدى الكوميسا منذ 2005. وتتيح الشراكة وصولًا مباشرًا إلى المشاريع الصغيرة والتعاونيات والمصدّرين، إضافة إلى تسويق مشترك داخل مجتمع الأعمال في الكوميسا. وتستهدف المرحلة الأولى سبعة أسواق: إسواتيني وكينيا وزامبيا وزيمبابوي وأوغندا وموريشيوس ومالاوي. والتعاون الإقليمي يشمل المنطقة كلها، أما التفعيل في كل دولة فيخضع للتصاريح المحلية.",
    },
    fr: {
      q: "Qu'est-ce qu'eMa-CBC et que couvre le partenariat COMESA ?",
      a: "eMa-CBC est le bras d'exécution du secteur privé pour le COMESA Business Council, dans le cadre d'un protocole de coopération signé entre le groupe Sobek et le CBC pour déployer les modules eMa sur des marchés sélectionnés. Le COMESA réunit 21 États membres, 580 millions d'habitants et plus de 900 milliards de dollars de PIB cumulé, et le CBC est une institution du secteur privé reconnue par le COMESA depuis 2005. Le partenariat ouvre un accès direct aux PME, coopératives et exportateurs, ainsi qu'un co-marketing au sein de la communauté d'affaires du COMESA. La phase un vise sept marchés : Eswatini, Kenya, Zambie, Zimbabwe, Ouganda, Maurice et Malawi. L'engagement est régional ; l'activation pays par pays suit les autorisations locales.",
    },
    pt: {
      q: "O que é o eMa-CBC e o que abrange a parceria com o COMESA?",
      a: "O eMa-CBC é o braço de execução do setor privado para o COMESA Business Council, ao abrigo de um memorando de cooperação assinado entre o grupo Sobek e o CBC para implementar os módulos eMa em mercados selecionados. O COMESA abrange 21 Estados-membros, 580 milhões de pessoas e mais de 900 mil milhões de dólares de PIB combinado, e o CBC é uma instituição do setor privado reconhecida pelo COMESA desde 2005. A parceria dá acesso direto a PME, cooperativas e exportadores, além de comarketing dentro da comunidade empresarial do COMESA. A fase um visa sete mercados: Essuatíni, Quénia, Zâmbia, Zimbabué, Uganda, Maurícias e Maláui. O envolvimento é regional; a ativação em cada país segue as autorizações locais.",
    },
    es: {
      q: "¿Qué es eMa-CBC y qué cubre la alianza con el COMESA?",
      a: "eMa-CBC es el brazo ejecutor del sector privado para el COMESA Business Council, al amparo de un memorando de cooperación firmado entre el grupo Sobek y el CBC para desplegar los módulos de eMa en mercados seleccionados. El COMESA abarca 21 Estados miembros, 580 millones de personas y más de 900.000 millones de dólares de PIB combinado, y el CBC es una institución del sector privado reconocida por el COMESA desde 2005. La alianza da acceso directo a pymes, cooperativas y exportadores, además de comarketing dentro de la comunidad empresarial del COMESA. La fase uno se dirige a siete mercados: Esuatini, Kenia, Zambia, Zimbabue, Uganda, Mauricio y Malaui. La colaboración es regional; la activación en cada país sigue las autorizaciones locales.",
    },
  },
  {
    id: "roadmap",
    en: {
      q: "What is eMa building next?",
      a: "Four things are in the final stages of development. AI credit scoring applies fuzzy logic and alternative data to lending decisions, so a trader with no bank record can still be assessed fairly (under testing). eMaFriends builds social influence ratings for peer lending and group finance (final testing). A multi-regulatory dashboard gives regulator, admin and super-admin oversight tiers over full transaction lifecycles (final testing). eMaCoin is token-wallet infrastructure for digital-asset loyalty and value transfer (in development).",
    },
    ar: {
      q: "ما الذي تعمل eMa على بنائه تاليًا؟",
      a: "أربعة أشياء في مراحلها النهائية من التطوير. التقييم الائتماني بالذكاء الاصطناعي يطبّق المنطق الضبابي والبيانات البديلة على قرارات الإقراض، بحيث يمكن تقييم تاجر بلا سجل بنكي تقييمًا عادلًا (قيد الاختبار). وeMaFriends يبني تقييمات النفوذ الاجتماعي للإقراض بين الأقران والتمويل الجماعي (اختبار نهائي). ولوحة التحكّم متعددة الجهات الرقابية تمنح مستويات إشراف للجهة الرقابية والمشرف والمشرف العام على دورة حياة المعاملة كاملة (اختبار نهائي). وeMaCoin بنية تحتية لمحافظ الرموز لبرامج الولاء ونقل القيمة بالأصول الرقمية (قيد التطوير).",
    },
    fr: {
      q: "Que construit eMa ensuite ?",
      a: "Quatre chantiers sont en phase finale de développement. Le scoring de crédit par IA applique la logique floue et des données alternatives aux décisions de prêt, afin qu'un commerçant sans historique bancaire puisse être évalué équitablement (en test). eMaFriends construit des notes d'influence sociale pour le prêt entre pairs et la finance de groupe (test final). Un tableau de bord multi-régulateur offre des niveaux de supervision régulateur, admin et super-admin sur l'ensemble du cycle de vie des transactions (test final). eMaCoin est une infrastructure de portefeuilles à jetons pour la fidélité et le transfert de valeur en actifs numériques (en développement).",
    },
    pt: {
      q: "O que está o eMa a construir a seguir?",
      a: "Há quatro frentes em fase final de desenvolvimento. O scoring de crédito por IA aplica lógica difusa e dados alternativos às decisões de crédito, para que um comerciante sem histórico bancário possa ser avaliado de forma justa (em testes). O eMaFriends constrói classificações de influência social para crédito entre pares e finança de grupo (testes finais). Um painel multirregulador dá níveis de supervisão de regulador, administrador e super-administrador sobre todo o ciclo de vida das transações (testes finais). O eMaCoin é infraestrutura de carteiras de tokens para fidelização e transferência de valor em ativos digitais (em desenvolvimento).",
    },
    es: {
      q: "¿Qué está construyendo eMa a continuación?",
      a: "Hay cuatro desarrollos en fase final. El scoring crediticio con IA aplica lógica difusa y datos alternativos a las decisiones de préstamo, de modo que un comerciante sin historial bancario pueda ser evaluado con justicia (en pruebas). eMaFriends construye valoraciones de influencia social para el préstamo entre pares y la financiación grupal (pruebas finales). Un panel multirregulador ofrece niveles de supervisión de regulador, administrador y superadministrador sobre todo el ciclo de vida de las transacciones (pruebas finales). eMaCoin es infraestructura de monederos de tokens para fidelización y transferencia de valor en activos digitales (en desarrollo).",
    },
  },
  {
    id: "platforms",
    en: {
      q: "Do I need an Android phone, or can I use eMa on the web?",
      a: "The main eMa app runs on any Android phone, and eMaPOS and eMaMall are web-access ready, so you can run your shop and your storefront from a browser as well. There is no card terminal to buy for any of it.",
    },
    ar: {
      q: "هل أحتاج هاتف أندرويد، أم يمكنني استخدام eMa على الويب؟",
      a: "يعمل تطبيق eMa الرئيسي على أي هاتف أندرويد، كما أن eMaPOS وeMaMall جاهزان للوصول عبر الويب، فيمكنك إدارة متجرك وواجهة بيعك من المتصفح أيضًا. ولا يتطلّب أي من ذلك شراء جهاز دفع بالبطاقة.",
    },
    fr: {
      q: "Faut-il un téléphone Android, ou puis-je utiliser eMa sur le web ?",
      a: "L'application principale eMa fonctionne sur tout téléphone Android, et eMaPOS et eMaMall sont accessibles depuis le web : vous pouvez donc gérer votre boutique et votre vitrine depuis un navigateur. Aucun terminal de paiement à acheter, dans un cas comme dans l'autre.",
    },
    pt: {
      q: "Preciso de um telemóvel Android ou posso usar o eMa na web?",
      a: "A aplicação principal do eMa funciona em qualquer telemóvel Android, e o eMaPOS e o eMaMall estão preparados para acesso web, pelo que também pode gerir a sua loja e a sua montra a partir de um navegador. Não há terminal de pagamento para comprar em nenhum dos casos.",
    },
    es: {
      q: "¿Necesito un teléfono Android o puedo usar eMa en la web?",
      a: "La aplicación principal de eMa funciona en cualquier teléfono Android, y eMaPOS y eMaMall están preparados para el acceso web, así que también puedes gestionar tu tienda y tu escaparate desde un navegador. En ningún caso hay que comprar un datáfono.",
    },
  },
  {
    id: "agri-trade",
    en: {
      q: "How does eMa help farmers and cross-border traders?",
      a: "eMaCargo and eMaTuma together bring African smallholder farmers into cross-border commodity markets: smart bidding for freight, real-time shipment tracking and settlement in local currency through the wallet. That combination also opens the door to carbon-credit monetisation and to the $100bn+ agricultural trade financing gap the platform is built to address.",
    },
    ar: {
      q: "كيف يساعد eMa المزارعين والتجار عبر الحدود؟",
      a: "يعمل eMaCargo وeMaTuma معًا على إدخال صغار المزارعين الأفارقة في أسواق السلع عبر الحدود: مناقصات ذكية للشحن، وتتبّع للشحنات في الوقت الفعلي، وتسوية بالعملة المحلية عبر المحفظة. ويفتح هذا المزيج أيضًا الباب أمام تسييل أرصدة الكربون وأمام فجوة تمويل التجارة الزراعية التي تتجاوز 100 مليار دولار والتي بُنيت المنصّة لمعالجتها.",
    },
    fr: {
      q: "En quoi eMa aide-t-il les agriculteurs et les négociants transfrontaliers ?",
      a: "eMaCargo et eMaTuma intègrent ensemble les petits exploitants africains aux marchés de matières premières transfrontaliers : enchères intelligentes pour le fret, suivi des expéditions en temps réel et règlement en monnaie locale via le portefeuille. Cette combinaison ouvre également la voie à la monétisation des crédits carbone et au déficit de financement du commerce agricole de plus de 100 milliards de dollars que la plateforme vise à combler.",
    },
    pt: {
      q: "Como é que o eMa ajuda agricultores e comerciantes além-fronteiras?",
      a: "O eMaCargo e o eMaTuma integram, em conjunto, os pequenos agricultores africanos nos mercados de mercadorias além-fronteiras: leilões inteligentes de frete, rastreio de envios em tempo real e liquidação em moeda local através da carteira. Essa combinação abre também caminho à monetização de créditos de carbono e ao défice de financiamento do comércio agrícola, superior a 100 mil milhões de dólares, que a plataforma foi criada para responder.",
    },
    es: {
      q: "¿Cómo ayuda eMa a agricultores y comerciantes transfronterizos?",
      a: "eMaCargo y eMaTuma incorporan juntos a los pequeños agricultores africanos a los mercados transfronterizos de materias primas: pujas inteligentes para el flete, seguimiento de envíos en tiempo real y liquidación en moneda local a través de la cartera. Esa combinación abre además la puerta a la monetización de créditos de carbono y a la brecha de financiación del comercio agrícola, superior a 100.000 millones de dólares, que la plataforma se propone cubrir.",
    },
  },
];

export const FAQS = faqs.map(localize);

export const HOME_FAQS = FAQS.filter((f) => f.home);

export default FAQS;
