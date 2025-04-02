import logo from './logo.svg';
import './App.css';
import Input01Con from './containers/form/InPut01Con';
import CheckBox02Con from './containers/form/CheckBox02Con';
import QuizRadioCon from './containers/form/QuizRadioCon';
import UseRef03Con from './containers/form/UseRef03Con';
import UseRef04Con from './containers/form/UseRef04Con';

function App() {
    return (
    <>
    <UseRef04Con />
    <hr />
    <UseRef03Con />
    <hr />
    <QuizRadioCon />
    <hr />
    <CheckBox02Con />
    <hr />
    <Input01Con />
    </>
    );
}

export default App;
