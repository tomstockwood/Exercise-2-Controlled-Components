import React, { Component} from 'react'

class GenericButton extends React.Component{
    render() {
        return (
            <button 
                onClick={this.props.deleteLastItem}
                disabled={this.props.disabled}>
                {this.props.children}
            </button>
        )
    }
}

export default GenericButton