import React, {Component}from 'react';
import Cardlist from './Cardlist';
import {robots} from './Robots';
import SearchBox from './SearchBox'




class App extends Component {
    constructor(){
        super();

        this.state = {
            robots:robots,
            searchfield:'' 
        }
    }
    render(){
        return(
        <div className="tc">
            <h1>Robo Frinds</h1>
            <SearchBox/>
            <Cardlist robots ={robots}/>
        </div>

        );


}
    }


export default App;
