import { useState } from 'react';
import Ex04Com from '../components/Ex04Com'

function Ex04Con() {
    const [arr, setArr] = useState([1, 2]);
    console.log("start")
    const onBtn = () => {
        // arr.push("안녕");
        const copy = arr.concat("안녕");
        console.log(arr);
        setArr( copy );
    }
    return(<>
        <Ex04Com onBtn={onBtn} arr={arr} />
    </>
    );
}
export default Ex04Con;