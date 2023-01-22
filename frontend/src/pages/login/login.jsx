import { TextField } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import styles from './login.module.css';

function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeEmail = (event) => setEmail(event.target.value);
    const handleChangePassword = (event) => setPassword(event.target.value);

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const requestPayload = {
            email,
            password
        }

        const response = await fetch('/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestPayload)
        });

        const responsePayload = await response.json();

        if(response.status >= 200 && response.status < 300)
        {
            toast.success(responsePayload.message, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            localStorage.setItem('user', JSON.stringify(responsePayload.user));
            setTimeout(() =>  {navigate('/', {replace: true}); navigate(0);}, 3000);
        }
        else
        {
            toast.error(responsePayload.error, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });  
        }
    }

    return (
        <main className={styles.main}>
            <form onSubmit={handleFormSubmit} className={styles.form}>
                <h2>Login</h2>
                <TextField 
                    id="email" 
                    label="Email"
                    size="small"
                    value={email}
                    type="email"
                    onChange={handleChangeEmail}
                />
                <TextField 
                    id="password" 
                    label="Password"
                    size="small"
                    type="password"
                    value={password}
                    onChange={handleChangePassword}
                />
                <button type="submit">Login</button>
            </form>
        </main>
    )
}

export default Login;