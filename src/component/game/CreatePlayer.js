import React from 'react'

const CreatePlayer = ({ player, board, setBoard }) => {

  return (
    <div className='Player'>
     {setBoard(board =>[...board,player]  )} 
    </div>
  )
  
}

export default CreatePlayer
