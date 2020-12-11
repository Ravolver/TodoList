import React, { Component } from 'react';

import './add-item.css';

class AddItem extends Component {

    state={
        label: ''
    };


    onLabelChange = (evt) => {
        this.setState({
            label: evt.target.value
        });
    };

    onSubmit = (evt) => {
        evt.preventDefault();
        
        if(this.state.label === ''){
            return
        } else {
            this.props.onAdded(this.state.label)
            this.setState({
                label: ''
            });
        };
    };



    render(){
        return(
            <form className='add-item'
                onSubmit={this.onSubmit}>
                <input 
                type='text' 
                value={this.state.label}
                className='add-item-input'
                placeholder='Add you mission'
                onChange={this.onLabelChange}
                ></input>
                <button 
                type='submit'
                className='add-item-btn'
                >Add Item</button>
            </form>
        )
    };
};

export default AddItem;