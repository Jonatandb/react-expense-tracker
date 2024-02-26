/* eslint-disable react/prop-types */
import { useGlobalState } from "../../context/GlobalState"

function TransactionItem({ transaction }) {
  const { deleteTransaction } = useGlobalState()
  const { id, description, amount } = transaction

  return (
    <li className="bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center">
      <p className="text-sm">{description}</p>
      <div className="flex justify-between  w-auto">
        <span className={`px-3 ${amount > 0 ? 'text-lime-300' : 'text-red-300'}`}>${amount}</span>
        <button onClick={() => deleteTransaction(id)}>🗑</button>
      </div>
    </li>
  )
}

export default TransactionItem