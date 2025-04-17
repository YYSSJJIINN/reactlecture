import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

// aws에 뜨는 주소로 변경
// const path = "http://localhost:8080/"
const path = "http://13.124.248.224:8080/"

function App() {
  const [data, setData] = useState()
  useEffect(() => {
    fetch(path)
    .then(res => {
      if(res.ok) {
        return res.text();
      }
    })
    .then(data => { setData(data) })
  })
  return (
  <>
    <h3>REACT</h3>
    <h3>boot ip : {data}</h3>
  </>
  );
}

export default App;
