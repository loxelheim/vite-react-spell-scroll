import { useState } from "react"

function Spell(props) {
  const [editValue, setEditValue] = useState(props.title)
  const [editMode, setEditMode] = useState(false)

  return (
    <li key={props.id} className={!editMode ? 'spell-item' : 'spell-item editing'}>

    { !editMode ? <>

      {/* is NOT Edit view */}
      <span className="spell-title">{props.title}</span>
      
      <div className="buttons">
        {/* toggle edit mode on */}
        <button onClick={() => setEditMode(true)}>✏️</button>
        {/* delete spell and data to parent */}
        <button onClick={() => props.removeSpell(props.id)}>🗑️</button>
      </div>

    </> : <>
    
      {/* is Edit view */}
      <span className="spell-title">
        {/* prefill input value with initial title */}
        <input type="text" 
          onChange={event => setEditValue(event.target.value)} 
          value={editValue}/>
      </span>
      
      <div className="buttons">

        {/* save edit */}
        <button onClick={() => {
          // send data to parent
          props.updateSpell({
            id: props.id,
            title: editValue
          })
          // toggle edit mode off
          setEditMode(false)
        }}>💾</button>
        
        {/* cancel edit */}
        <button onClick={() => {
          // reset edit value
          setEditValue(props.title)
          // toggle edit mode off
          setEditMode(false)
          }}>❌</button>
      </div>

    </> }
    
  </li>)

}

export default Spell