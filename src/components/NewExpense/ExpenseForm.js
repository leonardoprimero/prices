import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    // ? ESTO ES DE VANILA JAVASCRIPT Y YA LO DEBERÍA SABER
    // ?document.getElementById('').addEventListener('click', (event) => {})

    const[enteredTitle, setEnteredTitle] =useState('');
    const[enteredAmount, setEnteredAmount] =useState('');
    const[enteredDate, setEnteredDate] =useState('');
    // ? const[userInput, setUserImput] =useState({
    // ?     enteredTitle: '',
    // ?     entertedAmount:'',
    // ?     enteredDate: ''
    // ? });

    const titleChageHandler = (event) => {
        setEnteredTitle(event.target.value);
        // ? setUserImput({
        // ?    ...userInput,
        // ?    enteredTitle: event.target.value,         
        // ?});
        // !setUserImput((prevState)=>{
        // !    return { ...prevState, enteredTitle: event.target.value};
        // !});
        
    };
    
    const amountChageHandler = (event) => {
        setEnteredAmount(event.target.value);
        // ? setUserImput({
        // ?     ...userInput,
        // ?     enteredAmount: event.target.value,
        // ? });
    };
    
    const dateChageHandler = (event) => {
        setEnteredDate(event.target.value);
        // ? setUserImput({
        // ?     ...userInput,
        // ?     enteredDate: event.target.value,
        // ? });
    };
    const submitHandler=(event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__controls">
                    <label>Title</label>
                    <input 
                    type="text" 
                    value = {enteredTitle}
                    onChange = {titleChageHandler}
                     
                    />
                </div>
                <div className="new-expense__controls">
                    <label>Amount</label>
                    <input type="number" 
                    min='0.01' 
                    step='0.01' 
                    value ={enteredAmount}
                    onChange= {amountChageHandler} 
                    
                    />
                </div>
                <div className="new-expense__controls">
                    <label>Date</label>
                    <input 
                    type="date" 
                    min='2019-01-01' 
                    max= '2022-12-31' 
                    value = {enteredDate}
                    onChange={dateChageHandler}
                    
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type = 'button' onClick={props.onCancel}> Cancel </button>
                <button type = 'submit'>Add Expense</button>
            </div>
        </form>
    );
};
export default ExpenseForm;