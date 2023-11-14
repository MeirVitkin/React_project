import DisplayBook from './component/book';
import './style/App.css';


const books = [
  {
    title: "מעשה בחמישה בלונים",
    author: "someone",
    sample:"this is an owsome book",
    serialNumber: "0257461",
    likes: 90,
    onshelf: true
  },
  {
    title: "עמי ותמי",
    author: "sometwo",
    sample:" it is good to read this book",
    serialNumber: "0257462",
    likes: 85,
    onshelf: false
  },
  {
    title: "סינדרלה",
    author: "Moshe Adar",
    sample:" i think it is good to read this book",
    serialNumber: "0257463",
    likes: 80,
    onshelf: true
  },
  {
    title: "pinokio",
    author: "Meir vitkin",
    sample:"never give up on this book",
    serialNumber: "0257464",
    likes: 80,
    onshelf: true
  }
]
function setOnshelf(book){
 {book.onshelf ? book.onshelf= false : book.onshelf = true} ;
}

function App() {
  return (
    <div className="App">
      <h1> library</h1>
      {books.map((book, i) => (
        <div className="container" key={i}>
          <DisplayBook
            sample={book.sample}
            setOnshelf={setOnshelf}
            book={book}
          />
        </div>
      ))}
    </div>
  );
}

export default App;
