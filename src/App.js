import { HooksApi, DemoState } from './components'
import QRCode from 'qrcode.react'
import logo from './images/logo.jpg'
// import QRCode from "qrcode";
import {useEffect} from "react";

function App() {
// useEffect(()=>{
//     new QRCode('qrcode', {
//         text: 'https://welink.huaweicloud.com/s/VkheCk8a',
//         width: 256,
//         height: 256,
//         colorDark: '#000000',
//         colorLight: '#ffffff',
//         correctLevel: QRCode.CorrectLevel.H
//     })
// },[])

  return (
    <div className="App">
      <h1>this is demo</h1>
        <HooksApi />
        {/*<DemoState />*/}
        <div id="qrcode" style={{
            width: '280px',
            height: '280px',
            boxSizing: 'border-box',
            padding: '10px',
            border: '6px solid #0b1ce7',
            borderRadius: '25px'
        }}>
            <QRCode
              id="qrCode"
              value="https://welink.huaweicloud.com/s/VkheCk8a"
              level="H"
              size={250}
              fgColor="#000000"
              style={{margin: 'auto'}}
              // includeMargin = {true}
              imageSettings={{
                  src: logo,
                  height: 80,
                  width: 80,
                  excavate: true,

              }}
            />
        </div>
    </div>
  );
}

export default App;