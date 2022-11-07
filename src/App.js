import React from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expense = [
    {
      id: "e1",
      title: "Shampoo",
      amount: 8.99,
      date: new Date(2022, 3, 12),
    },
    {
      id: "e2",
      title: "Bread",
      amount: 2.99,
      date: new Date(2022, 7, 17),
    },
    {
      id: "e3",
      title: "Flour",
      amount: 4.99,
      date: new Date(2022, 4, 12),
    },
    {
      id: "e4",
      title: "Milk",
      amount: 1.49,
      date: new Date(2022, 3, 12),
    },
  ];

  // For this below code we need to import React 
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "This is my first React App!"),
  //   React.createElement(Expenses, { item: expense})
  // );


  return (
    <div className="App">
      <p>This is my first React App!</p>
      <Expenses item={expense} />
    </div>
  );
}

export default App;