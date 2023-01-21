import { useEffect, useState } from 'react';
import Recipe from '../../components/recipe/recipe';
import styles from './weight-loss-recipes.module.css';

function WeightLossRecipes() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            const response = await fetch('/api/recipes/category/weight-loss-recipes');
            const responsePayload = await response.json();
            setRecipes(responsePayload);
        }
        fetchRecipes();
    }, []);

    return (
        <main className={styles.main}> 
            <section>
                <h2>Weight loss recipes</h2>
                <div className={styles.recipesContainer}>
                    {
                        recipes.length > 0
                            ?
                            recipes.map(({ _id, imageUri, name }, index) =>
                                <Recipe
                                    key={index}
                                    id={_id}
                                    imageUri={`http://localhost:5000/static/images/${imageUri}`}
                                    name={name}
                                />
                            )
                            : null
                    }
                </div>
            </section>
        </main>
    )
}

export default WeightLossRecipes;