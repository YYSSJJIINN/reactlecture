import logo from './logo.svg';
import './App.css';
import IndexPage from './pages/IndexPage';
import MListPage from './pages/member/MListPage';
import MOnePage from './pages/member/MOnePage';
import MUpdatePage from './pages/member/MUpdatePage';
import { Route, Routes } from 'react-router-dom';
import HeaderCom from './componenets/common/HeaderCom';
import Notfound from './componenets/common/NotFound';
import MDeletePage from './pages/member/MDeletePage';

function App() {
    return (
    <Routes>
        <Route element={<HeaderCom />} >
            <Route path="/" element={<IndexPage />} />
            <Route path="/member">
                <Route path="list" element={<MListPage />} />
                <Route path="one/:id" element={<MOnePage />} />
                <Route path="update/:id" element={<MUpdatePage />} />
                <Route path="delete/:id" element={<MDeletePage />} />
            </Route>
        </Route>

        <Route path="*" element={<Notfound />} />
    </Routes>
    );
}

export default App;
