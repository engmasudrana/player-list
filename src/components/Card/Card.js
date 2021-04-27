import React from 'react';
import './Card.css';

const Card = (props) => {
    const card = props.card;

    const selectedPlayerName = card.reduce((player, selectedPlayer) => player + selectedPlayer.name + ', ', [])

    let totalSalary = 0;
    for (let i = 0; i < card.length; i++) {
        const player = card[i];
        totalSalary = totalSalary + Number(player.salary);
    }
    return (
        <div className="shadow-sm position-fixed ml-5 mt-3 card-box">
            <h5>Player Added: {card.length}</h5><hr />
            <h6>Selected Player: {selectedPlayerName}</h6>
            <h6>Total Salary: ${totalSalary}</h6>
        </div>
    );
};

export default Card;