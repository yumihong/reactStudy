import ExpenseDate from "./ExpenseDate";
import './ExpenseItem.css';

function ExpenseItem(props) {

    return(
        <div className="expense-item">
            <ExpenseDate date={props.date} />
            {/*date형식은 내장메소드인 toISOString을 호출해야함*/}
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </div>
    )
}

export default ExpenseItem;