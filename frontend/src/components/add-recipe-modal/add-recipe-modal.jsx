import { Modal, IconButton, TextField, MenuItem, FormControl, InputLabel, Select } from '@mui/material';
import { Add, PhotoCamera } from '@mui/icons-material'
import { useState } from 'react';
import { toast } from 'react-toastify';
import styles from './add-recipe-modal.module.css';

function AddRecipeModal(props) {
    const { open, handleClose } = props;
    const [ingredient, setIngredient] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const [category, setCategory] = useState('Weight loss recipes');

    const handleChangeCategory = (event) => setCategory(event.target.value);

    const handleChangeIngredient = (event) => setIngredient(event.target.value);

    const handleAddIngredient = () => {
        setIngredient('');
        setIngredients(currentIngredients => [...currentIngredients, ingredient]);
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const requestPayload = new FormData(event.currentTarget);
        requestPayload.append('ingredients', ingredients);

        // HERE I MAKE THE CONNECTION BETWEEN FRONTEND AND BACKEND
        // FRONTEND SEND A REQUEST TO THE /api/recipes ENPOINT WITH RECIPE DATA
        // BACKEND WILL CHECK THE DATA AND AFTER THAT WILL SAVE THEM IN THE DATABASE
        const response = await fetch('/api/recipes', {
            method: 'POST',
            body: requestPayload
        });

        const responsePayload = await response.json();

        if (response.status >= 200 && response.status < 300) {
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
            handleClose();
            setIngredients([]);
            event.target.reset();
        }
        else {
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
                <h3 className={styles.title}>Add a recipe</h3>
                <form onSubmit={handleFormSubmit} className={styles.form}>
                    <IconButton color="primary" aria-label="upload-image-file" component="label">
                        <input hidden accept="image/*" type="file" name="imageFile" />
                        <PhotoCamera />
                    </IconButton>
                    <TextField
                        id='name'
                        label='Recipe name'
                        placeholder='Insert recipe name...'
                        size='small'
                        className={styles.textField}
                        name="name"
                    />
                    <FormControl fullWidth className={styles.ingredientFormControl}>
                        <TextField
                            id='ingredient'
                            label='Ingredient'
                            size='small'
                            className={styles.textField}
                            value={ingredient}
                            onChange={handleChangeIngredient}
                        />
                        <Add onClick={handleAddIngredient} className={styles.icon} />
                    </FormControl>
                    {
                        ingredients.length > 0 ?
                            <ol className={styles.listIngredients}>
                                {
                                    ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)
                                }
                            </ol>
                            : null
                    }
                    <TextField
                        id='instructions'
                        label='Instructions'
                        placeholder='Insert instructions...'
                        multiline
                        minRows={3}
                        maxRows={10}
                        size='small'
                        className={styles.textField}
                        name="instructions"
                    />
                    <TextField
                        id='cook-time'
                        label='Cook time'
                        size='small'
                        type='number'
                        defaultValue={1}
                        className={styles.textField}
                        name="cookTime"
                    />
                    <FormControl fullWidth>
                        <InputLabel id="category-label">Recipe category</InputLabel>
                        <Select
                            labelId="category-label"
                            id="category"
                            value={category}
                            label="Recipe category"
                            className={styles.select}
                            size="small"
                            name="category"
                            onChange={handleChangeCategory}
                        >
                            <MenuItem value={'Weight loss recipes'}>Weight loss recipes</MenuItem>
                            <MenuItem value={'Muscles building recipes'}>Muscles building recipes</MenuItem>
                            <MenuItem value={'Diabetes recipes'}>Diabetes recipes</MenuItem>
                        </Select>
                    </FormControl>
                    <button type='submit' className={styles.addPostButton}>
                        Add recipe
                    </button>
                </form>
            </div>
        </Modal>
    )
}

export default AddRecipeModal;