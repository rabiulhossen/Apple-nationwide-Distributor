import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./pages/common/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./pages/common/Footer/Footer";
import NotFound from "./pages/NotFound/NotFound";
import About from "./pages/About/About";
import Login from "./pages/Login/Login/Login";
import Blog from "./pages/Blog/Blog";
import Register from "./pages/Login/Register/Register";
import RequireAuth from "./pages/Login/RequireAuth/RequireAuth";
import Inventory from "./pages/Home/inventory/Inventory";
import AddNewItem from "./pages/AddNewItem/AddNewItem";
import Inventories from "./pages/Home/Inventories/Inventories";

function App() {
  console.warn = () => {};
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route
          path="/inventory"
          element={
            <RequireAuth>
             <Inventories></Inventories>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/additem"
          element={
            <RequireAuth>
              <></>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/addnewitem"
          element={
            <RequireAuth>
              <AddNewItem></AddNewItem>
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
