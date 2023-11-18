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
