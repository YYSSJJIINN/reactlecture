import { useNavigate, useParams } from "react-router-dom";

function NotFound() {
    const nav = useNavigate();
    // ["*"]는 사용자가 입력한 특정경로다
    return(
    <>
        <h1>{useParams()["*"]}Notfound</h1>
        <hr />
        member/없는 경로 페이지는 존재하지 않습니다.
        <button onClick={ () => nav("/")}>HOME으로 이동</button>
    </>)
}
export default NotFound;