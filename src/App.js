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
import UserManagementPage from './admin/Pages/UserManagement';
import TesimoniPageAdmin from './admin/Pages/TestimoniPageAdmin';
import CreateTestimoniPagesAdmin from './admin/Pages/createTestimoniPageAdmin';
import UpdateTestimoniPagesAdmin from './admin/Pages/updateTestimoniPageAdmin';
import LayananPageAdmin from './admin/Pages/LayananPages';
import LayananCreatePageAdmin from './admin/Pages/LayananPageCreateAdmin';
import LayananUpdatePageAdmin from './admin/Pages/LayananPageUpdateAdmin';
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
      <Route path="/user-management" element={<UserManagementPage />}/>
      <Route path="/testimoni-management" element={<TesimoniPageAdmin />}/>
      <Route path="/buat-testimoni" element={<CreateTestimoniPagesAdmin />}/>
      <Route path="/update-testimoni/:id" element={<UpdateTestimoniPagesAdmin/>}/>
      <Route path="/layanan-management" element={<LayananPageAdmin/>}/>
      <Route path="/tambah-layanan" element={<LayananCreatePageAdmin/>}/>
      <Route path="/update-layanan/:id" element={<LayananUpdatePageAdmin/>}/>
    </Routes>
  </BrowserRouter>
   
  );
}

export default App;
