import styles from './Error.module.css';
import { NavLink } from 'react-router-dom';
const Error = () => {
    return (
        <div>
            <NavLink to='/'>
                <h1>Oops something went wrong. Please return to the home page</h1>
            </NavLink>
        </div>
    )
}

export default Error
