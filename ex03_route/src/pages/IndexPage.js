import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function IndexPage() {
    const [num, setNum] = useState(0);
    // 의존성(, []빈배열추가입력) 없는경우와 있는 경우, 변수가 있는 경우 비교
    useEffect(() => {
        console.log("IndexPage useEffect");
    }, [num]);
    const onClick = () => {
        setNum(num + 1);
    }
    return(
        <div>
            IndexPage<br />
            <Link to="/member/list">회원목록</Link><br />
            <button onClick={onClick}>IndexPage</button><br />
        </div>
    );
}
export default IndexPage;