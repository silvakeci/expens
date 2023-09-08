import React, {useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import './Expense.css'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expense(props) {
    const [filteredYear, setFilteredYear]= useState('2020');
    const [filterInfoText, setFilterInfoText] = useState('2019, 2021 & 2022')

    const filterChangeHandler=(selectedYear)=>{
        setFilteredYear(selectedYear);
            if(selectedYear==='2019'){
                setFilterInfoText('2020, 2021 & 2022')
            } else if (selectedYear=== '2020'){
                setFilterInfoText('2019, 2021 & 2022')
            }else if(selectedYear==='2021'){
                setFilterInfoText('2019, 2020 & 2022')
            }else{
                setFilterInfoText('2019, 2020 & 2021')
            }
    }

    return(
            <Card className="expense">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <p>Data for years {filterInfoText} is hidden.</p>
                {props.items.map((expenses)=>(
                    <ExpenseItem
                        title={expenses.title}
                        amount={expenses.amount}
                        date={expenses.date}
                    />
                ))}
            </Card>
        );
}

export default Expense;