import { Link } from "react-router-dom";

function MListCom( {list} ) {
    // list && list.map : list에 값이 들어있다면 list.map을 실행한다는 뜻이다.
    // 이동주소에서 물음표?는 서치파람으로 값을 받는 것이다.
    return(
    <div>
        <table border={1}>
            <thead>
                <tr>
                    <th>아이디</th>
                    <th>이름</th>
                </tr>
            </thead>
            <tbody>
                {
                    list && list.map( (item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>
                                <Link to={"/member/one?id="+item.id}>
                                {item.name}
                                </Link>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>)
}
export default MListCom;