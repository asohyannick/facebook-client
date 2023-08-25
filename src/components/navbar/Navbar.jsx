import React, {useState} from 'react';
import './Navbar.css';
import {FaMoon} from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import yan from '../../assets/yan.png';
import DropDown from '../dropdown/DropDown';
import { IconContext } from 'react-icons';
import {SidebarData} from '../sidebarData/SideBarData';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {Link} from 'react-router-dom';
const Navbar = () => {
    const [dropdown, setDropdown] = useState(false);
    const [sidebar,setSidebar] = useState(false);
    const showSidebar = () => {
      setSidebar(!sidebar)
    }
    const onMouseEnter = () => {
        if(window.innerWidth < 960) {
            setDropdown(false)
        } else {
            setDropdown(true)
        }
    };
    const onMouseLeave = () => {
        if(window.innerWidth < 960) {
            setDropdown(false)
        } else {
            setDropdown(false);
        }
    };
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'light');
    const toggleTheme = () => {
        if(theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    };
    React.useEffect(() => {
        localStorage.setItem('theme', theme);
        document.body.className = theme;
    }, [theme]);

    return (
     <>
        <IconContext.Provider value={{color:'#fff'}}>
         <nav className='nav-structure'>
            <div className='navbar-menu' onClick={showSidebar}>
                <Link to='#'>
                    <FaIcons.FaBars className='menu-bar'/>
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                    <Link to='#' className='menu-close'>
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
            <nav 
                className='navbar_container' 
            >
                <ul className='nav_center'
                
                >
                    <li
                    className='nav-item'
                    >
                        <img src={yan} alt='yan' className='logo'/>
                    </li>
                    <li 
                        className='nav-item'
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        <NavLink 
                            to='/home'
                            className='nav-links'
                            >
                            home
                            {dropdown && <DropDown/>}
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink 
                            to='/project'
                            className='nav-links'
                            >
                            projects
                        </NavLink>
                    </li>
                    <li  className='nav-item'>
                        <NavLink 
                            to='/about' 
                            className='nav-links'
                            >
                            about Me
                        </NavLink>
                    </li>
                    <li  className='nav-item'>
                        <NavLink 
                            to='/signIn'
                            className='nav-links'
                            >
                            SignIn
                        </NavLink>
                    </li>
                    <li  className='nav-item'>
                        <NavLink 
                            to='/signUp'
                            className='nav-links'
                            >
                            signUp
                        </NavLink>
                    </li>
                    <li  className='nav-item'>
                        <button
                        style={{
                            textAlign:'center'
                        }}
                            className={`${theme}`}
                            onClick={toggleTheme}
                        >
                            <FaMoon className='btn_logo'/>
                        </button>
                    </li>
                </ul>         
            </nav>
         </nav>
        </IconContext.Provider>
     </>
    );
}
export default Navbar;
