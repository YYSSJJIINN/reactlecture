function MOneCom( {user} ) {
    // 컴포넌트가 최초실행 되고나서 Con에 값이 들어가기 때문에
    // Con에서 값이 비어있는 초창기의 user가 Com에 왔다가
    // 렌더링이 끝나고 다시 Con에 돌아가
    // useEffect가 작동하고나서야 값이 채워지고
    // 다시 Com으로 돌아온다.
    return (<>
    MOneCom<br />
    {user &&
    <div>
        id : {user.id}<br />
        name : {user.name}<br />
        addr : {user.addr}<br />
    </div> }
    </>
    )
}
export default MOneCom;

// {user.id}라고만 작성하면 처음엔 Con에서 값이 하나도 없는 채로
// 전달되기 때문에 에러가 뜨므로 {user && user.id}로 수정한다.
// 이는 user에 값이 있다면 작동한다~ 라는 뜻이다.