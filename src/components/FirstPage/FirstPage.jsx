import React, { useState } from 'react';
import './FirstPage.css';
import {
    Button
} from 'react-bootstrap';

export const FirstHelloPage = () => {
    const [ticket, setTicket] = useState(0);

    return (
        <div className="firstpage">
            Hi There!
            <br />
            Welcome to <span className="protitle">Wormhole</span>!
            <br />
            <p className="description">Using Wormhole, you can connect and share with multiple devices!</p>
            <Button variant="outline-info" onClick={generateATicket}>Connect</Button>
            &nbsp; / &nbsp;
            <Button variant="outline-success">Create</Button>
        </div>
    );

    function generateATicket() {
        setTicket(Math.floor(Math.random()*1000));
        console.log('ticket', ticket);
    }
}