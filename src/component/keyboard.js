
import{ useState } from "react";

function Keyboard({ showLetter, deleteLastLetter, clearScreen,toggleColor,isRed }){
const englishKeys = [
    'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
    'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L',
    'Z', 'X', 'C', 'V', 'B', 'N', 'M'];
const hebrewKeys = [
     'ק', 'ר', 'א', 'ט', 'ו', 'י', 'פ', 'ן', 'ם', 'ש', 'ד', 'ג', 'כ', 'ע', 'י', 'ח', 'ל', 'ך', 'ף', 'ז', 'ס', 'ב', 'ה', 'נ', 'מ', 'צ', 'ת', 'ץ'
    ];
    const [isHebrew, setIsHebrew] = useState(false);
    const keys = isHebrew ? hebrewKeys : englishKeys;
    

    const toggleLanguage = () => {
        setIsHebrew(!isHebrew);
    };

    return(
        <div>
            <div className="keyboard">
                {keys.map((key,index)=>{
                    return(   
                        <div className="key" key={index} onClick={()=>showLetter(key)}>
                            {key}
                        </div>
                    )
                })}
            </div>
              
                

            <div className="buttons">
                    <div className="delete" onClick={() => deleteLastLetter()}>Delete</div>
                    <div className="language-toggle" onClick={toggleLanguage}>
                        {isHebrew ? 'English' : 'עברית'}</div>
                    <div className= "space" onClick={() => showLetter(' ')}>space</div>
                    <div className="color-toggle" onClick={toggleColor}>
                        {isRed ? 'Black' :'Red'}</div>
                    <button className="clearButton" onClick={clearScreen}>Clear</button>
            </div>

        </div>
    )

}
export default Keyboard;