import React from "react";

export default function Badges({shape, className, color, children}){
    let classShape = shape ? `Badge-${shape}`: `Badge-square`
    const allClasses = `${classShape} ${className} ${color}`;
    return (
    <div className="btn">
        {`${children}-${color}`}
        <button className={allClasses}>Badge</button>
    </div>
    )
}
