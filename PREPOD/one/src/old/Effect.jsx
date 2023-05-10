import React, {useState, useEffect, useLayoutEffect, useMemo} from 'react';


const getInfo = async () => {
    const res = await fetch('https://reqres.in/api/users?page=2');
    const data = await res.json();

    return data;
};

export const Effect = () => {
    const [usersData, setUsersData] = useState([]);
    const [state, setState] = useState({}); 
    

    useEffect(() => {
        console.log('USE EFFECT');
        // getInfo()
        // .then(({data}) => {
        //     setUsersData(data);
        // });

        const func = () => {
            console.log('KEYDOWN!');
        };

        window.addEventListener('keydown',func );

        return () => {
            console.log('CLEAR FUNC');
            window.removeEventListener('keydown', func);
        };
    });

    console.log('COMPONENT RENDER');

    return (
        <>
            <h2>{usersData[0]?.email}</h2>
            <button onClick={() => {setState({})}}>rerender</button>
        </>
    );

};

