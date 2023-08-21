import React, {useState} from 'react';
import './Navbar.css';
import {FaMoon} from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
//import { FaX,FaBars} from 'react-icons/fa6';
import yan from '../../assets/yan.png';
import Sidebar from '../sidebar/Sidebar';
const Navbar = () => {
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
        <nav className='navbar_container'>
            <ul className='nav_center'>
                <li>
                    <img src={yan} alt='yan' className='logo'/>
                </li>
                <li>
                    <NavLink to='/home'>
                        home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/project'>
                        projects
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/about'>
                        about Me
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/signIn'>
                        SignIn
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/signUp'>
                        signUp
                    </NavLink>
                </li>
                <li>
                    <button
                        className={`${theme}`}
                        onClick={toggleTheme}
                    >
                        <FaMoon className='fa-icon'/>
                    </button>
                </li>
            </ul>
        </nav>
    );
}
export default Navbar;
