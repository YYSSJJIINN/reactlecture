function RegCom({loading, error, onSubmit, onChange, id, pwd, name, addr}) {
    // 백엔드에 서버요청이 완료되어서 화면을 구현할 수 있게 되면
    // true에서 false로 바뀌면서 : 뒤에 위치한 폼이 구현된다.
    return(
    <>
    { loading ?<h3>회원가입 처리중...</h3> :
    error ?<h3>{error}</h3> :
    <form onSubmit={onSubmit}>
        <input type="text" name="id" value={id} onChange={onChange} placeholder="아이디" /><br />
        <input type="text" name="pwd" value={pwd} onChange={onChange} placeholder="비밀번호" /><br />
        <input type="text" name="name" value={name} onChange={onChange} placeholder="이름" /><br />
        <input type="text" name="addr" value={addr} onChange={onChange} placeholder="주소" /><br />

    <button>가입</button>
    </form>
    }
    </>)
}
export default RegCom;