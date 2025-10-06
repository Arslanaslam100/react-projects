import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import { Component, useState } from "react";


export default function CountButton({count, setCount}) {
    const addOne=()=>{setCount(count+1)}
    const subOne=()=>{setCount(count-1)}
    
    return (
        <>
            <div className="button-container">
                <button className="count-btn" onClick={subOne}>
                    <MinusIcon className="count-btn-icon"/>
                    </button>
                <button className="count-btn" onClick={addOne}>
                    <PlusIcon className="count-btn-icon"/>
                    </button>
            </div>
        </> 
    )
}