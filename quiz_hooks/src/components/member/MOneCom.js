// Con쪽에서 보내진 값이 들어있는 data를 받는다.
// Com이 작동되고나서 다시 Con으로 돌아가 useEffect가 실행된다.
function MOneCom( {data, onDelete, onModify} ) {
    return(
    <div>
        <ul>
            <li>id : {data.id}</li>
            <li>pwd : {data.pwd}</li>
            <li>name : {data.name}</li>
            <li>addr : {data.addr}</li>
            <li>
                <button onClick={ () => onDelete(data.id) }>삭제</button>
                <button onClick={ () => onModify(data.id)}>수정</button>
            </li>
        </ul>
    </div>)
}
export default MOneCom;