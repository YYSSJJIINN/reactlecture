function MModifyCom( {data, onSubmit, onChange} ) {
    // 아이디는 수정가능하지 않고 읽기 전용이므로 onChange를 작성하지 않는다.
    return(
    <>
        <form onSubmit={onSubmit}>
            <label>
                <input type="text" name="id" value={data.id} readOnly /><br />
                <input type="text" name="pwd" value={data.pwd} onChange={onChange} /><br />
                <input type="text" name="name" value={data.name} onChange={onChange} /><br />
                <input type="text" name="addr" value={data.addr} onChange={onChange} /><br />
            </label>
            <button>수정</button>
        </form>
    </>)
}
export default MModifyCom;