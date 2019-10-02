import React, { useState } from 'react';
import './FirstPage.css';
import {
    Button
} from 'react-bootstrap';
import * as QRCode from 'qrcode.react';
import { setTicket } from '../../state/actions/processActions';
import { generateTicket } from '../../utils/ticketGenerator';
import { getProcessData } from '../../state/providers/processProvider';

export const FirstHelloPage = (props) => {
    const [qrcode, toggleQrCode] = useState(false);
    return (
        <div className="firstpage">
            Hi There!
            <br />
            Welcome to <span className="protitle">Wormhole</span>!
            <br />
            <p className="description">Using Wormhole, you can connect and share with multiple devices!</p>
            {(!qrcode)
            ?
            <>
                <Button variant="outline-info" onClick={generateATicket}>Connect</Button>
                &nbsp; / &nbsp;
                <Button variant="outline-success" onClick={goToTalkingPage}>Create</Button>
            </>
            :
            <>
                <br />
                <br />
                <QRCode value={getProcessData('ticket')} />
                <br />
                <p className="description">Scan this QR Code from your Wormhole App</p>
                <br />
                <Button onClick={cancelQrCode} variant="outline-secondary">Go Back</Button>
            </>
            }
        </div>
    );

    function generateATicket() {
        setTicket(generateTicket());
        toggleQrCode(true);
    }

    function cancelQrCode() {
        setTicket('');
        toggleQrCode(false);
    }

    function goToTalkingPage() {
        props.history.push('/talk');
    }
}