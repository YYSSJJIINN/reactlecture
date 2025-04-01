import { Link, useNavigate } from "react-router-dom";

function Notfound() {
    const navigate = useNavigate();
    return(
    <div>
        <h2>404 - Not Found</h2>
        <Link to="/">HOME</Link>
        <button onClick={() => navigate("/")}>HOME</button>
    </div>
    )
}
export default Notfound;