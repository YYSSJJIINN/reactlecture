import { useReducer } from "react";
import MLogCom from "../../components/member/MLogCom";
import { initalState, reducer } from "../quiz_hooks/src/modeuls/member_red";

function MLogCon() {
    const [state, dispatch] = useReducer(reducer, initalState);
    // 타이핑하여 실시간으로 변경되는 것을 저장하는 함수
    const onChange = (e) => {
        const { name, value } = e.target;
        dispatch( {type:"CHANGE_INPUT", name, value, form:"login"} )
    }
    return(
    <>
        <MLogCom state={state} username={state.login.id} password={state.login.pwd} onChange={onChange}/>
    </>)
}
export default MLogCon;