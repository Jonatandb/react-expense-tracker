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
      amount
    }
    addTransaction(transaction)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text"
          placeholder="Enter a description"
          onChange={e => setDescription(e.target.value)}
          value={description} />
        <input type="number"
          placeholder="0.00"
          step="0.01"
          onChange={e => setAmount(e.target.value)}
          value={amount} />
        <button>Add Transaction</button>
      </form>
    </div>
  )
}

export default TransactionForm