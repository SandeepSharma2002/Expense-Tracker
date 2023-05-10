import React from 'react'
import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm";

export default function NewExpense(props) {
    const EnteredExpenseData = (event)=>{
        const expenseData = {
            ...event,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
    }
  return (
    <div className='new-expense'>
        <ExpenseForm onSaveExpenseData = {EnteredExpenseData}/>
    </div>
  )
}
