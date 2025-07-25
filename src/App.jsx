const list = [
  {
    title: 'React',
    url: 'https://react.dev/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,

  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,

  },
];

function getTitle(title) {
  return title;
}

function App() {
  return (
    <div>
      <h1>Hello{getTitle('React')}
      </h1>
      <ul>
        {list.map(function (item) {
          return (
            <li key={item.objectID}>
          <span>
            <a href={item.url}>{item.title}</a>
          </span>
          <span>{item.author}</span>
          <span>{item.num_comments}</span>
          <span>{item.pounts}</span>
        </li>
          );
        })}
      </ul>
      <label htmlFor="search">Search</label>
        <input id="search" type="text" />
    </div>
  )
}

export default App;