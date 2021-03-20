# React Sandbox

A React project to practice doing all things React.

## Fundamentals

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
function someComponent() {
  return <h1 style={{ color: 'red' }}>Hello</h1>;
}
```

### Conditional Styling

```javascript
function someComponent() {
  const happy = true;
  const styles = { color: happy ? 'green' : 'red' };
  return <h1 style={styles}>Hello</h1>;
}
```

## Context API

## Hooks

### useState

### useEffect

### useRef

## Common Mistakes

### Something
