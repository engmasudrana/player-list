import React from 'react';
import './Player.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';

const Player = (props) => {
    const { name, image, role, salary } = props.player;

    return (
        <div className="player-card">
            <img className="player-img" src={image} alt="" />
            <h6>Name: {name}</h6>
            <h6>Role: {role}</h6>
            <h6>Salary: ${salary}</h6>

            <Button onClick={() => props.addPlayer(props.player)}
            className="btn btn-success btn-sm mt-2">
            <FontAwesomeIcon icon={faPlus} /> Add to Team</Button>
        </div>
    );
};

export default Player;