function Nav( props ) {
    // props : {name : 홍길동, addr : 산골짜기}
    const { name } = props
    console.log("name : ", name );
    const { addr : aaa} = props
    const { name :n , addr } = props
    return (
        <nav>
            <ul>
                <li><a href="#"> {name} </a></li>
                <li><a href="#"> {aaa} </a></li>
                <li><a href="#"> {n} </a></li>
            </ul>
        </nav>
    );
}
export default Nav;