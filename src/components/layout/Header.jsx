import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation, useNavigate } from "react-router";
import { Menu } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedLogo from "../shared/AnimatedLogo";
import LanguageSwitcher from "../shared/LanguageSwitcher";
import { Button } from "../ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { COMPANY, NAV, UI } from "@/content";
import { scrollToSectionId } from "@/lib/scroll";

const TEXT_OPTIONS = ["eMa", "eMalyami"];

function Header() {
  const [currentText, setCurrentText] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentText((prev) => (prev + 1) % TEXT_OPTIONS.length),
      2000
    );
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId, isMobile) => {
    if (isMobile) setIsDrawerOpen(false);

    if (isHome) {
      scrollToSectionId(sectionId);
      return;
    }

    // Navigate home first; the section only exists there.
    navigate("/", { state: { scrollTo: sectionId } });
  };

  // Honour a scroll target handed over by navigation from another route.
  // The home page is long and still laying out at this point, so the helper
  // keeps re-measuring until the section actually sits under the header.
  useEffect(() => {
    const target = location.state?.scrollTo;
    if (!isHome || !target) return;
    return scrollToSectionId(target, { smooth: false });
  }, [isHome, location.state]);

  const renderNavItem = (item, isMobile = false) => {
    const base = isMobile
      ? "flex items-center justify-center rounded-lg border border-gray-100 px-4 py-3 font-medium text-gray-700 transition-all duration-200 hover:bg-gray-50 hover:text-accent cursor-pointer"
      : "relative group cursor-pointer font-medium text-gray-700 transition-colors duration-200 hover:text-accent";

    const underline = !isMobile ? (
      <span className="absolute bottom-0 start-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full" />
    ) : null;

    if (item.type === "external") {
      return (
        <a
          key={item.id}
          href={item.to}
          target="_blank"
          rel="noopener noreferrer"
          className={base}
          onClick={() => isMobile && setIsDrawerOpen(false)}
        >
          {item.label}
          {underline}
        </a>
      );
    }

    if (item.type === "route") {
      return (
        <Link
          key={item.id}
          to={item.to}
          className={`${base} ${
            location.pathname === item.to ? "text-accent" : ""
          }`}
          onClick={() => isMobile && setIsDrawerOpen(false)}
        >
          {item.label}
          {underline}
        </Link>
      );
    }

    // Section links carry a real href (/#pricing, /#partner, …) so they are
    // shareable and open in a new tab like any other link. Without it these
    // four items were script-only buttons with no URL at all.
    const sectionHref = `/#${item.id}`;

    if (isHome) {
      return (
        <ScrollLink
          key={item.id}
          to={item.id}
          href={sectionHref}
          smooth
          duration={500}
          offset={-80}
          className={base}
          onClick={() => isMobile && setIsDrawerOpen(false)}
        >
          {item.label}
          {underline}
        </ScrollLink>
      );
    }

    return (
      <a
        key={item.id}
        href={sectionHref}
        className={base}
        onClick={(event) => {
          // Let a modifier-click or middle-click open the URL normally.
          if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) {
            return;
          }
          event.preventDefault();
          scrollToSection(item.id, isMobile);
        }}
      >
        {item.label}
        {underline}
      </a>
    );
  };

  const openApp = () => window.open(COMPANY.apps.main, "_blank");

  return (
    <header className="fixed inset-x-4 top-4 z-50 sm:inset-x-6 sm:top-6 lg:inset-x-8 xl:inset-x-12">
      <div className="rounded-full border border-gray-200/50 bg-white/80 shadow-lg backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center">
              <div className="size-10 shrink-0 sm:size-12 lg:size-14">
                <AnimatedLogo
                  containerClassName="block w-full h-full"
                  showSlogan={false}
                  logoSize="w-full h-full"
                />
              </div>

              <div className="relative ms-3 h-10 w-[140px] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentText}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute top-1/2 start-0 -translate-y-1/2 text-2xl font-bold tracking-tight whitespace-nowrap text-black lg:text-3xl"
                  >
                    {TEXT_OPTIONS[currentText]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </Link>

            <nav className="hidden items-center gap-7 lg:flex">
              {NAV.map((item) => renderNavItem(item, false))}
              <LanguageSwitcher />
              <Button
                className="cursor-pointer rounded-full bg-accent px-6 py-2 font-medium text-white transition-colors duration-200 hover:bg-accent/90"
                onClick={openApp}
              >
                {UI.getStartedShort}
              </Button>
            </nav>

            <div className="flex items-center gap-1 lg:hidden">
              <LanguageSwitcher />

              <Drawer
                open={isDrawerOpen}
                onOpenChange={setIsDrawerOpen}
                direction="right"
              >
                <DrawerTrigger asChild>
                  <button
                    className="rounded-md p-2 text-accent transition-colors duration-200"
                    aria-label={UI.menu}
                  >
                    <Menu size={24} />
                  </button>
                </DrawerTrigger>

                <DrawerContent className="right-0 left-auto h-[100vh] w-[320px]">
                  <div className="mx-auto w-full max-w-sm">
                    <DrawerHeader>
                      <DrawerTitle className="text-center text-accent">
                        {UI.menu}
                      </DrawerTitle>
                    </DrawerHeader>

                    <div className="p-4 pb-0">
                      <div className="space-y-3">
                        {NAV.map((item) => renderNavItem(item, true))}
                      </div>

                      <div className="mt-6 border-t border-gray-100 pt-4">
                        <Button
                          className="w-full cursor-pointer rounded-full bg-accent px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-accent/90"
                          onClick={() => {
                            openApp();
                            setIsDrawerOpen(false);
                          }}
                        >
                          {UI.getStarted}
                        </Button>
                      </div>

                      <div className="mt-4">
                        <DrawerClose asChild>
                          <Button variant="outline" className="w-full">
                            {UI.close}
                          </Button>
                        </DrawerClose>
                      </div>
                    </div>
                  </div>
                </DrawerContent>
              </Drawer>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
