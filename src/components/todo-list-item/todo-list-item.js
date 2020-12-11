import React, { Component } from 'react';
import './todo-list-item.css';

class TodoListItem extends Component {
   
    render(){ 
        const { label, 
                onDeleted, 
                onToggleImportant, 
                onToggleDone, 
                done, 
                deny,
                important 
            } = this.props;

        

        let classNames = 'todo-list-item';
        
        if(done) {
            classNames += ' done';
        }
        if(deny) {
            classNames += ' deny';
        }
        if(important) {
            classNames += ' important';
        }

        return (
            <span className = { classNames }>
                    <span 
                        className='todo-list-item-label'  
                        onClick={ onToggleImportant }>
                        { label }
                    </span >
                    <button 
                        type="button" 
                        className="btn button-done"
                        onClick={ onToggleDone }>

                    </button>
                    <button 
                        type="button" 
                        className="btn button-deny"
                        onClick={ onDeleted }>
                    </button>
            </span>
        );
    }
};

export default TodoListItem;