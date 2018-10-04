/**
 * Import
 * */
import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';

/*
*
* */
class App extends Component {
    //State -  kan meerdere objecten bevatten
    state = {
        persons : [
            {id: 1, name: "Stephan Paul", age: 42},
            {id: 2, name: "Stefanie", age: 33},
            {id: 3, name: "Eva", age: 3}

        ],
        pets : [
            {name: "Jip", species: "Cat", age:"2"},
            {name: "Saar", species: "Cat", age:"2"},
            {name: "Monty", species: "Dog", age:"3"}
        ],
        showPersons: false
    };


    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;


        this.setState({ persons : persons });
    };

    //Delete person
    deletePersonHandler = (personIndex) => {
        const persons = this.state.persons;
        persons.splice(personIndex, 1);
        this.setState({persons: persons})
    };

    togglePersonHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    };

    render() {

        //variable persons
        let persons = null;
        let btnClass = '';

        // Assign jsx to array
        if(this.state.showPersons) {
            persons = (
                <div>
                    <Persons
                        persons={this.state.persons}
                        clicked={this.deletePersonHandler}
                        changed={this.nameChangedHandler}
                    />
                </div>

            );

            btnClass = classes.Red;
        }

        const assignClass = [];
        //change color of <p> on number of persons
        if (this.state.persons.length <= 2) {
            assignClass.push(classes.red);
        }

        if (this.state.persons.length <= 1) {
            assignClass.push(classes.bold);
        }


        return (
            <div className={classes.App}>
                <h1>Hi this is myReact App</h1>
                <p className={assignClass.join(' ')}>It works!</p>
                <button
                    className={btnClass}
                    onClick={this.togglePersonHandler}>Show/Hide Persons</button>

                {persons} {/* show variable */}
            </div>
    );
  }
}

/*
* Export
* */
export default App;
