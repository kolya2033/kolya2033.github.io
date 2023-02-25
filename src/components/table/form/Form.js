import React, { Component } from 'react'
import FormView from './FormView'

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
                <FormView name={name} username={username} company={company} onFormChange={this.props.onFormChange} onSubmit={this.onSubmit} onItemChange={this.onItemChange} formActive={this.props.formActive}/>
            </>
        )
    }
}

export default Form