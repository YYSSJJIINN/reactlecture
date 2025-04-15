import { useEffect, useReducer, useState } from "react";
import InfoCom from "../components/InfoCom";
import HeaderCom from "../components/common/HeaderCom";
import { useNavigate, useParams } from "react-router-dom";
import { initialState, reducer } from "../modules/authModule.js";
import { deleteUser, getInfo, getImage } from "../service/authService.js";

function InfoCon() {
    const {username} = useParams();
    const [state, dispatch] = useReducer(reducer, initialState);
    const navigate = useNavigate();
    const token = sessionStorage.getItem("token");
    const [imageUrl, setImageUrl] = useState();
    const onDelete = async (username) => {
        // 부모함수에 async가 들어갔으므로 const res = await를 추가해준다.
        const res = await deleteUser(username, token, state.data.fileName);
        if(res.ok)
            navigate("/list")
    }
    useEffect( () => {
        // const data = getInfo(username);
        // // 리턴으로 돌아온 값을 dispatch의 data에 저장한다.
        // dispatch({type:"LIST", data})
        
        // const auth = JSON.parse(sessionStorage.getItem("auth"))
        // console.log("info token : ", auth.token)
        // getInfo(username, sessionStorage.getItem("token"))

        // getInfo(username, token)
        // // .then(res => {
        // //     if(res.ok)
        // //         return res.json()
        // // })
        // .then(res => res.json())
        // .then(data => {
        //     dispatch({type:"LIST", data})
        //     console.log("info data : ", data);
        //     // 원래 getImage 코드가 여기에 있어야 하는데
        //     // 마찬가지로 비동기라 또 then을 연속해서 쓰다가
        //     // 루프에 빠질 위험성 때문에 바깥으로 빼낸다.
        // })

        async function getData() {
            const res = await getInfo(username, token);
            if(res.ok) {
                const data = await res.json();
                dispatch({type:"LIST", data})
                const imageRes = await getImage(data.fileName);
                if(imageRes.ok) {
                    // 파일을 바이트로 저장한다.
                    const imageBlob = await imageRes.blob();
                    // 바이트화 한 파일을 이미지 상태로 저장한다.
                    setImageUrl(URL.createObjectURL(imageBlob));
                }
            }
        }
        getData();
    // 의존성[]주입으로 무한반복을 방지하고 1회만 실행
    }, [username, token])

    const onModifyForm = () => {
        navigate("/modify/"+username)
    }
    return(
    <>
        <HeaderCom />
        <InfoCom data={state.data} onDelete={onDelete} onModifyForm={onModifyForm} imageUrl={imageUrl} />
    </>)
}
export default InfoCon;