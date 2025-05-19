import React from "react";
import AllRoutes from "./routes/AllRoutes";
import { Header, Footer } from "./components";

import "./App.css";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
};
