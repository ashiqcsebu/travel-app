import React from "react";
import Header from "./components/Header";

import Newsletter from "./components/Newsletter";
import Routes from "./components/FlightRoutes";

import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden" >
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
