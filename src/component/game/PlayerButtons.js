import React from 'react'

const PlayerButtons = ({ board, setBoard }) => {

    return (
        <div className='buttonsContainer'>
            <div className='playerButton' onClick={() => {
                setBoard(board=[...board,players[0]])
            }}>
                {players[0].name}
            </div>
            <div className='playerButton' onClick={() => {
                setBoard(board=[...board,players[1]])
            }}>
                {players[1].name}
            </div>
            <div className='playerButton' onClick={() => {
                setBoard(board=[...board,players[2]])
            }}>
                {players[2].name}
            </div>
            <div className='playerButton' onClick={() => {
                setBoard(board=[...board,players[3]])
            }}>
                {players[3].name}
            </div>
        </div>
    )
}

export default PlayerButtons

