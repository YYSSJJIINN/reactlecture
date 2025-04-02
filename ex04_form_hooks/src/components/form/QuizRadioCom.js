const QuizRadioCom = ({age, onChangeAge, onSubmit}) => {
    // 라디오 버튼은 같은 name을 가져야 단일 선택이 가능하므로
    // input 태그 안에 name=""을 입력해주자
    return(
    <>
        <form onSubmit={onSubmit}>
            {age && age.map((age) =>
            <span key={age.key}>
                <label htmlFor={age.key}>{age.value}
                <input name={age.name} value={age.value} type="radio" checked={age.isChecked} 
                    onChange={() => onChangeAge(age.key)} />
                </label>
            </span>
            )}
            <button>전송</button>
        </form>
    </>
    )
}
export default QuizRadioCom;