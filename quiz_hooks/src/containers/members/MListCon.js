import { useEffect, useState } from 'react';
import MListCom from '../../components/member/MListCom';
import { getList } from '../../service/member/member';

function MListCon() {
    // 최초값 없다
    const [list, setList] = useState([]);
    // useEffect는 Com이 최초실행 되고서야 작동한다.
    useEffect(() => {
        setList( getList() );
    // []를 넣어 의존성을 줘야 무한반복이 아닌 딱 한번만 실행된다.
    }, [] )
    console.log("MListCon", list);
    return(<>
        <MListCom list={list} />
    </>)
}
export default MListCon;