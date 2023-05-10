import React from "react";


export const Test = React.memo(({count, smth, someVal}) => {

    console.log('RENDER TEST');

    return (
        <>
            <h2>Test component</h2>
            <div style={{color:'red', fontSize: '50px'}}>
                {count}
            </div>
        </>
    );
}, (prevProps, currentProps) => {

    if (prevProps.count !== currentProps.count) {
        return false; // rerender should happen!
    } else {
        return true; // rerender should NOT happen!
    }
});