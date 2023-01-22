import { TextField } from '@mui/material';
import { useState } from 'react';
import { toast } from 'react-toastify';
import styles from './register.module.css';

function Register() {
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    const handleChangeLastName = (event) => setLastName(event.target.value);
    const handleChangeFirstName = (event) => setFirstName(event.target.value);
    const handleChangeEmail = (event) => setEmail(event.target.value);
    const handleChangePassword = (event) => setPassword(event.target.value);
    const handleChangeConfirmPassword = (event) => setConfirmPassword(event.target.value);

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        if(password !== confirmPassword)
        {
            toast.error("Passwords don't match", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });  
            return;
        }

        const requestPayload = {
            firstName,
            lastName,
            email,
            password
        }

        const response = await fetch('/auth/register', {
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
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });  
        }
        else
        {
            toast.error(responsePayload.error, {
                position: "top-right",
                autoClose: 5000,
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
                <h2>Register</h2>
                <TextField 
                    id="firstName" 
                    label="Firstname"
                    size="small"
                    value={firstName}
                    onChange={handleChangeFirstName}
                />
                <TextField 
                    id="lastName" 
                    label="Lastname"
                    size="small"
                    value={lastName}
                    onChange={handleChangeLastName}
                />
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
                <TextField 
                    id="confirm-password" 
                    label="Confirm password"
                    size="small"
                    type="password"
                    value={confirmPassword}
                    onChange={handleChangeConfirmPassword}
                />
                <button type="submit">Register</button>
            </form>
        </main>
    )
}

export default Register;