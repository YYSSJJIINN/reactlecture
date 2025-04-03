import { useContext } from "react";
import TestCom from "../components/TestCom";
import { TestContext } from "../store/TestContext";

function TestCon() {
    const context = useContext( TestContext )
    console.log("context : ", context)
    const onPlus = () => {
        context.clickPlus();
    }
    const onSub = () => {
        context.clickSub();
    }
    return(
    <>
        <TestCom num={context.num} onPlus={onPlus} onSub={onSub} />
    </>);
}
export default TestCon;