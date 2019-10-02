import React from 'react';
import './TalkingPage.css';
import { FormControl } from 'react-bootstrap';

export const TalkingPage = () => {
    return (
        <div className="talkingpage">
            <div className="actionbar">
                <div className="actionbtn">
                    <i className="fas fa-plus"></i>
                </div>
                <FormControl placeholder="Enter Text Here" className="textarea"/>
                <div className="actionbtn">
                    <i className="fas fa-qrcode"></i>
                </div>
            </div>
        </div>
    );
}