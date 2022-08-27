import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Story from "./pages/Story";

export default function App(props) {
    return (
        <BrowserRouter>
            <h1>HELLO</h1>
            <Routes>
                <Route
                    path='/'
                    exact
                    element={<Home />}
                />
                <Route
                    path='/story/:id'
                    element={<Story />}
                />
            </Routes>
        </BrowserRouter>
    );
}
