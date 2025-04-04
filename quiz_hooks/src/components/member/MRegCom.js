function MRegCom({ inputCheck, reg, onChange, onSubmit}) {
    return(
    <>
        회원가입합시다
        <form onSubmit={onSubmit}>
            <label>
                <input type="text" ref={ e => inputCheck.current[0] = e } name="id" value={reg.id} onChange={onChange} placeholder="input id" /><br />
                <input type="text" ref={ e => inputCheck.current[1] = e } name="pwd" value={reg.pwd} onChange={onChange} placeholder="input pwd" /><br />
                <input type="text" ref={ e => inputCheck.current[2] = e } name="pwdChk" value={reg.pwdChk} onChange={onChange} placeholder="check pwd" /><br />
                <input type="text" ref={ e => inputCheck.current[3] = e } name="name" value={reg.name} onChange={onChange} placeholder="input name" /><br />
                <input type="text" ref={ e => inputCheck.current[4] = e } name="addr" value={reg.addr} onChange={onChange} placeholder="input addr" /><br />
            </label>
            <button>회원가입</button>
        </form>
    </>)
}
export default MRegCom;