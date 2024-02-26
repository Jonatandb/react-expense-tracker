
import { useGlobalState } from '../context/GlobalState'

function Balance() {

  const { transactions } = useGlobalState()
  const amounts = transactions.map(t => t.amount)
  const total = amounts.reduce((acc, amount) => acc + amount, 0).toFixed(2)

  return (
    <div className='flex justify-between align-baseline'>
      <h3 className='leading-8'>Your Balance:</h3>
      <h1 className='text-2xl font-bold'>${total}</h1>
    </div>
  )
}

export default Balance