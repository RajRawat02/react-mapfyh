
import React, { Component } from "react";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./modules/store";
import {render} from 'react-dom';
import ToDO from './todo';
const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

class App extends Component {
  render() {
    return (
      <ReduxProvider store={reduxStore}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">ToDo Redux app</h1>
          </header>
          <ToDO />
        </div>
      </ReduxProvider>
    );
  }
}

export default App;

render(<App />, document.getElementById('root'));
