import { useEffect, useState } from "react";
import MOneCom from "../../componenets/member/MOneCom";
import { useParams } from "react-router-dom";
import { getOne } from "../../service/member/member";

function MOneCon() {
    const [user, setUser] = useState();
    const params = useParams();
    useEffect(() => {
        setUser( getOne(params.id) );
    }, []);
    // []를 추가함으로써 의존성 추가되고, 딱 한번만 실행하겠다는 뜻이다.
    //그러나 });로 아무것도 작성하지 않으면 무한반복이다.
    // 이렇게 useEffect가 실행되고나서
    // function MOneCom( {user} )가 실행된다.

    return(
        <div>
            <MOneCom user={user} />
        </div>
    );
}
export default MOneCon;

// useEffect는 컴포넌트에 다녀온 후에(컴포넌트가 처음 렌더링 된 후) 동작하기 때문에
// 우선은 user에 값이 없는 상태로 MOneCom에 전달되고
// MOneCom에서 다 동작한 후에 다시 MOneCon에 와서 userEffect가 동작한다.