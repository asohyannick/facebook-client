import styles from './Movie.module.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import yan from '../../assets/yan.png';
import { settings } from '../carouselLogic/CarouselLogic';
const Movies = () => {
    return (
        <div className={styles.carousel}>
            <Slider {...settings}>
                <div className={styles.item}>
                    <img src={yan} alt='yan' style={{
                        width:'100px',
                        borderRadius:'50px'
                    }}/>
                </div>
                <div  className={styles.item}>
                <img src={yan} alt='yan' style={{
                        width:'100px',
                        borderRadius:'50px'
                    }}/>
                </div>
                <div  className={styles.item}>
                <img src={yan} alt='yan' style={{
                        width:'100px',
                        borderRadius:'50px'
                    }}/>
                </div>
                <div  className={styles.item}>
                <img src={yan} alt='yan' style={{
                        width:'100px',
                        borderRadius:'50px'
                    }}/>
                </div>
                <div  className={styles.item}>
                <img src={yan} alt='yan' style={{
                        width:'100px',
                        borderRadius:'50px'
                    }}/>
                </div>
                <div  className={styles.item}>
                <img src={yan} alt='yan' style={{
                        width:'100px',
                        borderRadius:'50px'
                    }}/>
                </div>
                <div  className={styles.item}>
                <img src={yan} alt='yan' style={{
                        width:'100px',
                        borderRadius:'50px'
                    }}/>
                </div>
                <div  className={styles.item}>
                <img src={yan} alt='yan' style={{
                        width:'100px',
                        borderRadius:'50px'
                    }}/>
                </div>
                <div  className={styles.item}>
                <img src={yan} alt='yan' style={{
                        width:'100px',
                        borderRadius:'50px'
                    }}/>
                </div>
            </Slider>
        </div>
    );
};
export default Movies;
