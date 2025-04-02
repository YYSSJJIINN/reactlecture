function Input01Com( {onChange, onSubmit, input} ) {
    return(
    <>
        <form onSubmit={onSubmit} action="https://www.naver.com">
            <input type="text" value={input.username} name="username" onChange={onChange} /><br />
            <input type="text" value={input.password} name="password" onChange={onChange} /><br />
            <button>클릭</button>
            <input type="submit" value="전송" />
        </form>
    </>
    )
}
export default Input01Com;