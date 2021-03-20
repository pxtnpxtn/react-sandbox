import './Another.css';
import React, { useState } from 'react';

function Another({yay}) {
    const [count, setCount] = useState(0);
    const increaseByOne = () => setCount(currentCount => currentCount + 1);

    console.log('-->', yay);
    const heyYou = () => {
        console.log('Oh hi');
    }
    return (
        <div className="Another">
            <div className="count">{count}</div>
            <button onClick={()=>setCount(currentCount => currentCount - 1)}>-1</button>
            <button onClick={increaseByOne}>+1</button>
            <div>Another one -*{yay.age}*-</div>
            <button onClick={heyYou}>Click Me</button>
        </div>
    )
}

export default Another;