import React, { useState } from 'react';

const Gamer = ({ player }) => {

    let rnd = Math.floor(Math.random() * 100);

    const [rndNum, setRndNum] = useState(rnd);
    const [steps, setSteps] = useState(0);

    return (
        <div>
            <h1>{`Hi ${player.name}`}</h1>
            <button id="+" onClick={() => {
                setRndNum(rndNum + 1)
                setSteps(steps + 1)
            }}>
                +1
            </button>
            <button id="-" onClick={() => {
                setRndNum(rndNum - 1)
                setSteps(steps + 1)
            }}>
                -1
            </button>
            <button id="*" onClick={() => {
                setRndNum(rndNum * 2)
                setSteps(steps + 1)
            }}>
                *2
            </button>
            <button id="/" onClick={() => {
                setRndNum(rndNum / 2)
                setSteps(steps + 1)
            }}>
                /2
            </button>
            <br /><br />
            your corrent number = {rndNum}
            <br /><br />
            steps = {steps}
        </div>
    )
}

export default Gamer