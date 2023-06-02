import React, {useState,createContext} from 'react';


export const thingsContext = createContext();

export const ThingsProvider = ({children}) => {
    const [things, setThings] = useState([]);
  
    const addThing = (thing) => {
        setThings((thingsArr) => [...thingsArr, thing]);
    };

    const context = {
        things,
        addThing
    };

    console.log(things);

    return (
        <thingsContext.Provider value={context}>
            {children}
        </thingsContext.Provider>
    );
};

