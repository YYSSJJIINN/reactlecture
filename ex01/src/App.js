import Site from "./Site"
import Child from "./Child"

function App() {
    const a_tag = [
        {txt:"네이버", href:'https://www.naver.com/'},
        {txt:"다음", href:'https://www.daum.net/'},
        {txt:"구글", href:'https://www.google.com/'},
    ]
    return (<>
        {/* <Site a_tag = {a_tag} /> */}
        <Child name="홍길동" >
        {"데이터 전송01"}{"데이터 전송02"}{"데이터 전송03"}
        </Child>
        </>
        )
}
export default App;