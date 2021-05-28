import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import React, { useState } from 'react';

const NewExpense = (props) => {
    const addListener = () => {
        setExpenseForm(<ExpenseForm onSaveExpenseData={savedExpenseData} onCancelExpense={cancelExpense}></ExpenseForm>);
        setNewExpenseButton();
    }

    const [expenseForm, setExpenseForm] = useState();
    const [newExpenseButton, setNewExpenseButton] = useState(<button onClick={addListener}>Add New Expense</button>);

    const savedExpenseData = (expenseData) => {
        const data = {
            ...expenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(data);
        setExpenseForm();
    }

    const cancelExpense = () => {
        setExpenseForm();
        addNewButton();
    }

    const addNewButton = () => {
        setNewExpenseButton(<button onClick={addListener}>Add New Expense</button>);
    }

    return (
        <div className="new-expense">
            {newExpenseButton}
            {expenseForm}
        </div>
    );
}

export default NewExpense;
