import { useState } from "react";
import Quiz03StoreCom from "../components/Quiz03StoreCom";

function Quiz03StoreCon() {
    const [store, setStore] = useState(
        {msg : "", inData : 0, outData : 0})
    //난 if문을 여기에 작성해야할 줄 알았는데 아니었음
    // if(store.inData === 0) {
    //     setStore( {msg : "나갈 사람 없음"})
    // }
    // if(store.outData === inData) {
    //     setStore( {msg : "나갈 사람 없음"})
    // }
    const inClick = () => {
        setStore(
            // 깊은 복사를 뜻하는 ...과 useState()에서 객체로 제공됐던 것 중 필요한 것만
            {...store, msg : "어서오세요", inData : store.inData + 1 }
            // 아래는 내가 작성했던건데 틀림
            // "in number : " + store.inData + 1,
            // "out number : " + store.outData,
            // "in - out = " +  store+ 1
        )
    }
    const outClick = () => {
        // if문을 여기에 작성해야할 줄은 몰랐음
        if(store.inData - store.outData === 0)
            alert("나갈 손님이 없습니다")
        else
            setStore(
                // 깊은 복사를 뜻하는 ...과 useState()에서 객체로 제공됐던 것 중 필요한 것만
                {...store, msg : "안녕히 가세요", outData : store.outData + 1}
            // 아래는 내가 작성했던건데 틀림
            // ("in number : ", store.inData)
            // ("out number : ", store.outData - 1)
            // ("in - out = ",  store - 1)
        )
    }
    return(<>
    <Quiz03StoreCom store={store} i={inClick} o={outClick} />
    </>)
}
export default Quiz03StoreCon;