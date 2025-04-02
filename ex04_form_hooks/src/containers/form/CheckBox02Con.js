import { useState } from "react";
// {CheckBoxComponent}는 디폴트값이 아니므로 {}안에 넣어서 데려오는 것이다.
import CheckBox02Com, {CheckBoxComponent} from "../../components/form/CheckBox02Com";

const init = [
    {key : 1, label : "게임", isChecked : false},
    {key : 2, label : "영화", isChecked : false},
    {key : 3, label : "멍", isChecked : false},
]

const CheckBox02Con = () => {
    const [hobby, setHobby] = useState(init);
    const [isChecked, setIsChecked] = useState(false);
    const onChecked = () => {
        setIsChecked( !isChecked );
    }

    const onChangeHobby = (key) => {
        // hobby.map은 const init에서 초기화했던 값이 된다.
        const updateHobby = hobby.map( check =>
            // 해당하는 키(check에 있는 key)와 키가 같다면 {}로 처리하고,
            // 아니라면 check로 처리해라
            // ...는 깊은 복사라는 뜻
            // const init에 있는 값과 사용자가 입력한 키가 같은지 확인하는 부분이다.
            // 예를들어, 배열0번째에 있는 키1이 사용자가 입력한 키2랑 같냐? 아니다. => false유지
            // 배열1번째에 있는 키2가 사용자가 입력한 키2랑 같냐? isChecked가 true로 변경됨
            check.key === key ? {...check, isChecked : !check.isChecked} : check
        )
        setHobby(updateHobby)
    }
    const submit = (e) => {
        e.preventDefault();
        console.log("submit : ", hobby)
    }

    return(
    <>
        <CheckBoxComponent submit={submit} onChangeHobby={onChangeHobby} hobby={hobby}/><hr />
        <CheckBox02Com isChecked={isChecked} onChecked={onChecked} />
    </>
    )
}
export default CheckBox02Con;