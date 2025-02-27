import React from "react";
import ReactDOM from "react-dom/client";

// Creating the list items
const listItems = ["Learn React", "Understand React.createElement", "Build Amazing Apps"].map((item) =>
    React.createElement("li", { style: { margin: "10px", fontSize: "18px" } }, item)
);

// Creating the unordered list
const list = React.createElement("ul", null, ...listItems);

// Creating the paragraph
const paragraph = React.createElement(
    "p",
    { style: { fontStyle: "italic", color: "gray" } },
    "This page is built using React.createElement"
);

// Creating the title
const title = React.createElement(
    "h1",
    { style: { color: "darkblue", textAlign: "center" } },
    "Welcome to React.createElement"
);

// Creating the parent container
const container = React.createElement(
    "div",
    {
        id: "container",
        style: { backgroundColor: "lightblue", padding: "20px" }
    },
    title,
    list,
    paragraph
);

// Rendering inside root div
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
