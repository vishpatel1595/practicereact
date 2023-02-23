import React , {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import "./assets/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar1 from './component/navbar';
import Alert from './component/alert';
import Main from './component/main';
import Aboutus from "./component/Aboutus";

function App() {
  const newAlerts = [];
  const [alert , setAlert] = useState([]); 
  const showAlert =(message , type)=>{
    // for (let i = 1; i <= 1; i++) {
      // const delay = i * 10;
      setAlert (prev => [...prev , {
          msg:message,
          type:type
      }])
      setTimeout(() =>{
        // showAlert.push(`Alert ${i}`);
        setAlert(newAlerts);
      }, 3000);
    // }
  }
const alertList = alert.map(item => {
  return <Alert className='d-flex justify-content-center align-items-center border' alert={item}/>
})
  const [mode, setMode] = useState('dark');
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "grey";
      showAlert("Light mode has been Enabaled" ,"success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Dark mode has been Enabaled", "Success");
    }
  }
  return (
    <>
    <div className="App">
    <Navbar1 title="TextUtils" mode={mode} toggleMode={toggleMode} /> 
    <Routes>
      <Route path='/home'  element={<Main mode={mode} toggleMode={toggleMode} setAlert={showAlert} />}/>
      <Route path='/Aboutus' element={<Aboutus mode={mode} toggleMode={toggleMode} setAlert={showAlert} />}/>
    </Routes>     
      {/* <Main mode={mode} toggleMode={toggleMode} setAlert={showAlert}/> */}
    </div>
    </>
  );
}
export default App;