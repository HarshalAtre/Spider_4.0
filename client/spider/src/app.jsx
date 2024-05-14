import React from "react";
import Navbar from "./componends/navbar/navbar";
import Cards from "./Components/Cards";
import Navbar2 from "./componends/navbar2/navbar2";
import Slider from "./componends/slider/slider";

function App() {
  return (
    <div 
    // style={{ display: "flex", 
    //               flexDirection: "column", 
    //               alignItems: "stretch" }}
                  > 
      <Navbar/>
      <Navbar2/>
      <Slider/>
      <Cards/>
      <Cards/>
    </div>
  );
}

export default App;
