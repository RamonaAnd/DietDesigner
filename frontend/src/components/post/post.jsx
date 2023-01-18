import { Link } from "react-router-dom";

function Post(props) {
    const { id, imageUri, content } = props;

    return (
        <div>
            <div>
                <img src={imageUri} alt={'Blog post'}></img>
            </div>
            <div>
                {content}
                <Link to={`/blog/${id}`}>Read more...</Link>
            </div>
        </div>
    )
}

export default Post;