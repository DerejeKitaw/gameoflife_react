import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


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
        // rendere method need to retern an element
        return (<div>
            <h1>The Game of life</h1>
        </div>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById('root'));

