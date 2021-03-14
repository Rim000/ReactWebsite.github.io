//jo bh file chalani ha usko src ma copy kar k yahan import kr k  local serverv pr output dekh skty

import App from "./App";
import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import  "./index.css";

ReactDom.render(
    <>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </>,
    document.getElementById("root")
);





