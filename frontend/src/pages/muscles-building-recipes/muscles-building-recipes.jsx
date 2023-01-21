import { useEffect, useState } from 'react';
import Recipe from '../../components/recipe/recipe';
import styles from './muscles-building-recipes.module.css';

function MusclesBuildingRecipes() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            const response = await fetch('/api/recipes/category/muscles-building-recipes');
            const responsePayload = await response.json();
            setRecipes(responsePayload);
        }
        fetchRecipes();
    }, []);

    return (
        <main className={styles.main}> 
            <section>
                <h2>Muscles building recipes</h2>
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

export default MusclesBuildingRecipes;