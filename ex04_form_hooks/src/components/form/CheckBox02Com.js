export const CheckBoxComponent = ({hobby, onChangeHobby, submit}) => {
    return(
    <>
        <form onSubmit={submit}>
            {hobby && hobby.map((item) =>
            <span key={item.key}>
                <label htmlFor={item.key}>{item.label}</label>
                <input id={item.key} type="checkbox" checked={item.isChecked}
                onChange={() => onChangeHobby(item.key)} />
            </span>
            )}
            <button>전송</button>
        </form>
    </>
    );
}

const CheckBox02Com = ({isChecked, onChecked}) => {
    // input태그 안에  checked={true}를 작성해두면 체크 된 상태로 생성된다.
    return(
    <div>
        <form>
            <label>
                확인
                <input type="checkbox" isChecked={isChecked} onChecked={onChecked} />
            </label>
        </form>
    </div>
    )
}
export default CheckBox02Com;