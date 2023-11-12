
import{ useState } from "react";

function showLeter(e){
    console.log(e.target.innerText);
}

function Keyboard(){
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
                        <div className="key" key={index} onClick={showLeter}>
                            {key}
                        </div>
                    )
                })}
              
                

            <div className ="space" onClick={showLeter}> </div>
            </div>
                <div className="space" onClick={toggleLanguage}>
                    {isHebrew ? 'English' : 'עברית'}
                </div>

        </div>
    )

}
export default Keyboard;