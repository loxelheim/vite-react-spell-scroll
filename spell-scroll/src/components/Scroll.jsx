import { useState } from 'react'
import Spell from './Spell'

const initialSpells = [
  {id: 0, title: "Fireball"},
  {id: 1, title: "Touchy Healy"},
  {id: 2, title: "Yes, I Can"},
]

function Scroll() {
  const [spellArray, setSpellArray] = useState(initialSpells)
  const [inputValue, setInputValue] = useState("")

  function addSpellToArray(){
    const newSpell = {
      id: spellArray[spellArray.length-1].id +1,
      title: inputValue.trim()
    }
    setSpellArray([...spellArray, newSpell])
    setInputValue("")
  }

  // Callback function (??) fed brack from child
  function removeSpell(id) {
    setSpellArray(
      spellArray.filter(a => a.id !== id)
    )
  }

  // Callback function (??) fed brack from child
  function updateSpell(data){
    setSpellArray(spellArray.map(spell => {
      if (spell.id === data.id) {
        // Create a *new* object with changes
        return { ...spell, title: data.title };
      } else {
        // No changes
        return spell;
      }
    }));

  }
  

  return (<section className='scroll'>

    <h1>Spell "Scroll"</h1>

    <hr />

    <div className="spell-add">
      <input type="text" onChange={event => setInputValue(event.target.value)} value={inputValue}/>
      <button onClick={addSpellToArray}>Add Spell</button>
    </div>
    
    <hr />

    <ul className='spell-list'>
      {spellArray.map((element) => {
        return <Spell 
          key={element.id}
          {...element}
          updateSpell={updateSpell}
          removeSpell={removeSpell}
        />
      })}
    </ul>

  </section>)
}

export default Scroll