import React from 'react'

function Spell({id, title}) {

  return (<li key={id}>

    <h3>{title}</h3>
    
    <div className="buttons">
      <button>✏️</button>
      <button>🗑️</button>
    </div>
  </li>)
}

export default Spell