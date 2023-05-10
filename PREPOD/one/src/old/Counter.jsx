import React, {useState} from "react";
import {useCounter} from './hooks/useCounter';
import { Test } from "./Test";



export const Counter = () => {
    const { 
        addCount,
        subCount,
        count
    } = useCounter(1);

    const [state, setState] = useState({});

    const onRerender = () => {
        setState({});
    };

    console.log('RENDER COUNTER');

    return (
        <div>
            <hr/>
            <h1>Counter</h1>
            <Test 
                count={count}
                smth='text'
                someVal={false}
                anotherVal
            />
            <button onClick={onRerender}>RERENDER COUNTER</button>
            <button onClick={addCount}>+</button>
            <button onClick={subCount}>-</button>
            <div style={{textAlign: 'center', fontSize: '40px'}}>
                {count}
            </div>
            <hr/>
        </div>
    );
};