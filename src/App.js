import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import { useState } from 'react';
import About from './components/About'
import Alert from './components/Alert'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {

  const [enableMode, setEnableMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);

  }

  const toggleModeEnable = () => {
    if (enableMode === 'light') {
      setEnableMode('dark')
      document.body.style.backgroundColor = '#213b52';
      showAlert("Dark mode is enabled", "success")
      document.title = "TextUtils - Darkmode"
    } else {
      setEnableMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled", "success")
      document.title = "TextUtils - Lightmode"
    }

  }


  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={enableMode} toggleMode={toggleModeEnable} />

        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            {/* /users --> Component 1
        /users/home --> Component 2 */}
            <Route path="/about" element={ <About mode={enableMode} />} />
           
          
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={enableMode} />} />
        
          </Routes>
        </div>
      </Router>
    </>

  );
}

export default App;
