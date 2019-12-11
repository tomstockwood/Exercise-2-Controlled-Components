import React, { Component} from 'react'

class DeleteButton extends React.Component{
    render() { return (
        <button onClick={this.props.deleteLastItem()} disabled={this.props.noItemsFound()}>
          Delete Last Item
        </button>
    )}
}

export default DeleteButton