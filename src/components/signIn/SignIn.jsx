import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {
    FaRegEnvelopeOpen,
    FaLock,
    FaUser,
    FaUsers,
    FaUserLarge,
    FaFileCsv,
} from 'react-icons/fa6'
import validate from '../formValidation/validateInfo/ValidateInfo';
import UseForm from '../formValidation/useForm/UseForm';
import fb from '../../assets/fb.jpeg';
import google from '../../assets/google.png';
import link from '../../assets/link.png';
import line from '../../assets/line.png';
import styles from './SignIn.module.css';
import Footer from '../footer/Footer'
import MoonLoader from 'react-spinners/MoonLoader';
import Form from '../formValidation/form/Form';
const SignIn = ({submitForm}) => {
    const [star, setStar] = useState(false);
    React.useEffect(() => {
        setStar(true);
        const starTimeout = setTimeout(() => {
            setStar(false);
        }, 1000);
        return () => {
            clearTimeout(starTimeout);
        }
    }, []);
 const {handleChange, handleSubmit, values, errors} = UseForm(
    submitForm,
    validate
 );
    return (
       <>
            <div className={styles.star_form}>
                {
                    star ? <MoonLoader color={'#008000'} size={100}/> :
                        <div>
                          <article className={styles.signIn_container}>
                                <div className={styles.login_container}>
                                    <h1 className={styles.platformOne}>Welcome to our cloud management infrastructure dearest customer</h1>
                                    <br/>
                                    <p className={styles.platformTwo}>
                                        Please to continue using 
                                        our services and stay
                                        connected with us,
                                        kindly login.
                                    </p>
                                    <div className={styles.account}>
                                        <h4 className={styles.platformTwo}>Don't have an account?</h4>
                                        <h4 className={styles.platformTwo}>No worries, please sign up for an account.</h4>
                                        <div>
                                            <button type='button' 
                                                className={styles.signIn_btn}>
                                                <Link to='/signUp'>SignUp</Link>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <form className={styles.form_container} onSubmit={handleSubmit} noValidate>
                                    <h1 className={styles.header}>
                                        Welcome back to our awesome cloud management platform.
                                        <br/> Please login into your account.
                                    </h1>
                                    <div className={styles.last_container}>
                                            <h5 className={styles.final_text}>
                                                Don't have an account? 
                                            </h5>
                                            <span className={styles.final_text}>Please sign up for an account</span>
                                            <div>
                                                <button type='button' className={styles.final_btn}>
                                                    <Link to='/signUp'>SignUp</Link>
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
                                                value={values.firstName}
                                                onChange={handleChange}
                                            />
                                            {errors.firstName && <p>{errors.firstName}</p>}
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
                                                value={values.middleName}
                                                onChange={handleChange}
                                            />
                                            {errors.middleName && <p>{errors.middleName}</p>}
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
                                                value={values.lastName}
                                                onChange={handleChange}
                                            />
                                            {errors.lastName && <p>{errors.lastName}</p>}
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
                                                value={values.email}
                                                onChange={handleChange}
                                            />
                                            {errors.email && <p>{errors.email}</p>}
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
                                                value={values.password}
                                                onChange={handleChange}
                                            />
                                            {errors.password && <p>{errors.password}</p>}
                                        </div>
                                        <div className={styles.form_show}>
                                            <label htmlFor='password' className={styles.form_label}>
                                            Confirm Password: <FaLock/> 
                                            </label>
                                            <input 
                                                type='password' 
                                                name='password' 
                                                className={styles.form_input} 
                                                required
                                                value={values.confirmPassword}
                                                onChange={handleChange}
                                            />
                                            {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
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
                                                value={values.position}
                                                onChange={handleChange}
                                            />
                                            {errors.position && <p>{errors.position}</p>}
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
                                                value={values.company}
                                                onChange={handleChange}
                                            />
                                            {errors.company && <p>{errors.company}</p>}
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
                                                value={values.image}
                                                onChange={handleChange}
                                            />
                                            {errors.image && <p>{errors.image}</p>}
                                        </div>
                                    </div>
                                    <button type='submit' className={styles.btn_btn}>
                                        Submit
                                    </button>
                                </form>
                            </article>     
                            <Footer/>  
                        </div>
                }
            
            </div>
          
       </>
    )
}

export default SignIn
