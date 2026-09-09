import { Link } from "react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoPlayStore } from "react-icons/bi";
import {
  BUSINESS_MODULES,
  COMPANY,
  COMPANY_ADDRESS,
  COMPLIANCE,
  LICENCES,
  MONEY_MODULES,
  UI,
} from "@/content";

const SOCIALS = [
  { icon: Facebook, href: COMPANY.social.facebook, label: "Facebook" },
  { icon: FaXTwitter, href: COMPANY.social.twitter, label: "X" },
  { icon: Linkedin, href: COMPANY.social.linkedin, label: "LinkedIn" },
  { icon: Instagram, href: COMPANY.social.instagram, label: "Instagram" },
];

function ModuleColumn({ title, modules }) {
  return (
    <div>
      <h3 className="mb-3 text-sm font-bold text-primary">{title}</h3>
      <ul className="space-y-2">
        {modules.map((module) => (
          <li key={module.id}>
            <Link
              to={`/modules/${module.id}`}
              className="text-sm text-white/70 transition-colors hover:text-primary"
            >
              {module.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function LinkColumn({ title, links }) {
  return (
    <div>
      <h3 className="mb-3 text-sm font-bold text-primary">{title}</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            {link.external ? (
              <a
                href={link.to}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/70 transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ) : (
              <Link
                to={link.to}
                className="text-sm text-white/70 transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Footer() {
  // Every label comes from the content layer: these were hardcoded English and
  // so stayed English in the Arabic, French and Portuguese builds. The first
  // item in each column also repeated the column heading — it now carries its
  // own distinct label.
  const company = [
    { label: UI.aboutUs, to: "/#about" },
    { label: UI.news, to: "/news" },
    { label: UI.blog, to: COMPANY.blog, external: true },
    { label: UI.mainSite, to: COMPANY.website, external: true },
  ];

  const support = [
    { label: UI.contactSupport, to: "/help" },
    { label: UI.faq, to: "/faq" },
    { label: UI.fraudAwareness, to: "/fraud-awareness" },
  ];

  const legal = [
    { label: UI.terms, to: "/terms-conditions" },
    { label: UI.privacy, to: "/privacy-policy" },
  ];

  return (
    <footer className="mt-16 bg-accent text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-10 lg:px-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          {/* Brand + contact */}
          <div>
            <p className="mb-3 text-2xl font-bold">eMalyami</p>
            <p className="mb-3 max-w-xs text-sm leading-relaxed text-white/70">
              {COMPANY.legalEntity} · {UI.registrationNo}{" "}
              {COMPANY.registrationNumber}
            </p>

            {/*
              Regulator registrations. A payments and wallet platform is judged
              on these, and the site published none of them until now.
            */}
            <div className="mb-5 max-w-xs text-xs leading-relaxed text-white/55">
              <p className="mb-1 font-medium text-white/75">
                {COMPLIANCE.label}
              </p>
              <p>
                <span className="text-white/70">
                  {COMPLIANCE.southAfrica}:
                </span>{" "}
                {LICENCES.southAfrica.join(" · ")}
              </p>
              <p className="mt-1">
                <span className="text-white/70">{COMPLIANCE.eswatini}:</span>{" "}
                {LICENCES.eswatini.join(" · ")}
              </p>
              <p className="mt-1.5">{COMPLIANCE.sponsorNote}</p>
            </div>

            <ul className="space-y-2.5 text-sm text-white/70">
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="mt-0.5 shrink-0 text-primary" />
                <span>{COMPANY_ADDRESS}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="shrink-0 text-primary" />
                <a
                  href={`tel:${COMPANY.phone.replace(/[^\d+]/g, "")}`}
                  className="transition-colors hover:text-primary"
                  dir="ltr"
                >
                  {COMPANY.phone}
                </a>
              </li>
              {Object.values(COMPANY.email).map((email) => (
                <li key={email} className="flex items-center gap-2.5">
                  <Mail size={15} className="shrink-0 text-primary" />
                  <a
                    href={`mailto:${email}`}
                    className="transition-colors hover:text-primary"
                    dir="ltr"
                  >
                    {email}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href={COMPANY.apps.main}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-accent transition-colors hover:bg-primary/90"
            >
              <BiLogoPlayStore size={18} />
              {UI.downloadApp}
            </a>
          </div>

          <ModuleColumn title={UI.moneyStack} modules={MONEY_MODULES} />
          <ModuleColumn title={UI.businessStack} modules={BUSINESS_MODULES} />
          <LinkColumn title={UI.company} links={company} />

          <div className="space-y-8">
            <LinkColumn title={UI.support} links={support} />
            <LinkColumn title={UI.legal} links={legal} />
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-5 border-t border-white/15 pt-6 sm:flex-row">
          <p className="text-sm text-white/60">
            &copy; {new Date().getFullYear()} eMalyami. {UI.rightsReserved}
          </p>

          <ul className="flex gap-3">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid size-9 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-primary hover:text-accent"
                >
                  <Icon size={16} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
