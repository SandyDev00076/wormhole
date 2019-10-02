import React, { useState } from 'react';
import './TalkingPage.css';
import {
    FormControl,
    Modal,
    InputGroup,
    Button
} from 'react-bootstrap';
import { getProcessData } from '../../state/providers/processProvider';
import * as QRCode from 'qrcode.react';

export const TalkingPage = () => {
    const [qrCode, showHideQr] = useState(false);
    const [text, setText] = useState('');
    return (
        <div className="talkingpage">
            <div className="actionbar">
                <div className="actionbtn">
                    <i className="fas fa-plus"></i>
                </div>
                <InputGroup className="textarea">
                    <FormControl
                        placeholder="Enter Text Here"
                        onChange={(event) => setText(event.target.value)}/>
                    <InputGroup.Append>
                        <Button variant="outline-secondary" onClick={sendText}>Send</Button>
                    </InputGroup.Append>
                </InputGroup>
                <div className="actionbtn" onClick={showQrCode}>
                    <i className="fas fa-qrcode"></i>
                </div>
            </div>
            <QrCode show={qrCode} onHide={hideQrCode}/>
        </div>
    );

    function showQrCode() {
        showHideQr(true);
    }

    function hideQrCode() {
        showHideQr(false);
    }

    function sendText() {
        // make an API call to send the text.
        console.log(text);
    }
}

export const QrCode = (props) => {
    return (
        <Modal show={props.show} onHide={props.onHide} centered>
            <Modal.Body style={{ textAlign: 'center' }}>
                <QRCode value={getProcessData('ticket')} />
                <br />
                <br />
                Scan this QR Code to Connect
            </Modal.Body>
        </Modal>
    )
}