import { CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styles from './logout.module.css';

function Logout() {
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem('user');

        toast.error("You logged out successfully!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

        setTimeout(() =>  {navigate('/', {replace: true}); navigate(0);}, 3000);
    }, [])

    return (
        <main className={styles.main}>
            <CircularProgress/>
        </main>
    );
}

export default Logout;