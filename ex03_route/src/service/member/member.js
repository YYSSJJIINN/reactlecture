let data_set = [
    {id:"aaa",pwd :"aaa", name : "홍길동", addr : '산골짜기'},
    {id:"bbb",pwd :"bbb", name:'김개똥', addr:'개똥별'},
    {id:"ccc",pwd :"ccc", name:'고길똥', addr:'마포구'},
]
const getList = () => data_set

// 만약 id에 bbb라는 값이 들어있다면(매개변수)
// data_set.filter로 배열을 필터링해서
// data.id !== id인 데이터만 남긴다. 즉, bbb가 아닌 데이터만 남는다.
// 즉 id가 같은 데이터만 제거되고, id가 다른 데이터는 남는다.
// 새로운 배열을 반환하며, 기존 data_set을 이 값으로 업데이트한다.
const deleteList = (id) => {
    data_set = data_set.filter( data => data.id !== id )
}
const getOne = ( id ) => //결과가 배열로 나오기때문에 0번째 전달
    data_set.filter( data => data.id === id )[0]
    // 결과로 나온 list의 0번째 값(= 첫번재 결과물)을 결과값으로 return해준다.
export {getList , deleteList , getOne }
