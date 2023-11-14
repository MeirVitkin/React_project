import React from 'react'
import CreatePlayer from './CreatePlayer'

let players = [
    {
        name: 'meir',
        scores: 0,
    },
    {
        name: 'moshe',
        scores: 0,
    },
    {
        name: 'roni',
        scores: 0,
    },
    {
        name: 'yoni',
        scores: 0,
    },
]

const PlayerButtons = ({ board, setBoard }) => {

    return (
        <div className='buttonsContainer'>
            <div className='playerButton' onClick={() => {
                setBoard(board=[...board,players[0]])
                // CreatePlayer(players[0], board, setBoard)
            }}>
                {players[0].name}
            </div>
            <div className='playerButton' onClick={() => {
                setBoard(board=[...board,players[1]])
                // CreatePlayer(players[1])
            }}>
                {players[1].name}
            </div>
            <div className='playerButton' onClick={() => {
                setBoard(board=[...board,players[2]])
                // CreatePlayer(players[2])
            }}>
                {players[2].name}
            </div>
            <div className='playerButton' onClick={() => {
                setBoard(board=[...board,players[3]])
                // CreatePlayer(players[3])
            }}>
                {players[3].name}
            </div>
        </div>
    )
}

export default PlayerButtons