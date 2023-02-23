// import React from "react";
// import { createRoot } from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
    Router,
  } from "react-router-dom";
  import Main from './component/main';
  import "./assets/style.css";
  import "bootstrap/dist/css/bootstrap.min.css";
  import React , {useState} from 'react';
  import Navbar1 from './component/navbar';
  import Alert from './component/alert';
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
      <Router>
      <div className="App">
        <Navbar1 title="TextUtils" mode={mode} toggleMode={toggleMode} /> 
              <div className='alert-wrapper '>{alertList}</div>
              <div className="container">
                <switch>
                  <Route path="/Aboutus">
                  <Aboutus/>
                  </Route>
                </switch>
              </div>
              
        {/* <Main mode={mode} toggleMode={toggleMode} setAlert={showAlert}/> */}
      </div>
      </Router>
    );
  }
  export default App;