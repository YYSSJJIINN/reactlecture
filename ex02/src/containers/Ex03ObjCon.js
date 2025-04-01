import Ex03ObjCom from '../components/Ex03ObjCom';

function Ex03ObjCon() {
    const obj01 = {id:"aaa", name:"홍길동"}
    // const obj02 = obj01;     // 얕은 복사다.
    // const obj02 = {...obj01};   // 깊은 복사 하겠다는 문장
    // cbj02.name="김길이";
    const obj02 = {...obj01, name:"김길이", addr : "산골짜기"};

    return(<>
    <Ex03ObjCom obj01={obj01} obj02={obj02} />
    </>)
}
export default Ex03ObjCon;