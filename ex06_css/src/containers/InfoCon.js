import { useEffect, useReducer } from "react";
import InfoCom from "../components/InfoCom";
import HeaderCom from "../components/common/HeaderCom";
import { useNavigate, useParams } from "react-router-dom";
import { initialState, reducer } from "../modules/authModule.js";
import { deleteUser, getInfo } from "../service/authService.js";

function InfoCon() {
    const {username} = useParams();
    const [state, dispatch] = useReducer(reducer, initialState);
    const navigate = useNavigate();
    const onDelete = (username) => {
        deleteUser(username);
        navigate("/list")
    }
    useEffect( () => {
        const data = getInfo(username);
        // 리턴으로 돌아온 값을 dispatch의 data에 저장한다.
        dispatch({type:"LIST", data})
    // 의존성[]주입으로 무한반복을 방지하고 1회만 실행
    }, [username])
    const onModifyForm = () => {
        navigate("/modify/"+username)
    }
    return(
    <>
        <HeaderCom />
        <InfoCom data={state.data} onDelete={onDelete} onModifyForm={onModifyForm} />
    </>)
}
export default InfoCon;