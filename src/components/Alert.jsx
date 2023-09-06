import React from "react";
function Alert(props) {
    return (
        props.alertMessage && (
            <div
                className="alert alert-warning alert-dismissible fade show text-center ++"
                role="alert"
            >
                <b>{props.alertMessage}</b>
            </div>
        )
    );
}

export default Alert;
