import './Card.css';

const Card = (props) => {
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>;
    // children : 예약어
}

export default Card;