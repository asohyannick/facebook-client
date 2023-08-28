import React, {useState} from 'react'
import styles from './Tours.module.css';
import {useDispatch, useSelector} from 'react-redux';
import { 
    selectAllTours, 
    selectAllLoading, 
    fetchTours, 
    clearTours
 } from '../../redux/features/toursSlice/ToursSlice';
const Tours = () => {
    const tours = useSelector(selectAllTours);
    const [showText, setShowText] = useState(false);
    const isLoading = useSelector(selectAllLoading)
    const dispatch = useDispatch();
    React.useEffect(()=> {
        dispatch(fetchTours())
    },[dispatch]);
    const toggleTours = () => {
        setShowText(!showText)
    };
    // console.log(tours);
    if(isLoading) {
        return <section>
            <div>
                <h1 className={styles.tour_header}>Please wait a moment...</h1>
            </div>
        </section>
    }
    if(tours.length === 0) {
        return <section>
            <div>
                <h4 className={styles.tour_no_tours_left}>
                    No tours left.
                    <p>Please refresh the page.</p>
                </h4>
            </div>
             <button 
                className={styles.refresh_tours}
                onClick={() => dispatch(fetchTours())}>
                refresh tours
             </button>
        </section>
    }
    return (
        <>
            <h1 className={styles.tour_heading}>
                Welcome To my tour API project with  <br/>the
                MERN Stack flavor of technologies.
            </h1>
          {tours.map((person) => {
            const {id, image, info, name, price} = person;
            return (
                <div key={id} className={styles.tours_content}>
                    <img src={image} alt='image' 
                    className={styles.tours_logo}/>
                    <div className={styles.tour_name}>{name}</div>
                    <div className={styles.tour_price}>This our awesome
                        destination will cost you 
                        the sum of ${price} dollars to visit.
                    </div>
                    <div className={styles.tour_info}>
                       {showText ? info: `${info.substring(0, 200)}...`}
                       <button type='button' onClick={toggleTours} 
                        className={styles.tours_toggle_btn}>
                        {showText ? 'show less' : 'show more'}
                       </button>
                    </div>
                </div>
            )
            })}
            <div className={styles.tours_clear_btn}>
                <button 
                    type='button' 
                    onClick={() => dispatch(clearTours())}
                    className={styles.clear_tours}>
                    ClearAll
                </button>
            </div>   
        </>
    )
}

export default Tours
