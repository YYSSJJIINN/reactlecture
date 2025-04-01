function Quiz03StoreCom({store, i, o}) {
    return(<>
        {store.msg === "" ? "오픈 전 입니다":
        <div>
            in number : {store.inData}<br />
            out number : {store.outData}<br />
            in - out = {store.inData - store.outData}
        </div>
        }
        <hr />
        <button onClick={i}>IN</button>
        <button onClick={o}>OUT</button>
    </>)
}
export default Quiz03StoreCom;