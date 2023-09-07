import React from 'react';
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {

    const saveExpenseDataHandler = (enteredExpensesData) =>{
        const expenseData={
            ...enteredExpensesData,
            id:Math.random().toString()
                        };
        props.onAddExpens(expenseData)
    };

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpensesData={saveExpenseDataHandler} />
        </div>
    );
}

export default NewExpense;