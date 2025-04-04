import { useNavigate } from "react-router-dom";
import MRegCom from "../../components/member/MRegCom";
import { useState, useRef } from "react";
import { register } from "../../service/member/member";

const registerObje = {
    id : "", pwd : "", pwdChk : "", name : "", addr : ""
}
function MRegCon() {
    // useState의 초기값을 {}로 초기화해야 오류방지라고 함.
    // 계속 버튼 누르면 오류났었는데 해결되긴함.
    // ~이라고 생각했지만 
    const [reg, setReg] = useState( registerObje );
    const inputCheck = useRef([]);
    const navigate = useNavigate();
    // const inputPwd = useRef();
    // const inputCheckPwd = useRef();
    // const inputName = useRef();
    // const inputAddr = useRef();
    // const inputRef = useRef([]);

    // 입력 값이 변경될 때 상태 업데이트
    const onChange = (e) => {
        // ...는 깊은 복사라는 뜻.
        setReg({...reg, [e.target.name]: e.target.value})
    }
    // 폼 제출 이벤트 핸들러
    const onSubmit = (e) => {
        e.preventDefault();
        console.log("reg : ", reg);
        
        let i = 0;
        // 비어 있는 모든 칸을 입력하라는 코드
        for( ; i <inputCheck.current.length; i++ ) {
            if(inputCheck.current[i].value === "") {
                alert(inputCheck.current[i].name + "항목을 입력하세요.");
                inputCheck.current[i].focus();
                // break를 만날 때면 i라는 값은 length보다 작아진 상태
                // 즉, i가 length와 같지 않다는 것은 break를 만나서 if문을 빠져나온 상태
                break;
            }
        }
        if( i === inputCheck.current.length ) {
            if(inputCheck.current[1].value !== inputCheck.current[2].value) {
                alert("비밀번호가 일치하지 않습니다.");
                // 비밀번호 불일치시 비밀번호 입력칸 초기화시키며 커서 옮긴다.
                inputCheck.current[1].focus();
                setReg({...reg, pwd : "", pwdChk : ""});
            } else {
                // ...는 깊은 복사라는 뜻이다.
                const user = {...reg}
                // 유저가 입력한 reg에서 비번확인은 DB에 저장되지 않기 때문에 삭제과정을 거친 후 저장한다.
                delete user.pwdChk;
                console.log("user : ", user);
                register(user);
                alert("회원가입 완료");
                // 회원가입 완료 시 멤버리스트로 이동.
                navigate("/member/list");
            }
        }
        // if(reg.username === "") {
        //     alert("id 필수 항목")
        //     inputId.current.focus();
        //     return
        // }
        // if(reg.pwdChk !== input.password) {
        //     alert("비밀번호 불일치")
        //     inputCheckPwd.current.focus();
        //     return;
        // }
    }
    // 사용자가 입력한 값이 전달되어야 하므로 리턴문 안에 reg={reg}를 넣어준다.
    return(
    <>
        <MRegCom inputCheck={inputCheck} reg={reg} onChange={onChange} onSubmit={onSubmit} />
    </>)
}
export default MRegCon;