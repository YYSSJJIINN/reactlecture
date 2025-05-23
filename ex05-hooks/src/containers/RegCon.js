import { useReducer } from "react";
import RegCom from "../components/RegCom";
import { initalState, reducer } from "../modeuls/member_red";
import { useNavigate } from "react-router-dom";
import { register } from "../service/member";

function RegCon() {
    const [state, dispatch] = useReducer(reducer, initalState);
    const onChange = (e) => {
        const {value, name} = e.target;
        dispatch({type:"CHANGE_INPUT", name, value, form: "register"});
    }

    const navigate = useNavigate()
    const onSubmit = (e) => {
        e.preventDefault();
        console.log( "register : ", state)
        try {
            dispatch({type:"LOADING"})

            // setTimeout(() => {
                const result = register( state.register )
                dispatch({type:"FINISHED"})
                console.log("result : ", result)
                // member페이지에서 성공하면 1을 띄우기로 정의해뒀음
                if(result === 1) {
                    navigate("/list")
                } else {
                    throw new Error("동일 아이디 있음.")
                }
            // }, 2000)
        } catch(e) {
            // 에러가 떴을 때, 에러 메세지를 e.toString()에 담아준다.
            dispatch({type:"ERROR", error : e.toString()})
        }
        
    }

    return(
    <>
        <RegCom loading={state.loading} error={state.error} 
        onSubmit={onSubmit} onChange={onChange} 
        id={state.register.id} pwd={state.register.pwd} 
        name={state.register.name} addr={state.register.addr} />
    </>)
}
export default RegCon;