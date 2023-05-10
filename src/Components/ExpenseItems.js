import "./ExpenseItems.css";
import React from 'react'
import ExpenseDate from "./ExpenseDate";

export default function ExpenseItems(props) {
  return (
    <div className="expense-item">
           <ExpenseDate date = {new Date(props.date)}/>
            <div className="expense-item__description">
                <h2 placeholder="Your Expenses Will Appear Here.">{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
    </div>
  )
} 