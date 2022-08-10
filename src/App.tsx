import { useState, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AsideInput } from "./components/AsideInput";
import { LeftMenu } from "./components/LeftMenu"
import { MainSection } from "./components/MainSection";

function App() {
  return (
    <div className="App">
      <LeftMenu />
      <MainSection />
      <AsideInput />
    </div>
  );
}

export default App;