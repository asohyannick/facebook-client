import React,{useState} from 'react';
import {
  Navbar,  
  Footer,
  About,
  Testimonials,
  Home
} from './components';
import styles from './App.module.css'
import  GridLoader from "react-spinners/GridLoader";
function App() {
  const [loading, setLoading] = useState(false);
  React.useEffect(() => {
  setLoading(true)
  const loadTimeout = setTimeout(() => {
    setLoading(false);
  }, 1000);
  return () => {
    clearTimeout(loadTimeout)
  }
}, []);
  return (
    <div className={styles.react_spinner}>
      {loading ? 
          <GridLoader
            color={'#008000'}
            loading={loading}
            size={100}
          />
        : 
        <div>
          <Navbar/>
          <Testimonials/>
          <About/>
          <Home/>
          <Footer/>
        </div>
      }
    </div>
  );
}
export default App;
