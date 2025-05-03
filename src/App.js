import React from "react";
import Header from "./components/Header";

import Newsletter from "./components/Newsletter";
import Routes from "./components/Routes";

import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Newsletter />
        <Routes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
