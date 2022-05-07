import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./pages/common/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./pages/common/Footer/Footer";
import NotFound from "./pages/NotFound/NotFound";
import About from "./pages/About/About";
import Login from "./pages/Login/Login/Login";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
