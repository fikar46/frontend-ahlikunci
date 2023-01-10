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
  var kontak = props.kontak;
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="navbar-fixed-top">
        <div className="bg-utama p-2">
            <div className="container d-flex justify-content-between">  
            <span>Ahlinya tukang kunci Mobil</span>
            <div className="">
            <a href={kontak.facebook} target="_blank"  style={{textDecoration:'none',color:"black"}}><span className="pr-5"><i className='fab fa-facebook'></i></span></a>
                    <a href={kontak.instagram} target="_blank"  style={{textDecoration:'none',color:"black"}}><span className="pr-5 "><i className='fab fa-instagram'></i></span></a>
                    <a href={kontak.youtube} target="_blank"  style={{textDecoration:'none',color:"black"}}><span className="pr-5 "><i className='fab fa-youtube'></i></span></a>
                    <a href={kontak.twitter} target="_blank"  style={{textDecoration:'none',color:"black"}}><span className="pr-5"><i className='fab fa-twitter'></i></span></a>
            </div>
            </div>
        </div>
        <div className="bg-black">
      <Navbar color="black" dark expand="md" className="navbar-fixed-top navbar-inverse container" >
        <NavbarBrand href="/"><img src="https://zkeys.id/logo.webp" className="img-fluid logo-image" alt="logo" loading="lazy"/></NavbarBrand>
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