import React,{createContext,useContext,useReducer} from "react";
export const StateContext=createContext();

//prepares the data layer
export const StateProvider=({reducer,initialState,children})=>(

    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);
//pull information from the data layer
export const useStateValue=()=>useContext(StateContext);