import { Link } from "react-router-dom";
import styles from './recipe.module.css';

function Recipe(props) {
    const { id, imageUri, name } = props;

    return (
        <div className={styles.container}>
            <div>
                <img src={imageUri} alt={'Recipe'} className={styles.image}></img>
            </div>
            <div className={styles.nameWrapper}>
                {name}
                <Link to={`/recipes/${id}`}>Show details...</Link>
            </div>
        </div>
    )
}

export default Recipe;