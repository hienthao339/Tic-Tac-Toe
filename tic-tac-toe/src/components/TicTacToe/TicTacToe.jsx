import { useRef, useState } from "react";
import circle from "../assets/o.png";
import cross from "../assets/x.png";
import "./TicTacToe.css";

let data = ["", "", "", "", "", "", "", "", ""];

export const TicTacToe = () => {
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);
  let title = useRef(null);
  let box0,
    box1,
    box2,
    box3,
    box4,
    box5,
    box6,
    box7,
    box8 = useRef(null);
  let arrayBox = [box0, box1, box2, box3, box4, box5, box6, box7, box8];

  const toggle = (e, num) => {
    if (lock) {
      return 0;
    }
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src='${cross}'>`;
      data[num] = "x";
      setCount(++count);
    } else {
      e.target.innerHTML = `<img src='${circle}'>`;
      data[num] = "o";
      setCount(++count);
      checkWin();
    }
  };

  const checkWin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[2]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      won(data[5]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      won(data[6]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      won(data[7]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      won(data[6]);
    }
  };

  const won = (winner) => {
    setLock(true);
    if (winner === "x") {
      title.current.innerHTML = `X is winner`;
    } else {
      title.current.innerHTML = `O is winner`;
    }
  };

  const reset = () => {
    setLock(false);
    data = ["", "", "", "", "", "", "", "", ""];
    title.current.innerHTML = "";
    arrayBox.map((e) => {
      e.current.innerHTML = "";
    });
  };

  return (
    <div className="text-white">
      <div className="text-4xl font-medium py-8">Tic Tac Toe</div>
      <button
        onClick={() => {
          reset();
        }}
        className="reset px-6 py-3 mb-6 rounded-full font-medium text-green-300 bg-green-800 backdrop-blur"
      >
        Reset
      </button>
      <div className="title" ref={title}></div>
      <div className="board">
        <div className="row-1">
          <div
            className="box"
            onClick={(e) => {
              toggle(e, 0);
            }}
            ref={box0}
          ></div>
          <div
            className="box"
            onClick={(e) => {
              toggle(e, 1);
            }}
            ref={box1}
          ></div>
          <div
            className="box"
            onClick={(e) => {
              toggle(e, 2);
            }}
            ref={box2}
          ></div>
        </div>
        <div className="row-2">
          <div
            className="box"
            onClick={(e) => {
              toggle(e, 3);
            }}
            ref={box3}
          ></div>
          <div
            className="box"
            onClick={(e) => {
              toggle(e, 4);
            }}
            ref={box4}
          ></div>
          <div
            className="box"
            onClick={(e) => {
              toggle(e, 5);
            }}
            ref={box5}
          ></div>
        </div>
        <div className="row-3">
          <div
            className="box"
            onClick={(e) => {
              toggle(e, 6);
            }}
            ref={box6}
          ></div>
          <div
            className="box"
            onClick={(e) => {
              toggle(e, 7);
            }}
            ref={box7}
          ></div>
          <div
            className="box"
            onClick={(e) => {
              toggle(e, 8);
            }}
            ref={box8}
          ></div>
        </div>
      </div>
    </div>
  );
};
