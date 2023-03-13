import React, { Component } from 'react'

class FormView extends Component {
    render() {
        const {name, username, companyName, onItemChange } = this.props
        return (
            <div  className={this.props.formActive ? "form active" : "form"} onClick={() => this.props.onFormChange(false)}>
                <form 
                    onClick={e => e.stopPropagation()}
                    className="form_content"
                    onSubmit={this.props.onSubmit}>
                    <h3 className='form_title' >name</h3>
                    <input 
                        className="form_inputt"
                        type="text" 
                        name="name"
                        value={name}
                        onChange={(e) => onItemChange('name' ,e)}/>

                    <h3 className='form_title' >username</h3>
                    <input 
                        className="form_inputt"
                        type="text" 
                        name="username"
                        value={username}
                        onChange={(e) => onItemChange('username' ,e)}/>

                    <h3 className='form_title'>company</h3>
                    <input 
                        className="form_inputt"
                        type="text" 
                        name="company"
                        value={companyName}
                        onChange={(e) => onItemChange('company' ,e)}/>
                    
                    <button 
                        type="submit"
                        className="btn">Subscribe</button>
                </form>
            </div>
        )
    }
}

export default FormView