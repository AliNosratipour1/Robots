import React, {Component}from 'react';
import Cardlist from './Cardlist';
import {robots} from './Robots';
import SearchBox from './SearchBox'
import './App.css';


class App extends Component {
    constructor(){
        super();

        this.state = {
            robots:robots,
            searchfield: '' 
        }
    }
    onSearchChange = (event) => {
         this.setState({searchfield:event.target.value})
         
      
    }
    render(){
        const filterRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
      })
        return(
        <div className="tc">
            <h1 className="f1">RoboFrinds</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Cardlist robots ={filterRobots} />
        </div>

        );

}
    }

export default App;
