import React from "react";
import * as ReactDOMClient from "react-dom/client";

import Bookstore from "./view/Bookstore";
import "./styles/global.styles.css";

const container = document.getElementById("root");

// Create a root.
const root = ReactDOMClient.createRoot(container);

// Initial render: Render an element to the root.
root.render(<Bookstore />);
