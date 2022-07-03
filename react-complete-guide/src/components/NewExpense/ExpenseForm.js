import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // })
        // setUserInput((prevState) => {
        //     return {...prevState, enteredTitle: event.target.value };
        // });
    };

    const amountChangeHandler = event => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // })
    };

    const dateChangeHandler = event => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // })
    };

    const submitHandler = (event) => {
        event.preventDefault();
        // 기본 요청이 보내지는 것을 막을수있음
        // 이로인해 페이지가 다시 로드되지 않음

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);
        // 함수를 전달받아 실행 가능

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            {/* 
                Add Expense 버튼을 클릭할때마다 새로고침됨 
                브라우저는 폼이 제출될때마다 웹페이지를 호스팅하고있는 서버에 요청을 보내기 때문
            */}
            <div className='new-expense__controls'>
                <div className='new-expense__controls'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
                    {/* input의 요소에는 target 이 있고 속성으로 value를 갖는데 이속성은 이벤트가 벌어졌을 시점의 현재 입력값을 갖는다 */}
                </div>
                <div className='new-expense__controls'>
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__controls'>
                    <label>Date</label>
                    <input type='date' min="2022-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler} />
                </div>
                <div className='new-expense__actions'>
                    <button type='submit' >Add Expense</button>
                </div>
            </div>
        </form>
    )
};

export default ExpenseForm;