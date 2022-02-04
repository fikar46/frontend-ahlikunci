import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import HomesPage from './Pages/Homes';
import TentangPages from './Pages/TentangPage';
import LayananPages from './Pages/LayananPages';
import KontakPages from './Pages/KontakPages';
import HomePageAdmin from './admin/Pages/HomePageAdmin';
import LoginPageAdmin from './admin/component/login';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomesPage />}/>
      <Route path="/tentang-kami" element={<TentangPages />}/>
      <Route path="/layanan" element={<LayananPages />}/>
      <Route path="/kontak" element={<KontakPages />}/>
      <Route path="/adminkeys" element={<HomePageAdmin />}/>
      <Route path="/login-admin" element={<LoginPageAdmin />}/>
    </Routes>
  </BrowserRouter>
   
  );
}

export default App;
