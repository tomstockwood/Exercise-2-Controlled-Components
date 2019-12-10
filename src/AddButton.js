import React, { Component} from 'react'

class AddButton extends React.Component{
    
    inputIsEmpty = this.props.inputIsEmpty2
    
    testFunction = () => {
          return true
      };

    render() {
        return (
            <div>
            <button disabled={this.testFunction()}>Add</button>
            <p> Hello world </p>
            </div>
        )
    }
}

export default AddButton