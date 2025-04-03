import { useContext } from "react";
import { TestContext } from "../store/TestContext";

function ListCom({ data, loading, error }) {

    // 일종의.. 로그인 후 사용자 이름이 다른 페이지에서도 계속 뜨게하는 것
    const { num } = useContext(TestContext)

    // 로딩이 되다가 false가 뜨면(데이터 받아오는게 완료 되면)
    // : data && data.map가 실행된다.
    return(
    <>
        <h3>num : {num}</h3>
        {loading ?<h3>Loading. . . </h3> :
        error ? <h3>{ error }</h3> :

        data && data.map ( d =>
            <div key={d.id}>
                <span>{d.id}</span><br />
                <span>{d.name}</span><br />
                <span>{d.addr}</span><br />
            </div>
        )}
    </>);
}
export default ListCom;