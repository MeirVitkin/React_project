import React from 'react'
import Gamer from './Gamer'



const CreatePlayer = ({ player, board, setBoard }) => {

  return (
    <div className='Player'>
     {setBoard(board =>[...board,player]  )} 
    </div>
  )
}

export default CreatePlayer

// const CreatePlayr = ({ player, board, setBoard }) => {
//   const addGamerToBoard = () => {
//     setBoard(prevBoard => [...prevBoard, <Gamer key={player} player={player} />]);
//   };

//   return (
//     <div className='Player'>
//       <button onClick={addGamerToBoard}>Add Gamer</button>
//     </div>
//   );
// }

// import React, { useState } from 'react';
// import PlayerButtons from './PlayerButtons'; // assuming PlayerButtons is a separate component
// import Gamer from './Gamer'; // assuming Gamer is a separate component

// const App_game = () => {
//   const [board, setBoard] = useState([]);

//   return (
//     <>
//       <PlayerButtons board={board} setBoard={setBoard} />
//       <div>
//         {board.map((player, index) => (
//           <Gamer key={index} player={player} />
//         ))}
//       </div>
//     </>
//   );
// }

// export default App_game;

