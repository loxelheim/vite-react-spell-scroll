# vite-react-spell-scroll
Study Task for a React App in a Vite environment. It is themed to be a wizardy spell scroll that lists Spells. Spells can be added, changed and removed. 

Not sure how to make the Scroll an actuall scroll-y looking Scroll, tho ...

Maybe it's like an outdated term, but the wizards of the modern age have switched to magical displays that float in the air ... or something?? Idk, we'll see where the creative juices bring us.



## Knowledge bits:

### Notice to myself
The created Vite project becomes the repo for github, I think? Gotta ask Mete about this.

### sending data back to parent component
looked it up here: [Link to medium.com](https://medium.com/@ozhanli/passing-data-from-child-to-parent-components-in-react-e347ea60b1bb)

```jsx
// Parent component
import { useState } from "react";
import Child from "./Child";

function Parent() {
  const [dataFromChild, setDataFromChild] = useState("");

  function handleDataFromChild(data) {
    setDataFromChild(data);
  }

  return (
    <div>
      <h1>Data from Child: {dataFromChild}</h1>
      <Child sendDataToParent={handleDataFromChild} />
    </div>
  );
}

export default Parent;
```

```jsx
// Child component
import { useState } from "react";

function Child({ sendDataToParent }) {
  const [data, setData] = useState("");

  function handleClick() {
    sendDataToParent(data);
  }

  return (
    <div>
      <input type="text" value={data} onChange={(e) => setData(e.target.value)} />
      <button onClick={handleClick}>Send Data to Parent</button>
    </div>
  );
}

export default Child;
```