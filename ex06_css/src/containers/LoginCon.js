import { useContext, useReducer } from "react";
import HeaderCom from "../components/common/HeaderCom";
import LoginCom from "../components/LoginCom";
import { initialState, reducer } from "../modules/authModule.js";
import { login } from "../service/authService.js";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../store/AuthContext.js";

function LoginCon() {
    const [state, dispatch] = useReducer(reducer, initialState);
    // console.log("login con : ", state)

    // 전역에 저장된 값을 가져온다
    const { loginProvider } = useContext(AuthContext);
    const onChange = (e) => {
        const { name, value } = e.target;
        dispatch({type : "CHANGE_INPUT", form : "login", name, value});
        // console.log("login onChange : ", state.login)
    };
    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();
        // console.log("login onSubmit : ", state.login)
        dispatch({type : "LOADING"});
        // 백엔드와 연결하며 async를 사용했으므로 await도 붙여준다.
        const res = await login(state.login.username, state.login.password);
        // const result = login(state.login.username, state.login.password);
        // console.log("login res : ", await res.json())
        if( res.ok ) {
            const data = await res.json();
            console.log("data : ", data)
            loginProvider(state.login.username, data.token);
            navigate("/")
        } else {
            dispatch({type : "INITIALSTATE"});
        }
        // dispatch({type : "FINISHED"});
        // if( result.status === 200 ) {
        //     // alert("로그인 성공");
        //     // 로그인 성공시 홈 화면으로 이동
        //     navigate("/")
        //     // 로그인 프로바이더가 유저이름을 전달
        //     loginProvider(state.login.username);
        // } else {
        //     // alert("로그인 실패");
        //     // 아이디와 비밀번호 초기화
        //     dispatch({type : "INITIALSTATE"});
        // }
    }
    return(
    <>
        <HeaderCom />
        <LoginCom loading={state.loading} onChange={onChange} onSubmit={onSubmit} username={state.login.username} password={state.login.password}/>
    </>);
}
export default LoginCon;