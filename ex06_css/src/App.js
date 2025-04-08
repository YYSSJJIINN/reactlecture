import logo from './logo.svg';
import './App.css';
import TestCom01 from './components/TestCom01';
import TestCom02 from './components/TestCom02';
import TestCom03 from './components/TestCom03';
import { Route, Routes } from 'react-router-dom';
import LoginCon from './containers/LoginCon';
import IndexCon from './containers/IndexCon';
import ListCon from './containers/ListCon';
import RegCon from './containers/RegCon';
import InfoCon from './containers/InfoCon';
import ModifyCon from './containers/ModifyCon';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<IndexCon />} />
      <Route path="/login" element={<LoginCon />} />
      <Route path="/list" element={<ListCon />} />
      <Route path="/info/:username" element={<InfoCon />} />
      <Route path="/modify/:username" element={<ModifyCon />} />
      <Route path="/register" element={<RegCon />} />
    </Routes>
      {/* <TestCom03 />
      <hr />
      <TestCom02 />
      <hr />
      <TestCom01 /> */}
    </>
  );
}

export default App;