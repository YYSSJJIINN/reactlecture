import UseRef04Com from "../../components/form/UseRef04Com";
import{ useRef, useState } from "react"

const init = {username:"", password:""}
// Ref란.. DOM에 접근 하기 위해 만드는 것
function UseRef04Con() {
    const[input, setInput] = useState(init);
    const inputId = useRef();
    const inputPwd = useRef();
    const inputRef = useRef([]);
    const onChange = (e) => {
        // ...는 깊은 복사라는 뜻.
        setInput({...input, [e.target.name]: e.target.value})
    }
    const onSubmit = (e) => {
        e.preventDefault();
        for (let i = 0; i < inputRef.current.length; i++) {
            if(inputRef.current[i].value === "") {
                alert(inputRef.current[i].name + " empty")
                inputRef.current[i].focus()
                return
            }
        }
        // if (input.username === "") {
        //     alert("username is empty")
        //     inputId.current.focus()
        // } else if (input.password === "") {
        //     alert("password is empty")
        //     inputPwd.current.focus()
        // } else {
        //     // 모든 데이터 입력 후 전송
        // }
    }
    return(
    <div>
        <UseRef04Com inputRef={inputRef} inputId={inputId} inputPwd={inputPwd} input={input} 
        onChange={onChange} onSubmit={onSubmit}/>
    </div>
    )
}
export default UseRef04Con;