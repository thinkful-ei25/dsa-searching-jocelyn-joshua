import React, { Component } from 'react';
import './App.css';

let dataSet = "89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5";
dataSet = dataSet.split(' ');


class App extends Component {
  search(e) {
    e.preventDefault();
    console.log(this.linearSearch(this.input.value));
  }
  linearSearch(val){
    for(let i = 0; i < dataSet.length; i++){
      if(dataSet[i] === val){
        return ('I found ' + val + " after " + (i+1) + ' steps');
      }
      return('I never found ' + val + ' even after ' + (dataSet.length) + ' attempts');
    }
  }
  render() {
    let submitButton = (<button type="submit">Submit</button>);
    let form = (<form onSubmit={e => this.search(e)}><input type="text" ref={(input) => (this.input = input)}></input>{submitButton}</form>);
    return (
      <div className="App">
        search
        {form}
      </div>
    );
  }
}

export default App;
