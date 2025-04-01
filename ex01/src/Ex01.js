function Ex01() {
    let list = []   // 배열만듬
    list = list.concat(<h3>list 0</h3>);
    list = list.concat(<h3>list 1</h3>);
    const obj = {k01 : <i>k11</i>, k02 : <h3>k222</h3>}
    let arr = []
    for(let i=0 ; i<5 ; i++) {
        if( i % 2 === 0 ) {
            arr = arr.concat(<h3>{i}.안녕</h3>)
        }
    }
    return(
    <>
    {arr}
    {list}
    {obj.k01}{obj["k02"]}
    Ex01<hr />
    </>)
}
export default Ex01;