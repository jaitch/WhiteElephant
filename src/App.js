import './App.css';
import elephant from './elephant.png';
import React, {Component} from "react";
import List from "./components/List";
import Gifts from "./components/Gifts";




class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: [],
            randomList: [],
        };
    }

    listPeople = (name) => {
        this.setState({
            people: [...this.state.people, name]
        });
    }

    randomFunction = () =>  {
        let people = this.state.people;
        let  i, j, k;
        for (i = people.length -1; i > 0; i--) {
            j = Math.floor(Math.random() * i)
            k = people[i]
            people[i] = people[j]
            people[j] = k
        }
        this.setState({
            people: people
        });
    }

    selectGift = (i, gift) => {
        let people = this.state.people;
        let person = people[i];
        person.gift = gift;
        this.setState({
            people
        })
    }

    render() {
        return (
            <main className="App">
                <header className="App-header">
                    <img src={elephant} className="logo" alt="elephant"/>
                    <h1>A Very Merry Yenta Christmas</h1>
                </header>
                <div className="room">
                    <List people={this.state.people} listPeopleCallback={this.listPeople} randomizeCallback={this.randomFunction} selectGiftCallback={this.selectGift}/>
                    <Gifts/>
                </div>
            </main>
        )
    }
}

export default App;