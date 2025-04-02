function UseRef03Com({num, number, onState, onRef}) {
    return(
    <>
        state : {num}<br />
        ref : {number.current}<br />
        <button onClick={onState}>state</button>
        <button onClick={onRef}>ref</button>
    </>
    )
}
export default UseRef03Com;