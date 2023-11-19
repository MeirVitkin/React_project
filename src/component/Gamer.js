import React, { useState, useEffect } from 'react';

let finshedPlyearsIndex = [];
let corrent = 0;
let gameFinifhed = false;



const Gamer = ({ player, idplayer, board, removePlayersArray, updateLocalStorage,storage }) => {

    let rnd = Math.floor(Math.random() * 100);

    const [rndNum, setRndNum] = useState(rnd);
    const [steps, setSteps] = useState(0);
    const [winnings, setWinngs] = useState(player.scores);

    const setCorrent = (player) => {
        finshedPlyearsIndex.push(player)
    };

    let theBoardLength = board.length;

    const playerToUpdateIndex = storage.findIndex((p) => p.name === player.name);
    console.log(playerToUpdateIndex);

    for (let i = 0; i < theBoardLength; i++) {
        for (let j = 0; j < finshedPlyearsIndex.length; j++) {
            if (corrent === finshedPlyearsIndex[j]) {
                corrent = (corrent + 1) % theBoardLength;
                break;
            }
            if (i === theBoardLength - 1 && finshedPlyearsIndex.length > 0 && j === finshedPlyearsIndex.length - 1) {
                gameFinifhed = !gameFinifhed
            }
        }
    }

    return (
        <div >
            <h1>{`Hi ${player.name}`}</h1>
            <h3>your corrent number = {rndNum}</h3>
            <h2>{rndNum === 100 ? 'you finished!' : null}</h2>
            <h3>steps = {steps}</h3>



            <div className='mathButtonsContainer'>
                {rndNum !== 100 ? (
                    <>
                        <button className="plus" onClick={() => {
                            if (idplayer === corrent) {
                                corrent = (corrent + 1) % theBoardLength;
                                setRndNum(rndNum + 1)
                                setSteps(steps + 1)
                            }
                        }}>
                            +1
                        </button>
                        <button className="minus" onClick={() => {
                            if (idplayer === corrent) {
                                corrent = (corrent + 1) % theBoardLength;
                                setRndNum(rndNum - 1)
                                setSteps(steps + 1)
                            }
                        }}>
                            -1
                        </button>
                        <button className="multiply" onClick={() => {
                            if (idplayer === corrent) {
                                corrent = (corrent + 1) % theBoardLength;
                                setRndNum(rndNum * 2)
                                setSteps(steps + 1)
                            }
                        }}>
                            *2
                        </button>
                        <button className="division" onClick={() => {
                            if (idplayer === corrent) {
                                corrent = (corrent + 1) % theBoardLength;
                                setRndNum(Math.floor(rndNum / 2))
                                setSteps(steps + 1)
                            }

                        }}>
                            /2
                        </button>
                    </>
                ) : (
                    <>
                        { setCorrent(idplayer) }
                        <h3>{steps} steps</h3>
                        {!gameFinifhed ? (
                            <>
                                <button onClick={() => {
                                    updateLocalStorage(playerToUpdateIndex, steps) 
                                    // removePlayersArray(idplayer)

                                }}>quit</button>

                                <button>new game</button><br />
                            </>
                        ) : null}
                    </>)}
                        <h4>scores:{winnings.map((winn, index) => (
                            <p className='p' key={index}>{winn}  </p>
                        ))}</h4>
            </div>
        </div>
    )
}

export default Gamer;