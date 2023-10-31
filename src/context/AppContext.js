import {createContext, useState } from 'react'; 

export const AppContext = createContext();

export function ContextProvider({children}){

    const [username, setUsername] = useState('Kofesto')

    return(
        <AppContext.Provider value={{username, setUsername}}>
            {children}
        </AppContext.Provider>
    )
}