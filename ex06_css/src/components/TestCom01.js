// 개별적으로 존재하는 css파일을 임포트하면 작성한 쪽의 파일에 해당 스타일을 적용시킬 수 있다.
import "../styles/test.css";

function TestCom01() {
        const style = { color : "blue", fontSize : "20px"};
    return(<>
    <div style={style}>
        TestCom01
    </div>
    {/* 직접 적으로 값을 넣어주는 거로 처리할 때는 중괄호로 한 번 더 묶어서 처리 */}
    <div style={{color : "red", fontSize : "30px"}}>
        css설정
    </div>
    <div id="test" className="test">
        외부 css 설정
    </div>
    </>);
}
export default TestCom01;