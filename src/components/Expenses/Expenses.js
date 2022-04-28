import React, { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import '../UI/Card.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
    const [filteredYear, setfilteredYear] = useState('2019');
    const filterChangeHandler = (selectedYear) => {
        setfilteredYear(selectedYear);
    };
    const filteredExpenses = props.items.filter((item) => {
        return item.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter
                    selected={filteredYear}
                    onSelectYear={filterChangeHandler}
                />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    );
};

export default Expenses;
