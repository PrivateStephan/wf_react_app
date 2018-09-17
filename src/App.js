/**
 * Import
 * */
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

/*
*
* */
class App extends Component {
    //State
    state = {
        persons : [
            {name: "Stephan", age: 42},
            {name: "Stefanie", age: 33},
            {name: "Eva", age: 3}

        ]
    };

    switchNameHandler = () => {
        console.log('Button was clicked');
        this.setState({
            persons : [
                {name: "Stephan Paul", age: 42},
                {name: "Stefanie", age: 33},
                {name: "Eva Breanna ", age: 3}
            ]
        })
    };


    render() {
        return (
            <div className="App">
                <h1>Hi this is myReact App</h1>
                <p>It works!</p>
                <button onClick={this.switchNameHandler}>Switch Names</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My hobby is Kitesurfing</Person>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
            </div>
    );
  }
}

/*
* Export
* */
export default App;
