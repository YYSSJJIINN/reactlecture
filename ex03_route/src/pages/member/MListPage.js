import { useNavigate } from "react-router-dom";
import MListCom from "../../componenets/member/MListCom";
import MListCon from "../../containers/member/MListCon";

function MListPage() {
    const navigate = useNavigate();
    const indexBtn = () => {
        navigate("/");
    }
    const beforeBtn = () => {
        navigate(-1);
    }
    return(
        <div>
            <MListCon />
            {/* <MListCom indexBtn={indexBtn} beforeBtn={beforeBtn}/> */}
        </div>
    )
}
export default MListPage;