import React from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";

function app() {
  return (
    <div>
      <Header />
      <div>
        <h1 className="text-3l font-bold underline text-red-600">
          Welcome to my first React app
        </h1>
      </div>
      <Footer />
    </div>
  );
}

export default app;
