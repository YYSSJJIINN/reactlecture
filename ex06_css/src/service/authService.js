let data_set = [
    {username : "aaa", password : "111", role : "USER"},
    {username : "bbb", password : "111", role : "USER"},
    {username : "ccc", password : "111", role : "USER"},
]

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
    data_set = data_set.concat(user)
}

const getList = () => {
    return data_set;
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