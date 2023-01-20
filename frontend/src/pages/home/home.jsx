import { Link } from 'react-router-dom';
import musclesBuildingImage from './../../images/muscles-building-diet.jpg';
import weightLossImage from './../../images/weight-loss-diet.png';
import diabetesImage from './../../images/diabetes-diet.png';
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
                        <Link to={'/weight-loss-diet'}>
                            <img src={weightLossImage} alt="Weight loss diet"/>
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
                        <Link to={'/muscles-building-diet'}>
                            <img src={musclesBuildingImage} alt="Weight loss diet"/>
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
                        <Link to={'/diabetis-diet'}>
                            <img src={diabetesImage} alt="Weight loss diet"/>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home;