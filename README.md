# vite-react-spell-scroll
Study Task for a React App in a Vite environment. It is themed to be a wizardy spell scroll that lists Spells. Those can be viewed/edited/removed. 





## Knowledge bits:

### Adding new Elements to Arrays
with 3-dot deconstructor;
```js
setTasts([...tasks, newTask])
```
would evaluate to:
```js
[
    "eat", 
    "study", 
    "sleep", 
    "repeat"
]
```

without 3-dot deconstructor;
```js
setTasts([...tasks, newTask])
```
would evaluate to:
```js
[
    ["eat", "study", "sleep"],
    "repeat"
]
```