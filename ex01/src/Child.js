function Child( props ) {
    console.log("props : ", props)

    const arr = props.children;
    // [01, 02, 03]라면, 01이 a에 저장, 02가 b에 저장되고, 03은 저장되지 않는다.
    const [a, b] = props.children;
    return (<>
    {/* 주석작성 */}
    <h3>name : {props.name}</h3>
    <h3>children : {props.children}</h3>
    <h3>arr : {arr}</h3>
    <h3>a : {a}</h3>
    <h3>b : {b}</h3>
    child
    </>)
}
export default Child;