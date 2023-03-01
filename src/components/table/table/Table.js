import React, { Component } from 'react'
import Services from '../../../Services'
import TableView from './TableView'

class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            clientId: 0,
            modalActive: false,
            formActive: false,
            modalProperty: ''
        }
    }
    
    services = new Services()

    onTableLoaded = (res) => {
        this.setState({list: res})
    }

    componentDidMount() {
        this.services
            .getResource()
            .then(this.onTableLoaded)
    }

    sortArray = (arr) => {
        
    }

    sortClientsList = (filter) => {
        let modList = this.state.list.concat();
        switch (filter) {
            case 'id':
                let temp
                for (let j = 0; j < modList.length; j++) {
                    for (let i = 0; i < modList.length - 1; i++) {
                        if (modList[i].id > modList[i + 1].id) {
                            temp = modList[i]
                            modList[i] = modList[i+1]
                            modList[i+1] = temp
                        }
                    }
                }
                break
            case 'name':
                modList.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)
                break
            case 'username':
                modList.sort((a, b) => a.username.toLowerCase() > b.username.toLowerCase() ? 1 : -1)
                break
            case 'company':
                modList.sort((a, b) => a.company.name.toLowerCase() > b.company.name.toLowerCase() ? 1 : -1)
                break
            default:
                break
        }
        this.setState({list: modList})
    }

    selectClient = (id) => {
        this.setState({clientId: id})
    }

    deletClient = () => {
        let modList = this.state.list.concat();
        const res = modList.filter(item => item.id !== this.state.clientId)
        this.setState({list: res})
    }

    addNewClient = () => {
        this.setState({formActive: true})
    }

    onFormChange = (bool) => {
        this.setState({
            formActive: bool
        })
    }
    
    onModalChange = (bool) => {
        this.setState({
            modalActive: bool
        })
    }

    onChangeClientList = (client) => {
        let modlist = this.state.list.concat();
        let modClient = {...client, id: modlist.pop().id + 1}
        this.setState(({list}) => ({
            list: [...list, modClient]
        }))
    }

    openModal = (property) => {
        this.setState({
            modalActive: true,
            modalProperty: property
        })
    }

    onChangeClient = (value) => {
        let modList = [...this.state.list]
        let index
        index = modList.findIndex(n => n.id === this.state.clientId)
        switch (this.state.modalProperty) {
            case 'name':
                modList[index].name = value
                break;
            case 'username':
                modList[index].username = value
                break;
            case 'company':
                modList[index].company.name = value
                break;
            default:
                break;
        }
    }

    render() {
        const {formActive, modalActive, list, clientId} = this.state
        return (
            <TableView 
            onChangeClientList={this.onChangeClientList}
            onFormChange={this.onFormChange} 
            formActive={formActive} 
            onChangeClient={this.onChangeClient} 
            onModalChange={this.onModalChange} 
            modalActive={modalActive} 
            addNewClient={this.addNewClient} 
            deletClient={this.deletClient}
            openModal={this.openModal}
            sortClientsList={this.sortClientsList}
            list={list}
            clientId={clientId}
            selectClient={this.selectClient}/>
        )
    }
}

export default Table