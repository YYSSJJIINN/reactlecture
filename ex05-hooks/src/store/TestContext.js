import { createContext, useState } from "react";

const TestContext = createContext();    // 저장소 생성. value={value}를 저장
const TestProvider = ({children}) => {
    // 전역으로 쓸 수 있게 context에 추가
    const [num, setNum] = useState(0);

    const clickPlus = () => {
        // alert("clickPlus")
        setNum(num + 1);
    }
    const clickSub = () => {
        // alert("clickSub")
        setNum(num - 1);
    }
    // 이 value에 적힌 것들은 전역에서 쓸 수 있게 된다.
    const value = {clickPlus, clickSub, num}

    // 이제 App.js에서 TestContext.Provider에 저장된 값 사용 가능하다
    return(
    <>
        <TestContext.Provider value={value}>
        {children}
        </TestContext.Provider>
    </>)
}
export { TestContext, TestProvider }