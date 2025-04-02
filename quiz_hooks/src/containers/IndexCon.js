import IndexCom from "../components/IndexCom";

function IndexCon() {
    return(<>
        <IndexCom /><br />
        작성은 컨테이너, 출력은 컴포넌트<br />
        근데 Con의 return 태그 안에 Com을 임포트해주면<br />
        Com의 내용도 결국 Con에 입력되는 것이나 마찬가지<br />
    </>)
}
export default IndexCon;