import React, {useState} from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {RouterProvider} from "react-router";
import {createBrowserRouter} from "react-router-dom";
import {Main} from "./Components/Main";
import {Footer} from "./Components/Footer";
import {Col, Container, Row} from "react-bootstrap";
import {Shop} from "./Components/Shop";
import {Navigation} from "./Components/Navigation";
import {DressingRoom} from "./Components/DressingRoom";
import {Basket} from "./Components/Basket";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>
    },
    {
        path: "/shop",
        element: <Shop/>
    },
    {
        path: "/dressing-room",
        element: <DressingRoom/>
    },
    {
        path: "/basket",
        element: <Basket/>
    }
])

function App() {
    return (
        <div className="App">
            <Navigation/>
            <main>
                <RouterProvider router={router}/>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
