import React from "react"
import './App.css';
import Header from "./components/Header";
import Swipebutton from "./components/Swipebutton";
import Tindercards from "./components/Tindercards";

function App() {
  return (
    <div className="app">
      

{/* header */}
<Header/>
{/* tinder cards */}
<Tindercards/>
{/* swipebuttons */}
<Swipebutton/>


    </div>
  );
}

export default App;
