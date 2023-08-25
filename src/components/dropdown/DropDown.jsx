import React from 'react'
import {Link} from 'react-router-dom';
import {MenuItems} from '../menuItems/MenuItems';
import './DropDown.css';
const DropDown = () => {
    const [click, setClick] = React.useState(false);
    const handleClick = () => {
        setClick(!click)
    }
    return (
        <>
            <ul onClick={handleClick}
             className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
            >
                {MenuItems.map((item, index) => {
                    const {cName, path, title} = item;
                    return (
                        <li key={index}>
                            <Link
                             className={cName}
                             to={path}
                             onClick={() => setClick(false)}
                            >
                                {title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default DropDown
