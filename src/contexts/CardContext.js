import React, {useState,  createContext} from 'react';


export const CardContext = createContext();


export const CardContextProvider = props => {
    const [flipped, setFlipped] = useState(false);
    return (
        <CardContext.Provider  value={{flipped, setFlipped}}>
            {props.children}
        </CardContext.Provider>
    )
}
