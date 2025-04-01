import { useState } from "react";

/*
    components : 최종적으로 화면을 그리는 용도
    containers : 함수, 연산 등 모든 값들을 components 전달 후 화면 표현
    Ex01Com.js와 Ex01Con.js만들기
*/

function StateTest01() {
    let num = 100;
    let arr = [10, 20, 30, 40]
    // ()괄호 안의 초기값은 number 위치에 저장된다.
    // []배열 안의 것은 변수니까 짓고 싶은 이름으로 지으면 된다.
    // 두번째 들어오는 값은 number라는 함수를 변경시키기 위한 것이다.
    const [ number, setNumber ] = useState(0);
    console.log("start : ", num);
    const click = () => {
        num = num + 1;
        setNumber( number + 1)
        console.log("click : ", num);
    }
    return (<>
    StateTest의 내용이다<br />
        number : {number}<br />
        <button onClick={click}>클릭</button>
    </>)
}
export default StateTest01;