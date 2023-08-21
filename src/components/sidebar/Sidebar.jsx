import styles from './Sidebar.module.css';
import tech from "../../data/data";
import {NavLink} from 'react-router-dom';
const Sidebar = () => {

    return (
        <aside 
            className={styles.sidebar}
            > 
            <h1 className={styles.headings}>My favorites tech stacks</h1>
             <h1  className={styles.headings}>and online platforms.</h1>
            {tech.map((techies) => {
                const {id, text, icon} = techies;
                return (
                    <ul 
                        key={id} 
                        className={styles.sidebar_menu}>
                        <li>{text}</li>
                        <li>
                            <NavLink>{icon}</NavLink>
                        </li>
                    </ul>
                );
            })}
        </aside>
    );
}

export default Sidebar
