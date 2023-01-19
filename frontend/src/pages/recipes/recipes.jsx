import { Link } from 'react-router-dom';
import musclesBuildingImage from './../../images/muscles-building.jpg';
import weightLossImage from './../../images/weight-loss.png';
import diabetesImage from './../../images/diabetes.png';
import styles from './recipes.module.css';


function Recipes() {
    return (
        <main className={styles.main}>
            <section className={styles.section}>
                <div className={styles.recipeContainer}>
                    <div>
                        <p className={styles.textRecipe}>
                            Weight loss recipe
                        </p>
                    </div>
                    <div className={styles.imageWrapper}>
                        <Link to={'/weight-loss-recipe'}>
                            <img src={weightLossImage} alt="Weight loss recipe"/>
                        </Link>
                    </div>
                </div>
                <div className={styles.recipeContainer}>
                    <div>
                        <p className={styles.textRecipe}>
                            Muscles building recipe
                        </p>
                    </div>
                    <div className={styles.imageWrapper}>
                        <Link to={'/muscles-building-recipe'}>
                            <img src={musclesBuildingImage} alt="Weight loss recipe"/>
                        </Link>
                    </div>
                </div>
                <div className={styles.recipeContainer}>
                    <div>
                        <p className={styles.textRecipe}>
                            Diabetes recipe
                        </p>
                    </div>
                    <div className={styles.imageWrapper}>
                        <Link to={'/diabetis-recipe'}>
                            <img src={diabetesImage} alt="Weight loss recipe"/>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Recipes;