import React from "react";
import Navbar from "./Navbar";

const Home = () => {
    return (
        <>
        <body className=" bg-lime-500">
            <div  className="">
                <Navbar />

            </div>
            
            <div className="text-center pt-7">

                    <h1>Velkommen til min side</h1>
                    <br/>

                    <p>Dette kommer til å bli super kult</p>

                    <img className="inline object-scale-down h-50 w-96" src="/images/test.jpeg" alt="A beautiful landscape"></img>

                    <p>
                        testing testing
                    </p>

                    <h2> Funker det?</h2>

                    <h1 className="text-3xl font-bold underline text-red-600">
                        Simple React Typescript Tailwind Sample
                    </h1>

            
                    <h1> Test </h1>
                    <br />
                    <p>Test tes</p>
                </div>
            </body>
            
            </>
    );
    
};

export default Home;