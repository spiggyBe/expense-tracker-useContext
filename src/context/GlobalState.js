import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

//initial state
const initialState = {
    transactions: [
        {
            id: 1, text: 'Flower', amount: -20
        },
        {
            id: 2, text: 'Salary', amount: 2000
        },
        {
            id: 3, text: 'Book', amount: 150
        },
        {
            id: 4, text: 'Beer', amount: -50
        }
    ]
}

//create context
export const GlobalContext = createContext(initialState)

//provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    return (<GlobalContext.Provider value={{ transactions: state.transactions }}>{children}</GlobalContext.Provider>)
}