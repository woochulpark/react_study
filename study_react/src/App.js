import React, { Component } from "react";
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

//class
// 클래스 내에서 사용 하는 기본 Component는 세가지로 
//State(javascript Object 형태)), Life-cycle, Proptypes 
// Props도 사용 가능

//functional Component는 props만 사용 가능
class App extends Component{

  state = {
    persons : [
      { name : 'David', age: 28},
      { name : 'lina', age:29},
      { name: 'nick', age:26}
    ]
  } 

  render(){
    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <p>This is really working!</p>
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >Nice to meet you.</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    )
  }
  //props component 전달 
  /*  
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <Person name="David" age="28" />
        <Person name="Lina" age="29">Nice to meet you.</Person>
        <Person name="군장이" age="30" />
      </div>
    );
  }
  */
}


// funtion 화
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
export default App;
//https://codinghub.tistory.com/category/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%28Programming%29/%EB%A6%AC%EC%95%A1%ED%8A%B8%28React%29 참조