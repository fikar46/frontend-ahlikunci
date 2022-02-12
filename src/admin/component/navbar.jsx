import React, { useState, useEffect } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import Cookies from "universal-cookie";
const cookies = new Cookies();

const HeaderPageAdmin = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState({});
  useEffect(()=>{
      var data = localStorage.getItem('data')
      if(data!=undefined){
          var parse = JSON.parse(data)
          setData(parse[0])
      }
      
  },[])
  const toggle = () => setIsOpen(!isOpen);
  const onLogOutSelect=()=>{
    
  
    if(window.location.hostname == 'localhost'){
      cookies.remove('dataUser');
      cookies.remove('idUser');
      cookies.remove('popupafterlogin');
      cookies.remove('u-nkt');
    }else{
      cookies.remove('dataUser',{domain:".siapptn.com"})
      cookies.remove('idUser',{domain:".siapptn.com"})
      cookies.remove('popupafterlogin',{domain:".siapptn.com"})
      cookies.remove('u-nkt',{domain:".siapptn.com"})
      cookies.remove('dataUser');
      cookies.remove('idUser');
      cookies.remove('popupafterlogin');
      cookies.remove('u-nkt');
      
    }
    localStorage.removeItem('data');
    window.location.href="/login-admin"
  }
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
        <NavbarBrand href="/"><img src="https://kunci.siapptn.com/logo.png" className="img-fluid logo-image" alt="logo" loading="lazy"/></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse className="justify-content-end" isOpen={isOpen} navbar>
          <Nav className="mr-auto " navbar>
          <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <span className="text-white font-weight-bold">{data.username}</span>
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>
                  Profile
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={onLogOutSelect}>
                  Log out
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        
        </Collapse>
      </Navbar>
    </div>
    </div>
  );
}

export default HeaderPageAdmin;