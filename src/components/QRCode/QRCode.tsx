import React from 'react';
import QRCode from 'qrcode.react'
import logo from './logo.jpg'
import './qrcode.css'

interface props {
    className?: string
    value: string
    renderAs?: 'svg'|'canvas'
    size: number
    bgColor?: string
    fgColor?: string
    level?: string
    includeMargin?: boolean
    imageSettings?: {
        src: string
        width: number
        height: number
        excavate: boolean
        x?: number
        y?: number
    }
}

const QrCode = (props: any) => {
    const {
        value,
        renderAs,
        size,
        bgColor,
        fgColor,
        level,
        includeMargin,
        imageSettings
    } = props;
    return (
        <div className="qrcode">
            <div className="qrcode-content">
                <QRCode
                    value = {"https://www.logosc.cn/logo/"}
                    size={400}
                    renderAs={'canvas'}
                    bgColor={'#fff'}
                    fgColor={'#000'}
                    level={'H'}
                    includeMargin={false}
                    imageSettings={{
                        src: logo,
                        width: 100,
                        height: 100,
                        excavate: true
                    }}
                />
            </div>
        </div>
    );
};

export default QrCode;