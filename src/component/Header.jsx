import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const HeaderPage = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="navbar-fixed-top">
        <div className="bg-utama p-2">
            <div className="container d-flex justify-content-between">  
            <span>Ahlinya tukang kunci Mobil</span>
            <div className="">
                <span className="pr-5"><i className='fab fa-facebook'></i></span>
                <span className="pr-5"> <i className='fab fa-instagram '></i></span>
                <span className="pr-5"> <i className='fab fa-youtube '></i></span>
                <span className="pr-5"> <i className='fab fa-twitter '></i></span>
            </div>
            </div>
        </div>
        <div className="bg-black">
      <Navbar color="black" dark expand="md" className="navbar-fixed-top navbar-inverse container" >
        <NavbarBrand href="/"><img src="./logo.png" className="img-fluid logo-image" alt="logo" loading="lazy"/></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse className="justify-content-end" isOpen={isOpen} navbar>
          <Nav className="mr-auto " navbar>
            <NavItem>
              <NavLink className="text-white" href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-white" href="/tentang-kami">Tentang Kami</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-white" href="/layanan">Layanan</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-white" href="/kontak">Kontak</NavLink>
            </NavItem>
          </Nav>
        
        </Collapse>
      </Navbar>
    </div>
    </div>
  );
}

export default HeaderPage;