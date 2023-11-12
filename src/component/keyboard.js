import GetKeywords from "../App2"
function showLeter(e){
    console.log(e.target.innerText);
}
function Keyboard(){
    const keyes = [
        'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
        'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L',
        'Z', 'X', 'C', 'V', 'B', 'N', 'M',' '
    ];
    return(
        <div className="keyboard">
            {keyes.map((key,index)=>{
                return(
                    <div className="key" key={index} onClick={showLeter}>
                        {key}
                    </div>
                )
            })}
        </div>
    )

}
export default Keyboard;