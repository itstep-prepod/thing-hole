import React from 'react';
import { useCounter } from './hooks/useCounter';

export const Eggs = () => {
    const {
        addCount,
        subCount,
        count
    } = useCounter(10);


    return (
        <>
            <hr/>
            <h2>Eggs</h2>
            <button onClick={addCount}>+</button>
            <button onClick={subCount}>-</button>
            <div style={{textAlign: 'center', fontSize: '40px'}}>
                {count}
            </div>
            <hr/>
        </>
    );
};