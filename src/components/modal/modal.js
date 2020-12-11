import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './modal.css';

class Modal extends Component {
    state = {
        pass: ''
    }

onModalInputChange = (e) => {
    const pass = e.target.value
    this.setState ({ pass })
    this.props.onModalInputChange(pass)
}


    render(){
        return ReactDOM.createPortal(
            <div className='modal'>
                <input
                    onChange={this.onModalInputChange}
                    type='text' 
                    className='modal__password-input'
                    value={this.state.pass}
                    id='inputModal'
                    autocomplete="off"
                    placeholder='You pass?'></input>
                {this.props.children}
            </div>, 
            document.getElementById('portal')
        )
    };
};


export default Modal;