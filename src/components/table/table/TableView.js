import React, { Component } from 'react'
import Form from '../form/Form'
import Modal from '../modal/Modal'

class TableView extends Component {
    render() {
        const {onChangeClientList, onFormChange, formActive, onChangeClient, onModalChange, modalActive, addNewClient, deletClient, openModal, sortClientsList, clientId, list, selectClient} = this.props
        return (
            <div className='table'>
                <Form 
                    onChangeClientList={onChangeClientList} 
                    onFormChange={onFormChange} 
                    formActive={formActive}/>

                <Modal 
                    onChangeClient={onChangeClient} 
                    onModalChange={onModalChange} 
                    modalActive={modalActive}/>
                    
                <div className='tableBtn'>
                    <button className='btn' onClick={addNewClient}>add new client</button>
                    <button className='btn' onClick={deletClient}>delet client</button>
                </div>
                <br />
                <div className='tableBtn'>
                    <button className='btn' onClick={() => openModal('name')}>change name</button>
                    <button className='btn' onClick={() => openModal('username')}>change username</button>
                    <button className='btn' onClick={() => openModal('company')}>change company</button>
                </div>
                
                <table className="table_clients">
                    <tr>
                        <td className="table_base" onClick={() => sortClientsList('id')}>id</td>
                        <td className="table_base" onClick={() => sortClientsList('name')}>name</td>
                        <td className="table_base" onClick={() => sortClientsList('username')}>username</td>
                        <td className="table_base" onClick={() => sortClientsList('company')}>company</td>
                    </tr>
                    {
                        list.map((item, i) => (
                            <tr className={`cleint ${item.id === clientId ? "action" : ''}`} key={i} onClick={() => selectClient(item.id)}>
                                <td className="cleint_item">{item.id}</td>
                                <td className="cleint_item">{item.name}</td>
                                <td className="cleint_item">{item.username}</td>
                                <td className="cleint_item">{item.company.name}</td>
                            </tr>
                        ))
                    }
                </table>
            </div> 
        )
    }
}

export default TableView