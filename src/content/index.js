/**
 * Content layer — every user-facing string on the site.
 *
 * Components import from "@/content" and never hardcode copy. Each file holds
 * every locale side by side, and src/content/locale.js selects the active one
 * at runtime from the visitor's choice. One build serves every language, so
 * translating the site is an edit to this folder rather than an edit to
 * eighteen JSX files across five git branches.
 */

export {
  LOCALE,
  IS_RTL,
  LANG_TAG,
  SUPPORTED_LOCALES,
  LOCALE_NAMES,
  setLocale,
  pick,
  localize,
} from "./locale";

export {
  ALL_MODULES,
  MONEY_MODULES,
  BUSINESS_MODULES,
  TICKET_MODULES,
  FAMILY,
  STATUS,
  getModule,
  getModules,
} from "./modules";

export {
  COMPANY,
  COMPANY_ADDRESS,
  COMPLIANCE,
  LICENCES,
  NAV,
  UI,
  SLOGAN,
} from "./site";

export {
  HERO,
  PROBLEM,
  ARCHITECTURE,
  DIFFERENCE,
  WHO_WE_ARE,
  MONEY_STACK,
  BUSINESS_STACK,
  PAYMATE_LOOP,
  SERVICES,
  WHITE_LABEL,
  PARTNER,
  MODULES_PAGE,
  HELP_PAGE,
  QUICK_STEPS,
  PARTNER_STEPS_TITLE,
  CTA_BANNER,
  BEFORE_AFTER,
  PARTNER_CTA,
} from "./sections";

export { INDUSTRIES, INDUSTRIES_HEADER } from "./industries";
export { PRICING } from "./pricing";
export { FAQS, HOME_FAQS, FAQ_HEADER } from "./faq";
export { SECURITY } from "./security";
export { CHATBOT, NEWS } from "./ui";
