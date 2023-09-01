import React, {useState} from 'react';
import styles from './Movie.module.css';
import {useSelector, useDispatch} from 'react-redux';
import { fetchFood, removeOne, selectFoodLoading, selectFoodShop } from '../../redux/features/foodSlice/foodSlice';
const Movies = () => {
    const [readMore, setReadMore] = useState(false);
    const dispatch = useDispatch();
    const isLoading = useSelector(selectFoodLoading);
    const food = useSelector(selectFoodShop);
    React.useEffect(() => {
        dispatch(fetchFood());
    }, [dispatch]);
    if(isLoading) {
        return <section>
                 <h1 style={{
            textAlign:'center',
            fontSize:'16px'
            }}>Please wait a moment...</h1>
        </section>
    }
    return (
      <div className={styles.card_container}>
        <h1 style={{
            fontSize:'20px',
            textAlign:'center'
        }}>We make online shopping super easy for everyone</h1>
        {food.map((item) => {
            const {
                id, 
                category,
                company, 
                description, 
                image, 
                name, 
                price
            } = item;
            return (
                <div key={id} className={styles.single_card}>
                    <img src={image} alt={name} 
                        className={styles.card_img}/>
                           <div className={styles.card_info}>
                                <h4>{name}</h4>
                                <h4 className={styles.card_price}>${price}</h4>
                                <h4>{category}</h4>
                                <h4>{company}</h4>
                           </div>
                        <div  className={styles.card_info}>
                            {readMore ? description : `${description.substring(0, 50)}...`}
                            <button onClick={() => setReadMore(!readMore)} className={styles.btn_container}>
                                {readMore ? 'show less' : '  read more'}
                            </button>
                        </div>
                        <button type='button'
                            className={styles.delete_btn} onClick={() => dispatch(removeOne(id))}>
                            not interested
                        </button>
                </div>
            )
        })}
      </div>
    );
};
export default Movies;
