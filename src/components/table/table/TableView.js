import React, { Component } from 'react'
import Form from '../form/Form'
import Modal from '../modal/Modal'

class TableView extends Component {
    render() {
        return (
            <>  
                <div className='table'>
                    <Form onChangeClientList={this.props.onChangeClientList} onFormChange={this.props.onFormChange} formActive={this.props.formActive}/>
                    <Modal onChangeClient={this.props.onChangeClient} onModalChange={this.props.onModalChange} modalActive={this.props.modalActive}/>
                    <div className='tableBtn'>
                        <button className='btn' onClick={this.props.addNewClient}>add new client</button>
                        <button className='btn' onClick={this.props.deletClient}>delet client</button>
                    </div>
                    <br />
                    <div className='tableBtn'>
                        <button className='btn' onClick={() => this.props.openModal('name')}>change name</button>
                        <button className='btn' onClick={() => this.props.openModal('username')}>change username</button>
                        <button className='btn' onClick={() => this.props.openModal('company')}>change company</button>
                    </div>
                    
                    <table className="table_clients">
                        <tr>
                            <td className="table_base" onClick={() => this.props.sortClientsList('id')}>id</td>
                            <td className="table_base" onClick={() => this.props.sortClientsList('name')}>name</td>
                            <td className="table_base" onClick={() => this.props.sortClientsList('username')}>username</td>
                            <td className="table_base" onClick={() => this.props.sortClientsList('company')}>company</td>
                        </tr>
                        {
                            this.props.list.map((item, i) => (
                                <tr className={`cleint ${item.id === this.props.clientId ? "action" : ''}`} key={i} onClick={() => this.props.selectClient(item.id)}>
                                    <td className="cleint_item">{item.id}</td>
                                    <td className="cleint_item">{item.name}</td>
                                    <td className="cleint_item">{item.username}</td>
                                    <td className="cleint_item">{item.company.name}</td>
                                </tr>
                            ))
                        }
                    </table>
                </div> 
            </>
        )
    }
}

export default TableView