import React, { useEffect } from "react";
import "./App.css";
import { QRCode, MobileRem, MapAndObj } from "./components";
import { isPhone, remAndFontSize } from "./utils/common";

function App() {
    const isMobile = isPhone();
    useEffect(() => {
        isMobile && remAndFontSize();
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
                    {/*<QRCode />*/}
                    <MapAndObj />
                </div>
            )}
        </React.Fragment>
    );
}

export default App;
