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
import CarousellPageAdmin from './admin/Pages/carousellPageAdmin';
import ContactPageAdmin from './admin/Pages/ContactPageAdmin';
import MetaManagementAdmin from './admin/Pages/MetaManagement';
import TestimoniPages from './Pages/TestimoniPages';
import AllTestimoniPages from './Pages/AllTestimoni';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { koneksi } from './environtment';
import ProfilePages from './Pages/ProfileAdmin';
import ForgetPages from './component/ForgetPage';
import ChangePasswordPages from './component/ChangePasswordPage';
import NotFoundPages from './Pages/404Pages';
function App() {
  const [kontak,setKontak] = useState({})
  useEffect(()=>{
    getDataKontak()
  },[])
  const getDataKontak=()=>{
    axios.post(`${koneksi}/kunci/getcontact`).then((res)=>{

      setKontak(res.data[0])
    })
  }
 
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomesPage kontak={kontak}/>}/>
      <Route path="/tangerang" element={<HomesPage kontak={kontak} kota={'Tangerang'}/>}/>
      <Route path="/bogor" element={<HomesPage kontak={kontak} kota={'Bogor'}/>}/>
      <Route path="/bekasi" element={<HomesPage kontak={kontak} kota={'Bekasi'}/>}/>
      <Route path="/depok" element={<HomesPage kontak={kontak} kota={'Depok'}/>}/>
      <Route path="/jakarta" element={<HomesPage kontak={kontak} kota={'Jakarta'}/>}/>
      <Route path="/pandeglang" element={<HomesPage kontak={kontak} kota={'Pandeglang'}/>}/>
      <Route path="/serang" element={<HomesPage kontak={kontak} kota={'Serang'}/>}/>
      <Route path="/cikarang" element={<HomesPage kontak={kontak} kota={'Cikarang'}/>}/>
      <Route path="/rangkas" element={<HomesPage kontak={kontak} kota={'Rangkas'}/>}/>
      <Route path="/cinere" element={<HomesPage kontak={kontak} kota={'Cinere'}/>}/>
      <Route path="/tentang-kami" element={<TentangPages kontak={kontak}/>}/>
      <Route path="/layanan" element={<LayananPages kontak={kontak}/>}/>
      <Route path="/kontak" element={<KontakPages kontak={kontak}/>}/>
      <Route path="/adminkeys" element={<HomePageAdmin kontak={kontak}/>}/>
      <Route path="/profile-admin" element={<ProfilePages kontak={kontak}/>}/>
      <Route path="/login-admin" element={<LoginPageAdmin kontak={kontak}/>}/>
      <Route path="/user-management" element={<UserManagementPage kontak={kontak}/>}/>
      <Route path="/testimoni-management" element={<TesimoniPageAdmin kontak={kontak}/>}/>
      <Route path="/buat-testimoni" element={<CreateTestimoniPagesAdmin kontak={kontak}/>}/>
      <Route path="/update-testimoni/:id" element={<UpdateTestimoniPagesAdmin kontak={kontak}/>}/>
      <Route path="/layanan-management" element={<LayananPageAdmin kontak={kontak}/>}/>
      <Route path="/tambah-layanan" element={<LayananCreatePageAdmin kontak={kontak}/>}/>
      <Route path="/update-layanan/:id" element={<LayananUpdatePageAdmin kontak={kontak}/>}/>

      <Route path="/carousell-management" element={<CarousellPageAdmin kontak={kontak}/>}/>
      <Route path="/kontak-management" element={<ContactPageAdmin kontak={kontak}/>}/>
      <Route path="/meta-management" element={<MetaManagementAdmin kontak={kontak}/>}/>
      <Route path="/testimoni/:id" element={<TestimoniPages kontak={kontak}/>}/>
      <Route path="/all-testimoni" element={<AllTestimoniPages kontak={kontak}/>}/>
      <Route path="/forget-password-admin" element={<ForgetPages kontak={kontak}/>}/>
      <Route path="/change-password-forget" element={<ChangePasswordPages kontak={kontak}/>}/>
      <Route path="*" element={<NotFoundPages kontak={kontak}/>}/>
    </Routes>
  </BrowserRouter>
   
  );
}

export default App;
