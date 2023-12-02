import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route ,Link} from "react-router-dom"
import UrlForm from "./component/UrlForm/UrlForm"
import AuthForm from "./component/AuthForm/AuthForm"

function App() {
return(
  <div>
    <Routes>
        <Route exact path="/" element={<UrlForm/>}/>
        <Route path="/app" element={<UrlForm/>}/>
        {/* <Route path="/form" element={<AuthForm/>}/> */}
    </Routes>


  </div>
)
  
}


export default App;
