import ramonaProfileImage from './../../images/ramona.jpg';
import hanaaProfileImage from './../../images/hanaa.jpg';
import leaProfileImage from './../../images/lea.jpg';
import styles from './footer.module.css';


function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.creatorsContainer}>
                <div className={styles.detailsContainer}>
                    <div className={styles.nameWrapper}>
                        <span className={styles.name}>
                            Ramona Andrei
                        </span>
                    </div>
                    <div className={styles.emailWrapper}>
                        <span className={styles.email}>
                            ramona.andrei@stud.fh-campuswien.ac.at
                        </span>
                    </div>
                    <div className={styles.imageWrapper}>
                        <img src={ramonaProfileImage} alt="Ramona Andrei" />
                    </div>
                </div>
                <div className={styles.detailsContainer}>
                    <div className={styles.nameWrapper}>
                        <span className={styles.name}>
                            Hanaa Alraei
                        </span>
                    </div>
                    <div className={styles.emailWrapper}>
                        <span className={styles.email}>
                            hanaa.alraei@stud.fh-campuswien.ac.at
                        </span>
                    </div>
                    <div className={styles.imageWrapper}>
                        <img src={hanaaProfileImage} alt="Hanaa Alraei" />
                    </div>
                </div>
                <div className={styles.detailsContainer}>
                    <div className={styles.nameWrapper}>
                        <span className={styles.name}>
                            Lea Christa
                        </span>
                    </div>
                    <div className={styles.emailWrapper}>
                        <span className={styles.email}>
                            lea.christa@stud.fh-campuswien.ac.at
                        </span>
                    </div>
                    <div className={styles.imageWrapper}>
                        <img src={leaProfileImage} alt="Lea Christa" />
                    </div>
                </div>
            </div>
            <div>
                <span>© 2022 Diet Designer</span>
            </div>
        </footer>
    )
}

export default Footer;