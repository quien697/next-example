import Header from '../components/header';
import styles from '../styles/Home.module.css';

const About = () => {
    console.log("About");
    return (
        <div>
            <Header />
            <div className={styles.main}>About Page</div>
        </div>
    )
}

export default About;