import React from "react";
import ReactDOM  from "react-dom/client";


/**
 * <div id='parent'>
 * <div id='child'>
 * <h1>H1 tag</h1>
    <h2>H2 tag</h2>
 * </div>
 * <div id='child'>
 * <h1>H1 tag</h1>
    <h2>H2 tag</h2>
 * </div>
 * </div>
 */

// const heading = React.createElement(
//     "h1",
//     {id: "heading"},
//     "Hello from React!"
// )

const parent = React.createElement('div', {id:'parent'},[
    React.createElement('div', {id: 'child1'}, [
        React.createElement('h1', {}, 'I am tag h1'),
        React.createElement('h2', {}, 'I am tag h2')
    ]),
    React.createElement('div', {id: 'child2'}, [
        React.createElement('h1', {}, 'I am tag h1'),
        React.createElement('h2', {}, 'I am tag h2')
    ])
]);

console.log(parent)  //its an object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); //this render method is responsible to put that object as tag inside html