import HeaderCom from "../components/common/HeaderCom";
import ListCom from "../components/ListCom";
import { useEffect, useReducer, useState } from "react";
import { reducer, initialState } from "../modules/authModule.js";
import { getList } from "../service/authService.js"
import { useContext } from "react";
import { AuthContext } from "../store/AuthContext.js";
import { useNavigate } from "react-router-dom";

function ListCon() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {auth} = useContext(AuthContext)
    // start라고 적힌 부분은 모두 페이징 부분 추가한 것.
    const [start, setStart] = useState(1);
    const onClick = (start) => {
        setStart(start);
    }
    const navigate = useNavigate();
    const onInfo = ( username ) => {
        if(auth.isLoggedIn) {
            navigate("/info/"+username)
        } else {
            navigate("/login")
        }
    }
    useEffect( () => {
        // const data = getList()
        // console.log("container data : ", data)
        // dispatch({type:"LIST", data})

        // 백엔드에서 연산된 결과가 ()에 들어온다
        // getList()
        // .then( res => {
        //     console.log("res", res)
        //     // 데이터 값이 잘 들어왔다면
        //     if( res.ok )
        //         return res.json();
        // })
        // // 나중에 백엔드에서 들어온 결과값이 data
        // .then( data => {
        //     console.log("list : ", data)
        //     dispatch({type:"LIST", data})
        // })

        // hook 안에 있는 함수이지, hook인 함수가 아니므로 async사용가능하다
        async function get() {
            // 비동기함수
            const res = await getList(start);
            const data = await res.json();
            // console.log("res : ", res)
            dispatch({type:"LIST", data})
        }
        get();
    // 해당하는 번호가 바뀔때마다(클릭할 때마다) 반복하겠다
    },[start] )
    return(
    <>
        <HeaderCom />
        <ListCom data={state.data} onInfo={onInfo} onClick={onClick} />
    </>);
}
export default ListCon;