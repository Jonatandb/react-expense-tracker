import { useState } from "react"
import { useGlobalState } from "../../context/GlobalState"

function TransactionForm() {
  const { addTransaction } = useGlobalState()

  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState(0)

  const handleSubmit = e => {
    e.preventDefault()
    const transaction = {
      id: window.crypto.randomUUID(),
      description,
      amount: +amount
    }
    addTransaction(transaction)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text"
          placeholder="Enter a description"
          onChange={e => setDescription(e.target.value)}
          value={description}
          className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full" />

        <input type="number"
          placeholder="0.00"
          step="0.01"
          onChange={e => setAmount(e.target.value)}
          value={amount}
          className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full" />

        <button className="bg-indigo-700 text-white px-3 py-2 rounded-lg block mb-2 w-full">Add Transaction</button>
      </form>
    </div>
  )
}

export default TransactionForm