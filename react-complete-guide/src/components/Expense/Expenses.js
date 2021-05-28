import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter.js';
import React, { useState } from 'react';

function Expenses(props) {
    const allExpe = [];
    const [year, selectedYear] = useState('2021');
    const userSelectedOptionHandler = (option) => {
        selectedYear(option);
    }

    const filteredArray = props.expenses.filter(expense => expense.date.getFullYear().toString() === year);

    return (
        <Card className="expenses">
            <ExpensesFilter selected={year} onUserSelect={userSelectedOptionHandler} />
            {
                filteredArray.map((exp) => (
                    <ExpenseItem
                        key={exp.id}
                        title={exp.title}
                        amount={exp.amount}
                        date={exp.date} />
                ))
            }
        </Card>
    )
};

export default Expenses;