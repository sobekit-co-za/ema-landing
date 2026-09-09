import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import NewsPage from "./pages/NewsPage";
import ModulesPage from "./pages/ModulesPage";
import ModuleDetailPage from "./pages/ModuleDetailPage";
import FaqPage from "./pages/FaqPage";
import HelpPage from "./pages/HelpPage";
import LegalPage from "./pages/LegalPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/modules" element={<ModulesPage />} />
          <Route path="/modules/:id" element={<ModuleDetailPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/news" element={<NewsPage />} />

          {/*
            The footer has always linked to these three. Until now none of them
            had a route, so all three rendered a blank white page in every
            language.
          */}
          <Route
            path="/terms-conditions"
            element={<LegalPage variant="terms" />}
          />
          <Route
            path="/privacy-policy"
            element={<LegalPage variant="privacy" />}
          />
          <Route
            path="/fraud-awareness"
            element={<LegalPage variant="fraud" />}
          />

          {/* Anything else lands on the home page rather than on nothing. */}
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
