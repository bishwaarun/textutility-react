import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import { useState } from 'react';
// import About from './components/About'
function App() {

  const [enableMode, setEnableMode] = useState('light')

  const toggleModeEnable = ()=>{
    if (enableMode === 'light') {
      setEnableMode('dark')
      document.body.style.backgroundColor='#565776';
    } else {
      setEnableMode('light')
      document.body.style.backgroundColor='white';
    }
    
  }


  return (
    <>
      <Navbar title="TextUtils" mode={enableMode} toggleMode={toggleModeEnable}/>

      <div className="container my-3">
        <TextForm heading="Enter text to analyze below" mode={enableMode} />
        {/* <About/> */}
      </div>
    </>

  );
}

export default App;
