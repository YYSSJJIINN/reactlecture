import { useReducer } from "react";
import ReducerCom from "../components/ReducerCom";
import { initalState, reducer } from "../../../ex05-hooks/src/modeuls/member_red";

function ReducerCon() {
    const [state, dispatch] = useReducer(reducer, initalState);
    return(
    <>
        <ReducerCom state={state}/>
    </>)
}
export default ReducerCon;