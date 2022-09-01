import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from "./Layout"; 
import Homepage from './pages/Homepage';
import GymLog from './pages/GymLog';
import Library from './pages/Library';
import IndivCat from './pages/IndivCat';
import { useState } from "react";
import Login from './local storage/Login';
import SignUp from './local storage/SignUp';
import './index.css'
import Navbar from './components/Navbar';
import Logout from './local storage/Logout';



function App() {

  // States for the library
    const [categoriesDataFetched, setCategoriesDataFetched] = useState({}); 
    const [catDataFinal, setCatDataFinal] = useState({}); 
    const [selectedCat, setSelectedCat] = useState();
    const [userDetails, setUserDetails] = useState(JSON.parse(localStorage.getItem("hello"))); 
    // const [inputObj, setInputObj] = useState(JSON.parse(localStorage.getItem("hello")).siteInfo); 
    const [inputObj, setInputObj] = useState(userDetails.siteInfo); 


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp setUserDetails={setUserDetails} />} />
        <Route path="/login" element={<Login setUserDetails={setUserDetails} />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/" element={<Layout setUserDetails={setUserDetails} inputObj={inputObj} userDetails={userDetails} />}>
          <Route index element={<Homepage />} />
          <Route path="/workout_log" element={<GymLog inputObj={inputObj} setInputObj={setInputObj} />} />
          <Route path="/workout_library" element={<Library setCategoriesDataFetched={setCategoriesDataFetched} categoriesDataFetched={categoriesDataFetched} setCatDataFinal={setCatDataFinal} />} />
          <Route path="/workout_library/:cat" element={<IndivCat catDataFinal={catDataFinal} setSelectedCat={setSelectedCat} selectedCat={selectedCat} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
