import Keyboard from "./keyboard"
import Screen from "./csreen";
function Computer({child1, child2}){
   
        return(
        <main>
            <h1>Computer</h1>
            {child1}
            {child2}
        </main>
    )
}
export default Computer;