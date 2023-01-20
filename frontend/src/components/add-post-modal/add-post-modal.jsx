import { Modal, IconButton, TextField } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material'
import { toast } from 'react-toastify';
import styles from './add-post-modal.module.css';

function AddPostModal(props) {
    const { open, handleClose, setPosts } = props;

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const requestPayload = new FormData(event.currentTarget);

        const response = await fetch('/api/posts', {
            method: 'POST',
            body: requestPayload
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
            setPosts(currentPosts => [...currentPosts, responsePayload.post]);
            handleClose();
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
        <Modal
            open={open}
            onClose={handleClose}
            className={styles.modal}
        >
            <div className={styles.container}>
                <h3 className={styles.title}>Add a post</h3>
                <form onSubmit={handleFormSubmit} className={styles.form}>
                    <IconButton color="primary" aria-label="upload-image-file" component="label">
                        <input hidden accept="image/*" type="file" name="imageFile" />
                        <PhotoCamera />
                    </IconButton>
                    <TextField
                        id='content'
                        label='Content'
                        placeholder='Insert content...'
                        multiline
                        minRows={4}
                        maxRows={10}
                        size='small'
                        name='content'
                        className={styles.contentTextField}
                    />
                    <button type='submit' className={styles.addPostButton}>
                        Add post
                    </button>
                </form>
            </div>
        </Modal>
    )
}

export default AddPostModal;