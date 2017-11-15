import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Box component
class Box extends React.Component{
    selectBox = () => {
        this.props.selectBox (this.props.row, this.props.col);
    }
    // all components should have a render method
    render(){
        return(
            <div
            className={this.props.boxClass}
            id={this.props.id}
            onClick={this.selectBox} // this is not this.props.selectBox because we are going to create selectBox function in this component
            />
        );
    }
}

// Grid component 
class Grid extends React.Component{
    // all components should have a render method
    render(){
        const width = (this.props.cols * 16) +1;
		var rowsArr = [];

		var boxClass = "";
		for (var i = 0; i < this.props.rows; i++) {
			for (var j = 0; j < this.props.cols; j++) {
				let boxId = i + "_" + j;

				boxClass = this.props.gridFull[i][j] ? "box on" : "box off";
				rowsArr.push(
					<Box
						boxClass={boxClass}
						key={boxId}
						boxId={boxId}
						row={i}
						col={j}
						//selectBox={this.props.selectBox}
					/>
				);
			}
		}

       // rendere method need to return an element
       // when we are inside a tag we use two curly brace and outside we use single brace
       return (
            <div className="grid" style={{width: width}}>
            {rowsArr} 
           </div>
       );
    }
}

// Main component
class Main extends React.Component {

    constructor(){
        super();
        // speed , rows and columns will be refernced in the state. So created outside state
        this.speed = 100;
        this.rows = 30;
        this.cols = 50; // columns

        this.state={
            generation:0,
            // create a grid rows x by cols and turn off initialy
            gridFull: Array(this.rows).fill().map(() => Array(this.cols).fill(false))
        }
    }
    // create selectBox method

    selectBox = (row, col) => {
        // in react it is a best practice to copy the array to modify state. Do not update state directly
        let gridCopy = arrayClone(this.state.gridFull);

        // already deep copy is in outside function
        gridCopy[row][col] = !gridCopy[row][col];
        this.setState({
            gridFull: gridCopy
        })
    }
    
    // all components should have a render method
    render() {
        // rendere method need to return an element
        return (
            <div>
            <h1>The Game of life</h1>
            
            <Grid 
                gridFull={this.state.gridFull}
                rows={this.rows}
                cols={this.cols}
                //selectBox={this.selectBox}
            />
            <h2>Generation: {this.state.generation}</h2>

        </div>
        );
    }
}

// deep clone of the array
function arrayClone (arr){
    return JSON.parse(JSON.stringify(arr));
}

ReactDOM.render(<Main />, document.getElementById('root'));

