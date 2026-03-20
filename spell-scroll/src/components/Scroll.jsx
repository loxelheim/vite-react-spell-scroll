import { useState } from 'react'
import Spell from './Spell'

function Scroll() {
  const [inputValue, setinputValue] = useState("")

  function addSpellToList(){}
  

  return (<section className='scroll'>

    <div className="spell-add">
      <input type="text" onChange={event => setinputValue(event.target.value)} />
      <button onClick={addSpellToList}>Add Spell</button>
    </div>
    
    <hr />

    <ul className='spell-list'>
      <Spell title="Fireball"/>
      <Spell title="Touchy Healy"/>
      <Spell title="Yes I Can"/>
    </ul>

  </section>)
}

export default Scroll