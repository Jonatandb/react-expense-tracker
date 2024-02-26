
import { useGlobalState } from '../context/GlobalState'

function Balance() {
  const data = useGlobalState()

  return (
      <h1>Balance</h1>
  )
}

export default Balance