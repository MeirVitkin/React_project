import React, { useState } from 'react';


let finshedPlyearsIndex =[];
let corrent = 0;



const Gamer = ({ player, idplayer, correntPlayer, setCorrentPlayer, board }) => {
    
    let rnd = Math.floor(Math.random() * 100);
    const [rndNum, setRndNum] = useState(rnd);
    const [steps, setSteps] = useState(0);
    
    let theBoardLength = board.length; 
    
    for (let i = 0; i < theBoardLength; i++) {
        for (let j = 0; j < finshedPlyearsIndex.length; j++) {
            if (corrent === finshedPlyearsIndex[j]) {
                corrent = (corrent + 1) % 4;
                break;
            }
        }
    }
    
    return (
        <div >
            <h1>{`Hi ${player.name}`}</h1>
            <h3>your corrent number = {rndNum}</h3>
            <h2>{rndNum === 100 ? 'winner!' : null}</h2>
            <h3>steps = {steps}</h3>

            <div className='mathButtonsContainer' style={idplayer === corrent ? { backgroundColor: 'rgb(00, 155, 390)' } : null}>
                {rndNum !== 100 ? (
                    <>
                        <button className="plus" onClick={() => {
                            if (idplayer === corrent) {
                                corrent = (corrent + 1) % theBoardLength;   
                                setRndNum(rndNum + 1)
                                setSteps(steps + 1)
                                // setCorrentPlayer((correntPlayer + 1) % theBoardLength)
                            }

                        }}>
                            +1
                        </button>
                        <button className="minus" onClick={() => {
                            if (idplayer === corrent) {
                                corrent = (corrent + 1) % theBoardLength;  
                                setRndNum(rndNum - 1)
                                setSteps(steps + 1)
                                // setCorrentPlayer((correntPlayer + 1) % theBoardLength)
                            }
                        }}>
                            -1
                        </button>
                        <button className="multiply" onClick={() => {
                            if (idplayer === corrent) {
                                corrent = (corrent + 1) % theBoardLength;  
                                setRndNum(rndNum * 2)
                                setSteps(steps + 1)
                                // setCorrentPlayer((correntPlayer + 1) % theBoardLength)
                            }
                        }}>
                            *2
                        </button>
                        <button className="division" onClick={() => {
                            if (idplayer === corrent) {
                                corrent = (corrent + 1) % theBoardLength;  
                                setRndNum(Math.floor(rndNum / 2))
                                setSteps(steps + 1)
                                // setCorrentPlayer((correntPlayer + 1) % theBoardLength)
                            }

                        }}>
                            /2
                        </button>
                    </>
                ) : (<>
                                
                         {(corrent += 1) % theBoardLength}
                        <button onClick={() => { setSteps(steps) }}>quit</button>
                        <button>new game</button>
                       
                </>)}

            </div>

        </div>

    )
}

export default Gamer;