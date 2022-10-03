import React, { useEffect, useState } from 'react'
import backgroundUser from "../../assets/img/bgUser.jpg"
export default function UserTemplate(props) {
    // ! xử lý resize window
    const [{ width, height }, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    useEffect(() => {
        window.onresize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
    }, []);

    const { Component } = props;
    return (
        <div
        >
            <Component />
        </div>
    )
}
