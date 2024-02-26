import { useGlobalState } from '../../context/GlobalState'
import TransactionItem from './TransactionItem'

function TransactionList() {
  const { transactions } = useGlobalState()
  return (
    <>
      <h3 className='text-slate-300 text-xl font-bold block w-full mb-2'>History</h3>
      <ul>
        {
          transactions.map(t => (
            <TransactionItem key={t.id} transaction={t} />
          ))
        }
      </ul>
    </>
  )
}

export default TransactionList