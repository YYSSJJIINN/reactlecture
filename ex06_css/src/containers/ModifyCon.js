import { useNavigate, useParams } from "react-router-dom";
import HeaderCom from "../components/common/HeaderCom";
import ModifyCom from "../components/ModifyCom";
import { useEffect, useReducer } from "react";
import { getInfo, modify } from "../service/authService"
import { initialState, reducer } from "../modules/authModule.js";

function ModifyCon() {
    const {username} = useParams();
    const [state, dispatch] = useReducer(reducer, initialState);
    const token = sessionStorage.getItem("token")
    useEffect(() => {
        // const data = getInfo(username)
        // dispatch({type:"MODIFY", data})

        // const getOne = () => {}
        // getOne();

        // 백엔드에 있는 내용을 수정폼에 그대로 가져옴
        // formData 자체를 가져오는게 아니라 그 안의 키-밸류를 가져오는 것
        async function getOne() {
            // const token으로 얻어온 토큰을 getInfo에 전달
            const res = await getInfo(username, token)
            const data = await res.json();
            dispatch({type:"MODIFY", data})
        }
        getOne();
    // username이나 token 값이 변경 될 때만 재실행
    }, [username, token])
    // console.log("MODIFY : ", state)
    const onChange = (e) => {
        const {name, value} = e.target;
        dispatch({type:"CHANGE_INPUT", name, value, form: "modify"})
    }
    const navigate = useNavigate();
    const onSubmit = async (e) => {
        e.preventDefault();
        // console.log("modify submit : ", state.modify)
        // console.log("modify e.target : ", e.target)
        const formData = new FormData(e.target);
        const userData = Object.fromEntries(formData.entries())
        // console.log("userData : ", userData);

        const res = await modify(userData, token)
        if(res.ok)
            navigate("/info/"+username)
        else
            alert(await res.text())

        // modify(userData)
        // navigate("/info/"+username)
    }
    return(
    <>
        <HeaderCom />
        <ModifyCom username={state.modify.username} password={state.modify.password}
        role={state.modify.role} onChange={onChange} onSubmit={onSubmit} />
    </>)
}
export default ModifyCon;