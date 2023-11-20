import Computer from "./computer";
import Keyboard from "./keyboard";
import Screen from "./csreen";
import { useState } from "react";


  
   
function AppComputer() {
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
export default AppComputer;