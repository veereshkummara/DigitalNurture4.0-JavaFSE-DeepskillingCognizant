import React from 'react';

const IndianPlayers = () => {
  const T20players = ['Virat', 'Rohit', 'Surya', 'Jadeja'];
  const RanjiTrophy = ['Pujara', 'Iyer', 'Rahane'];

  const merged = [...T20players, ...RanjiTrophy];
  const [oddTeam, evenTeam] = [merged.filter((_, i) => i % 2 !== 0), merged.filter((_, i) => i % 2 === 0)];

  return (
    <div>
      <h2>Even Team Players</h2>
      <ul>{evenTeam.map((name, index) => <li key={index}>{name}</li>)}</ul>
      <h2>Odd Team Players</h2>
      <ul>{oddTeam.map((name, index) => <li key={index}>{name}</li>)}</ul>
    </div>
  );
};

export default IndianPlayers;
