
import './App.css';
import Navebar from './Components/Navebar';
import TextForm from './Components/TextForm';
import React,{useState} from 'react'
import Alert from './Components/Alert';
import About from './Components/About';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";

function App() {
   
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

   const showAlert = (message, type)=>{
     setAlert({
       msg: message,
       type: type,
     });
     setTimeout(()=>{
      setAlert(null);

     },3000);
   } 

  const togglemMode = ()=>{
    if (mode==='light') {
      setMode('dark');
      document.body.style.backgroundColor='gray';
      showAlert('Dark Mode has been enabled','success');
      document.title='TextUtils - Dark';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert('Light Mode has been enabled','success');
      document.title='TextUtils - Home';
    }
  };

  return (
    <>
    {/* <Router> */}
    <Navebar title= "TextUtils" mode={mode} togglemMode={togglemMode}/>
    <Alert alert={alert}/>
   <div className="container my-3">

       {/* <Switch>
          <Route path="/about">
          <About/>
          </Route> */}
          {/* <Route path="/"> */}
          <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
          {/* </Route>
        </Switch> */}
    </div>
    {/* </Router> */}
    </>
  );
  }
export default App;