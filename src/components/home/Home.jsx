import styles from './Home.module.css';
const url = 'https://course-api.com/javascript-store-single-product?id=rec43w3ipXvP28vog';
const tours = 'https://course-api.com/react-tours-project';
const reducers = 'https://course-api.com/react-useReducer-cart-project';
const store='https://course-api.com/javascript-store-single-product?id=rec43w3ipXvP28vog';
const products = 'https://course-api.com/react-store-single-product?id=rec1Ntk7siEEW9ha1';
import Products from '../products/Products';
const Home = () => {
    return (
        <div>
            <Products/>
        </div>
    );
};
export default Home;
