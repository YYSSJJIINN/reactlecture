import { useState } from "react";
import QuizRadioCom from "../../components/form/QuizRadioCom";

// 연습문제10 : 라디오버튼
const initialRadio = [
    {key : 1, value : '10대', name : 'age', isChecked : false},
    {key : 2, value : '20대', name : 'age', isChecked : false},
    {key : 3, value : '30대', name : 'age', isChecked : false},
]

const QuizRadioCon = () => {
    const [age, setAge] = useState(initialRadio);
    const onChangeAge = (key) => {
        const updateAge = age.map ( check =>
        //     check.key === key ? {...check, isChecked : !check.isChecked} : check
        // )
        ({...check, isChecked : check.key === key }))

        /*
        const changeAge = age.map(a =>
            a.key === key?({...a,isChecked:true})
            :({...a,isChecked:false})
        )*/

        setAge(updateAge)
    }
    const onSubmit = (e) => {
        e.preventDefault();
        console.log("age : ", age)
    }
    return(
        <>
            <QuizRadioCom onSubmit={onSubmit} onChangeAge={onChangeAge} age={age} /><hr />
        </>
    )
}
export default QuizRadioCon;
