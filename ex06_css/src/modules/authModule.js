const initialState = {
    login : {username : "", password : ""},
    register : {username : "", password : "", role : "", file : null},
    // 등록의 내용과 수정의 항목이 같다면 또 작성하지 말고 재활용해도 된다.
    modify : {username : "", password : "", role : "", file : ""},
    data : null,
    loading : false,
    error : null
}
const reducer = (state, action) => {
    switch (action.type) {
        // input창의 내용을 초기화해준다.
        case "INITIALSTATE" : return initialState;
        case "CHANGE_INPUT" :
            return {...state, [action.form] : {...state[action.form], [action.name] : action.value}};
        // data에는 배열형식의 데이터인 action.data가 들어간다.
        case "LIST" : return {...state, data : action.data};
        case "MODIFY" : return {...state, modify : action.data};
        case "LOADING" : return {...state, loading : true, error : null};
        case "FINISHED" : return {...state, loading : false, error : null};
        case "ERROR" : return {...state, lading : false, error : action.error};
        default : 
            return state;
    }
}
export {initialState, reducer}