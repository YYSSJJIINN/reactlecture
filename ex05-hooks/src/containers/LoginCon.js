import { useContext, useReducer } from "react";
import LoginCom from "../components/LoginCom";
import { initalState, reducer } from "../modeuls/member_red";
import { AuthContext } from "../store/AuthContext";
import { useNavigate } from "react-router-dom";
import { loginCheck } from "../service/member";

function LoginCon() {
    const [state, dispatch] = useReducer(reducer, initalState);
    const onChange = (e) => {
        console.log("onChange e.target : ", e.target);
        const { name, value } = e.target;
        // 로그인 폼의 키-밸류 값을 다 넘길것이다
        dispatch( {type:"CHANGE_INPUT", name, value, form:"login"} )
    }
    console.log("login con state : ", state);

    const {login} = useContext(AuthContext);
    const navigate = useNavigate()
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch({type:"LOADING"})
        const result = loginCheck(state.login.id, state.login.pwd);
        dispatch({type:"FINISHED"})
        if(result === 0) {  // 인증 통과
            login( state.login.id )
            navigate("/list")
        }
    } 
    return(
    <>
        <LoginCom onSubmit={onSubmit} loading={state.loading} 
        username={state.login.id} password={state.login.pwd} 
        onChange={onChange}/>
    </>);
}
export default LoginCon;