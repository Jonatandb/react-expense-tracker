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

  const addTransaction = transaction => {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    })
  }

  const deleteTransaction = transactionId => {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: transactionId
    })
  }

  return (
    <Context.Provider value={{
      transactions: state.transactions,
      addTransaction,
      deleteTransaction
    }}>
      {children}
    </Context.Provider>
  )
}