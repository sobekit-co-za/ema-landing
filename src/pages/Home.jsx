import Hero from "@/components/sections/hero/Hero";
import Problem from "@/components/sections/problem/Problem";
import Architecture from "@/components/sections/architecture/Architecture";
import EmaDifference from "@/components/sections/ema-difference/EmaDifference";
import WhoAreWe from "@/components/sections/who-are-we/WhoAreWe";
import MoneyStack from "@/components/sections/module-stacks/MoneyStack";
import BusinessStack from "@/components/sections/module-stacks/BusinessStack";
import Industries from "@/components/sections/industries/Industries";
import PaymateLoop from "@/components/sections/paymate-loop/PaymateLoop";
import OurServices from "@/components/sections/our-services/OurServices";
import Security from "@/components/sections/security/Security";
import WhiteLabelSolutions from "@/components/sections/white-label-solutions/WhiteLabelSolutions";
import BeforeAfter from "@/components/sections/white-label-solutions/BeforeAfter";
import CtaBanner from "@/components/sections/white-label-solutions/CtaBanner";
import BeOurPartner from "@/components/sections/be-our-partner/BeOurPartner";
import QuickSteps from "@/components/sections/be-our-partner/QuickSteps";
import OurPlans from "@/components/sections/our-plans/OurPlans";
import Faq from "@/components/sections/faq/Faq";
import Seo from "@/components/shared/Seo";
import { SEO } from "@/content/seo";

function Home() {
  return (
    <div className="space-y-12 lg:space-y-16">
      <Seo title={SEO.home.title} description={SEO.home.description} />
      <Hero />
      <Problem />
      <Architecture />
      <EmaDifference />
      <WhoAreWe />
      <MoneyStack />
      <BusinessStack />
      <Industries />
      <PaymateLoop />
      <OurServices />
      <Security />
      <div className="space-y-8">
        <WhiteLabelSolutions />
        <BeforeAfter />
        <CtaBanner />
      </div>
      <div className="space-y-8">
        <BeOurPartner />
        <QuickSteps />
      </div>
      <OurPlans />
      <Faq />
    </div>
  );
}

export default Home;
