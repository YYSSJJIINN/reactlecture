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
// 페이지 버튼들이 모인 구역
const DivPage = styled.div`
    margin-top : 20px;
    text-align : center;
`;
// 페이지 버튼 낱개들
const SpanPage = styled.span`
    width : 30px;
    display : inline-block;
    cursor : pointer;
`;

// 내용들이 {data}에 배열형식으로 들어오므로 반복시켜주면 된다.
function ListCom({data, onInfo, onClick}) {
    console.log("com data : ", data)
    console.log("list com data : ", data)

    // 배열 형식으로 추가
    let number = []
    if( data !== null ) {
        // let i = 1;
        for(let i = 1; i <= data.totalPages; i++) {
            number.push(<SpanPage key={i} onClick={ () => onClick(i) }>{i}</SpanPage>)
        }
        number.push(<b key={data.totalPages + 1}>( {data.currentPage}/{data.totalPages} )</b>)
    }
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
            {data && data.list.map (d => 
            <DivContent key={d.username}>
                <span style={{cursor : "pointer"}} 
                    onClick={ () => onInfo(d.username) }>{d.username}</span>
                <span>{d.password}</span>
                <span>{d.role}</span>
            </DivContent>)}
            <DivPage>{number}</DivPage>
        </DivWrap>
        </StyleContentWrap>
    </StyleContentBlock>
    </>);
}
export default ListCom;