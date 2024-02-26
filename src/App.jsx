import { GlobalProvider } from "./context/GlobalState"
import Header from "./components/Header"
import Balance from "./components/Balance"
import TransactionForm from "./components/Transactions/TransactionForm"
import TransactionList from "./components/Transactions/TransactionList"
import IncomeExpenses from "./components/IncomeExpenses"

function App() {
  return (
    <GlobalProvider>
      <Header />
      <IncomeExpenses />
      <Balance />
      <TransactionForm />
      <TransactionList />
    </GlobalProvider>
  )
}

export default App