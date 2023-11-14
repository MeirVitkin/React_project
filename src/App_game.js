import React, { useState } from 'react'
import PlayerButtons from './component/PlayerButtons'
import Gamer from './component/Gamer';

const App_game = () => {

    const [board, setBoard] = useState([]);

    return (
        <>
            <PlayerButtons
                board={board}
                setBoard={setBoard}
            />
            <div className='gameContainer'>
                {board.map((player, index) => (
                    <div className='player' key={index}>
                        <Gamer key={index} player={player} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default App_game