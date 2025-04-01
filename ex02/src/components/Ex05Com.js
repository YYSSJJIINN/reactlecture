function Ex05Com( {obj, onChangeName, onChangeAddr} ) {
    return(<>
    <div>
        name : {obj.name} <br />
        addr : {obj.addr} <br />
        <button onClick={onChangeName}>이름변경</button>
        <button onClick={onChangeAddr}>주소변경</button>
    </div>
    </>)
}
export default Ex05Com;