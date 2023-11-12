import Computer from "./component/computer";
import Keyboard from "./component/keyboard";

const alphabetKeys = [
    'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
    'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L',
    'Z', 'X', 'C', 'V', 'B', 'N', 'M'
];
const hebrewAlphabetKeys = [
    '/', "'", 'ק', 'ר', 'א', 'ט', 'ו', 'י', 'פ', 'ן', 'ם', 'ש', 'ד', 'ג', 'כ', 'ע', 'י', 'ח', 'ל', 'ך', 'ף', ',', 'ז', 'ס', 'ב', 'ה', 'נ', 'מ', 'צ', 'ת', 'ץ'
  ];
   
export function GetKeywords() {
    return alphabetKeys;
}
function App2() {
    console.log(alphabetKeys);
    return(
        <>
            <h1>Meir vitkin</h1>
            <Computer
            />
        </>
    )
}
export default App2;