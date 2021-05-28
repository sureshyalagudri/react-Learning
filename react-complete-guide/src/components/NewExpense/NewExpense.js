import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const savedExpenseData=(expenseData)=>{
        const data ={
            ...expenseData,
            id: Math.random().toString()
        }
        //console.log(data);
        props.onAddExpense(data);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={savedExpenseData}></ExpenseForm>
        </div>
    );
}

export default NewExpense;
