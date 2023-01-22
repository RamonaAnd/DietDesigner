import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Recipe from '../../components/recipe/recipe';
import styles from './recipe-page.module.css';

function RecipePage() {
    const { id } = useParams();

    const [ recipe, setRecipe ] = useState(null);

    useEffect(() => {
        const fetchRecipe = async () => {
            const response = await fetch(`/api/recipes/${id}`);
            const responsePayload = await response.json();
            console.log(responsePayload);
            setRecipe(responsePayload);
        }
        fetchRecipe();
    }, []);

    return (
        <main className={styles.main}>
            {
                recipe ? 
                    <section>
                        <h2>{ recipe.name }</h2>
                        <h3>Category: <span>{ recipe.category.name }</span></h3>
                        <img src={`http://localhost:5000/static/images/${recipe.imageUri}`} alt='Recipe image' className={styles.image}/>
                        <h3>Ingredients</h3>
                        <ol>
                            {
                                recipe.ingredients.map((ingredient) => <li>{ingredient}</li>)
                            }
                        </ol>
                        <h3>Instructions</h3>
                        <p>
                            {recipe.instructions}
                        </p>
                        <h3>Cook Time: <span>{ recipe.cookTime }</span> minutes</h3>
                    </section>
                : null
            }    
        </main>
    )
}

export default RecipePage;