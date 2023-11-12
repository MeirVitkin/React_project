import { useState } from "react";
import {LikeButton,ReadButton,TakeButton} from "./buttons";
function showP(sample){
    alert(sample)
}



function DisplayBook({sample,setOnshelf,book }) {
    const [like, setLikes] = useState(book.likes);
    const increaseLikes = () => {
        setLikes(like + 1);
        book.likes =like;
    };
    return (
        <div style={!book.onshelf ? { opacity: 0.3 } : null}>
            <h1 style={book.likes > 100 ? {
                fontSize: '40px',
                color: 'rgb(165, 108, 22)'
            } : null}>{book.title}</h1>
            <h2>{book.author}</h2>

            <LikeButton increaseLikes={increaseLikes} /><p>Likes: {book.likes}  </p>
            <ReadButton showP={showP} 
                        sample={sample}
                        />
            <TakeButton setOnshelf={setOnshelf}
                        book={book}
                        />
            <p>Serial Number : {book.serialNumber}</p>
        </div>
    )

};
export default DisplayBook;