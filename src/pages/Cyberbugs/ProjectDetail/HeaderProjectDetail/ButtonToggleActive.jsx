import React, { Children, useState } from 'react'
//! đây là HOC
export default function ButtonToggleActive({ text, ...otherProps }) {
    const [active, setActive] = useState(false);
    const toggleClass = () => {
        setActive(!active);
    };
    return (
        <button className={`glassMorphismButton px-4 py-2 ${active ? "activeClass" : ""}`}
            onClick={toggleClass}
            {...otherProps}
        >
            {text}
        </button>
    )
}
