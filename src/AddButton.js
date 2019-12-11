import React, { Component} from 'react'

class AddButton extends React.Component{
    render() {
        return (
            <button disabled={this.props.disabled}>
                {this.props.children}
            </button>
        )
    }
}

export default AddButton