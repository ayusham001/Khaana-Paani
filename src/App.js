import React, { useEffect } from "react";
import "./App.css"
import Login from "./components/Login";
import Logout from "./components/Logout";
import Signup from "./components/Signup";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Functions/Home";
import Restro_Create from "./Functions/Restro_Create";
import Restro_Details from "./Functions/Restro_Details";
import Restro_List from "./Functions/Restro_List";
import Restro_Search from "./Functions/Restro_Serach";
import Restro_Update from "./Functions/Restro_Update";

export default function App() {
  
  return (
    <>
    <Router>
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Create" element={<Restro_Create />}></Route>
          <Route path="/List" element={<Restro_List />}></Route>
          <Route path="/Details" element={<Restro_Details />}></Route>
          <Route path="/Search" element={<Restro_Search />}></Route>
          <Route path="/Login" element={<Login />}> </Route>
          <Route path="/Logout" element={<Logout />}> </Route>
          <Route path="/Signup" element={<Signup />}> </Route>
          <Route path="/Update/:id" element={<Restro_Update />} />
        </Routes> 
      </Router>
    </>
  );
}
