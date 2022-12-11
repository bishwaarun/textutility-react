import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import { useState } from 'react';
// import About from './components/About'
import Alert from './components/Alert'
function App() {

  const [enableMode, setEnableMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message,type) =>{
    setAlert({
      msg:message,
      type:type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);

  }

  const toggleModeEnable = ()=>{
    if (enableMode === 'light') {
      setEnableMode('dark')
      document.body.style.backgroundColor='#213b52';
      showAlert("Dark mode is enabled","success")
    } else {
      setEnableMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light mode is enabled","success")
    }
    
  }


  return (
    <>
      <Navbar title="TextUtils" mode={enableMode} toggleMode={toggleModeEnable}/>

      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm heading="Enter text to analyze below" mode={enableMode} showAlert={showAlert}/>
        {/* <About/> */}
      </div>
    </>

  );
}

export default App;
