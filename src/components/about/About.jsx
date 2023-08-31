import styles from './About.module.css';
import engineer from '../../assets/engineer.png';
import html5 from '../../assets/html5.png';
import css3 from '../../assets/css3.png';
import js from '../../assets/js.jpeg';
import react from '../../assets/react.png';
import ts from '../../assets/ts.png';
import native from '../../assets/native.png';
import redux from '../../assets/redux.jpeg';
import styled from '../../assets/styled.jpeg';
import node from '../../assets/node.png';
import express from '../../assets/express.jpeg';
import db from '../../assets/db.png';
import java from '../../assets/java.jpeg';
import spring from '../../assets/spring.png';
import Footer from '../footer/Footer';
const About = () => { 
    return (
        <>
                <div className={styles.about_container}>
                    <img src={engineer} alt={engineer} className={styles.engineer_logo}/>
                    <div>
                        <h1 className={styles.header}>Hi, My Name Is <strong>Asoh Yannick Anoh.</strong> <br/> I Am A Full-Stack web and mobile
                            developer By Profession With More Than 4+ Years Of Professional Experience <br/>Having Worked
                            With Companies Such As Camsol Technologies, Tekstedia Ltd <br/> and B-Tech Ltd, Among Others.
                            I Love Software Development And <br/> I Enjoy Building Beautiful And Powerful
                            Web And Mobile Applications For International Companies, clients, And Private individuals
                            <br/>
                            In summary, I love what I do and I enjoy coding everyday by building and learning new things in tech.
                        </h1>
                    </div>
                    <h4 className={styles.heading}>My tech stacks</h4>
                    <div className={styles.full_stack}>
                            <div className={styles.web_one}>
                                <img 
                                    src={html5} 
                                    alt={html5} 
                                    className={styles.items}
                                />
                                <p className={styles.IT_color}>HTML5</p>
                            </div>
                            <div className={styles.web_one}>
                                <img 
                                    src={css3} 
                                    alt={css3} 
                                    className={styles.items}
                                />
                                <p className={styles.IT_color}>CSS3</p>
                            </div>  <div className={styles.web_one}>
                                <img 
                                    src={js} 
                                    alt={js} 
                                    className={styles.items}
                                />
                                <p className={styles.IT_color}>JavaScript</p>
                            </div>  <div className={styles.web_one}>
                                <img 
                                    src={react} 
                                    alt={react} 
                                    className={styles.items}
                                />
                                <p className={styles.IT_color}>React JS</p>
                            </div>  <div className={styles.web_one}>
                                <img 
                                    src={ts} 
                                    alt={ts} 
                                    className={styles.items}
                                />
                                <p className={styles.IT_color}>TypeScript</p>
                            </div>  <div className={styles.web_one}>
                                <img 
                                    src={native} 
                                    alt={native} 
                                    className={styles.items}
                                />
                                <p className={styles.IT_color}>React Native</p>
                            </div>  
                            <div className={styles.web_one}>
                                <img 
                                    src={redux} 
                                    alt={redux} 
                                    className={styles.items}
                                />
                                <p className={styles.IT_color}>Redux</p>
                            </div>  <div className={styles.web_one}>
                                <img 
                                    src={styled} 
                                    alt={styled} 
                                    className={styles.items}
                                />
                                <p className={styles.IT_color}>Styled Components</p>
                            </div>  <div className={styles.web_one}>
                                <img 
                                    src={node} 
                                    alt={node} 
                                    className={styles.items}
                                />
                                <p className={styles.IT_color}>Node JS</p>
                            </div>
                            <div className={styles.web_one}>
                                <img 
                                    src={express} 
                                    alt={express} 
                                    className={styles.items}
                                />
                                <p className={styles.IT_color}>Express JS</p>
                            </div>  
                            <div className={styles.web_one}>
                                <img 
                                    src={db} 
                                    alt={db} 
                                    className={styles.items}
                                />
                                <p className={styles.IT_color}>MongoDB</p>
                            </div>  
                            <div className={styles.web_one}>
                                <img 
                                    src={java} 
                                    alt={java} 
                                    className={styles.items}
                                />
                                <p className={styles.IT_color}>Java</p>
                            </div>  
                            <div className={styles.web_one}>
                                <img 
                                    src={spring} 
                                    alt={spring} 
                                    className={styles.items}
                                />
                                <p className={styles.IT_color}>Spring Boot</p>
                            </div>  
                    </div>
                </div>
        </>
    );
}

export default About
