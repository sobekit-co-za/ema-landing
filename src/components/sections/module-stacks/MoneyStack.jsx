import SectionHeader from "@/components/shared/SectionHeader";
import ModuleCard from "@/components/shared/ModuleCard";
import { MONEY_MODULES, MONEY_STACK } from "@/content";

/** The 7 financial modules. Replaces the old "Our Components" section. */
function MoneyStack() {
  return (
    <section
      id="components"
      className="overflow-x-hidden px-6 py-12 sm:px-16 lg:py-16 xl:px-32"
    >
      <SectionHeader title={MONEY_STACK.title} subtitle={MONEY_STACK.subtitle} />

      <div className="mx-auto mt-10 grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {MONEY_MODULES.map((module, i) => (
          <ModuleCard key={module.id} module={module} index={i} />
        ))}
      </div>
    </section>
  );
}

export default MoneyStack;
