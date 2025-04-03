const initalState = {
    // 로그인에 대한 키밸류 세트 2개
    // 헤더에 작성된 LOGIN 클릭시마다 작동
    login : {id : "", pwd : ""},
    register : {id : "", pwd : "", name : "", addr : ""},
    // 데이터를 저장하기 위한 변수.. null로 초기화 해서 작성.. 처음엔 값이 없기 때문
    data : null,
    // 백엔드에게 정보 요청하게 되면 true로 변경되고,
    // 데이터 받기가 완료 되어서 화면이 구현되면 다시 false로 변경되는 부분
    loading : false,
    // 어떤 에러 값이 들어올지 미정이기 때문에 값이 없다는 뜻으로 null 사용
    error : null
}
const reducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_INPUT" : 
            console.log("state", state)
            console.log("action : ", action)
            // 로그인에 대한 값을 변경해서 반환한다.
            // 회원가입에 대한 값을 변경해서 반환한다.
            // :를 두고 오른쪽에 있는 것이 깊은복사를 해주는 쪽이다.
            return {...state, [action.form] : {...state[action.form], 
                // 사용자가 입력한 키-밸류
                [action.name]: action.value}
            };
        // state에 우리가 받아온 데이터(data : action.data)가 저장된다.
        case "LIST" : return {...state, data : action.data}
        case "LOADING" : return {...state, loading : true, error : null}
        case "FINISHED" : return {...state, loading : false, error : null}
        case "ERROR" : return {...state, loading : false, error : action.error}
        default:
            return state;
    }
}
export {initalState, reducer}