import React, { FC, FunctionComponent } from "react";
import "./App.css";
import "./Styles/index.css";
import APIComponent from "./components/APIComponent";
import CategoryAPIComponent from "./components/CategoryAPIComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export interface IApplicationProps {}

const App: FunctionComponent<IApplicationProps> = (props) => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route datatest-id="homeRoute" path="/" element={<APIComponent />} />
          <Route path="/category" element={<CategoryAPIComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
