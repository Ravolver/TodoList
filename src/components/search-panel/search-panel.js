import React, { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component {

    state={
        stash: '',
    };

    onSearchChange = (e) => {
        const stash = e.target.value
        this.setState ({ stash })
        this.props.onSearchChange(stash)
    };

    render(){

        const {toggleModal} = this.props

      
        return(
            <form className='search-panel'>
                <input 
                    type="text" 
                    onChange={ this.onSearchChange }
                    className="search-panel-input" 
                    placeholder="Search..." 
                    id="inputDefault"
                    autocomplete="off"
                    value={this.state.stash} />
                <button type='button' onClick={ toggleModal } className='btn-block'></button>
            </form>  
        )
    }
};


export default SearchPanel;