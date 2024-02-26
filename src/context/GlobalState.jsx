import { createContext, useContext, useReducer } from 'react'
import AppReducer from './AppReducer'

export const Context = createContext()

export const useGlobalState = () => {
  const context = useContext(Context)
  return context
}

const initialState = {
  transactions: []
}

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  return (
    <Context.Provider value={{ transactions: state.transactions }}>
      {children}
    </Context.Provider>
  )
}