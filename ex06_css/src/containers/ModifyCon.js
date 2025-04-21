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
        const {name, value, files} = e.target;
        if (name === "file") {
            dispatch({ type: "CHANGE_INPUT", name, value: files[0], form: "modify" })
        } else {
            dispatch({type:"CHANGE_INPUT", name, value, form: "modify"})
        }
    }
    const navigate = useNavigate();
    const onSubmit = async (e) => {
        e.preventDefault();
        // console.log("modify submit : ", state.modify)
        // console.log("modify e.target : ", e.target)

        // 이거만 있으면 아래 두줄 append는 필요 없음. 있으면 오히려 중복된다.
        const formData = new FormData(e.target);
        // const formData = new FormData();
        // formData.append("password", state.modify.password);
        // formData.append("role", state.modify.role);
        if (state.modify.file) {
            formData.append("file", state.modify.file); // 파일이 있을 때만 첨부
        }
        // const userData = Object.fromEntries(formData.entries())
        // console.log("userData : ", userData);

        try {
        // const res = await modify(userData, token)
        const res = await modify(username, formData, token)
        if(res.status === 200)
            navigate("/info/"+username)
        else
            // alert(await res.text())
            alert("수정에 실패했습니다.")
        } catch (err) {
            console.error("에러 발생:", err);
            alert("에러: " + (err.response?.data || err.message));
        }
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