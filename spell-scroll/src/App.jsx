import './App.css'
import Scroll from './components/Scroll'

function App() {
  return (<>
    <h1>Spell Scroll</h1>

    <hr />
    
    <div className="spell-add">
      <input type="text" />
      <button>Add Spell</button>
    </div>
    
    <hr />

    <Scroll></Scroll>
  </>)
}

export default App
