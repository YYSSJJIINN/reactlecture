import { useParams } from "react-router-dom";
import MUpdateCom from "../../componenets/member/MUpdateCom";
import { useState } from "react";
import MUpdateCon from "../../containers/member/MUpdateCon";

function MUpdatePage() {
    const params = useParams();
    console.log("MUpdatePage params : ", params);
    /*
    page -> container -> service( DB연동 = MyBatis연결하던 단위)
                        -> components(view단위)
    */
    // useState도 원래 container에서 만듬
    const [user, setUser] = useState("1번 회원정보 가져옴")
    return(
        <div>
            <MUpdateCon />
            {/* <MUpdateCom user={user}/> */}
        </div>
    )
}
export default MUpdatePage;