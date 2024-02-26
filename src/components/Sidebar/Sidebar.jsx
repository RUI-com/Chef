import React from 'react';
import {useSidebarContext} from '../../context/sidebarContext'
import {ImCancelCircle} from 'react-icons/im'
import {CgProfile} from 'react-icons/cg'
import {IoFastFood} from 'react-icons/io5'
import {GrFormClose} from 'react-icons/gr'
import {FaRegCheckCircle} from 'react-icons/fa'
import {TbDiscount} from 'react-icons/tb'
import { MdOutlinePrivacyTip } from 'react-icons/md';
import "./Sidebar.scss";
import {Link} from 'react-router-dom'
// import {useMealContext} from '../../context/mealContext'

const Sidebar = () => {
   const {isSidebarOpen,closeSidebar} = useSidebarContext();
//    const {categories} = useMealContext();

    return (
        <nav className={`sidebar ${isSidebarOpen ? 'sidebar-visible' : ""}`} >

                   Main Menu

            <button type='button' className='navbar-hide-btn' onClick={() => closeSidebar()}>
                <GrFormClose size={24}/>
            </button>
           <div className='side-content'>
            <ul className='side-nav'>
                <li className='side-item'>
                
                    <Link to="" className='side-link ls-1 fs-13' style={{ display:"flex",alignItems:'center'}}
                     onClick={() => closeSidebar()}>
                   
                     <CgProfile size={18} style={{marginRight:'10px'}}/>
                     Profile
                   
                       
                        </Link> 
                </li>
                <li className='side-item'>
                <Link to="" className='side-link ls-1 fs-13' style={{ display:"flex",alignItems:'center'}}
                     onClick={() => closeSidebar()}>
                   
                     <IoFastFood size={18} style={{marginRight:'10px'}}/>
                        Order
                        </Link> 
                </li>
                <li className='side-item'>
                      <Link to="" className='side-link ls-1 fs-13' style={{ display:"flex",alignItems:'center'}}
                     onClick={() => closeSidebar()}>
                   
                     <TbDiscount size={18} style={{marginRight:'10px'}}/>
                        Doscount Promo
                        </Link> 
                </li>
                <li className='side-item'>
                    <Link to="" className='side-link ls-1 fs-13' style={{ display:"flex",alignItems:'center'}}
                     onClick={() => closeSidebar()}>
                   
                     <FaRegCheckCircle size={18} style={{marginRight:'10px'}}/>
                        Completed
                        </Link> 
                </li>
                <li className='side-item'>
                    <Link to="" className='side-link ls-1 fs-13' style={{ display:"flex",alignItems:'center'}}
                     onClick={() => closeSidebar()}>
                   
                     <MdOutlinePrivacyTip size={18} style={{marginRight:'10px'}}/>
                       Privacy
                        </Link> 
                </li>
            </ul>

           </div>
           
        </nav>
    )
}

export default Sidebar