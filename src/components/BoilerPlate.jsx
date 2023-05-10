import React, { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import Button from "./Button/Button";

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/actions/counterActions";

const BoilerPlate = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="main-content">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{import.meta.env.VITE_PORT}</h1>
      <div className="card">
        <Button onClick={() => dispatch(increment())}>count is {count}</Button>
        <Button onClick={() => dispatch(decrement())}>decrease</Button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR (Hot Module
          Replacement, state does not reset on change)
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
};

export default BoilerPlate;
