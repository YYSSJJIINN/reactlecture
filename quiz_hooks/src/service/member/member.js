import { data } from "react-router-dom"

let data_set = [
    {id : "aaa", pwd : "aaa", name : "홍길동", addr : "산골짜기 신선네"},
    {id : "bbb", pwd : "bbb", name : "임꺽정", addr : "산골짜기 도적네"},
    {id : "ccc", pwd : "ccc", name : "장보고", addr : "바다"},
]

// 그냥 모든 리스트를 뽑는 것이므로 특별한 식 필요 없이
// 화살표 함수만 작성해주고 바로 let data_set에서 변수선언인 let을 제외한
// data_set을 바로 불러주면 된다.
export const getList = () => data_set
export const getOne = ( id ) => //결과가 배열로 나오기때문에 0번째 전달
    // 결과로 나온 list의 0번째 값(= 첫번재 결과물)을 결과값으로 return해준다.
    // 화살표 함수의 괄호()에 들어가는 것 포함 item들은 그저 변수명이다.
    // row라고 작성해도 되고, 그냥 알파벳 하나로 입력해도 되는 위치다.
    // 입력한 것이 bbb라면 bbb만 filter에 걸러져 data_set에 저장된다는 뜻이다.
    data_set.filter( (item)  => item.id === id )[0]

// 입력한 id 예를들어 bbb가 첫번째 괄호에 들어가면
// 다른 aaa와 ccc만이 data_set에 저장되어 남아있는다.
export const deleteOne = (id) => {
    // 입력한 것이 bbb라면,
    // id가 bbb가 아닌 것들만 filter에 걸러져 data_set에 남아있는다는 뜻이다.
    // 그러므로 bbb만 제거된 것이다.
    data_set = data_set.filter( (item) => item.id !== id )
    console.log("data : ", data );
    return 1;
}
// export {getList , deleteOne , getOne } 이래도 되지만
// const바로 앞에 직접 작성해줘도 된다.
