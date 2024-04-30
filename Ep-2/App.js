import React from "react";
import ReactDOM from "react-dom/client";



// const heading = React.createElement("h1", { id: 'heading' }, "Hello world from React !");

const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "This is react"), React.createElement("h3", {}, "h3 tag siblings of React")]));





const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);