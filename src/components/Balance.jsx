
import { useGlobalState } from '../context/GlobalState'

function Balance() {

  const { transactions } = useGlobalState()
  const amounts = transactions.map(t => t.amount)
  const total = amounts.reduce((acc, amount) => acc + amount, 0)

  return (
    <div className='flex justify-between'>
      <h3>Your Balance:</h3>
      <h1 className='text-2xl font-bold'>${total}</h1>
    </div>
  )
}

export default Balance