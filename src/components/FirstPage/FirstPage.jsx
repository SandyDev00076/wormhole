import React from 'react';
import './FirstPage.css';
import {
    Button
} from 'react-bootstrap';
import { setTicket } from '../../state/actions/processActions';
import { generateTicket } from '../../utils/ticketGenerator';
import { scanQrCode } from '../../utils/scanQrCode';

export const FirstHelloPage = (props) => {
    return (
        <div className="firstpage">
            Hi There!
            <br />
            Welcome to <span className="protitle">Wormhole</span>!
            <br />
            <p className="description">Using Wormhole, you can connect and share with multiple devices!</p>
            <>
                <Button variant="outline-info" onClick={connectToOther}>Connect</Button>
                &nbsp; / &nbsp;
                <Button variant="outline-success" onClick={goToTalkingPage}>Create</Button>
            </>
        </div>
    );

    function connectToOther() {
        scanQrCode(code => {
            alert(`Got a code ${code}`);
        });
    }

    function goToTalkingPage() {
        generateATicket();
        props.history.push('/talk');
    }

    function generateATicket() {
        setTicket(generateTicket());
    }
}