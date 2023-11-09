

const LikeButton = ({ increaseLikes }) => {
    

    return <button onClick={increaseLikes}>Like</button>
}
const ReadButton = ({ showP,sample }) => {
    

    return <button onClick={()=>showP(sample)}>Read</button>
}
const TakeButton = ({ setOnshelf,book }) => {
    

    return <button onClick={()=>setOnshelf(book)}>Take</button>
}
export {LikeButton,ReadButton,TakeButton} ;