import React, { Component } from 'react'
import FormView from './FormView'

class Form extends Component {

    constructor(props) {
        super(props)
        this.state = {
            client: {
                id: null,
                name: '',
                username: '',
                order: 0,
                company: {
                    name: ''
                }
            }
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
        this.setState(({client}) => ({
            client: {
                ...client,
                ...(item === 'company' 
                        ? {company: {name: e.target.value}}
                        : {[item]: e.target.value}) 
            }
        }))
    }

    render() {
        const {name, username, company} = this.state.client
        const {onFormChange, formActive} = this.props
        return (
            <FormView name={name} username={username} company={company} onFormChange={onFormChange} onSubmit={this.onSubmit} onItemChange={this.onItemChange} formActive={formActive}/>
        )
    }
}

export default Form