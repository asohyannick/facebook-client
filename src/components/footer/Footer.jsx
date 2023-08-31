import styles from './Footer.module.css';
import {NavLink} from 'react-router-dom';
const Footer = () => {
    return (
        <footer className={styles.footer_container}>
            <ul className={styles.footer_pages}>
                <h1 className={styles.footer_headers}>About Me</h1>
                <li>
                    <NavLink to='/home'>
                        Home 
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/about'>
                        About
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
                <li>
                    <NavLink to='/story'>
                        Story
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/clients'>
                        Clients 
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/testimonials'>
                        Testimonials
                    </NavLink>
                </li>
            </ul>
            <ul className={styles.footer_pages}>
                <h1 className={styles.footer_headers}>Services</h1>
                <li>
                    <NavLink to='/development'>
                       Web and Mobile Development
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/design'>
                       UI/UX Design
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/train'>
                       Web dev Training
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/market'>
                        Marketing 
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/consult'>
                        Consulting
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
                        Whatsapp Contact +237654426490
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
                <div className={styles.copyRight}>
                    <div className={styles.copyText}>
                        <p>
                            The website is develop and  is currently maintain by
                            Asoh Yannick Anoh
                            who is the developer and owner of this website
                            All Rights Reserved
                            @CopyRight 2023
                        </p>
                    </div>
                </div>  
            </ul>
        </footer>
    );
}

export default Footer;
