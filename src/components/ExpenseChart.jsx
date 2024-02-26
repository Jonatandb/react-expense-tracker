import { VictoryPie, VictoryLabel } from 'victory'
import { useGlobalState } from '../context/GlobalState'

function ExpenseChart() {
  const { totalIncomePercentage, totalExpensesPercentage } = useGlobalState()

  if (totalIncomePercentage + totalExpensesPercentage == 0) {
    return (
      <div className='w-full flex  justify-center '>
        <h3 className='leading-8'>Add your income/expense</h3>
      </div>
    )
  }

  const data = [
    { x: "Incomes", y: totalIncomePercentage },
    { x: "Expenses", y: totalExpensesPercentage },
  ]

  return (
    <VictoryPie
      data={data}
      colorScale={["#2ecc71", "#e74c3c"]}
      animate={{ duration: 50 }}
      labels={({ datum }) => `${datum.y}%`}
      labelComponent={<VictoryLabel
        angle={45}
        style={{
          fill: "white"
        }} />
      }
    />
  )
}

export default ExpenseChart