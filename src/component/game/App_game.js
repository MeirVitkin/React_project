import React, { useState } from 'react'
import Gamer from './Gamer';
import Header from './Header';
const players = [
    
    {
        name: 'user1',
        scores: [12, 13, 14, 15, 16, 17],
        myTurn: 'true',
        id:0
    },
    {
        name: 'user2',
        scores: [12, 13, 14, 15],
        myTurn: 'false',
        id:1
    },
    {
        name: 'user3',
        scores: [12, 13, 14, 15, 16, 17],
        myTurn: 'false',
        id:2
    },
    {
        name: 'user4',
        scores: [12, 13, 14, 15, 16, 17],
        myTurn: 'false',
        id:3
    },
]
const storage = (JSON.parse(localStorage.getItem('players'))) 
if(storage ==null){

    localStorage.setItem('players', JSON.stringify(players));
}


const App_game = () => {

    const [playersParseArray, setPlayersParseArray] = useState(JSON.parse(localStorage.getItem('players'))) || [];
    const [finishGame,setFinishedGame] = useState(false);
    const [isInputVisible, setIsInputVisible] = useState(true);

    const [playersArray, setPlayersArray] = useState([]);


    const updatePlayersArray = (newPlayer) => {
        setPlayersArray(prevArrey => [...prevArrey, newPlayer]);
    };

    const removePlayersArray = () => {
        setPlayersArray(prevBoard => prevBoard =[]);
    };
    const updateLocalStorage = (obj) => {
        console.log(obj);
        const updatedPlayersArray = [...playersParseArray];
    
        obj.forEach((player) => {
            const { index, steps } = player;
    
            if (!updatedPlayersArray[index].scores.includes(steps)) {
                updatedPlayersArray[index].scores.push(steps);
            }
        });
    
        setPlayersParseArray(updatedPlayersArray);
    
        localStorage.setItem('players', JSON.stringify(updatedPlayersArray));
    };
    
    

    return (
        <>
            <Header updatePlayersArray={updatePlayersArray}
                          setPlayersParseArray={setPlayersParseArray}
                          playersParseArray={playersParseArray}
                          isInputVisible={isInputVisible}
                          setIsInputVisible={setIsInputVisible}
                          />
            <div className='gameContainer'>
                <div>

                </div>
                {playersArray.map((player, index) => (
                    <div className='player' key={index}>
                        <Gamer idplayer={index}
                            player={player}
                            board={playersArray}
                            removePlayersArray={removePlayersArray}
                            updateLocalStorage ={updateLocalStorage}
                            storage ={playersParseArray}
                            setIsInputVisible={setIsInputVisible}
                        />
                    </div>
                ))}
            </div>
        </>
    )
}

export default App_game