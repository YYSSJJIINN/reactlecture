import { useNavigate, useParams } from "react-router-dom";
import { deleteOne } from "../../service/member/member";
import { useEffect } from "react";

function MDeleteCon() {
    const params = useParams();
    // service에 작성했던 삭제 함수 불러와서 parmas으로 삭제할 값을 넣어준다.
    const result = deleteOne(params.id);
    const navidate = useNavigate();
    useEffect(() => {
        if(result === 1){
            alert("삭제 성공");
            navidate("/member/list");
        }
    }, [navidate, result])
    return(
    <div>
        MDeleteOne
    </div>
    )
}
export default MDeleteCon;