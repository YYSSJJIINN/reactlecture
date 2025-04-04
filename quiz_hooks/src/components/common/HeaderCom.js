import { Link, Outlet } from "react-router-dom";

function HeaderCom() {
    return(
    <div>
        <header>
        <Link to="/">HOME</Link> &nbsp;
        <Link to="/member/list">MEMBERList</Link> &nbsp;
        <Link to="/member/register">회원가입</Link> &nbsp;
        <Link to="/member/login">로그인</Link>
        </header>
        <hr />
        <main>
            <Outlet />
        </main>
    </div>
    )
}
export default HeaderCom;