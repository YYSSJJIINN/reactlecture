import { createContext, useState } from "react";

const initalState = { isLoggedIn : false, user : null }
const AuthContext = createContext();
const AuthProvider = ({children}) => {
    // 해당하는 값이 있다면 JSON.parse를 사용하고, 없다면 initalState를 사용하겠다
    const[auth, setAuth] = useState( JSON.parse(
        sessionStorage.getItem("auth")
            ) || initalState );

    // 로그인 성공했다면 (user)에 로그인 정보가 들어갈 것이다.
    const login = (user) => {
        // user 정보를 저장하고, 로그인 상태를 true로 변환한다.
        setAuth({isLoggedIn:true, user})
        // 로그인 정보를 스토리지의 auth라는 키에 저장하겠다는 코드
        // JSON이라는 타입을 일반적인 방식으로 바꾸겠다는 코드
        sessionStorage.setItem("auth", 
            JSON.stringify({isLoggedIn:true, user}) );
    }
    const logout = () => {
        setAuth( initalState )
        // 로그아웃하면 스토리지에 있는 값을 같이 지우겠다.
        sessionStorage.clear();
    }
    const value = {login, logout, auth}

    // 이제 App.js에서 AuthContext.Provider에 저장된 값 사용 가능하다
    return(
    <>
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    </>)
}
export { AuthContext, AuthProvider }