import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { siteConfig } from './config/site.config';
import { ComingSoon } from './components/ComingSoon';
import { Layout } from './components/Layout';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { MissionPage } from './pages/MissionPage';
import { ValuesPage } from './pages/ValuesPage';
import { ServicesPage } from './pages/ServicesPage';
import { StaffPage } from './pages/StaffPage';
import { ContactPage } from './pages/ContactPage';

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
          <Route path="/mission" element={<MissionPage />} />
          <Route path="/values" element={<ValuesPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/staff" element={<StaffPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
