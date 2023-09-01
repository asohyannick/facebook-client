import {useSelector, useDispatch} from 'react-redux';
import { fetchGoods, selectHomeIsLoading, selectPeopleArr } from '../../redux/features/homeSlice/homeSlice';
import React from 'react';
import styles from './Home.module.css';
import Movies from '../movies/Movies';
import {Link} from 'react-router-dom';
const Home = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectHomeIsLoading);
    const people = useSelector(selectPeopleArr);
    React.useEffect(() => {
        dispatch(fetchGoods());
    }, [dispatch]);
    if(isLoading) {
        return <h1 style={{ textAlign:'center'}}>Loading...</h1>
    }
  return (
   <>
        <div>
          <h1 
           style={{
            textAlign:'center',
            fontSize:'20px',
            margin:'20px 0px 20px',
            fontWeight:'bolder',
            textTransform:'capitalize'
           }}
          >My Potential Github Followers who constantly work with me  to build cool web and mobile apps.</h1>
        </div>
     <div className={styles.followers}>
        {people.map((person) => {
            const {id, 
                html_url, 
                avatar_url, 
                login,
            } = person;
            return (
                <div key={id} className={styles.card}>
                    <img src={avatar_url} alt={login}/>
                    <h4>${login}</h4>
                    <div>
                        <h4>${login}</h4>
                        <li>
                            <Link to={html_url}>View Profile</Link>    
                        </li>
                    </div>
                </div>
            )
        })}
    </div>
    <div>
        <Movies/>
    </div>
   </>
  )
}

export default Home


