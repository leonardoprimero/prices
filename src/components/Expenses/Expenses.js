import React, {useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses=(props)=> {
  
  const [filteredYear, setFilteredYear] = useState('2022');
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter(expense =>{
    return expense.date.getFullYear().toString() === filteredYear;
  });


  
  return(
    <div>    
      <Card className= 'expenses'>
        <ExpensesFilter 
        selected = {filteredYear} 
        onChangeFilter = {filterChangeHandler} 
        />
        {/* Esto queda afuera porque lo reemplazo arriba  y me lo llevo a ExpensesList  */}
        {/* {filteredExpenses.length === 0 && <p>No Expenses Found.</p>}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title} 
              amount={expense.amount}
              date={expense.date}
            />
          ))
        } */}
        
         {/* por la funcion map es que puedo borrar todo lo que sigue ahora  
          <ExpenseItem 
           title= {props.items[0].title} 
           amount= {props.items[0].amount} 
           date= {props.items[0].date}/>
         <ExpenseItem
           title= {props.items[1].title} 
           amount= {props.items[1].amount} 
           date= {props.items[1].date}/>
         <ExpenseItem 
           title= {props.items[2].title} 8
           amount= {props.items[2].amount} 
           date= {props.items[2].date}/>
         <ExpenseItem 
           title= {props.items[3].title} 
           amount= {props.items[3].amount} 
           date= {props.items[3].date}/>  */}
        <ExpensesChart expenses ={filteredExpenses}/>
        <ExpensesList items = {filteredExpenses}/>
      </Card>
    </div>  
    )
}

export default Expenses;