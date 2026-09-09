import { motion } from "framer-motion";
import { Check } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/shared/SectionHeader";
import { COMPANY, PRICING } from "@/content";

/**
 * Pricing. The three plan cards keep their original design; the fee table
 * beneath is new — it states the per-module, event-based fee model, which is a
 * selling point the site was previously hiding behind a bare "4%".
 */
function OurPlans() {
  const openApp = () => window.open(COMPANY.apps.main, "_blank");

  return (
    <section
      id="pricing"
      className="overflow-x-hidden px-4 py-14 sm:px-8 md:px-16 xl:px-32"
    >
      <SectionHeader title={PRICING.title} subtitle={PRICING.subtitle} />

      <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {PRICING.plans.map((plan, idx) => (
          <motion.div
            key={plan.badge}
            initial={{ opacity: 0, y: 30, filter: "blur(3px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.6,
              delay: idx * 0.1,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
          >
            <Card className="relative flex h-full flex-col justify-between pt-12 shadow-lg">
              <span
                className={`absolute top-4 end-4 z-10 rounded-full px-3 py-0.5 text-xs font-semibold tracking-wider uppercase ${plan.badgeStyle}`}
              >
                {plan.badge}
              </span>

              <CardHeader>
                <CardTitle className="flex items-baseline gap-2 text-4xl font-bold">
                  {plan.rate}
                  {plan.rateSuffix && (
                    <span className="text-base font-normal text-muted-foreground">
                      {plan.rateSuffix}
                    </span>
                  )}
                </CardTitle>
                <CardDescription>
                  <span className="block text-xl font-bold text-foreground">
                    {plan.subtitle}
                  </span>
                  <span className="mt-1 block text-muted-foreground">
                    {plan.description}
                  </span>
                </CardDescription>
              </CardHeader>

              <CardContent className="mt-1 flex flex-col gap-2">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <span className="grid size-4 shrink-0 place-items-center rounded-full bg-primary/15 text-primary-strong">
                      <Check size={10} strokeWidth={3} />
                    </span>
                    <p className="text-base">{feature}</p>
                  </div>
                ))}

                {plan.note && (
                  <p className="mt-2 text-xs font-medium text-muted-foreground">
                    {plan.noteLabel}
                    <br />
                    <span className="font-bold">{plan.note}</span>
                  </p>
                )}
              </CardContent>

              <CardFooter className="mt-auto pt-6">
                <Button
                  className={`${plan.ctaStyle} w-full`}
                  size="lg"
                  onClick={openApp}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Per-module fee table */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-2xl border border-border/70 bg-card shadow-sm"
      >
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-start">
            <thead>
              <tr className="border-b border-border/70 bg-muted/50">
                <th className="px-5 py-3 text-start text-xs font-medium tracking-wide text-primary-strong uppercase">
                  {PRICING.feeTableHeaders.module}
                </th>
                <th className="px-5 py-3 text-start text-xs font-medium tracking-wide text-primary-strong uppercase">
                  {PRICING.feeTableHeaders.when}
                </th>
              </tr>
            </thead>
            <tbody>
              {PRICING.fees.map((row) => (
                <tr
                  key={row.module}
                  className="border-b border-border/50 last:border-0"
                >
                  <td className="px-5 py-3 text-sm font-medium whitespace-nowrap text-accent">
                    {row.module}
                  </td>
                  <td className="px-5 py-3 text-sm text-muted-foreground">
                    {row.when}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/*
          Published rates are country-specific. Saying so on the page keeps a
          reader in Kenya or eSwatini from reading the South African schedule
          as their own.
        */}
        <p className="border-t border-border/50 px-5 py-4 text-xs leading-relaxed text-muted-foreground">
          {PRICING.feeNote}
        </p>
      </motion.div>
    </section>
  );
}

export default OurPlans;
