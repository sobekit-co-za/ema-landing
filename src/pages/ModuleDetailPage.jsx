import { Link, useParams, Navigate } from "react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink, Globe } from "lucide-react";
import { BiLogoPlayStore } from "react-icons/bi";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import StepList from "@/components/shared/StepList";
import CapabilityGrid from "@/components/shared/CapabilityGrid";
import ModuleCard from "@/components/shared/ModuleCard";
import ModuleDemo from "@/components/shared/ModuleDemo";
import Seo from "@/components/shared/Seo";
import {
  BUSINESS_STACK,
  FAMILY,
  IS_RTL,
  MONEY_STACK,
  UI,
  getModule,
  getModules,
} from "@/content";

const BackArrow = IS_RTL ? ArrowRight : ArrowLeft;

function Block({ title, children, className = "" }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      <h2 className="mb-4 text-xl font-bold text-accent sm:text-2xl">{title}</h2>
      {children}
    </motion.section>
  );
}

/** /modules/:id — the full record for one module. */
function ModuleDetailPage() {
  const { id } = useParams();
  const module = getModule(id);
  const related = getModules(module?.related);

  if (!module) return <Navigate to="/modules" replace />;

  const familyLabel =
    module.family === FAMILY.MONEY ? MONEY_STACK.title : BUSINESS_STACK.title;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: module.name,
    applicationCategory: "FinanceApplication",
    operatingSystem: "Android",
    description: module.description,
    isPartOf: { "@type": "SoftwareApplication", name: "eMalyami" },
    ...(module.links?.android ? { installUrl: module.links.android } : {}),
    ...(module.links?.web ? { url: module.links.web } : {}),
  };

  return (
    <div className="px-6 pt-32 pb-16 sm:px-16 xl:px-32">
      <Seo
        title={`${module.name} — ${module.tagline}`}
        description={module.summary}
        jsonLd={jsonLd}
      />
      <div className="mx-auto max-w-4xl">
        <Link
          to="/modules"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-accent"
        >
          <BackArrow size={15} />
          {UI.backToModules}
        </Link>

        {/* Hero strip */}
        <motion.header
          initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mt-6 border-b border-border/70 pb-8"
        >
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <Badge variant="outline" className="text-[11px]">
              {familyLabel}
            </Badge>
          </div>

          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            {module.name}
          </h1>
          <p className="mt-1 text-lg text-primary-strong sm:text-xl">
            {module.tagline}
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-lg">
            {module.summary}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {module.links?.android && (
              <Button asChild className="rounded-full bg-accent hover:bg-accent/90">
                <a
                  href={module.links.android}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BiLogoPlayStore size={18} />
                  {UI.downloadApp}
                </a>
              </Button>
            )}
            {module.links?.web && (
              <Button
                asChild
                variant="outline"
                className="rounded-full border-accent text-accent hover:bg-accent hover:text-white"
              >
                <a
                  href={module.links.web}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Globe size={16} />
                  {UI.openWebApp}
                  <ExternalLink size={13} />
                </a>
              </Button>
            )}
          </div>
        </motion.header>

        <div className="mt-10 space-y-12">
          <Block title={UI.whatItIs}>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              {module.description}
            </p>
          </Block>

          {module.howItWorks?.length > 0 && (
            <Block title={UI.howItWorks}>
              <StepList steps={module.howItWorks} />
            </Block>
          )}

          <ModuleDemo moduleId={module.id} />

          {module.capabilities?.length > 0 && (
            <Block title={UI.everythingItDoes}>
              <CapabilityGrid items={module.capabilities} />
            </Block>
          )}

          {module.audience?.length > 0 && (
            <Block title={UI.whoItsFor}>
              <ul className="flex flex-wrap gap-2">
                {module.audience.map((who) => (
                  <li
                    key={who}
                    className="rounded-full border border-border/70 bg-muted/50 px-3.5 py-1.5 text-sm text-accent"
                  >
                    {who}
                  </li>
                ))}
              </ul>
            </Block>
          )}

          <div className="grid gap-5 sm:grid-cols-2">
            <Block
              title={UI.whatItCosts}
              className="rounded-2xl border border-primary/25 bg-primary/[0.06] p-6"
            >
              <p className="text-sm leading-relaxed text-accent">{module.fee}</p>
            </Block>

            <Block
              title={UI.whereItSettles}
              className="rounded-2xl border border-border/70 bg-card p-6"
            >
              <p className="text-sm leading-relaxed text-muted-foreground">
                {module.settles}
              </p>
            </Block>
          </div>

          {related.length > 0 && (
            <Block title={UI.worksWellWith}>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((rel, i) => (
                  <ModuleCard key={rel.id} module={rel} index={i} />
                ))}
              </div>
            </Block>
          )}
        </div>
      </div>
    </div>
  );
}

export default ModuleDetailPage;
