import { useState } from "react";
import LikeButton from "./likeButton";



function DisplayBook({ title, author, likes }) {
    const [like, setLikes] = useState(likes);
    const increaseLikes = () => {
        setLikes(like + 1);
        console.log(like);
    };

    return (
        <div>
            <h1 style={like > 100 ? {
                fontSize: '40px',
                color: 'rgb(165, 108, 22)'
            } : null}>{title}</h1>
            <h2>{author}</h2>
            <LikeButton increaseLikes= {increaseLikes}/><p> {like} Likes: </p>
        </div>
    )

};
export default DisplayBook;