import React from 'react';
import { Toast } from "react-bootstrap";

export const MyToast = (props) => {
    return (
        <>
        {(props.show)
        ?
        <Toast style={{
            position: "absolute",
            bottom: 10,
            left: 0,
            right: 0,
            margin: "auto",
            zIndex: 10
        }} autohide show={props.show} delay={props.delay} onClose={closeIt}>
            <Toast.Header closeButton={false}>
                <strong>{props.title}</strong>
            </Toast.Header>
            <Toast.Body>
                {props.message}
            </Toast.Body>
        </Toast>
        :
        null
        }
        </>
    )

    function closeIt() {
        props.flagSetter(false);
    }
}