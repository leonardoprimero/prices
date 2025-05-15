import React from 'react';
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
//*Acá vemos que es lo mismo escriba la funcion como la quiera escribir
const ExpenseItem=(props)=> {
  // const [title, setTitle] = useState(props.title);
 
  // function clickHandler () {
  //   console.log('clicked!!!');
  // };
  
  // const clickHandler =() => {
  //   setTitle('upgrade!!');
  //   console.log(title);
  // };
  return (
    <li>
      <Card className="expense-item">
      <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
