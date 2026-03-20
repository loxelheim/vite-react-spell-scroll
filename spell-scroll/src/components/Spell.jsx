import { useState } from "react"

function Spell(props) {
  const [editValue, setEditValue] = useState(props.title)
  const [editMode, setEditMode] = useState(false)

  if (!editMode) {
    // NOT edit view
    return (<li key={props.id} className='spell-item'>

      <h3>{props.title}</h3>
      
      <div className="buttons">
        <button onClick={() => setEditMode(true)}>✏️</button>
        <button onClick={() => props.removeSpell(props.id)}>🗑️</button>
      </div>
    </li>)

  } else {
    // Edit view
    // input value is prefilled with the initial text
    return (<li className='spell-item'>

      <h3>
        <input type="text" 
          onChange={event => setEditValue(event.target.value)} 
          value={editValue}/>
      </h3>
      
      <div className="buttons">
        <button onClick={() => {
          // send updated spell to parent
          props.updateSpell({
            id: props.id,
            title: editValue
          })
          // toggle edit mode off
          setEditMode(false)
        }}>💾</button>
        <button onClick={() => {
          // reset edit value
          setEditValue(props.title)
          // toggle edit mode off
          setEditMode(false)
          }}>❌</button>
      </div>
    </li>)
  }
}

export default Spell