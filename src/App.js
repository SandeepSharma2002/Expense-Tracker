import { useState } from "react";
import "./App.css";
import Expenses from "./Components/Expenses";
import NewExpense from "./Components/NewExpense";
let Dummy_expenses = [
  {
    id: 'e1',
    date: new Date(2021,5,5),
    title: 'A', 
    amount: 10
  }
];
function App() {
  const[expenses , setexpenses]= useState(Dummy_expenses);
  
  const AddExpenseData = (ReceivedData)=>{
    const UpdatedExpense = [ReceivedData,...expenses];
    setexpenses(UpdatedExpense);
}

  // const Changebg = () => {
  //   document.documentElement.style.setProperty('--bg-color', 'white');
  // };
  return (
    <div>
      <NewExpense onAddExpense = {AddExpenseData}/>
      <Expenses item = {expenses}/>
    </div>
  );
}

export default App;
