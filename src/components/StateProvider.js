import React,{createContext, useContext,useReducer} from 'react'
export const statecontext = createContext();
const StateProvider=({ reducer ,initialState,children}) =>{
    return (
       
            <statecontext.Provider value={useReducer(reducer,initialState)}>
               {children}
            </statecontext.Provider>
        
    )

}
export const useStateValue = () => useContext(statecontext);
export default StateProvider; 

