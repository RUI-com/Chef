import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import "./Header.scss";

import logoimage from '../../../public/image/logo-w.svg'
import { IoMdMenu} from "react-icons/io";
import {useSidebarContext} from '../../context/sidebarContext'
import {HiOutlineMenuAlt1} from 'react-icons/hi'


const Navbar = () => {
  const {openSidebar} = useSidebarContext();
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if(offset > 60){
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  })

  return (
    <nav className={`navbar bg-orange flex align-center ${scrolled ? 'scrolled': ""}`} >
      <div className='container w-100'>
      <div className='navbar-content text-white'>
      <div className='brand-and-toggle flex align-center justify-between'>
        <Link to='/' className='navbar-brand fw-3 fs-22 flex align-center'>
          <img src={logoimage} alt='logochef' className='logoimage'/>
        </Link>
        <div className='navbar-btns flex align-center'>
          <button type='button' className='navbar-show-btn text-white' onClick={()=> openSidebar()}>
            <HiOutlineMenuAlt1 size={27}/>
          </button>
        </div>
        
        </div>
        
        </div>
      </div>
     
    </nav>
  )
}

export default Navbar