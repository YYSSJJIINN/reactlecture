import { useState } from "react";
import Quiz01Component from "../components/Quiz01Component";

function Quiz01Container() {
    // let num = 4;
    const[num, setNumber] = useState(0)
    const plus = () => {
        setNumber( num + 1 )
        console.log( num )
    }
    const sub = () => {
        setNumber ( num - 1)
    }
    return(<>
    <Quiz01Component n={num} p={plus} s={sub} />
    </>)
}
export default Quiz01Container;