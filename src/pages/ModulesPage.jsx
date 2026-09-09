import { useState } from "react";
import { motion } from "framer-motion";
import ModuleCard from "@/components/shared/ModuleCard";
import TabSwitcher from "@/components/shared/TabSwitcher";
import Seo from "@/components/shared/Seo";
import { SEO } from "@/content/seo";
import {
  ALL_MODULES,
  BUSINESS_STACK,
  FAMILY,
  MODULES_PAGE,
  MONEY_STACK,
  UI,
} from "@/content";

/** /modules — every module in one filterable grid. */
function ModulesPage() {
  const [filter, setFilter] = useState("all");

  const tabs = [
    { id: "all", label: UI.filterAll },
    { id: FAMILY.MONEY, label: MONEY_STACK.title },
    { id: FAMILY.BUSINESS, label: BUSINESS_STACK.title },
  ];

  const modules =
    filter === "all"
      ? ALL_MODULES
      : ALL_MODULES.filter((m) => m.family === filter);

  return (
    <div className="px-6 pt-32 pb-16 sm:px-16 xl:px-32">
      <Seo title={SEO.modules.title} description={SEO.modules.description} />
      <motion.div
        initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="mx-auto flex max-w-3xl flex-col items-center text-center"
      >
        <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
          {MODULES_PAGE.title}
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-lg">
          {MODULES_PAGE.subtitle}
        </p>
      </motion.div>

      <div className="mt-8 flex justify-center">
        <TabSwitcher
          tabs={tabs}
          active={filter}
          onChange={setFilter}
          layoutId="modules-filter"
        />
      </div>

      <div className="mx-auto mt-8 grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {modules.map((module, i) => (
          <ModuleCard key={module.id} module={module} index={i} />
        ))}
      </div>
    </div>
  );
}

export default ModulesPage;
