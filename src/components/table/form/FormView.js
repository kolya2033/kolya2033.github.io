import React, { Component } from 'react'

class FormView extends Component {
    render() {
        const {name, username, company, } = this.props
        return (
            <>
                <div  className={this.props.formActive ? "form active" : "form"} onClick={() => this.props.onFormChange(false)}>
                    <form 
                        onClick={e => e.stopPropagation()}
                        className="form_content"
                        onSubmit={this.props.onSubmit}>
                        <h3 style={{'fontSize': '23px', "marginBottom" : 5}}>name</h3>
                        <input 
                            className="form_inputt"
                            type="text" 
                            name="name"
                            value={name}
                            onChange={(e) => this.props.onItemChange('name' ,e)}/>

                        <h3 style={{'fontSize': '23px', "marginBottom" : 5}}>username</h3>
                        <input 
                            className="form_inputt"
                            type="text" 
                            name="username"
                            value={username}
                            onChange={(e) => this.props.onItemChange('username' ,e)}/>

                        <h3 style={{'fontSize': '23px', "marginBottom" : 5}}>company</h3>
                        <input 
                            className="form_inputt"
                            type="text" 
                            name="company"
                            value={company.name}
                            onChange={(e) => this.props.onItemChange('company' ,e)}/>
                        
                        <button 
                            type="submit"
                            className="btn">Subscribe</button>
                    </form>
                </div>
            </>
        )
    }
}

export default FormView