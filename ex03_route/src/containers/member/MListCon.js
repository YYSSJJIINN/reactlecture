import { useEffect, useState } from "react";
import MListCom from "../../componenets/member/MListCom";
import { getList } from "../../service/member/member"
import { useNavigate } from "react-router-dom";


function MListCon() {
    // list로 가져온 정보를 useState를 통해 setList로 저장해야한다.
    // list는 useState([])로 초기값이 빈 배열이라
    // 처음에 아무값도 없는데, 이상태로 우선 Com쪽에게 전달된다.

    const [list, setList] = useState([]);

    // 그런 후에 function MListCom( { list } )가 실행(렌더링)된다.
    // list가 아직 아무 값이 없기 때문에 .map은 실행되지 않는다.

    // 그 목록을 setList를 통해서 list에 저장하겠다.
    // setList(getList());

    // MListCom의 렌더링이 끝나고 Con으로 다시 돌아와서 useEffect가 실행된다.
    // 이번엔 list가 데이터(getList()의 반환값)로 채워졌다.
    console.log("start")
    useEffect(() => {
        // setList에 의해서 목록이 불러와져서 list에 표현된다.
        setList(getList());
        console.log("MListCon useEffect() 호출됨")
    }, [] )
    // []는 의존성추가다.
    // 다시 function MListCom( { list } )가 실행된다.

    const navigate = useNavigate();
    const onDelete = ( id ) => {
        // alert(id+ " : 삭제")
        navigate("/member/delete/"+id)
    }

    const [num, setNum] = useState(0);
    const onClick = () => {
        setNum(num + 1);
    }
    const onClick2 = () => {
        console.log("랜더링 없음")
    }

    return(
    <div>
        <button onClick={onClick}>클릭하세요</button>
        <MListCom list={list} onDelete={onDelete} />
    </div>
    );
}
export default MListCon;

// useEffect는 컴포넌트에 다녀온 후에(컴포넌트가 처음 렌더링 된 후) 동작하기 때문에
// 우선은 list에 값이 없는 상태로 MListCom에게 전달되고
// MListCom에서 다 동작한 후에 다시 MListCon에 와서 useEffect가 동작한다.