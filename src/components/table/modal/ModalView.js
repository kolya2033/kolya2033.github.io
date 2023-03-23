import React, { Component } from 'react'
import withEsc from '../../hoc/withEsc'

class ModalView extends Component {
    render() {
        const {modalActive, onEsc, onSubmit, onItemChange, value} = this.props
        return (
            <div  className={modalActive ? "modal active" : "modal"} onClick={onEsc}>
                <form 
                    onClick={e => e.stopPropagation()}
                    className="modal_content"
                    onSubmit={onSubmit}>
                    <input 
                        className="modal_inputt"
                        type="text" 
                        name="property"
                        value={value}
                        onChange={(e) => onItemChange(e)}/>
                    <button 
                        type="submit"
                        className="btn">Change</button>
                </form>
            </div> 
        )
    }
}

export default withEsc(ModalView)