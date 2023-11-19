import Computer from "./component/computer";
import Keyboard from "./component/keyboard";
import Screen from "./component/csreen";
import { useState } from "react";


  
   
function App2() {
    const [displayedLetters, setDisplayedLetters] = useState([]);
    const showLetter = (letter) => {
        const modifiedLetter = letter.replace(/ /g, '\u00A0');
        setDisplayedLetters(prevLetters => [...prevLetters, <div className={ isRed ? 'red' : 'black'}>{ modifiedLetter }</div>]);
    };

    const [isRed, setIsRed] = useState(false);
    const toggleColor = () => {
        setIsRed(!isRed);
    };

    const deleteLastLetter = () => {
        setDisplayedLetters(displayedLetters.slice(0, -1));
    };

    const clearScreen = () => {
        setDisplayedLetters('');
    };

    return(
        <>
            
            <Computer
               child1 ={<Screen
                 displayedLetters={displayedLetters}
                 isRed={isRed}
               />} 
                child2={<Keyboard
                    showLetter={showLetter}
                    deleteLastLetter={deleteLastLetter}
                    clearScreen={clearScreen}
                    toggleColor={toggleColor}
                    isRed={isRed}
                />}
            >
            </Computer>
            
        </>
    )
}
export default App2;