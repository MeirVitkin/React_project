import React, { useState, useEffect } from 'react';

let finshedPlyearsIndex = [];
let corrent = 0;
let gameFinifhed = false;



const Gamer = ({ player, idplayer, board, removePlayersArray }) => {

    const [playersParseArray, setPlayersParseArray] = useState([]);
    let rnd = Math.floor(Math.random() * 100);

    const [rndNum, setRndNum] = useState(rnd);
    const [steps, setSteps] = useState(0);

    const setCorrent = (player) => {
        finshedPlyearsIndex.push(player)
    };

    let theBoardLength = board.length;

    useEffect(() => {
        const storedPlayers = JSON.parse(localStorage.getItem('players')) || [];
        setPlayersParseArray(storedPlayers);
    }, []);
    const playerToUpdateIndex = playersParseArray.findIndex((p) => p.name === player.name);
    console.log(playerToUpdateIndex);
    console.log(playersParseArray);







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
                        {

                            playersParseArray[playerToUpdateIndex].scores.push(steps)
                        }

                        <h3>{steps} steps</h3>
                        {!gameFinifhed ? (
                            <>
                                {setCorrent(idplayer)}
                                <button onClick={() => {
                                    removePlayersArray(idplayer);
                                }}>quit</button>

                                <button>new game</button><br />
                            </>
                        ) : null}
                    </>)}
            </div>
        </div>
    )
}

export default Gamer;