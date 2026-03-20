# vite-react-spell-scroll
Study Task for a React App in a Vite environment. It is themed to be a wizardy spell scroll that lists Spells. Spells can be added, changed and removed. 





## Knowledge bits:

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