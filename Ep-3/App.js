import React from "react";
import ReactDOM from "react-dom/client";



// const heading = React.createElement("h1", { id: 'heading' }, "Hello world from React !");

const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "This is react"), React.createElement("h3", {}, "h3 tag siblings of React")]));



// JSX in not HTML inside javascript. It is HTML like syntax or XML-like
// JSX transpiled before it reaches js engine => Parcel -> Babel
// JSX >> Babel transpile jsx to React.createElement >> React Element - JS objects>> HTML element render
const heading = <h1>Namaste React using JSX</h1>

const Title = () => <h1>Namaste React Title Component nested in Heading Component</h1>


// Component composition 
const HeadingComponent = () => (
    <div id="container">
        <Title />
        <Title></Title>
        {Title()}
        {heading}
        <h1>Namaste React using Functional component</h1>
    </div>
);


console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);