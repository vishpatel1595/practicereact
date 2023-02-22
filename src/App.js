// import Header from './component/header';
import Main from './component/main';
import "./assets/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React , {useState} from 'react';
import Navbar1 from './component/navbar';
import Alert from './component/alert';

function App() {
  const [alert , setAlert] = useState([]); 
  const showAlert =(message , type)=>{
      setAlert (prev => [...prev , {
          msg:message,
          type:type
      }])
      setTimeout(() =>{
         setAlert([]); 
      }, 3000);
  }
  const handleSetCity = (e) => {
    if(timer) clearTimeout(timer)
    setCity(e.target.value)
    timer = setTimeout(() => {
      console.log(city)
      // handleFetchWeather()
    }, 2000)
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
    
    <div className="App">
      {/* <Header /> */}
      <Navbar1 title="TextUtils" mode={mode} toggleMode={toggleMode} /> 
      <div className='alert-wrapper '>{alertList}</div>
      <Main mode={mode} toggleMode={toggleMode} setAlert={showAlert}/>
      
    </div>
  );
}
export default App;