// const heading = React.createElement("h1", { id: 'heading' }, "Hello world from React !");

const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "i am h1 tag!"), React.createElement("h3", {}, "h3 tag siblings of h1")]));





const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);