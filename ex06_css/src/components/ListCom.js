import styled from "styled-components";
import {StyleContentBlock, StyleContentWrap} from "./common/StyleContent";

// const AuthBlock = styled.div`
//     position : absolute;    // 절대위치
//     left : 0; top : 0; bottom : 0; right : 0;
// `;
// const ListBox = styled.div`
//     position : absolute;    // 절대위치
//     width : 500px;
//     mini-height : 400px;
//     top : 200px;
//     left : calc(50% - 250px);
//     table {
//         width: 100%;
//         border-collapse: separate; /* 기본값: separate */
//         border-spacing: 0 15px; /* 수직으로 20px 간격 */
//     }
//     th {
//         padding: 10px 20px;  /* 좌우 여백을 늘려서 칸 간격이 넓어짐 */
//         border: 1px solid #ccc; /* 칸 구분도 보이게 */
//         text-align: center;
//         font-weight : bold;
//         border : none;
//     }
//     tr {
//         border-bottom : 1px solid black;
//     }
// `;
const ListTitle = styled.h3`
    text-align : center;
    letter-spacing : 15px;
    font-size : 30px;
    color : brown;
    width : 200px;
    margin : 20px auto;
`;
const DivWrap = styled.div`
    margin : auto;
    width : 30%;
    border-top : 1px solid gray;
`;
const DivContent = styled.div`
    display : flex;     // 가로배치
    justify-content : space-between;    // 양 끝쪽으로 균등배치
    border-bottom : 1px solid gray;
    padding : 15px;
`;

// 내용들이 {data}에 배열형식으로 들어오므로 반복시켜주면 된다.
function ListCom({data, onInfo}) {
    console.log("com data : ", data)
    // {data && data.map ((d, i) =><DivContent key={i}>라고 해도 되는데 
    // 이런 경우에는 리스트에 변화가 거의 없고 고유값이 없는 경우만 권장된다.
    return(
    <>
    <StyleContentBlock>
        <StyleContentWrap>
        <ListTitle>회원목록</ListTitle>
        <DivWrap>
            <DivContent>
                <b>아이디</b><b>비밀번호</b><b>ROLE</b>
            </DivContent>
            {data && data.map (d => 
            <DivContent key={d.username}>
                <span style={{cursor : "pointer"}} 
                    onClick={ () => onInfo(d.username) }>{d.username}</span>
                <span>{d.password}</span>
                <span>{d.role}</span>
            </DivContent>)}
        </DivWrap>
        {/* <div>
        <table>
            <thead>
                <tr>
                    <th>아이디</th>
                    <th>비밀번호</th>
                    <th>ROLE</th>
                </tr>
            </thead>
            <tbody>
                룰루랄라
            </tbody>
        </table>
        </div> */}
        </StyleContentWrap>
    </StyleContentBlock>
    </>);
}
export default ListCom;