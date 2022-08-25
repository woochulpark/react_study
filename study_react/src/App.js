import React, { Component } from "react";
//import logo from './logo.svg';
import './App.css';
import './Person/Person.css'
import Person from './Person/Person';

//class
// 클래스 내에서 사용 하는 기본 Component는 세가지로 
//State(javascript Object 형태)), Life-cycle, Proptypes 
// Props도 사용 가능

//functional Component는 props만 사용 가능
//props는 부모에게서 받고 변경이 불가
class App extends Component{

  state = {
    persons : [
      { name : 'David', age: 28},
      { name : 'lina', age:29},
      { name: 'nick', age:26}
    ],
    otherState: 'some other value',
    showPersons:false

  } 

  //switchNameHandler = (newName) => {
    nameChangedHandler = (event) => {
    //console.log('Was clicked!');
    // Do Not Use : this.state.persons[0].name = 'David';
    // 두번째 input에서 입력이 들어오면 실시간으로 이름이 바뀜
    this.setState({
      persons:[
        { name: 'David', age: 25},
        { name: event.target.value, age: 25},
        { name: 'Nick', age: 25}
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
    // !(not)을 붙여서 현 상황에 대해서 반대를 state해 줌.
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons:[
        { name: newName, age: 25},
        { name: 'Lina', age: 25},
        { name: 'Nick', age: 25}
      ]
    })
  }



  render(){
    // css border-radius는 안됨. borderRadius
    // css 그대로 쓰면 오류가 나는 경우도 있으니 확인.
    const style = {
      backgourndColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      curosr: 'pointer',
      borderRadius: '3px',
      boxShadow: '0 2px 3px #ccc'
    }
    //jsx 내부에서는 if가 불가능 하지만 밖으로 벗어나면 if가 가능
    // persons 변수 지정 기본값 null null 일경우 persons에 값을 넣어 보여줌.
    let persons = null;

    // Hard coding으로 일일히 지정하기도 하지만 this.state.person은 array이기 때문에 
    //map 함수를 적용 data를 차례로 읽게 함.
    
    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map(person => {
            return(
              <Person name={person.name} age={person.age} />
            )
          })}
          {/*
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changed={this.nameChangedHandler} >Nice to meet you.</Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age} click={() => this.switchNameHandler('또라이')} > 눌러라. </Person>
        */}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <p>This is really working!</p>
        {/*button event 지정(camelCase)*/}
        {/*button click 에서 agrument 넘겨주기 2가지*/}
        {/*<button onClick={()=>this.switchNameHandler('바보')}>Switch Name</button>*/} 
       {/* <button style={style} onClick={this.switchNameHandler.bind(this,'바보')}>Switch Name</button>*/}
       <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
       {this.state.showPersons === true ?
       <div>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changed={this.nameChangedHandler} >Nice to meet you.</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} click={() => this.switchNameHandler('멍청이')} > 눌러라. </Person>
        </div>: null}
        {persons}
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