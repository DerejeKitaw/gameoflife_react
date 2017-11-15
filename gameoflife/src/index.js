import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Grid component 
class Grid extends React.Component{
    // all components should have a render method
    render(){
       // rendere method need to return an element
       return (
           <div>Grid</div>
       ) 
    }
}

// Main component
class Main extends React.Component {

    constructor(){
        super();
        this.state={
            generation:0,
        }
    }
    // all components should have a render method
    render() {
        // rendere method need to return an element
        return (<div>
            <h1>The Game of life</h1>
            <Grid />
            <h2>Generation: {this.state.generation}</h2>

        </div>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById('root'));

