import React from "react";
import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";
import './App.css';
//its a simple function that returns jsx(html)
function App(){
    return(
        <div>
        <Header/>
        <Main/>
        <Footer/>
        </div>
    )
}
export default App