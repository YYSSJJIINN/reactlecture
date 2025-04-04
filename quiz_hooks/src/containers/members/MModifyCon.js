import { useNavigate, useParams } from "react-router-dom";
import MModifyCom from "../../components/member/MModifyCom";
import { useEffect, useState } from "react";
import { getOne, modify } from "../../service/member/member";

function MModifyCon() {
    // 사용자가 입력한 값을 가져와주는 useParams
    const params = useParams();
    const [data, setData] = useState({});
    useEffect(() => {
        setData( getOne(params.id) );
    // 의존성 추가하여 무한반복이 아닌 1회로 끝낸다.
    }, [params])
    console.log("data", data);
    const navigate = useNavigate();
    const onChange = (e) => {
        setData({ ...data, [e.target.name] : e.target.value })
    }
    const onSubmit = (e) => {
        e.preventDefault();
        console.log("onSubmit", data);
        modify(data)
        navigate("/member/one?id="+data.id);
    }

    // 이 부분엔 Com쪽으로 data을 전달해주는 내용이 작성된다.
    return(
    <>
        <MModifyCom data={data} onChange={onChange} onSubmit={onSubmit}/>
    </>)
}
export default MModifyCon;