import React from 'react';
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpensesForm />
        </div>
    );
}

export default NewExpense;