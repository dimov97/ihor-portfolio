import React, {memo} from 'react';
import "./modal.css"
import {Alert} from "@mui/material";

export const Modal = memo(({active, setActive}) => {
    if (!active) return null
    return (
        <div className={"modal"} onClick={() => setActive(false)}>
            <div className="modal__content">
                <Alert variant="filled" severity="success">
                    Message Send
                </Alert>
            </div>
        </div>
    );
});
