import { useReducer, useState } from "react";
import ReducerCom from "../components/ReducerCom";

// 이 때 들어가는 첫번 째 값인 state는 자기 자신에 대한 값이다.
// 이 때 들어가는 두번 째 값인 action은 dispatch의 괄호 안에 인자값으로 전달되는 것이 입력된다.
// 그러므로 action에 어떤 값이 들어갔느냐에 따라 state의 값이 달라진다.
const reducer = (state, action) => {
    console.log("reducer call : ", action)
    switch( action.type ) {
        // 결과값에 원래있던 state에 값을 1더하거나 1빼서 출력하라는 뜻이다.
        case "UP" : return { value : state.value + 1 }
        case "DOWN" : return { value : state.value - 1 }
        // 아무것도 없다면 그냥 원래 있던 state값으로 채워주란 뜻이다.
        default : return state;
    }
    // return { value : 1000 }
}
const initalState = {value : 0}
function ReducerCon() {
    // 첫번째엔 num이 들어가고, 두번재는 setNum을 변경하기 위한 함수가 들어간다.
    // const [num, setNum] = useState(0)
    // dispatch는 state의 값을 변경하려는 목적으로만 사용한다.
    // return에는 state의 값을 변경하는 코드만 들어온다.
    const [state, dispatch] = useReducer(reducer, initalState);
    console.log("state", state);

    // up이나 down을 누르면 reducer가 동작을 할 것이고
    // 그 결과 값은 state에 들어갈 것이다.
    const onUp = () => {
        dispatch({type : "UP"})
    }
    const onDown = () => {
        dispatch({type : "DOWN"})
    }
    return(
    <div>
        <ReducerCom state={state} onUp={onUp} onDown={onDown} />
    </div>)
}
export default ReducerCon;