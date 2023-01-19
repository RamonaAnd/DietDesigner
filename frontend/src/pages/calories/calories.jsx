import caloriesImage from './../../images/calories.png';
import styles from './calories.module.css';

function Calories() {
    return (
        <main className={styles.main}>
            <img src={caloriesImage} alt={'Calories'}/>
        </main>
    )
}

export default Calories;