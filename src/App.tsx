import React, { useEffect } from "react";
import "./App.css";
import { QRCode, MobileRem } from "./components";
import { isPhone } from "./utils/common";

function App() {
    const isMobile = isPhone();
    useEffect(() => {
        console.log(document.getElementsByTagName("html")[0].style);
        document.getElementsByTagName("html")[0].style.fontSize = document.body.clientWidth / 7.5 + "px";
    }, []);
    return (
        <React.Fragment>
            {isMobile ? (
                <div className="mobile-page">
                    <MobileRem></MobileRem>
                </div>
            ) : (
                <div className="App">
                    this is ts mobile demo
                    <QRCode />
                </div>
            )}
        </React.Fragment>
    );
}

export default App;
