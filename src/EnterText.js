import React, { Component} from 'react'
import AddButton from './AddButton.js'
import GenericButton from './GenericButton.js'

function EnterText(props) { 
    return (
        <form onSubmit={props.addItem}>
            <input
                type="text"
                placeholder="Enter New Item"
                value={props.value}
                onChange={props.handleChange}
            />
            <GenericButton
                disabled={props.value === ''}
                value = {props.value}
            >
                Add
            </GenericButton>
        </form>
    )
}

export default EnterText