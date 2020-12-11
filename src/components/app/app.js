import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import FilterPanel from '../filter-panel';
import AddItem from '../add-item';
import './app.css';
import Modal from '../modal'

class AppTodo extends Component {

    setId = 10;

    deleteItem = (id) => {
        this.setState(({todoData})=>{
            let todoDataUpdate = todoData.filter(item => item.id !== id);
            return {
                todoData: todoDataUpdate
            };
        });
    };

    addItem = (text) => {
        const newItem = this.createItem(text);
    
        this.setState((todoData)=>{
            let todoDataNew = [...this.state.todoData, newItem]
            return {
                todoData: todoDataNew
            };
        });
    };

    toggleDataProperty = (arr, id, property) => {

        let index = arr.findIndex((el) => el.id ===id);
        let oldItem = arr[index]
        let newItem = {...oldItem, [property]: !oldItem[property]}
        let newData = [
            ...arr.slice( 0, index ),
            newItem,
            ...arr.slice( index + 1 )
        ];
        
        return newData;
    };

    onToggleImportant = (id) => {
        this.setState(({todoData})=>{
            return {
                todoData: this.toggleDataProperty(todoData, id, 'important')
            };
        });
    };

    onToggleDone = (id) => {
       this.setState(({todoData}) => {
           return{
               todoData: this.toggleDataProperty(todoData, id, 'done')
           };
       });
    };

    createItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.setId++
        }
    };

    search = (items, stash) => {
        if(stash.length === 0){
            return items;
        }
        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(stash.toLowerCase()) > -1;
        });
    };

    onSearchChange = (stash) => {
        this.setState({ stash });
    };
    
    filter = (items, filter) => {
        switch(filter) {
            case 'all':
                return items;
            case 'left':
                return items.filter((item)=> !item.done );
            case 'done':
                return items.filter((item)=> item.done);
            default: 
                return items;
        };
    };

    onFilterChange = (filter) => {
        this.setState({filter});
    }

    toggleModal = () => {
        this.setState(state => ({isModalOpen: !state.isModalOpen}))
    }

    onModalInputChange = (pass) => {
        this.setState({pass})
        if( pass.toLowerCase() === 'matrix'){
            this.toggleModal()
        }
    }

    state = {
        todoData :[
            this.createItem('Wake up, Neo ...'),
            this.createItem('The Matrix has you ...'),
            this.createItem('Follow the white rabbit.'),
        ],
        stash: '',
        filter: '',
        isModalOpen: false,
        pass: ''

    };


    render() {

        const{todoData, stash, filter} = this.state
       
        const display = this.filter(
                this.search(todoData, stash), filter)

        const doneCounter = todoData.filter((el) => el.done).length
        const leftCounter = todoData.length - doneCounter

        return (
            <div className='app'>
                    <div className='todo-list'>
                        <AppHeader left={leftCounter} done={doneCounter}  />
                        <FilterPanel 
                            filter={filter}
                            onFilterChange={this.onFilterChange} />
                        <SearchPanel
                            toggleModal={this.toggleModal}
                            onSearchChange={this.onSearchChange} />
                        <TodoList 
                            todos={display} 
                            onDeleted={this.deleteItem }
                            onToggleImportant={this.onToggleImportant}
                            onToggleDone={this.onToggleDone} />
                        <AddItem 
                            onAdded={this.addItem}  />
                    <main>

                        
                        {this.state.isModalOpen && <Modal 
                                                    onModalInputChange={this.onModalInputChange}
                                                    onClose={this.toggleModal}></Modal>}
                    </main>
                </div>
            </div>
        );
    };
};

export default AppTodo;