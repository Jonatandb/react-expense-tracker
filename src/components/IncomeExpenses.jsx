import { useGlobalState } from "../context/GlobalState"

function IncomeExpenses() {
  const { transactions } = useGlobalState()
  let income = 0
  let expense = 0

  transactions.forEach(transaction => {
    if (transaction.amount > 0) {
      income += transaction.amount
    } else {
      expense += transaction.amount
    }
  });

  expense = expense * -1

  return (
    <>
      <div className="flex justify-between my-2">
        <h4>Income</h4>
        <p>{income}</p>
      </div>
      <div className="flex justify-between my-2">
        <h4>Expense</h4>
        <p>{expense}</p>
      </div>
    </>
  )
}

export default IncomeExpenses