import logo from './logo.svg';
import './App.css';
import StateTest01 from './StateTest01';
import Ex01Con from './containers/Ex01Con';
import Quiz01Container from './containers/Quiz01Container';
import Quiz02Container from './containers/Quiz02InOutCon';
import Ex02ArrCon from './containers/Ex02ArrCon';
import Ex03ObjCon from './containers/Ex03ObjCon';
import Ex04Con from './containers/Ex04Con';
import Ex05Con from './containers/Ex05Con';
import Quiz03StoreCon from './containers/Quiz03StoreCon';


function App() {
    return (<>
    <Quiz03StoreCon />
    <hr />
    <Ex05Con />
    <hr />
    <Ex04Con />
    <hr />
    <Ex03ObjCon />
    <hr />
    <Ex02ArrCon />
    <hr />
    <Quiz02Container />
    <hr />
    <Quiz01Container />
    <hr />
    <Ex01Con />
    <hr />
    <StateTest01 />
    </>
    );
}

export default App;