const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelect, upturns }) {
  let gameBoard = initialBoard;

  // Very important concept called: Deriving
  for (const upturn of upturns) {
    const { square, player } = upturn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelect(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

// const [updateBoard, setUpdateBoard] = useState(initialBoard);

// function handleUpdate(paramOne, paramTwo, player) {
//   setUpdateBoard((prevGameBoard) => {
//     // best practice to update object-state Immutably
//     const copyOfPrevGameBoard = [...prevGameBoard.map((innerArray)=> [...innerArray])];
//     copyOfPrevGameBoard[paramOne][paramTwo] = player;
//     return copyOfPrevGameBoard;
//   });
//   onSelect()
// }
