import React, { createContext, useContext, useReducer } from "react";

// Create the context
export const StateContext = createContext();

// Create the provider component
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Custom hook to use the state and dispatch
export const useStateValue = () => useContext(StateContext);
