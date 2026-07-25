import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { siteConfig } from './config/site.config';
import { ComingSoon } from './components/ComingSoon';
import { Layout } from './components/Layout';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { WhyChoosePage } from './pages/WhyChoosePage';
import { ServicesPage } from './pages/ServicesPage';
import { EmployersPage } from './pages/EmployersPage';
import { CandidatesPage } from './pages/CandidatesPage';
import { ContactPage } from './pages/ContactPage';
import { HealthcareAssistantPage } from './pages/HealthcareAssistantPage';
import { SeniorHealthcareAssistantPage } from './pages/SeniorHealthcareAssistantPage';

function App() {
  if (siteConfig.mode === 'coming-soon') {
    return <ComingSoon />;
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/why-choose" element={<WhyChoosePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/healthcare-assistant" element={<HealthcareAssistantPage />} />
          <Route path="/services/senior-healthcare-assistant" element={<SeniorHealthcareAssistantPage />} />
          <Route path="/employers" element={<EmployersPage />} />
          <Route path="/candidates" element={<CandidatesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
