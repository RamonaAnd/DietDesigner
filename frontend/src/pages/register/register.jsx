import styles from './register.module.css';

function Register() {
    return (
        <main className={styles.main}>
            <form className={styles.form}>
                <h2>Register</h2>
                <label for="lastname">Last name:</label>
                <input type="text" id="lastname" name="lastname"/>
                <label for="firstname">First name:</label>
                <input type="text" id="firstname" name="firstname"/>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email"/>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password"/>
                <label for="confirmPassword">Confirm password:</label>
                <input type="password" id="confirmPassword" name="confirmPassword"/>
                <button type="submit">Register</button>
            </form>
        </main>
    )
}

export default Register;