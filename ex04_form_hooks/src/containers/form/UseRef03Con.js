import { useRef, useState } from "react";
import UseRef03Com from "../../components/form/UseRef03Com";


function UseRef03Con() {
    const [num, setNum] = useState(0);
    const number = useRef(0);
    console.log("start");
    const onState = () => {
        setNum(num + 1);
    }
    const onRef = () => {
        number.current = number.current + 1;
        console.log("number : ", number.current)
    }
    return(
    <>
        <UseRef03Com num={num} number={number} onState={onState} onRef={onRef} />
    </>
    )
}
export default UseRef03Con;