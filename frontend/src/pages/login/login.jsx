import styles from './login.module.css';

function Login() {
    return (
        <main className={styles.main}>
            <form className={styles.form}>
                <h2>Login</h2>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email"/>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password"/>
                <button type="submit">Login</button>
            </form>
        </main>
    )
}

export default Login;