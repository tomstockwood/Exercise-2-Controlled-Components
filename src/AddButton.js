import React, { Component} from 'react'

class AddButton extends React.Component{
    constructor(props) {
        super(props);
        this.inputIsEmpty = this.inputIsEmpty.bind(this);
      }
    
    inputIsEmpty = () => {
        return this.state.value === '';
      };
    
    render() {
        return (
        <button disabled={this.inputIsEmpty}>Add</button>
        )
    }
}

export default AddButton