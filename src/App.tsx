import React, { FC, FunctionComponent } from "react";
import "./App.css";
import APIComponent from "./components/APIComponent";
import CategoryAPIComponent from "./components/CategoryAPIComponent";
import SelectForm from "./components/SelectForm";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export interface IApplicationProps {}

const App: FunctionComponent<IApplicationProps> = (props) => {
  return (
    // <div className="App">
    //   <CategoryAPIComponent />
    //   {/* <APIComponent /> */}
    // </div>
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<APIComponent />} />
          <Route path="/category" element={<CategoryAPIComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
