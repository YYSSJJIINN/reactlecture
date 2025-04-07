import styled from 'styled-components';

// []배열 안에 색깔을 넣어 변수 선언 하고
// 백틱 안에 색깔 적용을 ${}변수 표시 안에 변수명과
// 몇 번째 색깔을 사용할 것인지 [숫자]를 함께 작성해주면 적용된다.
const colorList = ["red", "skyblue"]

// div태그 안에 적용할지 a태그 안에 적용할지 다른것에 적용할지 styled.뒤에 작성
// `백틱`안에 원하는 스타일 코드 작성
const StyleDiv01 = styled.div`
    color : blue; font-size : 30px;
    background-color : ${colorList[1]}
`;
const StyleH1 = styled.h1`
    background-color : yellow;
    color : ${colorList[0]};
`;
function TestCom02() {
    return(
    <>
        <StyleDiv01>
            TestCom02
        </StyleDiv01>
        <StyleH1>
            TestCom02
        </StyleH1>
    </>
    );
}
export default TestCom02;