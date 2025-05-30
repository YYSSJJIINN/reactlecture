import { useReducer } from "react";
import RegCom from "../components/RegCom";
import { useNavigate } from "react-router-dom";
import { register } from "../service/authService.js"
import { initialState, reducer } from "../modules/authModule.js";
import HeaderCom from "../components/common/HeaderCom.js";

function RegCon() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const onChange = (e) => {
        if(e.target.type === "file") {
            dispatch({type:"CHANGE_INPUT", value:e.target.files[0], name:"file", form:"register"})

        // 사용자가 파일을 선택하지 않았을 경우로,
        // 파일 선택 기능 추가 전과 같은 내용
        } else {
            const {name, value} = e.target;
        dispatch({type:"CHANGE_INPUT", name, value, form:"register"});
        }
    }
    const navigate = useNavigate();
    const onSubmit = async (e) => {
        e.preventDefault();
        console.log("reg submit : ", state.register)
        // 파일 업로드로 인한 formData사용으로 추가된 코드
        const formData = new FormData(e.target);
        // register에서 fetch를 통한 formData 전송
        const res = await register(formData)
        // const res = await register(state.register)
        if( res.ok ) {
            // 단순한 문자열이라 json이 아닌 text사용. 얼러트/모달창이 뜸.
            // json 사용시 개발자도구에서만 보임
            alert(await res.text("회원가입 ㅊㅎㅊㅎ~"));
            // res.json();
            // 회원가입 성공시 로그인 페이지로 이동
            navigate("/login")
        } else {
            alert(await res.text());
        }
        console.log("register : ", res)

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