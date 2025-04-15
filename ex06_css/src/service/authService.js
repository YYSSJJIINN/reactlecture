let data_set = [
    {username : "aaa", password : "111", role : "USER"},
    {username : "bbb", password : "111", role : "USER"},
    {username : "ccc", password : "111", role : "USER"},
]

// 현재는 로컬이긴 하지만 나중을 위해 path라는 변수 사용
const path ="http://localhost:8080";

const login = (username, password) => {
    // const result = data_set.filter(data => data.username === username);
    // if ( result.legth !== 0 ) {
    //     if (result[0].password === password) {
    //         return {status : 200, data : result[0]};
    //     }
    //     return {status : 401, data : null};
    // }
    // return {status : 404, data : null};

    // const form = {username, password}
    // return fetch(path+"/mem/login", {
    //     method:"post",
    //     headers:{"Content-Type":"application/json"},
    //     body:JSON.stringify(form)
    // });
    
    const form = new FormData();
    form.append("username", username);
    form.append("password", password);
    // headers content-type 없으면 multipart 방식
    return fetch(path+"/mem/login", {method:"post", body:form})
    
}

const register = (user) => {
    // data_set = data_set.concat(user)

    // fetch는 비동기방식
    return fetch(path+"/mem", {
        method:"post", 
        // headers:{"Content-Type":"application/json"}, 
        // body:JSON.stringify(user)

        // 파일등록으로 추가된 코드
        body:user
    })
}

const getList = async (start) => {
    console.log("start : ", start)

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
    return fetch( path+"/mem?start=" + start , {method:"get"} )
}
const getInfo = (username, token) => {
    // console.log("username : ", username)
    // return data_set.filter(data => data.username === username)[0]

    // return fetch( path+"/mem/"+username)

    return fetch( path+"/mem/"+username, {
        method:"get",
        headers:{
            "Content-Type":"application/json",
            "Authorization": `Bearer ${token}`
        }})
}
const deleteUser = (username, token, fileName) => {
    // data_set = data_set.filter(data => data.username !== username)
    return fetch( path+"/mem/"+username, {
        method:"delete", 
        headers:{"Authorization": `Bearer ${token}`},
        // 백엔드의 controller에서 @RequestBody String fileName 해줘야한다.
        body:fileName
    } )
}
const modify = (userData, token) => {
    // data_set = data_set.filter(data => data.username!== userData.username)
    // data_set = data_set.concat(userData);
    console.log("userData.username",userData.username)
    return fetch( path+"/mem/"+userData.username, {
        method:"put",
        headers:{"Content-Type":"application/json",
            "Authorization": `Bearer ${token}`
        },
        // 문자열로 병합하기 위해 JSON사용
        body:JSON.stringify(userData)
    })
}
const getImage = (fileName) => {
    return fetch( path+`/mem/${fileName}/image`)
}
export { login, register, getList, getInfo, deleteUser, modify, getImage };