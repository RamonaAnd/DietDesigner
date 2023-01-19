import { Link } from "react-router-dom";
import styles from './post.module.css';

function Post(props) {
    const { id, imageUri, content } = props;

    return (
        <div className={styles.container}>
            <div>
                <img src={imageUri} alt={'Blog post'} className={styles.image}></img>
            </div>
            <div className={styles.contentWrapper}>
                {content}
                <Link to={`/blog/${id}`}>Read more...</Link>
            </div>
        </div>
    )
}

export default Post;