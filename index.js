import React from "react";
import ReactDOM from "react-dom/client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./src/index.css"
import TechStack from "./src/techStack";
import Navbar from "./src/navbar";


function App() {
    return (
        <>
        <header>
            <Navbar></Navbar>
        </header>
            <div className="w-[100vw] h-[100vh] mt-10">
                <div className=" text-center font-audiowide">
                    <h3 className="text-3xl">Full Stack Web Developer</h3>
                    <h1 className="text-2xl">Raj Kumar Verma</h1>
                    <h2>Beautiful and User Friendly applications using modern technologies</h2>
                </div>

                <TechStack></TechStack>
                
                    
            </div>
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App></App>)