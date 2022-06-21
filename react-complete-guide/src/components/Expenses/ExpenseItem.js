import React, { useState} from 'react';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    // Expenses 에서 ExpensesItem을 네번 사용해서 콘솔이 4번찍힘
    // console.log('4번 찍히겠지?');
    // 그치만 버튼을 클릭하면 콘솔은 1번만 찍히게 된다
    // 이유는 특정 인스턴스만 업데이트 되었기 때문에

    const [title, setTitle] = useState(props.title);
    // title : 상태값   setTitle : 값을 업데이트하는 함수
    // state는 컴포넌트의 인스턴스별로 나뉘어져 있다


    const clickHndler = () => {
        setTitle('update');
    }

    return(
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            {/*date형식은 내장메소드인 toISOString을 호출해야함*/}
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHndler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;