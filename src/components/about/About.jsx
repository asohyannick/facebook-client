import Movies from '../movies/Movies';
import styles from './About.module.css';
import Sidebar from '../sidebar/Sidebar'
import {Carousel} from 'react-responsive-carousel';
import developer from '../../assets/developer.png';
import engineer from '../../assets/engineer.png';
import yan from '../../assets/yan.png';
import Slider from "react-slick";
const About = () => { 
    
    const settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2
    };

    return (
        <>
            <div>
                <h2> Lazy Load</h2>
                <Slider {...settings}>
                <div>
                    <img src={yan} style={{
                        width:'50px'
                    }}/>
                </div>
                <div>
                    <img src={yan} style={{
                        width:'50px'
                    }} />
                </div>
                <div>
                    <img src={yan} style={{
                        width:'50px'
                    }}/>
                </div>
                <div>
                    <img src={yan} style={{
                        width:'50px'
                    }}/>
                </div>
                </Slider>
            </div>
        </>
    );
}

export default About
