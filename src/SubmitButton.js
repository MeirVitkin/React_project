import React, { useState } from 'react';

const SubmitButton = ({ updatePlayersArray }) => {
    const [playerName, setPlayerName] = useState('');
    const [playersArray, setPlayersArray] = useState([]);
    const [isInputVisible, setIsInputVisible] = useState(true);

    const handleSubmitClick = () => {
        setPlayersArray([...playersArray, playerName]);
        setPlayerName('');
    };

    const handleNameChange = (e) => {
        setPlayerName(e.target.value);
    };

    const handleButtonClick = () => {
        setIsInputVisible(false);

        const playersParseArray = JSON.parse(localStorage.getItem('players')) || [];

        playersArray.forEach((playerName) => {
            const existingPlayer = playersParseArray.find((player) => player.name === playerName);

            if (!existingPlayer) {
                const newPlayer = {
                    name: playerName,
                    scores: [],
                    myTurn: true,
                    id: playersParseArray.length
                };

                playersParseArray.push(newPlayer);

                localStorage.setItem('players', JSON.stringify(playersParseArray));

                updatePlayersArray(newPlayer);

                setPlayerName('');
            } else {
                updatePlayersArray(existingPlayer);
            }
        });
    };

    return (
        <div>
            {isInputVisible && (
                <div className='registerContainer'>
                    <input className='input'
                        type="text"
                        placeholder="Enter Player Name"
                        value={playerName}
                        onChange={handleNameChange}
                    />
                    <button className='submitButton' onClick={handleSubmitClick}>Submit</button>
                    <div className='startTheGame' onClick={handleButtonClick}>
                        Start the game
                    </div>
                    <div className='prevShowContainer'>
                        {playersArray.map((name, index) => (
                            <h3 className='prevShow' key={index}>{name}</h3>
                        ))}
                    </div>
                </div>

            )}
        </div>
    );
};

export default SubmitButton;
