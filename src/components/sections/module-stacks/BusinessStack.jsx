import SectionHeader from "@/components/shared/SectionHeader";
import ModuleCard from "@/components/shared/ModuleCard";
import { BUSINESS_MODULES, BUSINESS_STACK } from "@/content";

/** The 7 commercial modules. Replaces the old "What Else" section. */
function BusinessStack() {
  return (
    <section
      id="services"
      className="overflow-x-hidden bg-primary/[0.04] px-6 py-12 sm:px-16 lg:py-16 xl:px-32"
    >
      <SectionHeader
        title={BUSINESS_STACK.title}
        subtitle={BUSINESS_STACK.subtitle}
      />

      <div className="mx-auto mt-10 grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {BUSINESS_MODULES.map((module, i) => (
          <ModuleCard key={module.id} module={module} index={i} />
        ))}
      </div>
    </section>
  );
}

export default BusinessStack;
