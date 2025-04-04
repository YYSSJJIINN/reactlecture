import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import HeaderCom from './components/common/HeaderCom';
import IndexPage from './pages/IndexPage';
import MDeletePage from './pages/member/MDeletePage';
import MListPage from './pages/member/MListPage';
import MOnePage from './pages/member/MOnePage';
import NotFound from './components/common/NotFound';
import MRegPage from './pages/member/MRegPage';
import MModifyPage from './pages/member/MModifyPage';
import MLogPage from './pages/member/MLogPage';

function App() {
    return (
    <Routes>
        <Route element={<HeaderCom />}>
            <Route path="/" element={<IndexPage />} />
            <Route path="/member/list" element={<MListPage />} />
            <Route path="/member/one" element={<MOnePage />} />
            <Route path="/member/delete/:id" element={<MDeletePage />} />
            <Route path="/member/register" element={<MRegPage />} />
            <Route path="/member/modify/:id" element={<MModifyPage />} />
            <Route path="/member/login" element={<MLogPage />} />
        </Route>

        <Route path="*" element={<NotFound />}/>        
    </Routes>
    );
}

export default App;
