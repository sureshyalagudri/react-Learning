import './ExpenseForm.css';
import React, { useState } from 'react';

const ExpenseForm = (props) => {
    const [titleChanged, setTitle] = useState();
    const [amountChanged, setAmount] = useState();
    const [dateChanged, setDate] = useState();

    const titleChangeListener = (event) => {
        setTitle(event.target.value);
    }

    const amountChangeListener = (event) => {
        setAmount(event.target.value);
    }

    const dateChangeListener = (event) => {
        setDate(event.target.value);
    }

    const submitListener = (event) => {
        event.preventDefault();

        const expenseData = {
            title: titleChanged,
            amount: amountChanged,
            date: new Date(dateChanged)
        }
       
        props.onSaveExpenseData(expenseData);
        setTitle('');
        setAmount('');
        setDate('');
        props.onCancelExpense();
    }

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control label">
                    <label >Title</label>
                    <input type="text" value={titleChanged} onChange={titleChangeListener}></input>
                </div>
                <div className="new-expense__control label">
                    <label >Amount</label>
                    <input type="number" min="0.01" step="0.01" value={amountChanged} onChange={amountChangeListener}></input>
                </div>
                <div className="new-expense__control label">
                    <label >Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={dateChanged} onChange={dateChangeListener}></input>
                </div>
            </div>
            <div>
                <button type="button" onClick={props.onCancelExpense}>Cancel</button>
                <button type="submit" onClick={submitListener}>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;