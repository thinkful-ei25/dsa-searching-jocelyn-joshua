import React, { Component } from 'react';
import './App.css';

let dataSet = "89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5";
dataSet = dataSet.split(' ');
let dataSet2 = "89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5";
dataSet2 = dataSet2.split(' ').sort();

class App extends Component {
 constructor(props){
   super(props);
     this.state = {
       searchTerm: null,
       linearRes:null,
       binaryRes:null, 
       found: false
     };
   }
 

  search(e) {
    e.preventDefault();
    this.linearSearch(this.input.value); 

    this.binarySearch(this.input.value, dataSet2); 
  }
  linearSearch(val){
    this.setState({
    searchTerm: val
    }); 
    for(let i = 0; i < dataSet.length; i++){
      if(dataSet[i] === val){
        this.setState({
        linearRes:i+1,
        found:true 
        });
        return;
      }

    } return;  
     

  }

  binarySearch(val, arr, start=0, end=arr.length, count=1){

    const index = Math.floor((start + end)/2); 
    const item = arr[index]; 

    if(item === val){
      this.setState({
        binaryRes: count
      }); 
      return; 
    }
    else if(item < val){
      return this.binarySearch(val, arr, index+1, end, count+1)
    }
    else if(item > val){
      return this.binarySearch(val, arr, start, index-1, count+1);
    }
    
  }


  render() {
    let submitButton = (<button type="submit">Submit</button>);
    let form = (<form onSubmit={e => this.search(e)}><input type="text" ref={(input) => (this.input = input)}></input>{submitButton}</form>);
    let linearResults = (<p> Linear Search says 'I found {this.state.searchTerm} in {this.state.linearRes} steps'</p>);
    let binaryResults =  (<p> Binary Search says 'I found {this.state.searchTerm} in {this.state.binaryRes} steps'</p>);
    if(this.state.found){
    return (
      <div className="App">
        Linear Search vs Binary Search 
        {form}
        {linearResults}
        {binaryResults}
      </div>
    );
  } else {
    return (
      <div className="App">
        Linear Search vs Binary Search 
        {form}
      </div>
    );
  }
  }
}

export default App;
