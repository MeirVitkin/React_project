function Screen({ displayedLetters,isRed }){
    return(
        <div className="screen" style={ isRed ? {color:'red'} : null}>
           { displayedLetters }
        </div>
    )
}   

export default Screen;