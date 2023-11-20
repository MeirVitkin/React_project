import React, { useState } from 'react';
import App_game from './component/game/App_game';
import AppComputer from './component/keyboard/AppComputer';

const AppSwitch = () => {
    const [selectedApp, setSelectedApp] = useState(null);

    return (
        <>
            <div className='swichContainer'>
                <div className='enterButton' onClick={() => setSelectedApp('getTo100')}>
                    get to 100
                </div>
                <div className='enterButton' onClick={() => setSelectedApp('keyboard')}>
                    keyboard
                </div>
            </div>

                {selectedApp === 'getTo100' && <App_game />}
                {selectedApp === 'keyboard' && <AppComputer />}
        </>
    );
};

export default AppSwitch;
