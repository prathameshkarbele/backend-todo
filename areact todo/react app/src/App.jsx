import  {BrowserRouter as Router, Routes,  Route} from "react-router-dom";
import Home from "./Pages/Home";
import Headers from "./Component/Headers";
import Profile from "./Pages/Profile";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Router>
      <Headers />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
