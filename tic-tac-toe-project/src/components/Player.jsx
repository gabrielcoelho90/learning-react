import { useState } from "react";

export default function Player({initialName, symbol, isActive}) {
  const [playerName, setPlayerName] = useState(initialName)
  const [isEditing, setIsEditing] = useState(false)

  function handleEditClick(){
    setIsEditing(editing => !editing) //explanation at class 78 -> updating a state based on a old state.
  }

  function changeName(event) {
    setPlayerName(event.target.value)
  }


  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {!isEditing ? <span className="player-name">{playerName}</span> : <input type="text" required value={playerName} onChange={changeName}></input>}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'save' : 'edit'}</button>
  </li>
  );
}
