console.log('app.js is running!');

const app = {
  title: 'test',
  subtitle: 'sub test',
  options: [],
};

const appRoot = document.getElementById('app');

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }
};

const wipeArray = () => {
  app.options = [];
  render();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
      <button onClick={onMakeDecision} disabled={app.options.length === 0}>
        What should I do?
      </button>
      <button onClick={wipeArray}>Remove All</button>

      <ol>
        {app.options.map((option) => {
          return <li key={option}>Item {option}</li>;
        })}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type='text' name='option' />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

render();
