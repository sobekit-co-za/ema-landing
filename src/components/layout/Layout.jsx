import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import ScrollManager from "./ScrollManager";
import AnimatedLogo from "../shared/AnimatedLogo";
import Chatbot from "../sections/chatbot/Chatbot";

export default function Layout() {
  return (
    <div className="relative flex min-h-screen flex-col scroll-smooth bg-stone-50">
      {/* Resets / restores scroll on route change — see ScrollManager. */}
      <ScrollManager />

      <Chatbot />
      <AnimatedLogo />
      <Header />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
