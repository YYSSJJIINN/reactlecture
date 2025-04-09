let data_set = [
    {username : "ababa", password : "111", role : "USER"},
    {username : "bcbcb", password : "111", role : "USER"},
    {username : "cacac", password : "111", role : "USER"},
]

// 현재는 로컬이긴 하지만 나중을 위해 path라는 변수 사용
const path ="http://localhost:8080";

const login = (username, password) => {
    const result = data_set.filter(data => data.username === username);
    if ( result.legth !== 0 ) {
        if (result[0].password === password) {
            return {status : 200, data : result[0]};
        }
        return {status : 401, data : null};
    }
    return {status : 404, data : null};
}

const register = (user) => {
    // data_set = data_set.concat(user)

    // fetch는 비동기방식
    return fetch(path+"/mem", {
        method:"post", 
        headers:{"Content-Type":"application/json"}, 
        body:JSON.stringify(user)
    })
}

const getList = async () => {
    // 기본이 get방식이라 굳이 작성하지 않아도 되긴함.
    // 비동기로 동작하는 함수 fetch( path+"/mem", {method:"get"})의 결과가 도달할 때 까지
    // 기다리겠다는 의미로 await를 붙인다. await은 부모함수에 async가 있어야 사용가능하다.
    // const res = await fetch( path+"/mem", {method:"get"})
    // const list = await res.json();
    // console.log("list : ", list)
    // res.then(r => {console.log("res : ", r)})
    // return list;

    // 이 방식은 async와 await를 사용하지 않는다.
    // fetch( path+"/mem", {method:"get"})
    // .then( res => {
    //     console.log("res : ", res)
    //     return res.json();
    // })
    // .then( list => {
    //     console.log("list : ", list)
    // })

    // return data_set;
    return fetch( path+"/mem" , {method:"get"} )
}
const getInfo = (username) => {
    return data_set.filter(data => data.username === username)[0]
}
const deleteUser = (username) => {
    data_set = data_set.filter(data => data.username !== username)
}
const modify = (userData) => {
    data_set = data_set.filter(data => data.username!== userData.username)
    data_set = data_set.concat(userData);
}
export { login, register, getList, getInfo, deleteUser, modify };