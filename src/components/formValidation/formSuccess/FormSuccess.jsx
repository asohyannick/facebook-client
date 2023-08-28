import styles from './FormSuccess.module.css';
import success from '../../../assets/success.png';
const FormSuccess = () => {
    return (
        <div className={styles.form_content_center}>
            <h1>We have successfully received your request.</h1>
            <img 
                src={success} 
                alt='success-image' 
                className={styles.success_logo}
            />
        </div>
    );
}

export default FormSuccess;
