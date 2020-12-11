import React, { Component } from 'react';
import './filter-panel.css';

class FilterPanel extends Component {

    buttons = [
        {name: 'all', label: 'All'},
        {name: 'left', label: 'Left'},
        {name: 'done', label: 'Done'},
        
    ];


    render() {
        
        const {filter, onFilterChange} = this.props;

        const buttons = this.buttons.map(({name, label}) => {
            const active = filter === name;
            const btnClass = active? 'btn-active' : 'filter-btn'
            return(
            <button 
                type='button' 
                className={`${btnClass} button`}
                key={name}
                onClick={()=> onFilterChange(name)}>{label}
            </button> 
            );
        });



        return(
            <div className='filter-panel'>
               {buttons}
            </div>
        )
    }
};

export default FilterPanel;