import styles from './Footer.module.css';
import {NavLink} from 'react-router-dom';
const Footer = () => {
    return (
        <footer className={styles.footer_container}>
            <ul className={styles.footer_pages}>
                <h1 className={styles.footer_headers}>Access All Pages</h1>
                <li>
                    <NavLink to='/home'>
                        Home 
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/about'>
                        About Me
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/project'>
                        Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/signIn'>
                        SignIn 
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/signUp'>
                        SignUp 
                    </NavLink>
                </li>
            </ul>
            <ul className={styles.footer_pages}>
                <h1 className={styles.footer_headers}>Social Media</h1>
                <li>
                    <NavLink to='https://web.facebook.com/asohyannick.anoh'>
                        Facebook
                    </NavLink>
                </li>
                <li>
                    <NavLink to='https://www.linkedin.com/in/asoh-yannick-614b39245/'>
                        LinkedIn
                    </NavLink>
                </li>
                <li>
                    <NavLink to='https://twitter.com/AsohYannick'>
                        Twitter
                    </NavLink>
                </li>
                <li>
                    <NavLink to='https://chat.whatsapp.com/JSb4tyFiUknK82YI5V3TZN'>
                        Whatsapp
                    </NavLink>
                </li>
                <li>
                    <NavLink to='https://github.com/asohyannick'>
                        Github Repo
                    </NavLink>
                </li>
            </ul>
            <ul className={styles.footer_pages}>
                <h1 className={styles.footer_headers}>IT Certifications</h1>
                <li>
                    <NavLink to='https://verify.w3schools.com/1N5YPNCKO3'>
                        HTML5 Certified developer 
                    </NavLink>
                </li>
                <li>
                    <NavLink to='https://verify.w3schools.com/1NEXWPTW8A'>
                        CSS3 Certified developer 
                    </NavLink>
                </li>
                <li>
                    <NavLink to='https://verify.w3schools.com/1NB2X4CEXO'>
                      JavaScript Certified developer 
                    </NavLink>
                </li>
                <li>
                    <NavLink to='https://verify.w3schools.com/5X4S32A21'>
                        React JS Certified developer 
                    </NavLink>
                </li>
                <li>
                    <NavLink to='https://verify.w3schools.com/1NF4ISPGC6'>
                     TypeScript Certified developer 
                    </NavLink>
                </li>
                <li>
                    <NavLink to='https://verify.w3schools.com/1NEXWQ36EZ'>
                     Frontend Certified Developer
                    </NavLink>
                </li>
            </ul>
            <div className={styles.copyRight}>
                <div>
                    The website is develop and maintain by 
                    <h4>Asoh Yannick Anoh</h4>
                    <p>who is the owner of this website</p>
                    <div>
                        <p>All Rights Reserved</p>
                        <p>@CopyRight 2023</p>
                    </div>
                </div>
            </div>  
        </footer>
    )
}

export default Footer
