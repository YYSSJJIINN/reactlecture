import { useSearchParams } from "react-router-dom";
import MOneCom from "../../componenets/member/MOneCom";
import { useState } from "react";
import MOneCon from "../../containers/member/MOneCon";

function MOnePage() {
    const params = useSearchParams();
    // 0번째로 넘겨준 값에 대해 get함수를 이용하여 id를 참조하여 가지고 온다.
    console.log("MOnePage params : ", params[0].get("id"));
    const [user, setUser] = useState("3번 회원정보 가져옴")
    return(
        <div>
            <MOneCon />
            {/* <MOneCom user={user}/> */}
        </div>
    )
}
export default MOnePage;