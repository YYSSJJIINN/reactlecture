import { Link } from "react-router-dom";
import styled from "styled-components";

const WrapBlock = styled.div`
    position : fixed;
    z-index : 1;    // 스크롤 내렸을 때 메인화면인 헤드 안으로 들어가게
    background-color : white;   // 헤더에 색깔 넣으면 위로 올라간 메인화면은 색깔에 가려져 안보임
    width : 100%;
    border-bottom : 1px solid raba( 0, 0, 0, 0.1 );
`;
const StyledHeader = styled.header`
    margin : 0 auto;    // 중앙
    display : flex;     // 가로배치
    width : 1100px;
    height : 100px;
    align-items : center;   // 글씨가 세로의 중앙. display를 사용해야 가능
`;
const StyledTitle = styled.h1`
    width : 200px;
    .link { color : black; }
    .link:hover {color : gray;}
`;
const StyledNav = styled.nav`
    display : flex;
    justify-content : space-between;
    width : 100%;
    ul { display : flex; }
    ul li { margin-right : 30px; }
    .menu li a { font-size : 20px; font-weight : bold; }
    a { color : black; }
    a:hover { color : gray; }
`;
function HeaderCom() {
    return(
    <>
        <WrapBlock>
            <StyledHeader>
                <StyledTitle>
                    <Link to="/" className="link">탱탱냥</Link>
                </StyledTitle>
                <StyledNav>
                    <ul className="menu">
                        <li><Link to="/">사료</Link></li>
                        <li><Link to="/">간식</Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/login">로그인</Link></li>
                        <li><Link to="/">회원가입</Link></li>
                    </ul>
                </StyledNav>
            </StyledHeader>
        </WrapBlock>
    </>);
}
export default HeaderCom;