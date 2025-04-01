function Quiz02InOutCom( {msg, i, o}) {
    return(<>
        {msg === "" ? "값 없음":msg}<br />
        <button onClick={i}>IN</button>
        <button onClick={o}>OUT</button>
    </>)
}
export default Quiz02InOutCom;