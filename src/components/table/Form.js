import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)
        this.state = {
            client: {
                id: '',
                name: '',
                username: '',
                company: {
                    name: ''
                }
            }
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
            this.props.onFormChange(false)
        }
    } 

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onChangeClientList(this.state.client);
        this.props.onFormChange(false);
        this.setState({
            client: {
                id: '',
                name: '',
                username: '',
                company: {
                    name: ''
                }
            }
        })
    }

    onItemChange = (item, e) => {
        if(item === 'company') {
            this.setState({
                client: {
                    ...this.state.client,
                    company: {
                        name: e.target.value
                    }
                }
            })
        } else {
            this.setState({
                client: {
                    ...this.state.client,
                    [item]: e.target.value
                }
            })
        }
    }

    render() {
        const {name, username, company} = this.state.client
        return (
            <>
                <div  className={this.props.formActive ? "form active" : "form"} onClick={() => this.props.onFormChange(false)}>
                    <form 
                        onClick={e => e.stopPropagation()}
                        className="form_content"
                        onSubmit={this.onSubmit}>
                        <h3 style={{'fontSize': '23px', "marginBottom" : 5}}>name</h3>
                        <input 
                            className="form_inputt"
                            type="text" 
                            name="name"
                            value={name}
                            onChange={(e) => this.onItemChange('name' ,e)}/>

                        <h3 style={{'fontSize': '23px', "marginBottom" : 5}}>username</h3>
                        <input 
                            className="form_inputt"
                            type="text" 
                            name="username"
                            value={username}
                            onChange={(e) => this.onItemChange('username' ,e)}/>

                        <h3 style={{'fontSize': '23px', "marginBottom" : 5}}>company</h3>
                        <input 
                            className="form_inputt"
                            type="text" 
                            name="company"
                            value={company.name}
                            onChange={(e) => this.onItemChange('company' ,e)}/>
                        
                        <button 
                            type="submit"
                            className="btn">Subscribe</button>
                    </form>
                </div>
            </>
        )
    }
}

export default Form