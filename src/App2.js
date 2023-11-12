import Computer from "./component/computer";
import Keyboard from "./component/keyboard";
import Screen from "./component/csreen";


  
   
function App2() {
    return(
        <>
            <h1>Meir vitkin</h1>
            <Computer
               child1 ={<Screen/>} 
                child2={<Keyboard/>}
            >
            </Computer>
            
        </>
    )
}
export default App2;