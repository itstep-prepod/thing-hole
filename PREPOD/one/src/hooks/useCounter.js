import { useState } from "react";

export const useCounter = (delta) => {
    const [count, setCount] = useState(0);

    const addCount = () => {
        setCount(prevCount => prevCount + delta);
    };

    const subCount = () => {
        setCount(prevCount => {
            if (prevCount === 0) {
                return prevCount
            } else {
                return prevCount - delta;
            }
        });
    };

    return {
        addCount,
        subCount,
        count
    };
};

