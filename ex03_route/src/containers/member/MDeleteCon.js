import { useNavigate, useParams } from 'react-router-dom';
import { deleteList } from '../../service/member/member';
import { useEffect } from 'react';

function MDeleteCon() {
    const params = useParams();
    console.log("params", params);
    deleteList(params.id);  // id를 삭제하는 함수
    alert("삭제되었습니다.");

    const navegate = useNavigate();
    useEffect(() => {
        console.log("삭제 완료");
        navegate("/member/list")
    });
    

    // 렌더링 하지 않겠다는 뜻이다.
    return null;
}
export default MDeleteCon;