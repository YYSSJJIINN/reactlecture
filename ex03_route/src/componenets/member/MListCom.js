import { Link } from "react-router-dom";

function MListCom1( { indexBtn, beforeBtn } ) {
    console.log("end")
    return (<>
        <div>1.회원목록</div>
        <div>2.회원목록</div>
        <div>3.회원목록</div>
        <hr />
        <Link to="/member/one?id=3">3번 회원 상세</Link> &nbsp;
        <Link to="/member/update/1">1번 회원 수정</Link> &nbsp;
        <hr />
        <button onClick={indexBtn}>Index</button>
        <button onClick={beforeBtn}>beforeBtn</button>
    </>)
}

function MListCom( { list, onDelete } ) {
    console.log("end")
    // list&& : 만약 list의 값이 존재해서 참이라면 그제서야 map이 동작해라 라는 뜻
    // Con에서 값 없는 초창기의 list가 Com에 왔다가 Con으로 돌아가서야
    // 값이 생기기 때문이다.

    // list가 아직 아무 값이 없기 때문에 .map은 실행되지 않는다.
    return (<>
        {list && list.map((item, index) => (
            <div key={index}>
                id : {item.id}<br />
                <Link to={`/member/one/${item.id}`}>{item.name}</Link>
                name : {item.name}<br />
                age : {item.age}<br />
                addr : {item.addr}<br />
                {/* {item.id}삭제를 클릭하는 순간 작동하는 것이 정상이지만 */}
                {/* { onDelete(item.id) }이렇게 작성하는 순간 자동 동작으로 무한 반복한다 */}
                {/* <button onClick={ onDelete(item.id) }>{item.id}삭제</button> */}
                <button onClick={ () => onDelete(item.id) }>{item.id}삭제</button>
                <hr />
            </div>
        )
        )}
    </>)
}
// 렌더링이 끝나고 MListCon으로 돌아간다.
// useEffect가 실행되고 다시 Com으로 돌아온다.
// 이번엔 list.map이 정상적으로 실행된다.
export default MListCom;