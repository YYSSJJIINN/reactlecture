import Input01Com from "../../components/form/Input01Com";
import { useState} from "react";

function Input01Con() {
    const [input, setInput] = useState({ username: '', password: ''})
    const onChange = (e) => {
        // 다른페이지로 이동하는걸 막아주는 방지 코드
        e.preventDefault();

        console.log(e.target);
        console.log(e.target.value);
        // ...표시는  깊은 복사
        // 유동적인 값이 필요할 때는 []로 묶어줘야한다.
        setInput({...input, [e.target.name] : e.target.value})
        console.log("input : ", input)
    }
    const onSubmit = (e) => {
        // 다른페이지로 이동하는걸 막아주는 방지 코드
        e.preventDefault();
        console.log("submit : ", input)

        // 사용자가 입력한 값을 그대로 서버처리하는 내용 작성할 곳
        // 현재는 작성이 안된 상태이기 때문에
        // input창에 타이핑 후 버튼클릭하면
        // 서버처리 없이 그냥 a태그나 Link태그의 역할만 할 뿐이다.
    }
    return(
    <>
    <Input01Com input={input} onSubmit={onSubmit} onChange = {onChange} />
    </>
    )
}
export default Input01Con;

// input={input}표시는 사용자가 입력한 값을 Com쪽에 전달해준다는 뜻이다.