// import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react'
import {
  BrowserRouter as Router,
  Routes, 
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
        
      setAlert({
        msg:message,
        type:type,
      })
      setTimeout(()=>{
        setAlert(null);
      },1500)
  }

  const toggleMode= ()=>{
    if(mode=== 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode has Enbled","Success ");
      document.title='CGEC-TIMES Dark mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has Enbled","Success ");
      document.title='CGEC-TIMES Light mode';

    }

  }
  return (
   
    <>
      <Router>
         <Navbar title="CGEC TIMES" aboutText="About CGEC" mode={mode} toggleMode={toggleMode} />
         <Alert alert={alert}/>
         <div className="container my-3">
           <Routes>
             <Route path="/about" element={<About />} />
             <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}/>
           </Routes>
         </div>
       </Router>
    
         {/* <Navbar title="TEXT OPTIONS" aboutText="About CGEC" mode={mode} toggleMode={toggleMode} />
         <Alert alert={alert}/>
         <div className="container my-3">
            <About />
            <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/> 
         </div> */}
       
    </>
    
  );
}

export default App;
