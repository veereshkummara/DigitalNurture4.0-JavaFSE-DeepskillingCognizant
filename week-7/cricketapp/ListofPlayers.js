import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: 'Virat', score: 85 },
    { name: 'Rohit', score: 45 },
    { name: 'Rahul', score: 72 },
    { name: 'Gill', score: 50 },
    { name: 'Shreyas', score: 78 },
    { name: 'Hardik', score: 90 },
    { name: 'Jadeja', score: 65 },
    { name: 'Ashwin', score: 30 },
    { name: 'Bumrah', score: 40 },
    { name: 'Shami', score: 55 },
    { name: 'Siraj', score: 20 }
  ];

  const filteredPlayers = players.filter(player => player.score >= 70);

  return (
    <div>
      <h2>Players with score ≥ 70</h2>
      <ul>
        {filteredPlayers.map((p, index) => (
          <li key={index}>{p.name} - {p.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
