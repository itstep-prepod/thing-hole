import React, {useState} from 'react';
import { Sale } from './Sale';

export function App () {
    const [shouldShowComponent, setShouldShowComponent] = useState(true);

    const toggleComponent = () => {
        setShouldShowComponent(prevVal => !prevVal);
    };

    return (
        <div>
            <h1>Hello</h1>
            <Sale/>
        </div>
    );
}