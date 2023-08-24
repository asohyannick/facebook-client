import React from 'react';
import styles from './Movie.module.css';
import { selectAllLoading, fetchDrinks, selectAllDrinks } from '../../redux/features/movieSlice/movieSlice';
import {useDispatch, useSelector} from 'react-redux';
const Movies = () => {
    const isLoading  = useSelector(selectAllLoading);
    const jobs  = useSelector(selectAllDrinks);
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(fetchDrinks());
    }, [dispatch])
    if(isLoading) {
        return <section>
            <h1>Loading...</h1>
        </section>
    }
    return (
        <>
          <h1>hello </h1>
          {jobs.map((item) => {
            const {id, category, company, image, name } = item;
            return (
                <main key={id}>
                    <img src={image} alt='image'/>
                    <h4>{name}</h4>
                </main>
            )
          })}
        </>
    );
};
export default Movies;
