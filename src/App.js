
import './App.css';
import Home from './home/Home';
import LoginWIthGoogle from './login/LoginWIthGoogle';
import {BrowserRouter,Route,Routes} from 'react-router-dom'

function App() {
  return (
    <div  style={{width:"300px",margin:"auto",marginTop:"40px"}}>
      <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Home></Home>}/>
        <Route path="/login"element={<LoginWIthGoogle></LoginWIthGoogle>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
