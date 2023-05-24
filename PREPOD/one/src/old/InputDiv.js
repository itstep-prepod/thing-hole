import React, {forwardRef} from 'react';


export const InputDiv = ({text, differentRef}) => {
    return (
        <>
            <input/>
            <input 
                ref={differentRef}
                type='text'
                onChange={() => {}}
                value={text}
            />
            <div>{text}</div>
        </>
    );
};

