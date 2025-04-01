import { useState } from "react";
import Ex05Com from "../components/Ex05Com";

function Ex05Con() {
    // useState()안에 {age:20}를 넣어 직접적으로 키밸류를 만들수 있고
    // 비우고 if 문을 작성해도 된다.
    const [obj, setObj] = useState({});
    if(Object.keys(obj).length === 0) {
        setObj( {name : "홍길동", addr : "산골짜기"} );
    }
    const onChangeName = () => {
        // 이름만 바꾸고, 주소는 obj에 있는거 그대로 가져온다.
        setObj( {name : "이순신", addr : obj.addr } );
    }
    const onChangeAddr = () => {
        setObj( {...obj, addr : "바다" } );
    }
    return(<>
    <div>
        <Ex05Com obj={obj}
        onChangeName={onChangeName}
        onChangeAddr={onChangeAddr} />
    </div>
    </>
    );
}
export default Ex05Con;