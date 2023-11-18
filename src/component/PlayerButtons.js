import React from 'react'
import CreatePlayer from './CreatePlayer'

let players = [
    {
        name: 'meir',
        scores: 0,
        myTurn: 'true'
    },
    {
        name: 'moshe',
        scores: 0,
        myTurn: 'false'
    },
    {
        name: 'roni',
        scores: 0,
        myTurn: 'false'
    },
    {
        name: 'yoni',
        scores: 0,
        myTurn: 'false'
    },
]

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

// import React, { useState } from 'react';

// let players = [
//     {
//         name: 'meir',
//         scores: 0,
//         myTurn: true
//     },
//     {
//         name: 'moshe',
//         scores: 0,
//         myTurn: true
//     },
//     {
//         name: 'roni',
//         scores: 0,
//         myTurn: true
//     },
//     {
//         name: 'yoni',
//         scores: 0,
//         myTurn: true
//     },
// ];

// const PlayerButtons = ({ board, setBoard }) => {
//     const [selectedPlayers, setSelectedPlayers] = useState([]);

//     const handleButtonClick = (player) => {
//         if (!selectedPlayers.includes(player)) {
//             setBoard((prevBoard) => [...prevBoard, player]);
//             setSelectedPlayers((prevPlayers) => [...prevPlayers, player]);
//         }
//     };

//     return (
//         <div className='buttonsContainer'>
//             {players.map((player, index) => (
//                 <div
//                     key={index}
//                     className={`playerButton ${selectedPlayers.includes(player) ? 'disabled' : ''}`}
//                     onClick={() => handleButtonClick(player)}
//                 >
//                     {player.name}
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default PlayerButtons;
// import React, { useState } from 'react';

// let players = [
//     { name: 'meir', scores: 0 },
//     { name: 'moshe', scores: 0 },
//     { name: 'roni', scores: 0 },
//     { name: 'yoni', scores: 0 },
// ];

// const PlayerButtons = ({ board, setBoard }) => {
//     const [selectedPlayers, setSelectedPlayers] = useState([]);

//     const handleButtonClick = (player, index) => {
//         if (!selectedPlayers.includes(player)) {
//             setBoard((prevBoard) => [...prevBoard, { ...player, myTurn: index === 0 }]);
//             setSelectedPlayers((prevPlayers) => [...prevPlayers, player]);
//         }
//     };

//     return (
//         <div className='buttonsContainer'>
//             {players.map((player, index) => (
//                 <div
//                     key={index}
//                     className={`playerButton ${selectedPlayers.includes(player) ? 'disabled' : ''}`}
//                     onClick={() => handleButtonClick(player, index)}
//                 >
//                     {player.name}
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default PlayerButtons;
