import React, { Component } from 'react'

class ModalView extends Component {
    render() {
        return (
            <>
               <div  className={this.props.modalActive ? "modal active" : "modal"} onClick={() => this.props.onModalChange(false)}>
                    <form 
                        onClick={e => e.stopPropagation()}
                        className="modal_content"
                        onSubmit={this.props.onSubmit}>
                        <input 
                            className="modal_inputt"
                            type="text" 
                            name="property"
                            value={this.props.value}
                            onChange={(e) => this.props.onItemChange(e)}/>
                        <button 
                            type="submit"
                            className="btn">Change</button>
                    </form>
                </div> 
            </>
        )
    }
}

export default ModalView