import React, { Component } from 'react';
import './app-header.css';

class AppHeader extends Component {
    render(){
        let {left, done} = this.props
        return(
            <div className='app-header'>
                <h1 className='app-header header'>
                    You have unfinished business, Neo...</h1>
                <h2 className='app-header-left'>
                     {left} tasks left
                </h2>
                <h2 className='app-header-done'>
                    {done} tasks done
                </h2>
            </div>
        );  
    };
};



export default AppHeader;
