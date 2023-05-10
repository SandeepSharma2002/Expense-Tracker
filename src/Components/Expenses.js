import React from 'react'
import './Expenses.css'
import ExpenseItems from "./ExpenseItems";
export default function Expenses(props) {
  return (
    <div className='expenses'>
      {
        props.item.map(
        expense => (
          <ExpenseItems
        date={expense.date}
        title={expense.title}
        amount={expense.amount}
        id = {expense.id}
      />
        )
        )
      }
    </div>
  )
}
