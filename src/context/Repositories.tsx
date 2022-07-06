import { createContext } from "react";


type Repositories = {
    
}

export const RepositoriesContext = createContext({} as Repositories);

export const RepositoriesProvider = ({children}: {children: JSX.Element}) => {
    
    return (
        <RepositoriesContext.Provider value={{
            
        }}>
            {children}
        </RepositoriesContext.Provider>
        
    );
}