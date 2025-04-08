import styled from "styled-components";
import StyleButton from "./common/StyleButton";
import StyleForm from "./common/StyleForm";
import StyleInput from "./common/StyleInput";
import { StyleContentBlock, StyleContentWrap } from "./common/StyleContent";
import { ProductTitle } from "./common/StyleProduct";

// const WhiteBox = styled.div`
//     position : absolute;
//     width : 360px;
//     min-height : 200px;
//     top : 150px;
//     left : calc(50% - 180px);
//     box-shadow : 0 0 8px rgba(0, 0, 0, 0.3);
//     background : white;
//     border-radius : 5px;    // 테두리 라운드
//     .register-area {
//         color : orange;
//         text-align : center;    // 글씨 중앙정렬
//         font-size : 20px;
//         font-weight : bold;
//         letter-spacing : 5px;   // 글자들끼리의 간격
//         border-bottom : 1px dotted olive;   // 올리브색깔로 점섬 밑줄 생김
//         padding-bottom : 5px;   // 글자와 밑줄 사이의 간격
//         width : 50%;    // 화이트박스의 반절만 차지
//         margin : 0 auto;    // 중앙정렬
//         }
// `;
function RegCom({username, password, role, onChange, onSubmit}) {
    return(
    <>
        <StyleContentBlock>
            <StyleContentWrap>
                <ProductTitle>회 원 가 입</ProductTitle>
                <StyleForm onSubmit={onSubmit} width="30%">
                    <StyleInput name="username" value={username} onChange={onChange} placeholder="username"/>
                    <StyleInput name="password" value={password} onChange={onChange} placeholder="password"/>
                    <StyleInput name="role" value={role} onChange={onChange} placeholder="role"/>
                    <StyleButton $background={["178, 235, 244", 0.5]}>REGISTER</StyleButton>
                </StyleForm>
            </StyleContentWrap>
        </StyleContentBlock>
    </>);
}
export default RegCom;