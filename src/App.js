import DisplayBook from './component/book';
import './App.css';


 const books =[
  {
    title: "מעשה בחמישה בלונים",
    author: "someone",
    likes: 90,
    onshelf: false
   },
   {
    title: "עמי ותמי",
    author: "sometwo",
    likes: 85,
    onshelf: false
   },
   {
    title: "סינדרלה",
    author: "somethird",
    likes: 80,
    onshelf: false
   }
]

function App() {
  return (
    <div className="App">
      <h1> library</h1>
      <div className='container'><DisplayBook
       title={books[0].title} 
       author ={books[0].author} 
       likes={books[0].likes} />
    </div>
    <div className='container'>
      <DisplayBook 
      title={books[1].title} 
      author ={books[1].author} 
      likes={books[1].likes} />
    </div>
    <div className="container">
      <DisplayBook 
      title={books[2].title} 
      author ={books[2].author}
      likes={books[2].likes} />
    </div>
    </div>
  );
}

export default App;
