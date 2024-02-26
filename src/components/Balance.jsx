
import { useGlobalState } from '../context/GlobalState'

function Balance() {

  const { transactions } = useGlobalState()
  const amounts = transactions.map(t => t.amount)
  const total = amounts.reduce((acc, amount) => acc + amount, 0)

  return (
    <>
      <h3>Your Balance:</h3>
      <h1>${total}</h1>
    </>
  )
}

export default Balance