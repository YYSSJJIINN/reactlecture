import styled from "styled-components";

const ProductTitle = styled.h2`
    text-align : center;
    color : chocolate;
`;
const ProductList = styled.div`
    display : flex;
    flex-wrap : wrap;  // 해당 태그에 대한 길이 보장 가능
`;
// (총길이 - 여백수 * 여백사이즈) / 이미지 수 = 각각의 이미지 width값
// (110 - 3 *30) / 4 = 260px
const ProductListBox = styled.div`
    width : 252.5px;
    margin-right : 30px;
    // 마지막 요소에 대해서만 한정하여 조건걸기
    &:nth-child(4n) {margin-right : 0;}
    margin-top : 30px;
    border : 1px solid #ccc;
    border-radius : 5px;
    box-shadow : 0 0 5px rgba(0, 0, 0, 0.1);    // 음영효과
`;
const ProductImg = styled.img`
    width : 100%;
`;
const ProductName = styled.h3`
    font-size : 20px;
    text-align : center;
    width : 50%;
    margin : auto;
    padding : 10px 0;
    border-bottom : 1px solid gray;
`;
const ProductContext = styled.p`
    font-size : 15px;
    margin-left : 5px;
    margin-right : 5px;
`;
const ProductPrice = styled.p`
    font-size : 15px;
    margin-right : 5px;
    color : #007bff;
    text-align : right;
`;
export { ProductTitle, ProductList, ProductListBox, ProductImg, ProductName, ProductContext, ProductPrice }