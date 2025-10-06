import { useState } from "react";
import Count from "./Count";
import CountButton from "./CountButton";
import Reset from "./Reset";
import Title from "./Title";

export default function Card() {
      let [count, setCount]= useState(0)
    return (<>
        <div className="card">
            <Title/>
            <Count count={count}/>
            <Reset setCount={setCount}/>
            <CountButton count={count} setCount={setCount}/>
        </div>

    </>)
}