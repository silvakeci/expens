import React, {useState} from 'react';
import './Expense.css'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expense(props) {
    const [filteredYear, setFilteredYear]= useState('2020');

    const filterChangeHandler=(selectedYear)=>{
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(expense =>{
        return expense.date.getFullYear().toString()===filteredYear
    })

    return(
        <div>
            <Card className="expense">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
        );
}

export default Expense;