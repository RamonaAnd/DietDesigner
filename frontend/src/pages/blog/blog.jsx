import { useEffect, useState } from "react";
import Post from "../../components/post/post";
import AddPostModal from "../../components/add-post-modal/add-post-modal";
import styles from './blog.module.css';

function Blog() {
    const [openModal, setOpenModal] = useState(false);
    const [posts, setPosts] = useState([]);

    console.log(posts);

    const handleClickAddPost = () => {
        setOpenModal(true);
    }

    const handleCloseModal = () => {
        setOpenModal(false);
    }

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('/api/posts');
            const responsePayload = await response.json();
            setPosts(responsePayload);
        }
        fetchPosts();
    }, []);

    return (
        <main className={styles.main}>
            <div>
                <button onClick={handleClickAddPost} className={styles.addPostButton}>
                    Add post
                </button>
            </div>
            <section>
                <h2>Blog posts</h2>
                <div className={styles.postsContainer}>
                    {
                        posts.length > 0
                            ?
                            posts.map(({ _id, imageUri, content }, index) =>
                                <Post
                                    key={index}
                                    id={_id}
                                    imageUri={`http://localhost:5000/static/images/${imageUri}`}
                                    content={content}
                                />
                            )
                            : null
                    }
                </div>
            </section>
            <AddPostModal open={openModal} handleClose={handleCloseModal} setPosts={setPosts} />
        </main>
    )
}

export default Blog;