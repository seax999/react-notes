import React, { useEffect } from "react";

const MapAndObj = () => {
    useEffect(() => {
        const info = new Map([
            ["999", "ssss"],
            ["xxxxx", "9527"],
        ]);
        info.set("00000", "89898989");
        info.forEach((value, key) => {
            console.log(value, key, "==-=-=-=");
            value = value + "_pp";
            key = key + "_pp";
        });
        console.log(info, info.size, info.get("999"), info.values());
    }, []);
    return <div>map</div>;
};

export default MapAndObj;
