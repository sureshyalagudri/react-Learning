import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import React, { useState } from 'react';

const NewExpense = (props) => {
    const [addExpense, setEnableForm] = useState(false);

    const savedExpenseData = (expenseData) => {
        const data = {
            ...expenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(data);
    }

    const cancelExpense = () => {
        setEnableForm(false);
    }

    const addExpenseListener = () => {
        setEnableForm(true);
    }

    return (
        <div className="new-expense">
            {addExpense == false && <button onClick={addExpenseListener}>Add New Expense</button>}
            {addExpense == true && <ExpenseForm onSaveExpenseData={savedExpenseData} onCancelExpense={cancelExpense}></ExpenseForm>}
        </div>
    );
}

export default NewExpense;
