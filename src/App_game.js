import React, { useState } from 'react'
import PlayerButtons from './component/PlayerButtons'
import Gamer from './component/Gamer';

const App_game = () => {

    const [board, setBoard] = useState([]);
    const [correntPlayer, setCorrentPlayer] = useState(0);

    return (
        <>
            <PlayerButtons
                board={board}
                setBoard={setBoard}
            />
            <div className='gameContainer'>
                {board.map((player, index) => (
                    <div className='player' key={index}>
                        <Gamer idplayer={index}
                            player={player}
                            correntPlayer={correntPlayer}
                            setCorrentPlayer={setCorrentPlayer}
                            board={board}
                            setBoard={setBoard}
                        />
                    </div>
                ))}
            </div>
        </>
    )
}

export default App_game