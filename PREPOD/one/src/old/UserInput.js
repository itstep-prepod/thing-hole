import React, {useState, useRef, useEffect} from 'react';
import {InputDiv} from './InputDiv';

export const UserInput = () => {
    const [text, setText] = useState('');
    const [r, rerender] = useState({});


    const inputRef = useRef(null);

    const firstMountPassed = useRef(false);

    const onInputChange = ({target: {value}}) => {
        setText(value);
    };

    const onBtnClick = () => {
       setText('');
       rerender({});
       inputRef.current.focus();
    };

    console.log(inputRef?.current?.value);

    useEffect(() => {
        if (!firstMountPassed.current) {
            firstMountPassed.current = true;
        } else {
            console.log('USE EFFECT!');
        }     
    });

    console.log('RENDER');

    return (
        <>
            <button  onClick={onBtnClick}> clear text</button>
            <InputDiv differentRef={inputRef} myFashionRef={}/>
        </>
    );
};