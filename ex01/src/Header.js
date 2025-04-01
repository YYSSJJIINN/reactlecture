function header( props ) {
    console.log("props => ", props)
    return <><h3>HEADER 영역</h3>
    test : {props.test}<br />
    num : {props.number}<br />
    </>
}
export default header;