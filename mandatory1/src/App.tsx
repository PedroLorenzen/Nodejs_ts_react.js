import React from "react";
import "./App.css";
import Header from "./components/header";

function App() {
  return (
    <div>
      <Header />
      <div>
        <h1 className="text-3l font-bold underline text-red-600">
          Welcome to my first React app
        </h1>
      </div>
    </div>
  );
}

export default App;
