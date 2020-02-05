import React, { Component } from 'react';
import './App.css';
import Validation from './Component/Validation';
import Char from './Component/Char';

class App extends Component {
  state = {
    inputText: [],
    inputTextLength: 0
  }

  getLengthHandler = (event) => {
    this.setState({
      inputText: event.target.value.split(''),
      inputTextLength: event.target.value.length
    })
  }

  deleteLetterHandler = (key) => {
    const letters = this.state.inputText;
    letters.splice(key, 1);
    this.setState({ inputText: letters })
  }

  render() {
    let singleChar = (
      <div>
        {
          this.state.inputText.map((letter, index) => {
            return <Char
              key={this.state.inputText.indexOf(letter, index)}
              click={() => this.deleteLetterHandler(this.state.inputText.indexOf(letter, index))}
              letter={letter}
            />
          })}
      </div>
    );

    return (
      <div className="App" >
        <input type="text" onChange={(event) => this.getLengthHandler(event)} value={this.state.inputText.join('')}></input>
        <p>{this.state.inputTextLength}</p>
        <Validation lengthValue={this.state.inputTextLength} />
        {singleChar}
      </div>
    );
  }
}

export default App;
