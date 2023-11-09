import { useState } from "react";
import {LikeButton,ReadButton,TakeButton} from "./buttons";
function showP(sample){
    alert(sample)
}



function DisplayBook({ title, author, likes, onshelf, key,sample,setOnshelf,book }) {
    const [like, setLikes] = useState(likes);
    const increaseLikes = () => {
        setLikes(like + 1);
    };
    return (
        <div style={!onshelf ? { opacity: 0.3 } : null}>
            <p>{key}</p>
            <h1 style={like > 100 ? {
                fontSize: '40px',
                color: 'rgb(165, 108, 22)'
            } : null}>{title}</h1>
            <h2>{author}</h2>
            <LikeButton increaseLikes={increaseLikes} /><p>Likes: {like}  </p>
            <ReadButton showP={showP} 
                        sample={sample}
            />
            <TakeButton setOnshelf={setOnshelf}
                        book={book}
             />
        </div>
    )

};
export default DisplayBook;