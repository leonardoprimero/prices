import React, {useState} from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

//function App() {
// TODO también la puedo escribir como una función flecha que de hecho lo voy a hacer 

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", 
    title: "New TV", 
    amount: 36.12, 
    date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2019, 5, 12),
  },
];

const App=()=>{
  const [expenses, setExpenses] = useState (DUMMY_EXPENSES);

 const addExpenseHandler = expense => {
   setExpenses((prevExpenses) => {
     return [expense, ...prevExpenses];
   });
 };
// TODO esto es lo que hace el jsx por dentro por eso podemos escribir enHTML
  //     return React.createElement('div', {},
  //            React.createElement('h2',{},'Hello World'),
  //            React.createElement(Expenses,{items: expenses})
  //     );

// TODO acá lo estoy haciendo de la manera facil con reactDom
  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses items= {expenses}/>
      
    </div>
 );
}

export default App;
