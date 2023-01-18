import { Link } from 'react-router-dom';
import musclesBuildingDietImage from './../../images/muscles-building-diet.jpg';
import weightLoseDietImage from './../../images/weight-loss-diet.png';
import diabetesDietImage from './../../images/diabetes-diet.png';
import styles from './home.module.css';

function Home() {
    return (
        <main className={styles.main}>
            <section className={styles.section}>
                <div className={styles.dietContainer}>
                    <div>
                        <p className={styles.textDiet}>
                            Weight loss diet
                        </p>
                    </div>
                    <div className={styles.imageWrapper}>
                        <Link to={'/weight-loss'}>
                            <img src={weightLoseDietImage} alt="Weight loss diet"/>
                        </Link>
                    </div>
                </div>
                <div className={styles.dietContainer}>
                    <div>
                        <p className={styles.textDiet}>
                            Muscles building diet
                        </p>
                    </div>
                    <div className={styles.imageWrapper}>
                        <Link to={'/muscles-building'}>
                            <img src={musclesBuildingDietImage} alt="Weight loss diet"/>
                        </Link>
                    </div>
                </div>
                <div className={styles.dietContainer}>
                    <div>
                        <p className={styles.textDiet}>
                            Diabetes diet
                        </p>
                    </div>
                    <div className={styles.imageWrapper}>
                        <Link to={'/diabetis'}>
                            <img src={diabetesDietImage} alt="Weight loss diet"/>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home;