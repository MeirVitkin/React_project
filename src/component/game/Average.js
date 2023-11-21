import React from 'react';

const medals = [
  '🥇',
  '🥈',
  '🥉'
];

const Average = ({ players }) => {
  const playersWithAverage = players.map(player => {
    const average = (player.scores.reduce((sum, score) => sum + score, 0) / player.scores.length).toFixed(2);
    return { ...player, average: Number(average) };
  });

  const bottom3Players = playersWithAverage
    .sort((a, b) => a.average - b.average)
    .slice(0, 3);

  return (
    <header className='p'>
      <h3 className='theAvarageHeader'>Top 3 :</h3>
      {bottom3Players.map((player, index) => (
        <h3 className='p' key={index}>{player.name}`s average: {player.average} steps{medals[index]}</h3>
      ))}
    </header>
  );
};

export default Average;