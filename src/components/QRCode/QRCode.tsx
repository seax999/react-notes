import React from 'react';
import QRCode from 'qrcode.react'
import * as logn from './logn.png'
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
        <div className="className">
            <img src={'./logn.png'}/>
            <QRCode
                value = {"https://www.logosc.cn/logo/"}
                size={400}
                renderAs={'canvas'}
                bgColor={'#fff'}
                fgColor={'#000'}
                level={'H'}
                includeMargin={false}
                imageSettings={{
                    src: logn,
                    width: 60,
                    height: 60,
                    excavate: true
                }}
            />
        </div>
    );
};

export default QrCode;