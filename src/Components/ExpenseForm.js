import React, { useState } from 'react'
import './ExpenseForm.css'

export default function ExpenseForm(props) {
    const[EnteredTitle , setEnteredTitle] = useState("");
    const[EnteredAmount , setEnteredAmount] = useState("");
    const[EnteredDate , setEnteredDate] = useState("");

    const titleChangeHandler = (event)=>{
        setEnteredTitle(event.target.value);
    }
    const amountChangeHandler = (event)=>{
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler = (event)=>{
        setEnteredDate(event.target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault();

        const ExpenseData = {
            title: EnteredTitle,
            amount: EnteredAmount,
            date: EnteredDate
        }
            setEnteredTitle('');
            setEnteredAmount('');
            setEnteredDate('');

            props.onSaveExpenseData(ExpenseData);
    }
    

  return (
    <div>
        <form >
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="/" >Title</label>
                    <input type="text" value={EnteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="/">Amount</label>
                    <input type="number" value={EnteredAmount} onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="/">Date</label>
                    <input type="date" value={EnteredDate} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__action">
                <button type="submit" onClick={submitHandler}>Add Expense</button>
            </div>
        </form>
    </div>
  )
}
