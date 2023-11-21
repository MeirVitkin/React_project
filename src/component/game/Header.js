import React, { useState } from 'react';
import Average from './Average';

const Header = ({ updatePlayersArray, setPlayersParseArray, playersParseArray, isInputVisible, setIsInputVisible }) => {

    const [playerName, setPlayerName] = useState('');
    const [playersArray, setPlayersArray] = useState([]);

    const handleSubmitClick = () => {
        setPlayersArray([...playersArray, playerName]);
        setPlayerName('');
    };

    const handleNameChange = (e) => {
        setPlayerName(e.target.value);
    };

    const handleButtonClick = () => {
        setIsInputVisible(false);

        playersArray.forEach((playerName) => {

            const existingPlayer = playersParseArray.find((player) => player.name === playerName);

            if (!existingPlayer) {
                const newPlayer = {
                    name: playerName,
                    scores: [],
                    myTurn: true,
                    id: playersParseArray.length
                };
                setPlayersParseArray(prevArrey => [...prevArrey, newPlayer]);

                updatePlayersArray(newPlayer);

                setPlayerName('');
            } else {
                updatePlayersArray(existingPlayer);
            }
        });
        setPlayersArray([])
    };

    return (
        <div>
            <Average players={playersParseArray} />
            {isInputVisible && (
                <div className='registerContainer'>
                    <input className='input'
                        type="text"
                        placeholder="Enter Player Name"
                        value={playerName}
                        onChange={handleNameChange}
                    />

                    <button className='submitButton' onClick={handleSubmitClick}>Submit</button>
                    <br></br>
                    <div onClick={handleButtonClick}>
                        {playersArray.length > 0 ? (
                            <span className='startTheGame'>Start the game</span>
                        ) : null}
                    </div>

                    <div className='prevShowContainer'>
                        {playersArray.map((name, index) => (
                            <h3 className='prevShow' key={index}>{name}
                                <p>welcome</p>
                            </h3>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;
