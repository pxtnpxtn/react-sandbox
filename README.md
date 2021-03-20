# React Sandbox

A React project to practice doing all things React.

## Fundamentals

### State vs. Props

Props you pass into a component. State is handled inside of a component.

Props: Props can be thought of as arguments for a function. When you call a function (component), you pass in the props it requires. Props are immutable and should not be changed within a component. Instead, the parent should change the value and then pass the new value down to the child component.

State: A stored value that is handled inside of a component. When you change state within a component, it causes the component to rerender.

### Props/Inputs From Parent to Child

```javascript
function BookList() {
  const list = [
    { title: 'A Christmas Carol', author: 'Charles Dickens' },
    { title: 'The Mansion', author: 'Henry Van Dyke' },
  ];

  return (
    <ul>
      {list.map((book, i) => (
        <Book {...book} key={i} />
      ))}
    </ul>
  );
}

function Book({ title, author }) {
  return (
    <li>
      <h2>{title}</h2>
      <div>{author}</div>
    </li>
  );
}
```

### Emits/Outputs From Child To parent

#### State As Props Pattern

Holding state in a parent component, passing it down to child components, and then emiting changes from the child to the parent, changing the state values.

Example: Shopping cart parent > Shopping item child. Parent holds grand total, child holds total of that item.

```javascript
// Child
function BookTitle(props) {
  return (
    <label>
      Title:
      <input onChange={props.onTitleChange} value={props.title} />
    </label>
  );
}

// Parent
function BookEditForm(props) {
  const [title, setTitle] = useState(props.book.title);
  function handleTitleChange(evt) {
    setTitle(evt.target.value);
  }
  return (
    <form>
      <BookTitle onTitleChange={handleTitleChange} title={title} />
    </form>
  );
}
```

### Conditionally Rendering (ngIf/v-if)

```javascript
let condition = true;

function SomeComponent() {
    return (
        {condition ?
            <div>If Rendering</div>
            :
            <div>Else Rendering</div>
        }
    )
}
```

```javascript
let condition = true;

function SomeComponent() {
    return (
        {condition ?
            <SomeComponent />
            :
            null
        }
    )
}
```

```javascript
function SomeComponent(props) {
  return (
    <div>
      {props.loggedIn && <h3>You're logged in as {props.data.username}</h3>}
    </div>
  );
}
```

### Looping (ngFor/v-for)

Map over list.

```javascript
{
  items.map((item, i) => <CartItem key={i} {...item} />);
}
```

### Scoped Styling

Create ComponentName.css, add styling nested in .ComponentName, import stylesheet to ComponentName.js, at top level of component add className="ComponentName", profit.

```javascript
function Something() {
  return <div className="Something">//...</div>;
}
```

### Inline styling

```javascript
function SomeComponent() {
  return <h1 style={{ color: 'red' }}>Hello</h1>;
}
```

### Conditional Styling

```javascript
function SomeComponent() {
  const happy = true;
  const styles = { color: happy ? 'green' : 'red' };
  return <h1 style={styles}>Hello</h1>;
}
```

## Context API

Allows passing state from parent component to any descendant (including grandchildren). This prevents prop drilling.

Pass default value into .createContext.
Change context value with value attribute.

```javascript
const ThemeContext = React.createContext('dark');

function BookPage() {
  return (
    <ThemeContext.Provider value="light">
      <BookList />
    </ThemeContext.Provider>
  );
}

function Book() {
  const theme = useContext(ThemeContext);
  const styles = {
    dark: { background: 'black', color: 'white' },
    light: { background: 'white', color: 'black' },
  };
  return (
    <li style={styles[theme]}>
      <h2>Some Book Title</h2>
      <div>By Anonymous</div>
    </li>
  );
}
```

## Hooks

#### Why do they exist?

React used to use class based components. Although effective, it came with an increased learning curve with extends React.Component, constructor(props), super(props), binding methods in the constructor, and the this keyword.

#### What problems do they solve?

Removes the above hurdles, while also making components simple, composable, flexible and extendable. It allows us to add state, lifecycle methods and share non-visual logic.

### useState

Most commonly used with array destructuring. First item is state value, second item is to update that value.
Pass initial value to useState.

```javascript
import React, { useState } from 'react';

function Count() {
  const [count, setCount] = useState(0);

  const increaseByOne = () => setCount(count + 1);

  return (
    <>
      <button onClick={setCount(count - 1)}>-1</button>
      {count}
      <button onClick={increaseByOne}>+1</button>
    </>
  );
}
```

### useEffect

Used for component lifecycle hooks. Initialization, update and destroy.

#### Mount

Dependency array is left empty. The function will then run when mounted and when state changes.

```javascript
useEffect(() => {
  // Some code that runs when the component mounts
}, []);
```

#### Update

State in the dependency array (useEffect's second argument) will be tracked. When that variable changes, the useEffect's callback function will refire.

```javascript
useEffect(() => {
  // Some API call made that saves the new items value.
}, [items]);
```

#### Unmount

Return a function from our useEffect's callback.

```javascript
useEffect(() => {
  // Code run when component updates
 return () => // Code run when component is destroyed
}, [items]);
```

### useRef

Can be used to grab native HTML elements from JSX/the DOM. Unlike useState, useRef does NOT cause a rerender when the ref value changes.

```javascript
function SomeComponent() {
  const myButton = useRef(null);
  const clickMyButton = () = myButton.current.click();

  return (
    <button ref={myButton}>Do It</button>
  )
}
```

## Common Mistakes

### Something
