import imageFile from "../styles/images/IMG_7677.jpeg";
import { StyleContentBlock, StyleContentWrap } from "./common/StyleContent";
import { ProductContext, ProductImg, ProductList, ProductListBox, ProductName, ProductPrice, ProductTitle } from "./common/StyleProduct";

const products = [
    {id : 1, name : "탱이사료", context : "맛있고 건강한 다이어트 사료!! 냥이들의 식사시간~", price : "56500원", url : imageFile},
    {id : 2, name : "탱이사료", context : "맛있고 건강한 다이어트 사료!! 냥이들의 식사시간~", price : "56500원", url : imageFile},
    {id : 3, name : "탱이사료", context : "맛있고 건강한 다이어트 사료!! 냥이들의 식사시간~", price : "56500원", url : imageFile},
    {id : 4, name : "탱이사료", context : "맛있고 건강한 다이어트 사료!! 냥이들의 식사시간~", price : "56500원", url : imageFile},
    {id : 5, name : "탱이사료", context : "맛있고 건강한 다이어트 사료!! 냥이들의 식사시간~", price : "56500원", url : imageFile},
    {id : 6, name : "탱이사료", context : "맛있고 건강한 다이어트 사료!! 냥이들의 식사시간~", price : "56500원", url : imageFile},
    {id : 7, name : "탱이사료", context : "맛있고 건강한 다이어트 사료!! 냥이들의 식사시간~", price : "56500원", url : imageFile},
    {id : 8, name : "탱이사료", context : "맛있고 건강한 다이어트 사료!! 냥이들의 식사시간~", price : "56500원", url : imageFile},
    {id : 9, name : "탱이사료", context : "맛있고 건강한 다이어트 사료!! 냥이들의 식사시간~", price : "56500원", url : imageFile},
]
function IndexCom() {
    return(
    <>
        <StyleContentBlock>
            <StyleContentWrap>
                <ProductTitle>맛있고 건강한 사료!</ProductTitle>
                <ProductList>
                    { products.map(pro => (
                        <ProductListBox key={pro.id}>
                            <ProductImg src={pro.url} alt="도시락케이크" />
                            <ProductName>{pro.name}</ProductName>
                            <ProductContext>{pro.context}</ProductContext>
                            <ProductPrice>{pro.price}</ProductPrice>
                        </ProductListBox>
                        ) )}
                    {/* <h3 style={{width : "500px", background : "blue"}}>1</h3>
                    <h3 style={{width : "500px", background : "blue"}}>1</h3>
                    <h3 style={{width : "500px", background : "blue"}}>1</h3> */}
                </ProductList>
            </StyleContentWrap>
        </StyleContentBlock>
    </>);
}
export default IndexCom;