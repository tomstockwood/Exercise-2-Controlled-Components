import React, { Component} from 'react'
import AddButton from './AddButton.js'
import GenericButton from './GenericButton.js'

class EnterText extends React.Component{
    render() { 
        return (
            <form onSubmit={this.props.addItem}>
                <input
                    type="text"
                    placeholder="Enter New Item"
                    value={this.props.value}
                    onChange={this.props.handleChange}
                />
                {/* <AddButton }
                    // disabled={this.props.value === ''}
                    // value = {this.props.value}
                // >
                    {/* Add */}
                {/* </AddButton> */}

                <GenericButton
                    disabled={this.props.value === ''}
                    value = {this.props.value}
                >
                    Add
                </GenericButton>

            </form>
        )}
}

export default EnterText