import { GlobalProvider } from "./context/GlobalState"
import Balance from "./components/Balance"
import TransactionForm from "./components/Transactions/TransactionForm"
import TransactionList from "./components/Transactions/TransactionList"
import IncomeExpenses from "./components/IncomeExpenses"

function App() {
  return (
    <GlobalProvider>
      <div className="bg-zinc-950 text-white h-screen flex justify-center items-center">
        <div className="container mx-auto max-w-screen-md">
          <div className="bg-zinc-800 p-10 rounded-lg flex gap-x-2">
            <div>
              <h1 className="text-4xl font-bold">Expense Tracker</h1>
              <IncomeExpenses />
              <Balance />
              <TransactionForm />
            </div>
            <div className="w-3/6">
              <TransactionList />
            </div>
          </div>
        </div>
      </div>
    </GlobalProvider>
  )
}

export default App