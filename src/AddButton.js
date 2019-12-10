import React, { Component} from 'react'

class AddButton extends React.Component{
    
    A = this.props.testFunction();
    
    inputIsEmpty = () => {
        return this.props.value === '';
        //return true;
      };
    
    B = () => {
        return true;
      };

    render() {
        return (
            <div>
            <button disabled={this.inputIsEmpty()}>Add</button>
            <p> Hello world </p>
            <p> The value is {this.props.value} xx</p>
            </div>
        )
    }
}

export default AddButton