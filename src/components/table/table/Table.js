import React, { Component } from 'react'
import Services from '../../../Services'
import TableView from './TableView'

class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            clientId: 0,
            clientOrder: 0,
            modalActive: false,
            formActive: false,
            modalProperty: '',
            currentClient: null
        }
    }
    
    services = new Services()

    onTableLoaded = (res) => {
        res.map((item, i) => item.order = i + 1)
        this.setState({list: res})
    }

    componentDidMount() {
        this.services
            .getResource()
            .then(this.onTableLoaded)
        window.addEventListener('keydown', this.onkeyDown)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.onkeyDown)
    }

    onkeyDown = (e) => {
        if ((e.key === 'ArrowDown') && this.state.clientOrder < this.state.list.length) {
            let test 
            this.state.list.forEach(item => {
                if(item.order === this.state.clientOrder + 1){
                    test =  item.id
                }
            })
            this.setState(({clientOrder}) => ({
                clientOrder: clientOrder + 1,
                clientId: test
            }))
        } if ((e.key === 'ArrowUp') && this.state.clientOrder > 1) {
            let test 
            this.state.list.forEach(item => {
                if(item.order === this.state.clientOrder - 1){
                    test =  item.id
                }
            })
            this.setState(({clientOrder}) => ({
                clientOrder: clientOrder - 1,
                clientId: test
            }))
        }
    }

    sortClientsList = (filter) => {
        let modList = this.state.list.concat();
        this.setState({clientOrder: 0})
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
        modList.map((item, i)=> item.order = i + 1)
        this.setState({list: modList})
    }

    selectClient = (id, order) => {
        this.setState({clientId: id, clientOrder: order})
    }

    deletClient = () => {
        let modList = this.state.list.concat();
        const res = modList.filter(item => item.id !== this.state.clientId)
        res.map((item, i)=> item.order = i + 1)
        this.setState({list: res, clientOrder: 0})
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
        let modList = this.state.list.concat();
        let count = 0
        modList.forEach(item => item.id > count? count = item.id: count)
        let modClient = {...client, id: count + 1, order: modList.length + 1}
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
        switch (this.state.modalProperty) {
            case 'name':
                this.setState(({list}) => ({
                    list: list.map(item => item.id === this.state.clientId ? {...item, name: value} : item)
                }))
                break;
            case 'username':
                this.setState(({list}) => ({
                    list: list.map(item => item.id === this.state.clientId ? {...item, username: value} : item)
                }))
                break;
            case 'company':
                this.setState(({list}) => ({
                    list: list.map(item => item.id === this.state.clientId ? {...item, company:{...item.company, ...{name: value}}} : item)
                }))
                break;
            default:
                break;
        }
    }

    dragStartHandler = (e, item) => {
        this.setState({
            currentClient: item,
            clientOrder: item.order
        })
    }

    dragEndHandler = (e) => {
    
    }

    dragOverHandler = (e) => {
        e.preventDefault()
    }

    dropHandler = (e, item) => {
        e.preventDefault()
        this.setState(({list}) => ({
            list: list.map(i => {
                if(i.id === item.id) {
                    return {...i, order: this.state.currentClient.order}
                }
                if(i.id === this.state.currentClient.id) {
                    return {...i, order: item.order}
                }
                return i
            })
        }))
        this.setState(({list}) => ({
            list: list.sort(this.sortList),
            clientOrder: item.order
        }))
    }

    sortList = (a, b) => a.order > b.order ? 1 : -1
    

    render() {
        const {formActive, modalActive, list, clientId, clientOrder} = this.state
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
                selectClient={this.selectClient}
                dragStartHandler={this.dragStartHandler}
                dragEndHandler={this.dragEndHandler}
                dragOverHandler={this.dragOverHandler}
                dropHandler={this.dropHandler}
                clientOrder={clientOrder}
                />
        )
    }
}

export default Table