function Ex04Com( {onBtn, arr} ) {
    return(<>
    <div>
        <h1>{arr}</h1>
        <button onClick={onBtn}>버튼</button>
    </div>
    </>)
}
export default Ex04Com;