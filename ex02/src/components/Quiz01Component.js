function Quiz01Component( {n, p, s}) {
    return(<>
    {n === 4 ? "4와 같다" : "다르다"}
    <hr />
    num : {n} <br />
    <button onClick={p}>더하기</button>
    <button onClick={s}>빼기</button>
    </>)
}
export default Quiz01Component;