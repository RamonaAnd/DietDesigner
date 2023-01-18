import { useState } from "react";
import Post from "../../components/post/post";
import AddPostModal from "../../components/add-post-modal/add-post-modal";
import styles from './blog.module.css';

function Blog() {
    const [openModal, setOpenModal] = useState(false);

    const handleClickAddPost = () => {
        setOpenModal(true);
    }

    const handleCloseModal = () => {
        setOpenModal(false);
    }

    return (
        <main className={styles.main}>
            <div>
                <button onClick={handleClickAddPost}>
                    Add post
                </button>
            </div>
            <section>
                <h2>Blog posts</h2>
                <Post id={4} imageUri='../../images/food.jpg' content={'This is the content'} />
            </section>
            <AddPostModal open={openModal} handleClose={handleCloseModal} />
        </main>
    )
}

export default Blog;