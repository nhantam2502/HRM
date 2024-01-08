import "./App.css";
import DefaultLayout from "./layout/DefaultLayout";
import './App.css'
import Login from './pages/Login/Login'
import { Route, Routes } from "react-router";

function App() {


  return (
    <Routes>
    <Route path="/" element={<Login/>}></Route>
    <Route path="/layout" element={<DefaultLayout></DefaultLayout>}></Route>
 
    </Routes>
  );
}

export default App;
