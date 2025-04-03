import { useEffect, useReducer, useState } from "react";
import ListCom from "../components/ListCom";
import { initalState, reducer } from "../modeuls/member_red";
import { getList } from "../service/member";

function ListCon() {
    const [state, dispatch] = useReducer(reducer, initalState);
    // const [data, setData] = useState();
    useEffect( () => {
        // setData( 서버 데이터 저장 )
        try{
            // getList 함수 호출
            dispatch( {type:"LOADING"} )
            setTimeout( () => {
                const data = getList();
                dispatch( {type:"FINISHED"} )
                dispatch({type:"LIST", data})
            }, 2)
            // throw new Error("Failed to fetch data")
        }catch(e){
            dispatch( {type:"ERROR", error : e.toString()} )
        }
    // 의존성[] 주입으로 무한반복이 아닌 1회만 실행 
    }, [])
    console.log("state : ", state)
    return(
    <>
        <ListCom data={state.data} loading={state.loading} error={state.error} />
    </>)
}
export default ListCon;