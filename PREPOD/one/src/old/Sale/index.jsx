import React, {useEffect, useState} from 'react';
import './index.css';


export const Sale = ({children}) => {
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
                {children}
            </div>           
        </div>
    );
};