import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Chocolate from "./Chocolate";
import Chips from "./Chips";
import Pop from "./Pop";
import Home from "./Home";
import './VendingMachine.css';

function VendingMachine() {
  return (
    <>
      <BrowserRouter>
        <h1>Vending Machine</h1>
        <hr/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/sweets" element={<Chocolate/>}/>
          <Route path="/salty" element={<Chips/>}/>
          <Route path="/drinks" element={<Pop/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default VendingMachine;
