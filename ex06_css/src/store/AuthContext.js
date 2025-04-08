import { createContext, useState } from "react"

const initialState = { isLoggedIn : false, username : null}
// 전역에서 사용할 수 있는 저장소 생성
const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState(
        JSON.parse(sessionStorage.getItem("auth")) || initialState);
    // 로그인 성공시 Provider 호출
    const loginProvider = (username) => {
        setAuth({isLoggedIn : true, username})
        // 로그인 풀리지 않게 스토리지 세션을 이용한다.
        // 바로 문자열 사용할 수 없으므로, JSON사용한다.
        // auth를 이용해서 isLoggedIn이 true인지 false인지 확인
        sessionStorage.setItem("auth", JSON.stringify({isLoggedIn : true, username}))
    }
    const logoutProvider = () => {
        setAuth(initialState);
        sessionStorage.clear();
    }
    const value = { auth, loginProvider, logoutProvider }
    // 전역에 저장된 것은 value고 이것에는 loginProvider가 담겨있고,
    // 여기에는 또 로그인 성공한 사람의 이름이 들어있음
    return(
    <>
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    </>)
}
export { AuthContext, AuthProvider}