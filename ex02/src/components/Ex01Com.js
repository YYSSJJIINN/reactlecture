function Ex01Com( {click, num} ) {
    return(<>
    {num === 100 ? "100과 같다" : "다르다"}
    <hr />
    Con의 계산결과를 받은 Com이다<br />
    num : {num} <br />
    <button onClick={click}>클릭</button>
    </>)
}
export default Ex01Com;