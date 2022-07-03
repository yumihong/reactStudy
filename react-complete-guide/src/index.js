/* 처음으로 실행될 코드를 갖고있음 */
import ReactDOM from 'react-dom/client'

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render 를 리액트 v18부터 사용하지 않아서 7,8 라인처럼 수정함
