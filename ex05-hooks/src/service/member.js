let data_set = [
    {id:"aaa",pwd :"aaa", name : "홍길동", addr : '산골짜기'},
    {id:"bbb",pwd :"bbb", name:'김개똥', addr:'개똥별'},
    {id:"ccc",pwd :"ccc", name:'고길똥', addr:'마포구'},
]
const getList = () => data_set
const register = (user) => {
    data_set = data_set.concat(user)
    return 1 //성공 1  
}
const loginCheck = (id, pwd) => {
    const data = data_set.filter(data => data.id ===  id)
    if(data.length !== 0){ //id가 존재하는 경우
        if(data[0].pwd === pwd){
            return 0 //인증 성공
        }else{
            return 1 //비밀번호 틀림
        }
    }else{
        return -1 //존재하지 않는 id
    }
}
export { register ,  getList, loginCheck }