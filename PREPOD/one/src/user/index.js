import React, {useEffect, useState} from 'react';
import {Title} from './index.styles.jsx';

export const User = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch('https://reqres.in/api/users/2')
        .then((data) => data.json())
        .then(({data}) => setUser(data))
    }, []);

    return (
        <div>
            <Title bg={user?.avatar}>User</Title>
        </div>
    );
};