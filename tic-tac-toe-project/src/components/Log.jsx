export default function Log({ upturns }) {
  return (
    <ol id="log">
      {upturns.map((upturn) => (
        <li key={`${upturn.square.row}${upturn.square.col}`}>
          {upturn.player} selected {upturn.square.row},{upturn.square.col}
        </li>
      ))}
    </ol>
  );
}
