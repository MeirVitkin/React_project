import React from 'react';

const PlayerList = ({players}) => {
  
  // Step 1: Calculate Average
  const playersWithAverage = players.map(player => {
    const average = player.scores.reduce((sum, score) => sum + score, 0) / player.scores.length;
    return { ...player, average };
  });

  // Step 2: Find Top 3
  const top3Players = playersWithAverage
    .sort((a, b) => b.average - a.average) // Sort in descending order
    .slice(0, 3); // Take the top 3

  return (
    <div>
      <h2 className='p'>Top 3 Players: </h2>
      
        {top3Players.map((player, index) => (
          <p className='p' key={index}>{player.name} - Average: {player.average} </p>
        ))}
      
    </div>
  );
};

export default PlayerList;
