import Ex02ArrCom from '../components/Ex02ArrCom';

function Ex02ArrCon() {
    /* 주석 하나씩 풀며 확인하기 */
    const arr01 = [1,2,3];
    // const arr02 = arr01;    // 얕은 복사(주소만 복사된다.)
    // const arr02 = [arr01[0], arr01[1], arr01[2]]
    const arr02 = [ ...arr01, "추가할 값" ]  // ...세개는 깊은 복사로 처리하겠다는 뜻이며 윗줄과 똑같은 뜻이다.
    // arr02[3] = 1234
    // arr01[3] = 5555
    // arr02[3]과 arr01[3]은 동일한 값을 가지고 있다.
    const[a, b] = arr02     // [1, 2, 3, 추가할]
    console.log("a : ", a);
    console.log("b : ", b);
    return(<><Ex02ArrCom arr01={arr01} arr02={arr02} />
    </>)
}
export default Ex02ArrCon;