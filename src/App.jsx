import React, { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
function App() {
    const [colorMode, setcolorMode] = useState("dark");
    const [textColor, settextColor] = useState("light");
    const toggleTheme = () => {
        setcolorMode(colorMode === "light" ? "dark" : "light");
        settextColor(textColor === "dark" ? "light" : "dark");
        document.body.style.backgroundColor =
            colorMode === "light" ? "white" : "black";
    };

    document.body.style.backgroundColor =
        colorMode === "light" ? "white" : "black";
    let containerStyle = {
        border: `1px solid ${colorMode === "light" ? "black" : "white"}`,
        borderRadius: `10px`,
    };

    const [alert, setAlert] = useState(null);

    return (
        <>
            <Navbar
                title="hello"
                aboutText="external link"
                textColor={textColor}
                colorMode={colorMode}
                toggleTheme={toggleTheme}
            />
            <Alert alertMessage={alert} />
            <div
                className={`container bg-${colorMode} text-${textColor} p-2  mt-4`}
                data-bs-theme={`${colorMode}`}
                style={containerStyle}
            >
                <Textform
                    heading="Enter the text"
                    textColor={textColor}
                    colorMode={colorMode}
                    toggleTheme={toggleTheme}
                    setAlert={setAlert}
                />
                {/* <About /> */}
            </div>
        </>
    );
}

export default App;
