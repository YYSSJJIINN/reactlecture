function ReducerCom({state, onUp, onDown}) {
    return(
    <div>
        {state.value}<br />
        <button onClick={onUp}>up</button>
        <button onClick={onDown}>down</button>
    </div>);
}
export default ReducerCom;