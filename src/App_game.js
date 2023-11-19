import React, { useState } from 'react'
import Gamer from './component/Gamer';
import SubmitButton from './SubmitButton';

const App_game = () => {

    const [playersParseArray, setPlayersParseArray] = useState(JSON.parse(localStorage.getItem('players'))) || [];

    const [playersArray, setPlayersArray] = useState([]);


    const updatePlayersArray = (newPlayer) => {
        setPlayersArray(prevArrey => [...prevArrey, newPlayer]);
    };

    const removePlayersArray = (index) => {
        setPlayersArray(prevBoard => prevBoard.splice(index, 1));
    };
    const updateLocalStorage = (index, steps) => {
        const updatedPlayersArray = [...playersParseArray];
        updatedPlayersArray[index].scores.push(steps);
    
        setPlayersParseArray(updatedPlayersArray);
    
        localStorage.setItem('players', JSON.stringify(updatedPlayersArray));
    };
    

    return (
        <>
            <SubmitButton updatePlayersArray={updatePlayersArray}
                          setPlayersParseArray={setPlayersParseArray}
                          playersParseArray={playersParseArray}
             />
            <div className='gameContainer'>
                {playersArray.map((player, index) => (
                    <div className='player' key={index}>
                        <Gamer idplayer={index}
                            player={player}
                            board={playersArray}
                            removePlayersArray={removePlayersArray}
                            updateLocalStorage ={updateLocalStorage}
                            storage ={playersParseArray}
                        />
                    </div>
                ))}
            </div>
        </>
    )
}

export default App_game