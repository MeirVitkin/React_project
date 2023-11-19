import React, { useState } from 'react';

const Header = () => {
  const [isInputVisible, setIsInputVisible] = useState(true);

  const handleDivClick = () => {
    setIsInputVisible(false);
  };

  return (
    <div>
      {isInputVisible && (
        <div>
         
        </div>
      )}

      <div onClick={handleDivClick} style={{ cursor: 'pointer', marginTop: '10px' }}>
        Start the game
      </div>
    </div>
  );
};

export default Header;
