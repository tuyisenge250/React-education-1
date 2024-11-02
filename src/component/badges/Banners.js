import React from "react";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { IoIosWarning } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";



export default function Banner({name="success",className, children,title}){
    const icon = { success: <BsFillSuitHeartFill />, warning:<IoIosWarning />,
problem: <MdCancel />, update: <RxUpdate />}
    let classN = `${className} ${name}`
    return (
        <div className={classN}>
            {icon[name]}
            {title}
            {children}
        </div>
    )
}