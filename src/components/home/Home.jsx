import React from 'react';
import './Home.css';
import Movies from '../movies/Movies';
import Footer from '../footer/Footer'
import menu from '../../data/data';
import Categories from './Categories';
import Menu from './Menu';
const allCategories = ['all', ...new Set(menu.map((menu
    ) => menu.category))];
const Home = () => {
 const [menuItems, setMenuItems] = React.useState(menu);
 const [categories, setCategories] = React.useState(allCategories);
 const filterItems = (category) => {
    if(category === 'all') {
        setMenuItems(menu);
        return;
    }
    const newItems = menu.filter((item
        ) => item.category ===category);
    setMenuItems(newItems);
 };
 return (
        <main>
            <section className='menu section'>
                <div className='title'>
                    <h2>Our menu</h2>
                    <div className='underline'></div>
                </div>
                <Menu/>
            </section>
        </main>
    );
};
export default Home;
