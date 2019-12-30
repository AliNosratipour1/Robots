import React, {Component}from 'react';
import Cardlist from './components/Cardlist';
import SearchBox from './components/SearchBox'
import Scroll from './components/Scroll';
import './App.css';


class App extends Component {
    constructor(){
        super();

        this.state = {
            robots:[],
            searchfield: '' 
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {this.setState({robots:users})});
              
         
        
    }
    onSearchChange = (event) => {
         this.setState({searchfield:event.target.value})
         
      
    }
    render(){
        const filterRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
      })
      if(this.state.robots.length === 0){
        return <h1 className="tc">Loading</h1>
      }else{

      
        return(
        <div className="tc">
            <h1 className="f1">RoboFrinds</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
            <Cardlist robots ={filterRobots} />
            </Scroll>
        </div>

        );
    }//end of if statment
}
    }

export default App;
