import React, {useEffect} from 'react';
import QRCode from "qrcode";

const Qrcode = () => {
    useEffect(()=>{
        new QRCode(document.getElementById("qrcode"), {
            text: "http://jindo.dev.naver.com/collie",
            width: 128,
            height: 128,
            colorDark : "#000000",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H,
        });
    },[])
    return (
        <div id="qrcode">

        </div>
    );
};

export default Qrcode;