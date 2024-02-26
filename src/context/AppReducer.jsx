export default function AppReducer(state, action) {
  switch (action.type) {
    case 'ADD_TRANSACTION': {
      const newState = {
        ...state,
        transactions: [...state.transactions, action.payload],
      }
      return newState
    }
    case 'DELETE_TRANSACTION': {
      const newState = {
        ...state,
        transactions: state.transactions.filter(t => t.id != action.payload)
      }
      return newState
    }
    default:
      return state
  }

}