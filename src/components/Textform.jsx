import React, { useState } from "react";

const Textform = (props) => {
    const [text, setText] = useState("");

    let onUpperCaseClick = () => {
        if (text === "") {
            props.setAlert("Enter text first before performing operations!!!");
            setTimeout(() => {
                props.setAlert(null);
            }, 2000);
            return;
        }
        setText(text.trim().toUpperCase());
    };
    let onLowerCaseClick = () => {
        if (text === "") {
            props.setAlert("Enter text first before performing operations!!!");
            setTimeout(() => {
                props.setAlert(null);
            }, 2000);
            return;
        }
        setText(text.trim().toLowerCase());
    };

    function textOnChange(event) {
        setText(event.target.value);
    }

    let getWords = () => {
        return text.trim().length === 0 ? 0 : text.trim().split(" ").length;
    };

    let getCharacters = () => {
        return text.trim().length;
    };

    let onclearTextClick = () => {
        if (text === "") {
            props.setAlert("Enter text first before performing operations!!!");
            setTimeout(() => {
                props.setAlert(null);
            }, 2000);
            return;
        }
        setText("");
    };

    let currentWords = getWords();

    let buttonClassName = `btn btn-primary mx-1 my-1`;

    return (
        <>
            <div
                className={`container  bg-${props.colorMode} text-${props.textColor} `}
            >
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea
                        autoFocus={true}
                        className={`form-control border-${props.textColor}`}
                        id="myBox"
                        rows="8"
                        onChange={textOnChange}
                        value={text}
                        placeholder="Start Typing"
                        style={{ resize: "none" }}
                    ></textarea>
                </div>
                <button className={buttonClassName} onClick={onUpperCaseClick}>
                    Transform to uppercase
                </button>
                <button className={buttonClassName} onClick={onLowerCaseClick}>
                    Transform to lowercase
                </button>
                <button className={buttonClassName} onClick={onclearTextClick}>
                    Clear Text
                </button>
            </div>
            <hr />
            <div className={`container`}>
                <h1>Text Summary</h1>
                <p>
                    Your text have
                    <b>
                        <i>{" " + currentWords}</i>
                    </b>
                    {" words and "}
                    <b>
                        <i>{getCharacters()}</i>
                    </b>
                    {" characters"}
                </p>
                <p>
                    This will take{" "}
                    <b>
                        <i>{(currentWords * 0.005).toFixed(2) + " "}</i>
                    </b>
                    minute(s) to read
                </p>
            </div>
        </>
    );
};

export default Textform;
