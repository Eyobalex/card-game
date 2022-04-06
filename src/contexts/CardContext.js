import React, {useState,  createContext} from 'react';


export const CardContext = createContext();


export const CardContextProvider = props => {
    
//   const players = [{num: 1, card:[0,1]},2,3,4,5,6];
    const [flipped, setFlipped] = useState(false);
    // const [players, setPlayers] = useState([
        
    // ]);
    

    return (
        <CardContext.Provider  value={{flipped, setFlipped}}>
            {props.children}
        </CardContext.Provider>
    )
}
