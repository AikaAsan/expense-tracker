import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense(props) {
    const [isEditing, setIsEditing] = useState(false);
    const saveExpenseDataHandler = (enteredExpensedData) => {
        const expenseData = {
            ...enteredExpensedData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const startEditing = () => {
        setIsEditing(true);
    };
    const stopEditing = () => {
        setIsEditing(false);
    };
    return (
        <div className='new-expense'>
            {!isEditing ? (
                <button onClick={startEditing}>Add New Expense</button>
            ) : (
                <ExpenseForm
                    onSaveExpenseData={saveExpenseDataHandler}
                    onCancel={stopEditing}
                />
            )}
        </div>
    );
}

export default NewExpense;
