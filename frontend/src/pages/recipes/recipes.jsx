import { Link } from 'react-router-dom';
import { useState } from 'react';
import AddRecipeModal from './../../components/add-recipe-modal/add-recipe-modal';
import musclesBuildingImage from './../../images/muscles-building-recipes.jpg';
import weightLossImage from './../../images/weight-loss-recipes.png';
import diabetesImage from './../../images/diabetes-recipes.jpg';
import styles from './recipes.module.css';


function Recipes() {
    const [openModal, setOpenModal] = useState(false);

    const handleClickAddRecipe = () => {
        setOpenModal(true);
    }

    const handleCloseModal = () => {
        setOpenModal(false);
    }

    return (
        <main className={styles.main}>
            <div className={styles.addRecipeButtonWrapper}>
                <button onClick={handleClickAddRecipe} className={styles.addRecipeButton}>Add recipe</button>
            </div>
            <section className={styles.section}>
                <div className={styles.recipeContainer}>
                    <div>
                        <p className={styles.textRecipe}>
                            Weight loss recipes
                        </p>
                    </div>
                    <div className={styles.imageWrapper}>
                        <Link to={'/weight-loss-recipes'}>
                            <img src={weightLossImage} alt="Weight loss recipe" />
                        </Link>
                    </div>
                </div>
                <div className={styles.recipeContainer}>
                    <div>
                        <p className={styles.textRecipe}>
                            Muscles building recipes
                        </p>
                    </div>
                    <div className={styles.imageWrapper}>
                        <Link to={'/muscles-building-recipes'}>
                            <img src={musclesBuildingImage} alt="Muscles building recipe" />
                        </Link>
                    </div>
                </div>
                <div className={styles.recipeContainer}>
                    <div>
                        <p className={styles.textRecipe}>
                            Diabetes recipes
                        </p>
                    </div>
                    <div className={styles.imageWrapper}>
                        <Link to={'/diabetes-recipes'}>
                            <img src={diabetesImage} alt="Diabetes recipe" />
                        </Link>
                    </div>
                </div>
            </section>
            <AddRecipeModal open={openModal} handleClose={handleCloseModal}/>
        </main>
    )
}

export default Recipes;