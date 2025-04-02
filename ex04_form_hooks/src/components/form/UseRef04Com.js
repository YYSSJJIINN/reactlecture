function UseRef04Com({input, onChange, onSubmit, inputId, inputPwd, inputRef}) {
    return(
    <div>
        <form onSubmit={onSubmit}>
            {/* <input type="text" ref={inputId} value={input.username} 
            name="username" onChange={onChange} placeholder="username" /><br />
            <input type="text" ref={inputPwd} value={input.password} 
            name="password" onChange={onChange} placeholder="password" /><br /> */}

            {/* 0번째 공간에 input태그가 들어간다는 뜻 */}
            <input type="text" ref={ e => inputRef.current[0] = e } value={input.username} 
            name="username" onChange={onChange} placeholder="username" /><br />
            <input type="text" ref={ e => inputRef.current[1] = e } value={input.password} 
            name="password" onChange={onChange} placeholder="password" /><br />
            <button>submit</button>
        </form>
    </div>
    );
}
export default UseRef04Com;