import React, {useState} from "react";
import {DownButton} from "./DownButton";
import {UpButton} from "./UpButton";

export function Box() {

    const [marginTop, setMarginTop] = useState(0);

    return (
        <>
            <DownButton setMarginTop={setMarginTop} marginTop={marginTop} />
            <UpButton setMarginTop={setMarginTop} marginTop={marginTop} />
            <div className="box" style={{marginTop: marginTop + 'px'}}></div>
        </>
    );
}