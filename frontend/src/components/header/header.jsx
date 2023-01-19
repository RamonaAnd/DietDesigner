import { Link } from 'react-router-dom';
import styles from './header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logoWrapper}>
                <Link to={'/home'}>
                    DietDesigner
                </Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to={'/recipes'}>
                            Recipes
                        </Link>
                    </li>
                    <li>
                        <Link to={'/blog'}>
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link to={'/forum'}>
                            Forum
                        </Link>
                    </li>
                    <li>
                        <Link to={'/calories'}>
                            Calories
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className={styles.buttonsContainer}>
                <Link to={'/register'}>
                    Register
                </Link>
                <Link to={'/login'}>
                    Login
                </Link>
            </div>
        </header >
    )
}

export default Header;