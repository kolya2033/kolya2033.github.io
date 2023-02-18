import React, { Component } from 'react'

class Modal extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: ''
        }
    }

        
    componentDidUpdate() {
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
        return (
            <>
                <div  className={this.props.modalActive ? "modal active" : "modal"} onClick={() => this.props.onModalChange(false)}>
                    <form 
                        onClick={e => e.stopPropagation()}
                        className="modal_content"
                        onSubmit={this.onSubmit}>
                        <input 
                            className="modal_inputt"
                            type="text" 
                            name="property"
                            value={this.state.value}
                            onChange={(e) => this.onItemChange(e)}/>
                        <button 
                            type="submit"
                            className="btn">Change</button>
                    </form>
                </div>
            </>
        )
    }
}

export default Modal
