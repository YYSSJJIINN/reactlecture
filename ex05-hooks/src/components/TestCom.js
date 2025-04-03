function TestCom({num, onPlus, onSub}) {
    return(
    <>
        {num}<br />
        <button onClick={onPlus}>onPlus</button>
        <button onClick={onSub}>onSub</button>
    </>)
}
export default TestCom;