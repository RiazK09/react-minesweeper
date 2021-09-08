import React, { useState, useEffect } from "react";

//Methods
import createBoard from "../util/createBoard";
import { revealed } from "../util/reveal";

//Components
import Cell from "../components/Cell";
import Modal from "../components/Modal";
import Timer from "./Timer";
import HelpPopup from "./HelpPopup";

//Stylesheet
import "../App.css";

const Board = () => {
  const [grid, setGrid] = useState([]);
  const [nonMineCount, setNonMineCount] = useState(0);
  const [mineLocations, setMineLocations] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [buttonPopUp, setButtonPopup] = useState(false);

  //ComponentDidMount
  useEffect(() => {
    //Creating a board

    //Calling the function
    freshBoard();
  }, []);

  const freshBoard = () => {
    //10*10 = 100 cells and 15 bombs.
    const newBoard = createBoard(10, 10, 15);
    setNonMineCount(10 * 10 - 15);
    setMineLocations(newBoard.mineLocation);
    setGrid(newBoard.board);
  };

  const restartGame = () => {
    freshBoard();
    setGameOver(false);
  };
  //Don't forget to pass it into the modal below

  //On Right Click -> Flag Cell
  const updateFlag = (e, x, y) => {
    // This will prevent dropdown on right click.
    e.preventDefault();
    // This will create a deep copy of the state
    let newGrid = JSON.parse(JSON.stringify(grid));
    console.log(newGrid[x][y]);
    newGrid[x][y].flagged = true;
    setGrid(newGrid);
  };

  //Function to Reveal Cell
  const revealCell = (x, y) => {
    if (grid[x][y].revealed || gameOver) {
      return;
    }
    let newGrid = JSON.parse(JSON.stringify(grid));
    if (newGrid[x][y].value === "X") {
      /*If a user clicks on a bomb, the following alert will be displayed: */
      alert("You've clicked on a mine, You lose!");
      for (let i = 0; i < mineLocations.length; i++) {
        newGrid[mineLocations[i][0]][mineLocations[i][1]].revealed = true;
      }
      setGrid(newGrid);
      setGameOver(true);
    } else {
      let newRevealedBoard = revealed(newGrid, x, y, nonMineCount);
      setGrid(newRevealedBoard.arr);
      setNonMineCount(newRevealedBoard.newNonMinesCount);
      if (newRevealedBoard.newNonMinesCount === 0) {
        /*Once the board has been cleared successfully, the following alert 
        will be displayed: */
        alert("You have cleared the field succesfully, You Win!");
        setGameOver(true);
      }
    }
  };

  return (
    <div className="boardContainer">
      <h1>Minesweeper</h1>
      <Timer />
      <div className="Board">
        <div className="helpPopup">
          {/* HelpPopup inserted here */}
          <button onClick={() => setButtonPopup(true)}>Help</button>
          <HelpPopup trigger={buttonPopUp} setTrigger={setButtonPopup} />
        </div>
        {gameOver && <Modal restartGame={restartGame} />}
        {grid.map((singleRow, index1) => {
          return (
            <div className="cellContainer" key={index1}>
              {singleRow.map((singleBlock, index2) => {
                return (
                  <Cell
                    revealCell={revealCell}
                    details={singleBlock}
                    updateFlag={updateFlag}
                    key={index2}
                  />
                );
              })}
            </div>
            //cellContainer div closed.
          );
        })}
      </div>
      {/* Board div closed */}
    </div>
  );
};

export default Board;
