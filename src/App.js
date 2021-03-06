import React , { Component } from 'react';
import Posts from './Component/Posts';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      items : [],
      isLoaded : false,
    }

  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded : true,
        items : json,
      })
    });
}

  render(){

    var {isLoaded , items} = this.state;

    if(!isLoaded){
      return <div>Loading...</div>
    }

    else{

      return (
        <div className="App">
          <Posts postsList = {this.state.items}></Posts>
        </div>
      );}
    }
}

export default App;
