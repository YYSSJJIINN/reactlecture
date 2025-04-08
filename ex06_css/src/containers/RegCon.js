import { useReducer } from "react";
import RegCom from "../components/RegCom";
import { useNavigate } from "react-router-dom";
import { register } from "../service/authService.js"
import { initialState, reducer } from "../modules/authModule.js.js";
import HeaderCom from "../components/common/HeaderCom.js";

function RegCon() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const onChange = (e) => {
        const {name, value} = e.target;
        dispatch({type:"CHANGE_INPUT", name, value, form:"register"});
    }
    const navigate = useNavigate();
    const onSubmit = (e) => {
        e.preventDefault();
        console.log("reg submit : ", state.register)
        register(state.register)
        // 회원가입 성공시 로그인 페이지로 이동
        navigate("/login")

        // try{
        //     dispatch({type:"LOADING"})
        //     //setTimeout(()=>{
        //     const result = register( state.register )
        //     dispatch({type:"FINISHED"})
        //     console.log("result : ", result )
        //     if(result === 1){
        //         navigate("/list")
        //     }else{
        //         throw new Error("동일 아이디 있음")
        //     }
        //     //}, 2000)
        // }catch(e){
        //     dispatch({type:"ERROR", error : e.toString() })
        // }
    }
    return(
    <>
        <HeaderCom />
        <RegCom loading={state.loading} error={state.error}
        username={state.register.username} password={state.register.pwassword} role={state.register.role} 
        onSubmit={onSubmit} onChange={onChange} />
    </>);
}
export default RegCon;