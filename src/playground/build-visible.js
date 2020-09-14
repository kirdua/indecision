class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visibility: false,
    };

    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
  }

  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility,
      };
    });
  }
  render() {
    const { visibility } = this.state;
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {visibility ? 'Hide Details' : 'Show Details'}
        </button>
        {visibility && (
          <div>
            <p>Hey. These are some more details</p>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// const appRoot = document.getElementById('app');
// let showMessage = false;

// const showDetails = () => {
//   showMessage = !showMessage;
//   render();
// };

// const render = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={showDetails}>
//         {showMessage ? 'Hide Details' : 'Show Details'}
//       </button>
//       {showMessage && <p>Hey, these are some details!</p>}
//     </div>
//   );
//   ReactDOM.render(template, appRoot);
// };

// render();
