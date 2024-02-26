import { createContext, useContext, useReducer, useEffect } from 'react'
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
  const [state, dispatch] = useReducer(AppReducer, initialState,
    () => {
      const savedLocalData = localStorage.getItem('transactions')
      return savedLocalData ? JSON.parse(savedLocalData) : initialState
    })

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(state))
  }, [state])

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