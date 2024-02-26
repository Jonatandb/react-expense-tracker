import { useGlobalState } from '../../context/GlobalState'

function TransactionList() {
  const { transactions, deleteTransaction } = useGlobalState()
  return (
    <div>
      {
        transactions.map(t => (
          <div key={t.id}>
            <p>{t.description}</p>
            <span>{t.amount}</span>
            <button onClick={() => deleteTransaction(t.id)}>X</button>
          </div>
        ))
      }
    </div>
  )
}

export default TransactionList