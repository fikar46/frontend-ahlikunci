import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderPage from './component/Header';
import CarousellPage from './component/CarousellPage';
import FiturLayanan from './component/FiturLayanan';
import AboutPage from './component/AboutPage';
import PelayananPage from './component/PelayananPage';
import ServicePage from './component/ServicePage';
import TestimoniPage from './component/TestimoniPage';
import ContactPage from './component/ContactPage';

function App() {
  return (
    <div>
      <HeaderPage/>
      <div className="content-page-after-header">
      <CarousellPage/>
      <FiturLayanan/>
      <AboutPage/>
      <PelayananPage/>
      <ServicePage/>
      <TestimoniPage/>
      <ContactPage/>
      </div>
    </div>
  );
}

export default App;
