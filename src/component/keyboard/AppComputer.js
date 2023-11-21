import Computer from "./computer";
import Keyboard from "./keyboard";
import Screen from "./csreen";
import { useState } from "react";

function AppComputer() {
    const [displayedLetters, setDisplayedLetters] = useState([]);
    const showLetter = (letter) => {
        const modifiedLetter = letter.replace(/ /g, '\u00A0');
        {
            isHebrew ? (
                setDisplayedLetters(prevLetters => [<div className={isBlue ? 'blue' : 'black'}>{modifiedLetter}</div>, ...prevLetters])
            ) : (
                setDisplayedLetters(prevLetters => [...prevLetters, <div className={isBlue ? 'blue' : 'black'}>{modifiedLetter}</div>])
            )
        }
    };

    const [isRed, setIsRed] = useState(false);
    const [isBlue, setIsBlue] = useState(false);
    const [isHebrew, setIsHebrew] = useState(false);

    const toggleLanguage = () => {
        setIsHebrew(!isHebrew);
    };

    const toggleColor = () => {
        setIsRed(!isRed);
    };

    const toggleBlueColor = () => {
        setIsBlue(!isBlue);
    };

    const deleteLastLetter = () => {
        setDisplayedLetters(displayedLetters.slice(0, -1));
    };

    const clearScreen = () => {
        setDisplayedLetters('');
    };

    return (
        <>
            <Computer
                child1={<Screen
                    displayedLetters={displayedLetters}
                    isRed={isRed}
                />}
                child2={<Keyboard
                    showLetter={showLetter}
                    deleteLastLetter={deleteLastLetter}
                    clearScreen={clearScreen}
                    toggleColor={toggleColor}
                    isRed={isRed}
                    toggleBlueColor={toggleBlueColor}
                    isBlue={isBlue}
                    toggleLanguage={toggleLanguage}
                    isHebrew={isHebrew}
                />}
            >
            </Computer>
        </>
    )
}
export default AppComputer;