import React from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="main">
        <Header />
      </div>
      <Sidebar />
    </div>
  );
};

export default App;
