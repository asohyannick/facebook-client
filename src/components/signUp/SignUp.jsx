import React, {useState} from 'react';
import styles from './SignUp.module.css';
import fb from '../../assets/fb.jpeg';
import google from '../../assets/google.png';
import link from '../../assets/link.png';
import line from '../../assets/line.png';
import {Link} from 'react-router-dom';
import {
    FaRegEnvelopeOpen,
    FaLock,
    FaUser,
    FaUsers,
    FaUserLarge,
    FaFileCsv,
} from 'react-icons/fa6';
import Footer from '../footer/Footer';
const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [position, setPosition] = useState('');
    const [company, setCompany] = useState('');
    const [uploadImage, setUploadImage] = useState('');
    const handleFormSubmit = () => {};
    return (
        <>
            <form className={styles.form_container} 
                onSubmit={handleFormSubmit}>
                <h1 className={styles.header}>
                    Welcome to our awesome Cloud system.
                    <br/> Please sign up for an account.
                </h1>
                <div className={styles.account_owner}>
                            <h4 className={styles.platformTwoFun}>Already have an account?</h4>
                            <h4 className={styles.platformTwoFun}>Please login into your  account.</h4>
                            <div>
                                <button type='button' 
                                    className={styles.signIn_btn}>
                                    <Link to='/signIn'>SignIn</Link>
                                </button>
                            </div>
                        </div>
                <div className={styles.icons_container}>
                    <span className={styles.icons}>
                        <img src={fb} alt='company' className={styles.social}/>
                    </span>
                    <span className={styles.icons}>
                        <img src={google} alt='company' className={styles.social}/>
                    </span>
                    <span className={styles.icons}>
                        <img src={link} alt='company' className={styles.social}/>
                    </span>
                </div>
                <div className={styles.lines_container}>
                    <img src={line} alt='line' className={styles.lines}/>
                    <div className={styles.last_text}>Or</div>
                    <img src={line} alt='line' className={styles.lines}/>
                </div>
                <div className={styles.form_row}>
                    <div className={styles.form_show}>
                        <label htmlFor='first_name' className={styles.form_label}>
                            FirstName: <FaUser/>
                        </label>
                        <input 
                            type='text' 
                            name='first_name' 
                            maxLength={15} 
                            className={styles.form_input} 
                            required
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className={styles.form_show}>
                        <label htmlFor='middle_name' className={styles.form_label}>
                        MiddleName: <FaUser/> 
                        </label>
                        <input 
                            type='text' 
                            name='middle_name' 
                            maxLength={15} 
                            className={styles.form_input} 
                            required
                            value={middleName}
                            onChange={(e) => setMiddleName(e.target.value)}
                        />
                    </div>
                    <div className={styles.form_show}>
                        <label htmlFor='last_name' className={styles.form_label}>
                            LastName: <FaUser/>
                        </label>
                        <input 
                            type='text' 
                            name='Last_name' 
                            maxLength={15} 
                            className={styles.form_input} 
                            required
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div className={styles.form_show}>
                        <label htmlFor='email' className={styles.form_label}>
                            Email: <FaRegEnvelopeOpen/>
                        </label>
                        <input 
                            type='email' 
                            name='email' 
                            className={styles.form_input} 
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className={styles.form_show}>
                        <label htmlFor='password' className={styles.form_label}>
                        Password: <FaLock/> 
                        </label>
                        <input 
                            type='password' 
                            name='password' 
                            className={styles.form_input} 
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className={styles.form_show}>
                        <label htmlFor='position' className={styles.form_label}>
                            Position: <FaUserLarge/>
                        </label>
                        <input 
                            type='text' 
                            name='position' 
                            maxLength={20} 
                            className={styles.form_input} 
                            required
                            value={position}
                            onChange={(e) => setPosition(e.target.value)}
                        />
                    </div>
                    <div className={styles.form_show}>
                        <label htmlFor='company' className={styles.form_label}>
                        Company: <FaUsers/> 
                        </label>
                        <input 
                            type='text' 
                            name='company' 
                            maxLength={20} 
                            className={styles.form_input} 
                            required
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                        />
                    </div>
                    <div className={styles.form_show}>
                        <label htmlFor='file' className={styles.form_label}>
                            Image: <FaFileCsv/>
                        </label>
                        <input 
                            type='file' 
                            name='file' 
                            accept='images'
                            maxLength={15} 
                            className={styles.form_input} 
                            required
                            value={uploadImage}
                            onChange={(e) => setUploadImage(e.target.files[0])}
                        />
                    </div>
                </div>
                <button type='submit' className={styles.btn_btn}>
                 Submit
                </button>
            </form>
            <Footer/>
        </>
    );
}

export default SignUp
