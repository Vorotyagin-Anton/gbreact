import './App.css';
import Message from './Message';

const messageToRender = 'My message in new component';

function App(props) {
  return (
      <div className="App">
        <header className="App-header">
          My First React App
          <h3>Hello, { props.name }!</h3>
            My message component
            <Message message={messageToRender}/>
        </header>
      </div>
  );
}

export default App;
