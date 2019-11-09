import React, { useState } from "react";
import "./App.css";

function App() {
  let [fast, activeFast] = useState(false);
  let [good, activeGood] = useState(false);
  let [cheap, activeCheap] = useState(false);
  const handleChange = name => {
    if (name === "fast") {
      activeFast(!fast);
    } else if (name === "good") {
      activeGood(!good);
    } else if (name === "cheap") {
      activeCheap(!cheap);
    }
  };
  const disableSwitch = () => {
    let random_boolean = Math.random() >= 0.5;
    if (fast === false && good && cheap) {
      random_boolean ? activeGood(!good) : activeCheap(!cheap);
    } else if (good === false && fast && cheap) {
      random_boolean ? activeFast(!fast) : activeCheap(!cheap);
    } else if (cheap === false && fast && good) {
      random_boolean ? activeGood(!good) : activeFast(!fast);
    }
  };

  return (
    <div className="main-page">
      <div className="switch-fast">
        <label class="switch">
          <input
            type="checkbox"
            onChange={() => {
              handleChange("fast");
              disableSwitch();
            }}
          />
          <span className={fast ? "slider-fast-active" : "slider-fast"}></span>
        </label>
        <span className="switch-name">FAST</span>
      </div>

      <div className="switch-good">
        <label class="switch">
          <input
            type="checkbox"
            onChange={() => {
              handleChange("good");
              disableSwitch();
            }}
          />
          <span className={good ? "slider-good-active" : "slider-good"}></span>
        </label>
        <span className="switch-name">GOOD</span>
      </div>

      <div className="switch-cheap">
        <label class="switch">
          <input
            type="checkbox"
            onChange={() => {
              handleChange("cheap");
              disableSwitch();
            }}
          />
          <span
            className={cheap ? "slider-cheap-active" : "slider-cheap"}
          ></span>
        </label>
        <span className="switch-name">CHEAP</span>
      </div>
    </div>
  );
}

export default App;
