import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./pages/common/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./pages/common/Footer/Footer";
import NotFound from "./pages/NotFound/NotFound";
import About from "./pages/About/About";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
