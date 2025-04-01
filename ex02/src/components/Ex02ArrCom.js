function Ex02ArrCom( {arr01, arr02}) {
    return(<>
    <ul> arr01 : [1, 2, 3]
        { arr01.map( n=> <li key={n}>{n}</li>) }
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
    <ol> arr02
        { arr02.map( (n, index)=> <li key={index}>{n}</li>) }
    </ol>
    </>)
}
export default Ex02ArrCom;