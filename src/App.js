import DisplayBook from './component/book';
import './App.css';


const books = [
  {
    title: "מעשה בחמישה בלונים",
    author: "someone",
    sample:"this is an owsome book",
    likes: 90,
    onshelf: true
  },
  {
    title: "עמי ותמי",
    author: "sometwo",
    sample:" it is good to read this book",
    likes: 85,
    onshelf: false
  },
  {
    title: "סינדרלה",
    author: "Moshe Adar",
    sample:" i think it is good to read this book",
    likes: 80,
    onshelf: true
  },
  {
    title: "pinokio",
    author: "Meir vitkin",
    sample:"never give up on this book",
    likes: 80,
    onshelf: true
  }
]
function setOnshelf(book){
  book.onshelf=false;
}

function App() {
  return (
    <div className="App">
      <h1> library</h1>
      {books.map((book, idx) => (
        <div className="container">
          <DisplayBook
            key={idx}
            title={book.title}
            author={book.author}
            likes={book.likes}
            onshelf={book.onshelf}
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
