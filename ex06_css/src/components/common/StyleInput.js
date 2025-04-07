import styled from "styled-components";

const StyleInput = styled.input`
    color : gray;
    font-size : 20px;
    margin-top : 10px;
    border : none;  // 테두리 선 없앰.
    outline : none;
    border-bottom : 1px solid lightgray;
    letter-spacing : 3px;
    width : 100%;
    &:focus {border-bottom : 1px solid gray;}   // 만약 커서가 선택된다면 아랫줄을 조금 진하게 한다.
`;
export default StyleInput;