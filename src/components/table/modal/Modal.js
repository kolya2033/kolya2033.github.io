import React, { Component } from 'react'
import ModalView from './ModalView'

class Modal extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: ''
        }
    }

        
    componentDidMount() {
        window.addEventListener('keydown', this.onkeyDown)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.onkeyDown)
    }

    onkeyDown = (e) => {
        if (e.keyCode === 27) {
            this.props.onModalChange(false)
        }
    }

    onItemChange = (e) => {
        this.setState({
            value: e.target.value,
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onChangeClient(this.state.value);
        this.props.onModalChange(false);
        this.setState({
            value: ''
        })
    }


    render() {
        const {value} = this.state
        const {modalActive, onModalChange} = this.props
        return (
            <ModalView 
                modalActive={modalActive} 
                onModalChange={onModalChange} 
                onSubmit={this.onSubmit} 
                onItemChange={this.onItemChange} 
                value={value}/>
        )
    }
}

export default Modal
