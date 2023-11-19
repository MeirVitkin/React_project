import React, { useState } from 'react'
import Gamer from './component/Gamer';
import SubmitButton from './SubmitButton';

const App_game = () => {

    const [playersArray, setPlayersArray] = useState([]);

    const updatePlayersArray = (newPlayer) => {
        setPlayersArray(prevArrey => [...prevArrey, newPlayer]);
    };

    const removePlayersArray = (index) => {
        setPlayersArray(prevBoard => prevBoard.splice(index, 1));
    };

    return (
        <>
            <SubmitButton updatePlayersArray={updatePlayersArray} />
            <div className='gameContainer'>
                {playersArray.map((player, index) => (
                    <div className='player' key={index}>
                        <Gamer idplayer={index}
                            player={player}
                            board={playersArray}
                            removePlayersArray={removePlayersArray}
                        />
                    </div>
                ))}
            </div>
        </>
    )
}

export default App_game