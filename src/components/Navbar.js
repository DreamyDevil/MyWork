import React,{useState} from 'react';
import * as AiIcons from "react-icons/ai";
import * as VscIcons from "react-icons/vsc";
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import Logo from './pages/RadioPage/image/logo.png';


function Navbar() {
    const [sidebar, setSidebar]= useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
            <IconContext.Provider value={{color:'#fff'}}>
                <div className='navbar'>
                    <IconContext.Provider value={{className:'open-menu'}}>
                        <Link to="#" className='menu-bars'>
                            <VscIcons.VscMenu onClick={showSidebar}/>
                        </Link>
                    </IconContext.Provider>
                        <Link to='#' className='logo'>
                            <img src={Logo} width="110" alt="" />
                            <h2>New</h2><h3>Wave</h3>
                        </Link>
                </div>
          
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                            <Link to="#" className='menu-bars'>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
}

export default Navbar;
