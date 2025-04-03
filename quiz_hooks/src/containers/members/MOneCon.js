import { useNavigate, useSearchParams } from 'react-router-dom';
import MOneCom from '../../components/member/MOneCom'
import { useEffect, useState } from 'react';
import { getOne } from '../../service/member/member';

function MOneCon() {
    const [params] = useSearchParams();
    console.log("params", params);
    // useState({})안에 데이터베이스로부터 받아온 데이터가 들어간다.
    const [data, setData] = useState({});
    useEffect(() => {
        const id = params.get("id");
        setData( getOne(id) );
    // []을 넣어 의존성을 추가해 무한반복이 아니라 1회만 실행된다.
    }, [params] )

    const navidate = useNavigate();
    const onDelete = (id) => {
        navidate("/member/delete/"+id);
    }
    const onModify = (id) => {
        navidate("/member/modify/"+id);
    }

    // 이제 컴포넌트쪽에 data를 보내준다.
    return(<>
        <MOneCom data={data} onDelete={onDelete} onModify={onModify}/>
    </>)
}
export default MOneCon;