import React, { useState } from 'react';
import './FirstPage.css';
import {
    Button
} from 'react-bootstrap';
import { setTicket } from '../../state/actions/processActions';
import { generateTicket, checkCode } from '../../utils/ticketGenerator';
import { scanQrCode, stopScanning, resumeScanning } from '../../utils/scanQrCode';
import { MyToast } from '../../widgets/Toast/Toast';
import { AppConstants } from '../../environment/constants';
import { postData } from '../../services/http.service';

export const FirstHelloPage = (props) => {
    const [scanning, setScanning] = useState(false);
    const [invalidQrCode, setInvQrCodeFlag] = useState(false);
    
    return (
        <div className="firstpage">
            {(!scanning)
            ?
            <>
                Hi There!
                <br />
                Welcome to <span className="protitle">Wormhole</span>!
                <br />
                <p className="description">Using Wormhole, you can connect and share with multiple devices!</p>
                <Button variant="outline-info" onClick={connectToOther}>Connect</Button>
                &nbsp; / &nbsp;
                <Button variant="outline-success" onClick={createASession}>Create</Button>
            </>
            :
            <>
                <div className="scan-instruction">
                    Scan the QR code from a Wormhole App to connect
                </div>
                <div className="scan-actionbtns">
                    <Button onClick={cancelScanning} variant="outline-dark">
                        Cancel Scan
                    </Button>
                </div>
            </>
            }
            {/* Toasts */}
            <>
                <MyToast
                    show={invalidQrCode}
                    flagSetter={setInvQrCodeFlag}
                    delay={2000}
                    title="Invalid QR Code"
                    message="Invalid since code is not recognized by Wormhole"
                />
            </>
        </div>
    );

    function connectToOther() {
        setScanning(true);
        scanQrCode(code => {
            if (checkCode(code)) {
                setTicket(code);
                cancelScanning();
                props.history.push('/talk');
            } else {
                setInvQrCodeFlag(true);
            }
        });
    }

    function cancelScanning() {
        setScanning(false);
        stopScanning(() => {
           console.log('Scanning stopped'); 
        });
    }

    function createASession() {
        const code = generateTicket();
        setTicket(code);

        // create a session
        postData(AppConstants.sessionUrl, { code }).then(res => {
            console.log(res);
            props.history.push('/talk');
        }).catch(err => console.log(err));

    }
}