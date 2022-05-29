import React, { useEffect, useRef, useState } from "react";

const Bubbles = () => {
  const [circle, setCircle] = useState([
    { state: true },
    { state: true },
    { state: true },
    { state: true },
    { state: true },
  ]);
  const [insideCircle, setInsideCircle] = useState([
    { state: false },
    { state: false },
    { state: false },
    { state: false },
    { state: false },
  ]);

    //handle input to select the ballon of user size
    const handleInput = () => {
    const shootNumber = document.querySelector(".shootInput").value;
    document.querySelector(".shootInput").value = "";

    if (shootNumber < 1 || shootNumber > 5) {
      alert("Number must be in range of 1 to 5");
      return;
    }

    const visibleCircle = document.querySelectorAll(".visibleCircle");

    if (visibleCircle[shootNumber - 1].style.display === "none") {
      alert("Already inside the box, Please select another balloon");
    }

    handleToggle(shootNumber - 1);

    };

    const handleToggle = (index) => {
    const hiddenCircle = document.querySelectorAll(".hideCircle");
    const visibleCircle = document.querySelectorAll(".visibleCircle");

    hiddenCircle[index].style.display = "block";
    visibleCircle[index].style.display = "none";

    };

    const reverseToggle = (index) => {
    const hiddenCircle = document.querySelectorAll(".hideCircle");
    const visibleCircle = document.querySelectorAll(".visibleCircle");

    hiddenCircle[index].style.display = "none";
    visibleCircle[index].style.display = "block";

    };


    useEffect(() => {
    const colorArray = [
      "#4d2c52",
      "#ba35cb",
      "#3228d6",
      "#a78f0a",
      "#1bc14e",
      "#227274",
      "#b5366b",
      "#601c5a",
    ];

    const hiddenCircle = document.querySelectorAll(".hideCircle");
    const visibleCircle = document.querySelectorAll(".visibleCircle");

    let k = Math.floor((Math.random() * 10) % 7);

    for (let i = 0; i < hiddenCircle.length; i++) {
      hiddenCircle[i].style.backgroundColor = colorArray[k];
      visibleCircle[i].style.backgroundColor = colorArray[k];

      k = (k + 1) % 7;
    }
    }, []);

  return (
    <div className="mainContainer">
      <div className="hiddenContainer">
        {insideCircle.map((circle, index) => {
          return (
            <div className="displayContainer">
              <div
                class="hideCircle circle"
                style={{
                  backgroundColor: `rgb( 35,35,35)`,
                  height: "100px",
                  width: "100px",
                }}
                key={circle}
                onClick={() => reverseToggle(index)}
              ></div>
            </div>
          );
        })}
      </div>
      <div className="displayContainer">
        {circle.map((circle, index) => {
          return (
            <div className="displayContainer">
              <div
                class="visibleCircle circle"
                style={{
                  backgroundColor: `rgb( 35,35,35)`,
                  height: "100px",
                  width: "100px",
                }}
                key={index * 666}
                onClick={() => handleToggle(index)}
              ></div>
            </div>
          );
        })}
      </div>
      <div className="inputContainer">
        <div className="shotBox">
          <input
            type="number"
            min="1"
            max="5"
            className="shootInput"
            placeholder="Enter number (1-5)"
          />
          <button onClick={() => handleInput()}>💥 Shoot 💥</button>
        </div>
      </div>
    </div>
  );
};

export default Bubbles;