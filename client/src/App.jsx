import { Routes, Route, Navigate } from 'react-router-dom';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import PEPBanner from './components/PEPBanner';
import Footer from './components/Footer';
import WhatsAppFab from './components/WhatsAppFab';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Specialities from './pages/Specialities';
import ServiceDetail from './pages/ServiceDetail';
import HivCare from './pages/HivCare';
import Doctors from './pages/Doctors';
import PrepPep from './pages/PrepPep';
import Testing from './pages/Testing';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2">
        Skip to content
      </a>
      <TopBar />
      <Navbar />
      <PEPBanner />
      <main id="main" className="overflow-x-clip">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/specialities" element={<Specialities />} />
          <Route path="/specialities/:slug" element={<ServiceDetail source="departments" />} />
          <Route path="/hiv-care" element={<HivCare />} />
          <Route path="/hiv-care/prep-pep" element={<PrepPep />} />
          <Route path="/hiv-care/testing" element={<Testing />} />
          <Route path="/hiv-care/resources" element={<Resources />} />
          <Route path="/hiv-care/:slug" element={<ServiceDetail source="hiv" />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/contact" element={<Contact />} />
          {/* Old URLs from the previous version of the site */}
          <Route path="/services" element={<Navigate to="/specialities" replace />} />
          <Route path="/services/:slug" element={<Navigate to="/hiv-care" replace />} />
          <Route path="/prep-pep" element={<Navigate to="/hiv-care/prep-pep" replace />} />
          <Route path="/testing" element={<Navigate to="/hiv-care/testing" replace />} />
          <Route path="/resources" element={<Navigate to="/hiv-care/resources" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
