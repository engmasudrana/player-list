import React, { useEffect, useState } from 'react';
import './TeamSection.css';
import { } from 'react-bootstrap';
import FakeData from '../FakeData/data.json';
import Player from '../Player/Player';
import Card from '../Card/Card';

const TeamSection = () => {
    const [player, setPlayer] = useState([]);

    const [card, setCard] = useState([]);

    useEffect(() => {
        setPlayer(FakeData)
    }, []);

    const addPlayer = (player) => {
        const newCard = [...card, player];
        setCard(newCard);
    }
    return (
        <div className="container-fluid d-flex">
            <div className="col-lg-8 player-container">
                {
                    player.map(player =>
                        <Player player={player}
                            addPlayer={addPlayer}
                            key={player.name}>
                        </Player>)
                }
            </div>

            <div className="col-lg-4 card-container">
                <Card card={card}></Card>
            </div>
        </div>
    );
};

export default TeamSection;