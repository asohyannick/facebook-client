import React from 'react'
import styles from './Clients.module.css';
import Article from './Article';
const getStorageTheme = () => {
    let theme = 'light-theme';
    if (localStorage.getItem('theme')) {
      theme = localStorage.getItem('theme');
    }
    return theme;
};
const Clients = () => {
    const [theme, setTheme] = React.useState(getStorageTheme());

    const toggleTheme = () => {
      if (theme === 'light-theme') {
        setTheme('dark-theme');
      } else {
        setTheme('light-theme');
      }
    };
  
    React.useEffect(() => {
      document.documentElement.className = theme;
      localStorage.setItem('theme', theme);
    }, [theme]);
    return (
      <main>
        <nav>
          <div className={styles.nav_center}>
            <h1>overreacted</h1>
            <button className={styles.btn} onClick={toggleTheme}>
              toggle
            </button>
          </div>
        </nav>
        <section className={styles.articles}>
          <Article/>
        </section>
      </main>
    );
}

export default Clients
