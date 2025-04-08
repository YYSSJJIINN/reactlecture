import HeaderCom from "../components/common/HeaderCom";
import ListCom from "../components/ListCom";
import { useEffect, useReducer } from "react";
import { reducer, initialState } from "../modules/authModule.js";
import { getList } from "../service/authService.js"
import { useContext } from "react";
import { AuthContext } from "../store/AuthContext.js";
import { useNavigate } from "react-router-dom";

function ListCon() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {auth} = useContext(AuthContext)
    const navigate = useNavigate();
    const onInfo = ( username ) => {
        if(auth.isLoggedIn) {
            navigate("/info/"+username)
        } else {
            navigate("/login")
        }
    }
    useEffect( () => {
        const data = getList()
        dispatch({type:"LIST", data})
    },[] )
    return(
    <>
        <HeaderCom />
        <ListCom data={state.data} onInfo={onInfo} />
    </>);
}
export default ListCon;