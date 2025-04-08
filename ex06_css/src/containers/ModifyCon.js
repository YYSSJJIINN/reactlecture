import { useNavigate, useParams } from "react-router-dom";
import HeaderCom from "../components/common/HeaderCom";
import ModifyCom from "../components/ModifyCom";
import { useEffect, useReducer } from "react";
import { getInfo, modify } from "../service/authService"
import { initialState, reducer } from "../modules/authModule.js";

function ModifyCon() {
    const {username} = useParams();
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        const data = getInfo(username)
        dispatch({type:"MODIFY", data})
    }, [username])
    // console.log("MODIFY : ", state)
    const onChange = (e) => {
        const {name, value} = e.target;
        dispatch({type:"CHANGE_INPUT", name, value, form: "modify"})
    }
    const navigate = useNavigate();
    const onSubmit = (e) => {
        e.preventDefault();
        console.log("modify submit : ", state.modify)
        console.log("modify e.target : ", e.target)
        const formData = new FormData(e.target);
        const userData = Object.fromEntries(formData.entries())
        console.log("userData : ", userData);
        modify(userData)
        navigate("/info/"+username)
    }
    return(
    <>
        <HeaderCom />
        <ModifyCom username={state.modify.username} password={state.modify.password}
        role={state.modify.role} onChange={onChange} onSubmit={onSubmit} />
    </>)
}
export default ModifyCon;