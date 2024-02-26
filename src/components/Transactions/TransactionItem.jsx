import { useGlobalState } from "../../context/GlobalState"

function TransactionItem({ transaction }) {
  const { deleteTransaction } = useGlobalState()
  const { id, description, amount } = transaction

  return (
    <li className="bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center">
      <p className="text-sm">{description}</p>
      <div>
        <span>${amount}</span>
        <button onClick={() => deleteTransaction(id)}>X</button>
      </div>
    </li>
  )
}

export default TransactionItem