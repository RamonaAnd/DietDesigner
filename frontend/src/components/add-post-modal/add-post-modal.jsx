import { Modal, IconButton, TextField } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material'
import styles from './add-post-modal.module.css';

function AddPostModal(props) {
    const { open, handleClose } = props;

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);

        await fetch('/api/posts', {
            method: 'POST',
            body: data
        });
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className={styles.modal}
        >
            <div className={styles.container}>
                <h3 className={styles.title}>Add a post</h3>
                <form onSubmit={handleFormSubmit} className={styles.form}>
                    <IconButton color="primary" aria-label="upload-image-file" component="label">
                        <input hidden accept="image/*" type="file" name="imageFile"/>
                        <PhotoCamera />
                    </IconButton>
                    <TextField
                        id='content'
                        label='Content'
                        placeholder='Insert content...'
                        multiline
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