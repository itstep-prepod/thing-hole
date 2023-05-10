import React, {useEffect, useState} from 'react';
import './index.css';


export const Sale = () => {
    const [isSaleOn, setIsSaleOn] = useState(false);
    const [isBorderOn, setIsBorderOn] = useState(false);

    const onClickHandler = () => {
        setIsSaleOn(prevVal => !prevVal);
    };
    

    useEffect(() => {
        let intervalId;

        if (isSaleOn) {
            intervalId = setInterval(() => {
                setIsBorderOn(prevVal => !prevVal);
            }, 400);
        }

        return () => {
            setIsBorderOn(false);
            clearInterval(intervalId);
        };
    }, [isSaleOn]);


    return (
        <div>
            <button onClick={onClickHandler}>set sale!</button>
            <div className={isBorderOn ? 'onSale' : ''}> 
                <h2> 1kg bulba </h2>
                <p> 1000$ </p>
            </div>
        </div>
    );
};